import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);
  
  function Add() {
    setResult(result + Number(inputRef.current.value));
  }

  function Subtract() {
    setResult(result - Number(inputRef.current.value));
  }

  function Multiply() {
    setResult(result * Number(inputRef.current.value));
  }

  function Divide() {
    setResult(result / Number(inputRef.current.value));
  }

  function Reset_Input() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function Reset_Result() {
    setResult(0);
  }

  return (
    <>
      <div className="cal">
        <h1>Simple Calculator</h1>
        <div className="result">Result: {result}</div>
        <form action="">
          <input type="text" ref={inputRef} placeholder="Enter a number" />
          <div className="buttonRow">
            <button type="button" onClick={Add} className="Add">
              Add
            </button>
            <button type="button" onClick={Subtract} className="Subtract">
              Subtract
            </button>
            <button type="button" onClick={Multiply} className="Multiply">
              Multiply
            </button>
            <button type="button" onClick={Divide} className="Divide">
              Divide
            </button>
          </div>
          <div className="buttonRow">
            <button type="button" className="Reset_Input" onClick={Reset_Input}>
              Reset Input
            </button>
            <button type="button" className="Reset_Result" onClick={Reset_Result}>
              Reset Result
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;