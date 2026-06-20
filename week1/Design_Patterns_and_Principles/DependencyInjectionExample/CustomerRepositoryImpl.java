public class CustomerRepositoryImpl
        implements CustomerRepository {

    @Override
    public String findCustomerById(int id) {

        // Simulated database lookup
        if (id == 101) {
            return "Gowtham";
        } else if (id == 102) {
            return "Sai";
        }

        return "Customer Not Found";
    }
}