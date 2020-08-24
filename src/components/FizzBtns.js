import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


const FizzBtns = () => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <Fragment>
      <Grid item xs={6}>
        <Button variant="contained" color="primary" onClick={incrementCounter}>
          Increment
        </Button>{" "}
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="primary" onClick={decrementCounter}>
          Decrement
        </Button>
      </Grid>
    </Fragment>
  );
};
