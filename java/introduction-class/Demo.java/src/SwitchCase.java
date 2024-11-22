import java.util.Scanner;

public class SwitchCase {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("enter your employeeID: ");
        int id = in.nextInt();
        System.out.println("enter your location: ");
        String location = in.next();


        switch (id){
            case 6845:
                System.out.println("name: Praveen, guvara-15 yrs, networth: 18 billion dollars");
                break;

            case 4563:
                System.out.println("name ashwin, giante-15 years, networth: 19 billion dollars");
                break;

            case 8833:
                System.out.println("name: edward sam, pharma e-15 years, networth: 20 billion dollars");
                break;

            case 2545:
                System.out.println("name: vishwa, ath e-15 years, networth: 21 billion dollars");
            break;
            default:
                System.out.println("invalid case");
                break;
            }
        switch (location){
            case "mogappair":
                System.out.println("you are praveen, right!");
                break;

            case "annanagar":
                System.out.println("you are sam, right!");
                break;

            default:
                System.out.println("hey vishwa");
                break;
        }


        }

    }

