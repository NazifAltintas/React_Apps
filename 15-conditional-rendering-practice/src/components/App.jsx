import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

// How do you pass the value of userIsRegistered from App to Form
// 1. create props :<Form isRegistered={userIsRegistered}/>
// 2. get the props inside the Form : function Form(props)
// 3. Let's show "Register" if userIsRegistered===false
// show "Login" if userIsRegistered===true
// 4. if userIsRegistered===true then do not show confirm passwork input
// if userIsRegistered===false then show confirm passwork input
// This is teh element: <input type="password" placeholder="Confirm Password" />
