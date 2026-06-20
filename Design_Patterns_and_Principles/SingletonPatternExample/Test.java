class Test{
     public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Application started.");
        logger2.log("Processing request.");

        if (logger1 == logger2) {
            System.out.println("Both Loggers instances are same.");
        } else {
            System.out.println("Multiple Logger instances exist.");
        }

        System.out.println("Logger1 HashCode: " + logger1.hashCode());
        System.out.println("Logger2 HashCode: " + logger2.hashCode());
    }
}