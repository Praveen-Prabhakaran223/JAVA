import java.util.Scanner;

public classFibonacciNumber {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int user_inputs_nTH = in.nextInt();
        int a = 0;
        int b = 1;
        int count = 2;

        while (count <=2){
            int temp = b;
            b = b + a;
            a = temp;
            count++;

        }

    }
}
