import React from "react";

let currentDate = new Date();
let greeting;
let customStyle = {
  color: "",
  fontSize: "",
};
const currentHour = currentDate.getHours();
if (currentHour < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
  customStyle.fontSize = "2rem";
} else if (currentHour < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
  customStyle.fontSize = "3rem";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
  customStyle.fontSize = "4rem";
}
function Greeting() {
  return (
    <div>
      <hr />
      <h1>*STYLING PRACTICE*</h1>
      <h4 style={customStyle}>{greeting}</h4>
      <p style={customStyle}>Let's go shopping</p>
    </div>
  );
}
export default Greeting;
