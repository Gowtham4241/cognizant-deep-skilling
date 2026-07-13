import "../Stylesheets/mystyle.css";

function CalculateScore() {
  const student = {
    name: "Rahul",
    rollNo: 101,
    subject1: 85,
    subject2: 90,
    subject3: 80
  };

  const total =
    student.subject1 +
    student.subject2 +
    student.subject3;

  const average = total / 3;

  return (
    <div className="container">
      <h1>Student Score Calculator</h1>

      <h3>Name : {student.name}</h3>
      <h3>Roll No : {student.rollNo}</h3>

      

      <h2>Total Marks : {total}</h2>
      <h2>Average : {average.toFixed(2)}</h2>
    </div>
  );
}

export default CalculateScore;