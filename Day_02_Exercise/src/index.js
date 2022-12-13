import React from "react";
import ReactDOM from "react-dom";

const city = "Austin";
const img1 =
  "https://st3.depositphotos.com/1020618/13308/i/1600/depositphotos_133081938-stock-photo-close-up-of-kebab-sandwich.jpg";
ReactDOM.render(
  <div>
    <h1>My Website</h1>
    <h4>My favorite food list!</h4>
    <ul>
      <li>Tacos</li>
      <li>Pizza</li>
      <li>Salad</li>
    </ul>

    <button>Click Me</button>
    <div>
      <p className="city">{city} is my favorite city </p>
    </div>

    <img src={img1} alt="sandwich" />
    <table>
      <tr>
        <th>COUNTRY</th>
        <th>CAPITAL</th>
      </tr>
      <tr>
        <td>USA</td>
        <td>D.C.</td>
      </tr>
      <tr>
        <td>Germany</td>
        <td>Berlin</td>
      </tr>
      <tr>
        <td>France</td>
        <td>Paris</td>
      </tr>
    </table>
  </div>,
  document.getElementById("root")
);
