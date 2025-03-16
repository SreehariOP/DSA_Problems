public class TwoPointers {
    public static void main(String[] args){
            //1 Find pair such that sum = k in a sorted array ------------------------------------------------------------------------------------------------------
            //Two pointer approach
            // int[] arr = {-5, -2, 1, 8, 10, 12};
            // int k = 25;
            // System.out.print(isSumExists(arr, k));
            // ------------------------------------------------------------------------------------------------------------------------
            //2 find count of pairs such that sum = k in sorted array(including duplicates)    // ------------------------------------------------------------------
            // int[] arr = {2,3,3,5,6,10,10,10,15};
            // int k = 13;
            // System.out.print(countOfSum(arr, k));
            // ------------------------------------------------------------------------------------------------------------------------
            //3 ------------------------------------------------------------------------------------------------------------------------
            //Two walls that form a container that can store maximum water in it.
            int[] arr = {4,2,10,6,8,2,6,2};
            System.out.print(waterContainer(arr));

    }
    // 1) ------------------------------------------------------------------------------------------------------------------------
    //if needed to count just give a ans variable and ans++ everytime it is true;
    public static boolean isSumExists(int[] arr, int k){
        int N= arr.length;
        int i=0 , j = N-1;
        while(i<j){
            if(arr[i] + arr[j] == k){
                return true;
            }
            else if (arr[i]+ arr[j]< k){
                i++;
            }
            else {
                j-- ;
            }
        }
        return false;
    }
    // ------------------------------------------------------------------------------------------------------------------------
    //2) 
        public static int countOfSum(int[] arr, int k){
            int N= arr.length;
            int i=0 , j = N-1;
            int count = 0;
            while(i<j){
                if(arr[i] + arr[j] == k){
                    if(arr[i] != arr[j]){
                        int x = arr[i];
                        int cnt_x = 0;
                        while(arr[i]== x){
                            cnt_x++;
                            i++;
                        }
                        int y = arr[j];
                        int cnt_y = 0;
                        while(arr[j]== y){
                            cnt_y++;
                            j--;
                        }
                        count += (cnt_x*cnt_y);
                    }
                    else{
                        int cnt_x = j-i + 1;
                        count += ((cnt_x-1)*cnt_x)/2;
                    }
                }
                else if (arr[i]+ arr[j]< k){
                    i++;
                }
                else {
                    j-- ;
                }
            }
            return count;
        }
    // ------------------------------------------------------------------------------------------------------------------------
    public static int waterContainer(int[] arr){
        int area = 0;
        int N = arr.length;
        int i=0, j=N-1;
        while(i<j){
            int water = Math.min(arr[i], arr[j]) * (j-i);
            area = Math.max(area, water);
            if(arr[i]<arr[j]){
                i++;
            }
            else{
                j--;
            }
        }
        return area;
    }
}   