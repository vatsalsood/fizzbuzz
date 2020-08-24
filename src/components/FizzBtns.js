import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { useStyles } from "../styles";

/**
 * This component contains the buttons for FizzBuzz that increment and decrement the counter
 * @param {setFizzText} props
 */

const FizzBtns = (props) => {
  const [counter, setCounter] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    checkCounter();
  });

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  /**
   * This function checks if the counter is divisible by 3 or 5 or both and
   * prints the associated text on screen
   */
  const checkCounter = () => {
    if (counter % 3 === 0 && counter % 5 !== 0) {
      props.setFizzText("Fizz");
    } else if (counter % 5 === 0 && counter % 3 !== 0) {
      props.setFizzText("Buzz");
    } else if (counter % 3 === 0 && counter % 5 === 0) {
      props.setFizzText("FizzBuzz");
    } else {
      props.setFizzText("");
    }
  };

  return (
    <Grid container item xs={12}>
      <Grid className={classes.buttons} item xs={6} >
        <Button variant="contained" color="primary" onClick={incrementCounter}>
          Increment
        </Button>
      </Grid>
      <Grid className={classes.buttons} item xs={6}>
        <Button variant="contained" color="primary" onClick={decrementCounter}>
          Decrement
        </Button>
      </Grid>
    </Grid>
  );
};

export default FizzBtns;
