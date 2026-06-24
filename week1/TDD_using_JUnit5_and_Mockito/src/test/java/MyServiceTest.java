import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub the method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Create service with mock
        MyService service = new MyService(mockApi);

        // Call method
        String result = service.fetchData();

        // Verify result
        assertEquals("Mock Data", result);
    }
}