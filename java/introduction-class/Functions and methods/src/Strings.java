//public class Strings {
//    public static void main(String[] args) {
//        int greet=add(20, 40);
//    }
//    static int add(int a, int b){
//        int c= a+b;
//        return c;
//
//        }
//
//}

public class Strings {
    public static void main(String[] args) {
        String personalised  = greeting("praveen");
        System.out.println(personalised);
    }
    static String greeting(String name){
        String message = "hello, " + name;
        return message;
    }
}
