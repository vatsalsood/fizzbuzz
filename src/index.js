import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import Button from "@material-ui/core/Button";
import * as serviceWorker from './serviceWorker';
import FizzBuzz from './components/FizzBuzz';

// const App = () => {
//   const [counter, setCounter] = useState(1);

//   useEffect(() => {
//     console.log("counter", counter);
//   }, [counter]);

//   const checkCounter = () => {};

//   const incrementCounter = () => {
//     setCounter(counter++);
//   };

//   const decrementCounter = () => {
//     setCounter(counter--);
//   };

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={incrementCounter}>
//         Increment
//       </Button>
//       <Button variant="contained" color="primary" onClick={decrementCounter}>
//         Decrement
//       </Button>
//     </div>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <FizzBuzz />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
