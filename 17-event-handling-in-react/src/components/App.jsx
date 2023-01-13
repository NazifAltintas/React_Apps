import React, { useState } from "react";

function App() {
// 1. initial value : Hello
// 2. Update that value after click.Get the latest value
  const [headingText, setHedingText] = useState("Hello!");//headingText = Hello
  function handleClick(){
    // console.log('Clicked!');
    setHedingText("Submitted!")
  }

  const [isMouseOver,setMouseOver]=useState(false)
  function handleMouseOver(){
    // console.log('Mouse Over!!!')
    setMouseOver(true);
    // console.log(isMouseOver);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }
  
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      onClick={handleClick} 
      style={{backgroundColor:isMouseOver?"black":"white"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>Submit</button>
    </div>
  );
}

export default App;