public class Combinatorics {
    public static void main(String[] args){
        //1---------------------------------------------------------------
        // int N = 3;
        // int[][] triangle = pascalsTriangle(N);
        // printMatrix(triangle);
        // ----------------------------------------------------------------
        //2----------------------------------------------------------------
        //Nth column title
        // int N = 29;
        // System.out.println(colTitle(N));
    }
    // public static int[][] pascalsTriangle(int a){
    //     int[][] ans = new int[a+1][a+1];
    //     for(int i=0; i<=a; i++){
    //         for(int j=0;j<=i; j++){
    //             if(j==0 || j==i) ans[i][j]=1;
    //             else {
    //                 ans[i][j]= ans[i-1][j-1] + ans[i-1][j];
    //             }

    //         }
    //     }
    //     return ans;
    // }
    // public static void printMatrix(int[][] A){
    //     for(int i=0; i<A.length; i++){
    //         for(int j=0; j<=i;j++){
    //             System.out.print(A[i][j] + " ");
    //         }
    //         System.out.println();
    //     }
        
    // }
    //2 -------------------------------------------------------------------------

    // public static String colTitle(int N){
    //     StringBuilder str = new StringBuilder();
    //     while(N>0){
    //         int rem = (N-1) % 26;
    //         str.append((char)(rem + 'A'));
    //         N= (N-1)/26;
    //     }
    //     return str.reverse().toString();
    // }
}