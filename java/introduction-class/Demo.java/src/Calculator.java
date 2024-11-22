import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int ans = 0;

        while (true){
            System.out.println("Give the operation: ");
            char ch = in.next().trim().charAt(0);
            if (ch == '+' || ch =='-' || ch =='*' || ch =='/' || ch =='%' ) {
                System.out.println("Enter two digit: ");
                int number1 = in.nextInt();
                int number2 = in.nextInt();
                if (ch == '+') {
                    ans = number1 + number2;
                }
                if (ch == '-') {
                    ans = number1 - number2;
                }
                if (ch == '*') {
                    ans = number1 + number2;
                }
                if (ch == '/') {
                    if (number2 != 0)
                        ans = number1 / number2;
                }
                if (ch == '%') {
                    ans = number1 % number2;
                }
            } else if (ch == 'X' || ch == 'x') {
                break;
            }else {
                System.out.println("invalid operation");
            }
                System.out.println("answer = "+ ans);
            }
        }
    }
