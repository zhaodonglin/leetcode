function InstallPython() {
    Logger "Installing python."

    if (-not(Test-Path -Path "$pythonTargetFolder\python.exe"))
    {
        New-Item -ItemType directory -Path "$pythonTargetFolder" -ErrorAction SilentlyContinue

        $architecture = (Get-Process -Id $PID).StartInfo.EnvironmentVariables["PROCESSOR_ARCHITECTURE"]
        Logger "Detected architecture: $architecture"
        if ($architecture -eq 'x86') {
            Logger "Downloading x86 installers"
            DownloadFile "https://$eb_host/agent/windows/x86/python-2.7.10.msi" $pythonInstaller
            DownloadFile "https://$eb_host/agent/windows/x86/pywin32-219.win32-py2.7.exe" $pywin32Installer
        }
        else {
            Logger "Downloading amd64 installers"
            DownloadFile "https://$eb_host/agent/windows/x86_64/python-2.7.10.amd64.msi" $pythonInstaller
            DownloadFile "https://$eb_host/agent/windows/x86_64/pywin32-219.win-amd64-py2.7.exe" $pywin32Installer
        }

        Start-Process -wait msiexec.exe -ArgumentList `
            "/i $pythonInstaller TARGETDIR=`"$pythonTargetFolder`" /l+ `"$targetFolder\install.log`" /qn"
        SETX PATH "$pythonTargetFolder"
        if ([Environment]::GetEnvironmentVariable("PATH", "Machine") -notlike "*$pythonTargetFolder*")
        {
            [Environment]::SetEnvironmentVariable(
                    "PATH", "$pythonTargetFolder;" + [Environment]::GetEnvironmentVariable("PATH", "Machine"),
                    "Machine")
        }

        Start-Process -NoNewWindow -wait "$pythonTargetFolder\python.exe" `
            -ArgumentList "-m easy_install $pywin32Installer -d $packagesTargetFolder" `
            -RedirectStandardOutput stdout.log -RedirectStandardError stderr.log

        Get-Content stdout.log, stderr.log | Out-File $targetFolder\install.log -Append
        Remove-Item stdout.log
        Remove-Item stderr.log

        Remove-Item $pythonInstaller
        Remove-Item $pywin32Installer
    }
}


function SelfRegistration() {
    Logger "Starting self-registration process."

    switch ($provider_type) {
        "aws" {
            aws_register_request
            break
        }
        "compute_instances" {
            compute_instances_register_request
            break
        }
        "ctl" {
            clc_register_request
            break
        }
        "dccf" {
            vcloud_register_request
            break
        }
        "gce" {
            gce_register_request
            break
        }
        "vcloud" {
            vcloud_register_request
            break
        }
        default {
            throw "Unknown provider_type: $provider_type"
        }
     }

    if (!$selfRegisterPayload) {
        throw "Failed to collect self-registration data"
    }

    $uri = New-Object Uri("https://$eb_host/services/insances");
    $start_date=Get-Date -format HH:mm:ss
    while ($true) {
        try {
            $web_client = New-Object System.Net.WebClient
            $web_client.Headers.Add("Content-Type", "application/json");
            $web_client.Headers.Add("ElasticBox-Token", $token);

            if ($proxy -ne "no")
            {
                $proxy_host = New-Object System.Net.WebProxy $proxy
                $web_client.Proxy = $proxy_host
            }
            $selfRegisterResponse = $web_client.UploadString($uri, "POST", $selfRegisterPayload) `
                | ConvertFrom-Json;
            if (-not ([string]::IsNullOrEmpty($selfRegisterResponse.token))) {
                break;
            }
            Start-Sleep -s 15
        } catch [System.Exception] {
            Logger $_
            $end_date=Get-Date -format HH:mm:ss
            $time_diff = NEW-TIMESPAN  $start_date $end_date
            if ($time_diff.Minutes -gt 3) {
                Logger "Timeout for self registering"
                exit 1                  
            }
            Start-Sleep -s 15
        }
    }

    $global:service_token = $selfRegisterResponse.token;
}


function aws_register_request() {
