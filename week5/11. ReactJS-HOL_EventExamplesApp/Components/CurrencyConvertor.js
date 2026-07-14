import { useState } from "react";

function CurrencyConvertor() {

    const [rupees, setRupees] = useState("");
    const [euro, setEuro] = useState("");

    function handleSubmit() {

        const result = (parseFloat(rupees) / 90).toFixed(2);

        setEuro(result);
    }

    return (

        <div>

            <h1>Currency Convertor</h1>

            <input
                type="number"
                placeholder="Enter Rupees"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
            />

            <button onClick={handleSubmit}>
                Convert
            </button>

            <h2>Euro : € {euro}</h2>

        </div>

    );
}

export default CurrencyConvertor;