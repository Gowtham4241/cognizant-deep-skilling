import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function sayHello() {
        alert("Hello! Have a nice day.");
    }

    function sayWelcome(message) {
        alert(message);
    }

    function onPress() {
        alert("I was clicked");
    }

    function handleIncrement() {
        increment();
        sayHello();
    }

    return (
        <div>

            <h1>Counter : {count}</h1>

            <button onClick={handleIncrement}>
                Increment
            </button>

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button
                onClick={() => sayWelcome("Welcome")}
            >
                Say Welcome
            </button>

            <br /><br />

            <button onClick={onPress}>
                Synthetic Event
            </button>

        </div>
    );
}

export default Counter;