//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
import java.util.Scanner;
public class Main {
        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);
            float tempC = input.nextFloat();
            float tempF = (tempC * 9/5) + 32;
            System.out.println(tempF);
        }
    }
