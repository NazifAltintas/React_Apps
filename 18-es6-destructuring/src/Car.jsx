import React from "react";
import cars from "./practice";

// 1. destructure cars array
const [honda, tesla] = cars;
console.log(honda);
const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  coloursByPopularity: [hondaTopColour],
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
const {
  coloursByPopularity: [teslaTopColour],
} = tesla;
// Do same thing for tesla

export default function Car() {
  return (
    <>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
      </table>
    </>
  );
}
