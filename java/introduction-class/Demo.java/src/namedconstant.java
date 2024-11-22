import java.util.Scanner;

public class namedconstant {
    public static void main(String[] args) {
        final double PI = 3.14159; //name constant (or final variable)
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the radius: ");
        double radius = input.nextDouble();
        System.out.println("formula used is radius * radius * pi{3.14159}");
        double area = radius * radius * PI;
        System.out.println("the radius given is "+ radius +". The area for the circle of radius "+ area);
    }
}
/* NAMING CONVENTIONS -
1) Constant should be written in caps
2) class name letters should start with caps
3) variable and methods are preferred in lower case.if the word is big use camel case (biggBossSeason8)
 */