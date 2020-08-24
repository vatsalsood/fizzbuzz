import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const FizzBuzz = () => {
  const [counter, setCounter] = useState(1);
  const [fizzText, setFizzText] = useState("");

  useEffect(() => {
    console.log("counter", counter);
    checkCounter();
  }, [counter]);

  const checkCounter = () => {
    if (counter % 3 == 0) {
      setFizzText("Fizz");
    } else if (counter % 5 === 0) {
      setFizzText("Buzz");
    } else if (counter % 3 == 0 && counter % 5 === 0) {
      setFizzText("FizzBuzz");
    }
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <label>{fizzText}</label>

      <Button variant="contained" color="primary" onClick={incrementCounter}>
        Increment
      </Button>
      <Button variant="contained" color="primary" onClick={decrementCounter}>
        Decrement
      </Button>
    </div>
  );
};

export default FizzBuzz;
