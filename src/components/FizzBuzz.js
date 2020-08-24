import React, { useState, useEffect } from "react";

//Relative imports
import { useStyles } from "../styles";

// Absolute Imports
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const FizzBuzz = () => {
  const [counter, setCounter] = useState(1);
  const [fizzText, setFizzText] = useState("");

  useEffect(() => {
    console.log("counter", counter);
    checkCounter();
  }, [counter]);


  const classes = useStyles();

  const checkCounter = () => {
    if (counter % 3 === 0 && counter % 5 !== 0) {
      setFizzText("Fizz");
    } else if (counter % 5 === 0 && counter % 3 !== 0) {
      setFizzText("Buzz");
    } else if (counter % 3 === 0 && counter % 5 === 0) {
      setFizzText("FizzBuzz");
    } else {
      setFizzText("");
    }
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{fizzText}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={incrementCounter}
          >
            Increment
          </Button>{" "}
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={decrementCounter}
          >
            Decrement
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FizzBuzz;
