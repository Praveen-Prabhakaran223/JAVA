import java.util.Scanner;
public class averagenumber {
    public static void main(String[] args) {
        //creating a scanner object
        Scanner input = new Scanner(System.in);
        //promting user to enter 3 real numbers to find average
        System.out.println("please enter 3 different value");
        double a = input.nextDouble(); // this " input.nextDouble(); " reads double
        double b = input.nextDouble();
        double c = input.nextDouble();
        //finding average
        double average = (a + b + c) / 3;

        System.out.println("average of " + a + " " + b + " " + c + " " + "is " + average );

    }
}
