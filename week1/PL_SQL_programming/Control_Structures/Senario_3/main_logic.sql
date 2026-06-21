SET SERVEROUTPUT ON;

BEGIN
    FOR c IN (
        SELECT cu.CustomerName, l.DueDate
        FROM Customers cu
        JOIN Loans l
        ON cu.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: ' || c.CustomerName ||
            ' - Your loan is due on ' ||
            TO_CHAR(c.DueDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;
