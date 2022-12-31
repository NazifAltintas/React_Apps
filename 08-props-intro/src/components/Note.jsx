import React from "react";

function Note(props) {
  console.log(props);
  return (
    <div className="note">
      <h1>This is the {props.name}</h1>
      <p>{props.age}</p>
      <img src={props.noteImg}></img>
    </div>
  );
}

export default Note;
