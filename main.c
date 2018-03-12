#include <stdio.h>

int main()
{
   int n=7;
   int k=n;
   int i,j;
   int arr[n],ar[n][n];
   for ( i=1;i<n+1;i++) {
       arr[i-1]=n;
       arr[k-i]=n;
       n=n-2;
       arr[(k/2)]=1;
       
   }
   n=k;
    for ( i=0;i<n;i++) {
        for(j=n;j>0;j--){
            ar[i][j]=arr[i];
        }
        
    }
    for ( i=0;i<k;i++) {
        for(j=0;j<k;j++){
            printf("%d",ar[j][i]);
        }
        printf("\n");
    }
}


