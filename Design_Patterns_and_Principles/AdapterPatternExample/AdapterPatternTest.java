public class AdapterPatternTest {
    public static void main(String[] args) {

        PaymentProcessor paypal =
                new PayPalAdapter(new PayPalGateway());

        paypal.processPayment(41000);
    }
}