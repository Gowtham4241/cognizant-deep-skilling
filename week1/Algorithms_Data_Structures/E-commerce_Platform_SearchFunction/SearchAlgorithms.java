public class SearchAlgorithms {

    public static Product linearSearch(Product[] products, int productId) {

        for (Product product : products) {
            if (product.getProductId() == productId) {
                return product;
            }
        }

        return null;
    }

    public static Product binarySearch(Product[] products, int productId) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            if (products[mid].getProductId() == productId) {
                return products[mid];
            }

            else if (products[mid].getProductId() < productId) {
                low = mid + 1;
            }

            else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] linearProducts = {

                new Product(103, "Mouse", "Accessories"),
                new Product(101, "Laptop", "Electronics"),
                new Product(105, "Keyboard", "Accessories"),
                new Product(102, "Phone", "Electronics"),
                new Product(104, "Monitor", "Electronics")
        };

        Product[] binaryProducts = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Mouse", "Accessories"),
                new Product(104, "Monitor", "Electronics"),
                new Product(105, "Keyboard", "Accessories")
        };

        int searchId = 104;

        System.out.println("Linear Search");

        Product result1 = linearSearch(linearProducts, searchId);

        if (result1 != null)
            System.out.println(result1);
        else
            System.out.println("Product Not Found");


        System.out.println("\nBinary Search");

        Product result2 = binarySearch(binaryProducts, searchId);

        if (result2 != null)
            System.out.println(result2);
        else
            System.out.println("Product Not Found");
    }
}