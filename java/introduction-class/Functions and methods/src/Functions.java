import java.util.Scanner;

public class Functions {
    public static int main(String[] args) {
        int ans = sum();
        System.out.println(ans);
    }
    static int sum(){
        Scanner in = new Scanner(System.in);
        System.out.println("enter number 1: ");
        int num1 = in.nextInt();
        System.out.println("enter number 2: ");
        int num2 = in.nextInt();
        int num3 = num1 + num2;
        return num3;
//        int a, b, c;
//        a = in.nextInt();
//        b = in.nextInt();
//        c = a + b;
//        System.out.println(c);
    }


}
