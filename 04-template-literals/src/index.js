import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "../../Day_03_React-Components/src/components/Greeting";

// 1. craate a js variable
const name = "Nazif";
const lname = "Developer";
// 2. use that variables in the JSX using {}

// TASK1: Render a random number between 1-10 in a h4 element
const randomNumber = Math.ceil(Math.random() * 10);

/*TASK2: render ©Copyright 2022 on the UI. Get the date as a js object
it should display 2 pragraph HTML elements
the pregrephs should say:
Created by YOURNAME(js).
Copyright CURRENtYear (js).
Example: Created by Nazif Altintas.
Copyright ©2022.
*/
const currentDate = new Date();
console.log(currentDate); //Mon Dec 05 2022 15:42:31 GMT+0100 (Orta Avrupa Standart Saati)
const currentYear = currentDate.getFullYear();

/*TASK3: Make the heading1 editable
 Make the heading2 not editable
 ignore the spell check
 use inline styling*/

const imageLink = "https://picsum.photos/200/300";
const customStyle = {
  color: "pink",
  fontSize: "20px",
  border: "2px solid brown",
};
customStyle.border = "4px dashed green";

/*TASK4: REACT STYLING PRACTICE
1. Show a single h3 that says:
"Good morning" if between midnight and 12PM.
or "Good Afternoon" if between 12PM and 6PM.
or "Good evening" if between 6PM and midnight.

2. Apply the "time-style" style in the styles.css for the element
Font size=50 px, font weight= Bold, Border-buttom= 5px solid yellow
Dynamically change the color of the h3 using inline css styles.
Morning red, Afternoon green, Night blue.

HINT:
Create Date() object
Get the hour as a JS object and store as currentTime
Create an object called greeting
Create a customStyle object and initialize the color
Use if else statement to assign values for greeting and costomStyle color based
on currentTime
Render the h1 and use the customStyle and greeting where needed */

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="heading1" contentEditable="true" spellCheck="true">
      Hello {name} {lname}
    </h1>
    <p> your line number 3+7</p>
    <p> your correct line number {3 + 7}</p>
    <h4 style={customStyle}>TASK1: Random number : {randomNumber}</h4>
    <h4 style={{ color: "orange" }}>
      TASK1: Random number : {Math.ceil(Math.random() * 10)}
    </h4>
    <h1 className="heading2" contentEditable="false" spellCheck="false">
      *TEMPLATE LITERALS*
    </h1>
    <p>1. Hello {name + "       " + lname}</p>
    <p>2. Hello {`${name}   ${lname}`}</p>
    <p>{`2. Hello ${name}   ${lname}`}</p>
    <footer>
      <h4>TASK2:</h4>
      <p>Created by {`${name} ${lname}`}</p>
      <p>{`Copyright ©${currentYear}`}</p>
      <h1>EXTERNAL STYLING</h1>
      <img
        className="image1"
        src="https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401__340.jpg"
        alt="image1"
      ></img>
      <img
        className="image2"
        src="https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377__340.jpg"
        alt="image2"
      ></img>
      <img
        className="image3"
        src="https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067__340.jpg"
        alt="image3"
      ></img>
      <img
        className="random-img"
        src="https://picsum.photos/200/300?grayscale"
        alt="random-img"
      ></img>
      <img className="random-img" src={imageLink} alt="random-img"></img>

      <h1>*REACT STYLING PRACTICE*</h1>
      <h4 style={greetingStyle}>{greeting}</h4>
    </footer>
    <Greeting />
  </div>
);
