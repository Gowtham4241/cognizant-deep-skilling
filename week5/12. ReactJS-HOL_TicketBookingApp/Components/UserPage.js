function UserPage() {
  return (
    <div>
      <h2>Welcome User</h2>

      <h3>Flight Details</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
            <th>Book</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>₹4500</td>
            <td><button>Book Ticket</button></td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Chennai</td>
            <td>Mumbai</td>
            <td>₹5200</td>
            <td><button>Book Ticket</button></td>
          </tr>

          <tr>
            <td>AI303</td>
            <td>Bangalore</td>
            <td>Kolkata</td>
            <td>₹6100</td>
            <td><button>Book Ticket</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;