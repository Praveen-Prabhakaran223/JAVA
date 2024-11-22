public class MultiplicationTable {
    public static void main(String[] args) {
        int number = 5;  // Number for the multiplication table

        // Generate multiplication table
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }
}

