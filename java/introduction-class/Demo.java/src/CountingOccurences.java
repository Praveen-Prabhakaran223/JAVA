import java.util.Scanner;

public class CountingOccurences {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int number = in.nextInt();
        System.out.println("which number you wanna check: ");
        int find = in.nextInt();

        int count = 0;
        while (number > 0 ){
            int rem = number % 10;
            if (rem == find){
                count++;
            }
            number = number / 10;
        }
        System.out.println("number occurence count = "+ count);
    }
}
