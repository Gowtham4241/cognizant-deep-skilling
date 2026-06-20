public class ObserverPatternTest {

    public static void main(String[] args) {

        StockMarket stockMarket = new StockMarket();

        Observer mobileUser =
                new MobileApp("Gowtham");

        Observer webUser =
                new WebApp("Sai");

        stockMarket.registerObserver(mobileUser);
        stockMarket.registerObserver(webUser);

        stockMarket.setStock("TCS", 3850.75);

        stockMarket.setStock("Infosys", 1542.50);

        stockMarket.deregisterObserver(webUser);

        System.out.println("\nWeb App unsubscribed!");

        stockMarket.setStock("Wipro", 480.25);
    }
}