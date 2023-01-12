import React, { useState } from "react";

function DigitalClock() {
  // let currentTime= new Date().toLocaleTimeString();
  const [latestTime, setLatestTime] = useState(new Date().toLocaleTimeString());
  function updateTime() {
    // get the latest time
    // let now= new Date().toLocaleTimeString();
    setLatestTime(new Date().toLocaleTimeString());
    console.log("Test111");
  }
  // update the updateTime function every 1000 millisecons
  setInterval(updateTime, 1000);
  return (
    <>
      <h1 style={{ fontSize: "40px", width: "500px" }}>Digital Clock</h1>
      <h1 className="current-time">{latestTime}</h1>
      <button className="get-time-button" onClick={updateTime}>
        Get Time
      </button>
    </>
  );
}
export default DigitalClock;
