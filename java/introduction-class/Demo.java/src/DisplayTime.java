import java.util.Scanner;

public class DisplayTime {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int seconds = in.nextInt();
        int minutes = seconds / 60;
        int remainingSeconds = seconds % 60;
        System.out.println(seconds + "seconds have " + minutes +"minutes and "+remainingSeconds +" seconds" );
    }
}
