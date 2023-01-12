import React from "react";
import ReactDOM from "react-dom";
import Destructing from "./Destructuring";
import Car from "./Car";

ReactDOM.render(
  <div>
    {/* <Destructing /> */}

    <Car />
  </div>,
  document.getElementById("root")
);

// ncomment the code below and see the car stats rendered
// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
