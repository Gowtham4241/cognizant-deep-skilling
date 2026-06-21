CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);