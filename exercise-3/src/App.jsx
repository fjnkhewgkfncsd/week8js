import React from "react";
import {useState} from "react";
function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0);
  const [error, setError] = useState("");
  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setA(event.target.value);
  }
  function onB(event) {
    setB(event.target.value);
  }
  function onCompute() {
    if (isNaN(a) || isNaN(b)) {
      setError("Please enter a valid number");
    } else {
      setError("");
      
      setSum(Number(a) + Number(b));
    }
  }
  return (
    <main>
      <h1>Calculator</h1>
      <label>A =</label>
      <input onKeyUp={onA} />
      <label>B =</label>
      <input onKeyUp={onB} />
      <label>A + B =</label>
      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={error ? error : sum} style={{color: error ? "red" : "black"}} />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}
export default App;

