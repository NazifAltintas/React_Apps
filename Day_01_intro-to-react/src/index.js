//TRADITIONAL

//hello world in traditional
// creating h1 element

//var heading = document.createElement("h1");

//assign a text value

//heading.innerHTML = "hello world";
//show this on the UI

//document.getElementById("root").appendChild(heading);

//then you will see the hello world on the UI

//var submitButton = document.createElement("button");
//submitButton.innerHTML = "Click and <b>Submit</b>";
//document.getElementById("root").appendChild(submitButton);

//REACT

import React from "react";

import ReactDOM from "react-dom";

//ReactDOM.render("hello world", document.getElementById("root"));
ReactDOM.render(
  <div>
    <h1>hello world</h1>
    <button>
      Click and <b>Submit</b>
    </button>
  </div>,
  document.getElementById("root")
);
