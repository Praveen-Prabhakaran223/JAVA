public class ForLoopLearn {
    public static void main(String[] args) {
        // classic for loop
        for(int i = 0; i <5; i++){
            System.out.println(i);
        }

        //counting up
        System.out.println("counting up");
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }

        //counting down
        System.out.println("counting down");
        for (int i = 10; i >=  0;i--){
            System.out.println(i);
        }

        // loop with multiple variable
        System.out.println("loop with multiple variable");
        for (int i = 0, j = 10; i < 5 && j > 0; i++, j--) {
            System.out.println("i: " + i + ", j: " + j);
        }

        //real life use case
        //1. Iterating over array
        System.out.println("Iterating over array");
        int[] numbers = {1, 2, 3, 4, 5};

        for (int i = 0; i < numbers.length; i++) { //for (int number : numbers)      System.out.println(number);
            System.out.println(numbers[i]);
        }

        //2. Nested for loop
        System.out.println("Nested for loop");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.println("i: " + i + ", j: " + j);
            }
        }

        //3. Calculating a sum
        System.out.println("Calculating a sum");
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("Sum of numbers from 1 to 100 is: " + sum);

        //4. Using for with continue and break
        System.out.println("Using for with continue and break");
        //continue
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                continue;  // Skip even numbers
            }
            System.out.println(i);  // Will print odd numbers from 1 to 9
        }

        //break
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                break;  // Exit the loop when i equals 5
            }
            System.out.println(i);
        }
        // Will print 0, 1, 2, 3, 4

    }
}
/*
Key Points to Remember:
   1. A for loop is useful when you know how many times you need to repeat an action.
   2. Make sure the loop's condition will eventually become false to avoid infinite loops.
   3. You can control the loop with continue (skip the current iteration) and break (exit the loop early).
 */