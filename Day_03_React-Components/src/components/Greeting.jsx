import React from "react";

const currentDate = new Date();
const currentHour = currentDate.getHours();
console.log(`Current Hour is ${currentHour}`);
let greeting;
let greetingStyle = { color: "", fontSize: "" };

if (currentHour < 12) {
  greeting = "Good Morning";
  greetingStyle.color = "red";
  greetingStyle.fontSize = "2rem";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
  greetingStyle.color = "green";
  greetingStyle.fontSize = "3rem";
} else {
  greeting = "Good Evening";
  greetingStyle.color = "blue";
  greetingStyle.fontSize = "4rem";
}

function Greeting() {
  return (
    <div>
      <h1>*REACT STYLING PRACTICE*</h1>
      <h4 style={greetingStyle}>{greeting}</h4>
    </div>
  );
}

export default Greeting;
