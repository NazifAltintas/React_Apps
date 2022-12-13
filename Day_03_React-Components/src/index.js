import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import pi from "./components/Math"; // default not in {}
// import { doublePi, triplePi } from "./components/Math"; // orther than default is in {} example: // import pi, { doublePi, triplePi } from "./components/Math";
import * as mathData from "./components/Math"; // this is WILDCARD to import everything in a file but this is not recommended

/*function Header() { // this is a component however it is not recommended to be written here(in this file)
  return <h1>Hello World</h1>;
}
*/
/*console.log(pi);
console.log(doublePi());
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <h1 style={{ color: "purple", fontSize: "15px" }}>Import Export</h1>
    <ul>
      {/* <li>Num 1: {pi}</li>
          <li>Num 2: {doublePi()}</li>
          <li>Num 3: {triplePi()}</li>  */}
      <li>Num 1: {mathData.default}</li>
      <li>Num 1: {mathData.doublePi()}</li>
      <li>Num 1: {mathData.triplePi()}</li>
    </ul>
  </div>
);
