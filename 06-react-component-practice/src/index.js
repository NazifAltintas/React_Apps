import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import pi from './components/math';
// import {doublePi, triplePi} from './components/math';
// import {triplePi} from './components/math'
import * as MathData from "./components/math";
// {MathData.default} -> pi
//

ReactDOM.render(
  <div>
    {/* <Greeting /> */}
    <App />
    <h1 style={{ color: "purple", fontSize: "15px" }}>*IMPORT EXPORT*</h1>
    <ul>
      <li>Num 1: {MathData.default} </li>
      <li>Num 2: {MathData.doublePi()}</li>
      <li>Num 3: {MathData.triplePi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
