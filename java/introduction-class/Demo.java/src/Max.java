public class Max {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int c = 30;
        int max = a; // Start by assuming 'a' is the max

        if (b > max) {
            max = b;  // Update max if 'b' is greater
        }
        if (c > max) {
            max = c;  // Update max if 'c' is greater
        }

        System.out.println(max);
    }
}
