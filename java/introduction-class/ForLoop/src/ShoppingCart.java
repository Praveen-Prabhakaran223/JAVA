public class ShoppingCart {
    public static void main(String[] args) {
        double[] productPrices = {19.99, 9.49, 12.50, 3.99, 5.00};  // Prices of items in the cart
        double totalPrice = 0;

        // Loop through the product prices
        for (int i = 0; i < productPrices.length; i++) {
            totalPrice += productPrices[i];  // Add each price to total
        }

        System.out.println("Total Price: $" + totalPrice);
    }
}

