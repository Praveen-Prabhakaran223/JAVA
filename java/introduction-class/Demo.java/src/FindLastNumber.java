public class FindLastNumber {
    public static void main(String[] args) {
        int n = 345534555;// declare

        int count = 0;//initialize
        while (n>0){        //loop will run as far as n is greater than  0
            int rem = n%10; // we are extracting the last digit by using this n%10 formula
            if (rem == 5){
            count++;
            }
            n = n / 10;
        }
        System.out.println(count);
    }

}
/*
Code Explanation--
Initialization:

You define an integer n = 345534555, which is the number you are going to analyze.
You initialize a count variable to 0, which will keep track of how many times the digit 5 appears in the number.

While loop:

The while (n > 0) loop will continue running as long as n is greater than 0.
Inside the loop, you extract the last digit of n using n % 10. This gives you the remainder when n is divided by 10, effectively getting the rightmost digit.
You then check if the extracted digit (rem) is equal to 5. If it is, you increment the count.
After checking the digit, you remove the rightmost digit from n by performing integer division (n = n / 10), effectively reducing the number by one digit at a time.
Output:

Once the loop terminates (when n becomes 0), the program prints the final value of count, which will be the number of times the digit 5 appeared in the original number 345534555.
Example Walkthrough
Starting with n = 345534555:
The first digit 5 is found, count becomes 1.
The next 5 is found, count becomes 2.
The next 5 is found, count becomes 3.
The next 5 is found, count becomes 4.
The next 5 is found, count becomes 5.
After all digits are checked, n becomes 0 and the loop exits.
The final output will be 5, since the digit 5 appears 5 times in 345534555.
 */