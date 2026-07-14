import officeImage from "./office.jpg";

function App() {

  const officeList = [
    {
      id: 1,
      name: "Tech Park Office",
      rent: 55000,
      address: "Hyderabad"
    },
    {
      id: 2,
      name: "Business Hub",
      rent: 70000,
      address: "Bangalore"
    },
    {
      id: 3,
      name: "Corporate Tower",
      rent: 85000,
      address: "Chennai"
    },
    {
      id: 4,
      name: "Startup Space",
      rent: 45000,
      address: "Pune"
    }
  ];

  return (
    <div style={{ margin: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office"
        width="400"
        height="250"
      />

      <hr />

      {officeList.map((office) => (
        <div key={office.id}>

          <h2>Name : {office.name}</h2>

          <h3
            style={{
              color: office.rent < 60000 ? "red" : "green"
            }}
          >
            Rent : ₹ {office.rent}
          </h3>

          <h3>Address : {office.address}</h3>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default App;