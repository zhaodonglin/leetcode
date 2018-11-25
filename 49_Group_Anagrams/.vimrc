set nocompatible              " be iMproved  
    filetype off                  " required!  

    set rtp+=~/.vim/bundle/vundle/
    call vundle#rc()

    " let Vundle manage Vundle  
    " required!   
    Bundle 'gmarik/vundle'

    " 可以通过以下四种方式指定插件的来源  
    " a) 指定Github中vim-scripts仓库中的插件，直接指定插件名称即可，插件明中的空格使用“-”代替。  
    "Bundle 'L9'  

    " b) 指定Github中其他用户仓库的插件，使用“用户名/插件名称”的方式指定  
   "add javascript vim
   Bundle "pangloss/vim-javascript"

    " c) 指定非Github的Git仓库的插件，需要使用git地址  
    "Bundle 'git://git.wincent.com/command-t.git'  

    " d) 指定本地Git仓库中的插件  
    "Bundle 'file:///Users/gmarik/path/to/plugin'  

    filetype plugin indent on     " required!
