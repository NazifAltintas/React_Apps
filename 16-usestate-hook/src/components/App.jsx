import React, { useState } from "react";
import DigitalClock from "./DigitalClock"
function App() {
  // const count = 0;
  let [count,setCount] = useState(0);
  //1. count = 0; 
  //2. setCount is used to update the value of count
  function increase(){
    setCount(count+1)
  }

  return <div className="container">
  <h1>{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={()=>{setCount(count-1)}}>-</button>
  <button className="reset-button" onClick={()=>{setCount(0)}}>Reset</button>
  <br/>
  <br/>
  <DigitalClock />
</div>;
}

export default App;