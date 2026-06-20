public class MVCPatternTest {

    public static void main(String[] args) {

        // Create Model
        Student student =
                new Student("Gowtham", "101", "A");

        // Create View
        StudentView view = new StudentView();

        // Create Controller
        StudentController controller =
                new StudentController(student, view);

        // Display Initial Data
        System.out.println("Initial Student Record:");
        controller.updateView();

        // Update Student Details
        controller.setStudentName("Sai Gowtham");
        controller.setStudentGrade("A+");

        System.out.println("\nUpdated Student Record:");
        controller.updateView();
    }
}