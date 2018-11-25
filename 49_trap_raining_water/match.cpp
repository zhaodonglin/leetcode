#include<stdio.h>
bool isMatch(char *s, char *p) {
    char *scur = s, *pcur = p, *sstar=0, *pstar =0;
    while (*scur) {
        if (*scur == *pcur || *pcur == '?') {
            ++scur;
            ++pcur;
	    printf("%d %d\n",scur,pcur);
        } else if (*pcur == '*') {
            pstar = pcur++;
            sstar = scur;
        } else if (pstar) {
            pcur = pstar + 1;
            scur = ++sstar;
        } else return false;
    } 
    while (*pcur == '*') ++pcur;
    return !*pcur;
}

int main(){
   printf("%d", isMatch("acdcb", "a*c?b"));
}
