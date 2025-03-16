public class PrimeNumbers {
    public static void main(String[] args){
        // 1 checkprime--------------------------------------------------------------------------------------------------------
        // int N = 9;
        // System.out.print(checkPrime(N));
        //2 Print prime numbers-----------------------------------------------------------------------------------------------
        // int N=9;
        // for(int i=1;i<=N;i++){
        //     if(checkPrime(i)){
        //         System.out.print(i + " ");
        //     }
        // }
        //3 sieve of eraatosthenis---------------------------------------------------------------------------------------------
        // int N = 100;
        // sieveOfEratosthenes(N);
        //TC: O(N log log(N))
    }
    // 1------------------------------------------------------------------------------------------------------------------------
    // public static boolean checkPrime(int N){
    //     int count = 0;
    //     for(int i=1; i*i<=N; i++){
    //         if(N%i==0){
    //             if(i==N/i) count++;
    //             else count+=2;
    //         }
    //     }
    //     return (count==2);
    // }
    // ------------------------------------------------------------------------------------------------------------------------
    //3------------------------------------------------------------------------------------------------------------------------
    // public static void sieveOfEratosthenes(int N){
    //     boolean isPrime[] = new boolean[N+1];
    //     for(int i=0; i<N; i++){
    //         isPrime[i] = true;
    //     }

    //     for(int i=2; i*i<=N; i++){
    //         if(isPrime[i] == true){
    //             for(int j=i*i; j<=N; j+=i ){
    //                 isPrime[j] = false;
    //             }
    //         }
    //     }
    //     for(int i=2; i<=N; i++){
    //         if(isPrime[i] == true){
    //             System.out.print(i + " ");
    //         }
    //     }

    // }
    // ------------------------------------------------------------------------------------------------------------------------
}