import React, { useState } from "react";

//Relative imports
import { useStyles } from "../styles";
import FizzBtns from "./FizzBtns";

// Absolute Imports
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const FizzBuzz = () => {
  const [fizzText, setFizzText] = useState("");

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{fizzText}</Paper>
        </Grid>
        <FizzBtns setFizzText={setFizzText} />
      </Grid>
    </div>
  );
};

export default FizzBuzz;
