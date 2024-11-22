import java.util.Scanner;

public class Reverse {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int number = in.nextInt();

        int ans = 0;
        while (number > 0 ){
            int rem = number % 10;
            number = number / 10;

            ans = ans * 10 + rem;
        }
        System.out.println("your reversed int is: "+ ans);
    }
}
/*
Code Explanation
Input:
    The program prompts the user to enter a number using the Scanner class.
    The number entered is stored in the variable number.

Reversal Logic:
    The while loop runs until number becomes 0.
    Inside the loop:
    - The remainder of number when divided by 10 is extracted using number % 10. This gives the rightmost digit.
    - The rightmost digit (rem) is added to ans after multiplying ans by 10. This shifts the digits of ans left, essentially adding the new digit to the end of ans.
    - The original number is reduced by one digit using number = number / 10 (integer division).

Output:
    After the loop ends, ans contains the reversed number, which is then printed.

Example Walkthrough
Let’s assume the user inputs 12345:

   - Initial number = 12345, ans = 0
        First iteration: rem = 12345 % 10 = 5, number = 12345 / 10 = 1234, ans = 0 * 10 + 5 = 5
        Second iteration: rem = 1234 % 10 = 4, number = 1234 / 10 = 123, ans = 5 * 10 + 4 = 54
        Third iteration: rem = 123 % 10 = 3, number = 123 / 10 = 12, ans = 54 * 10 + 3 = 543
        Fourth iteration: rem = 12 % 10 = 2, number = 12 / 10 = 1, ans = 543 * 10 + 2 = 5432
        Fifth iteration: rem = 1 % 10 = 1, number = 1 / 10 = 0, ans = 5432 * 10 + 1 = 54321
The loop ends, and the program prints 54321.

 */