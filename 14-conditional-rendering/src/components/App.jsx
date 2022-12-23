import React from "react";
import Login from "./Login";
const isLogedIn = false;
// function renderConditionally(){
//   if(isLogedIn===true){
//     return <h1>Hello! You successfully Logged in!</h1>
//   }else{
//     return <Login />
//   }
// }

// TASK 1: If currentTime > 12, then show ‘Why are you still working?’
// otherwise ‘It is too early’

// Task 2: If currentTime > 12, then show ‘Why are you still working?’
// otherwise ‘DON’T SHOW ANYTHING’

const currentHour = new Date().getHours();
function App() {
  return (
    <div className="container">
      {/* {renderConditionally()} */}
      {isLogedIn === true ? (
        <h1>Hello! You successfully Logged in!</h1>
      ) : (
        <Login />
      )}
      <div>Task 1</div>
      {currentHour > 12 ? (
        <h2>Why are you still working? : {currentHour}</h2>
      ) : (
        <h2>It is too early : {currentHour}</h2>
      )}
      <div>Task 2</div>
      {currentHour > 12 ? (
        <h2>Why are you still working? : {currentHour}</h2>
      ) : null}
      <div>
        Using && and || operator
        {/* We can use && when we want to do domething if condition iis true
      And want to ignote that code if condition is false */}
      </div>
      {currentHour > 12 && <h2>It is too late : {currentHour}</h2>}
      {currentHour < 12 || <h2>It is too late : {currentHour}</h2>}
    </div>
  );
}

export default App;
