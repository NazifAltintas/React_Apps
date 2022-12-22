import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />

      {/* 
      <Note title={notes[0].title} content={notes[0].content}/>
      <Note title={notes[1].title} content={notes[1].content}/>
      <Note title={notes[2].title} content={notes[2].content}/>
      <Note title={notes[3].title} content={notes[3].content}/> 
      */}

      {/* 
1. we can make function anonymous-delete name 
(eachNote)=>{
  return <Note key = {eachNote.key} title={eachNote.title} content={eachNote.content}/>
}
2. Delete return keywork and {}
3. We can even delete paranthesis aound the input
NOTE: we can only do this step IF THERE IS ONE SINGLE PARAMETER
*/}

      {/* We map the motes array data to Mote components using map function  */}
      {notes.map((eachNote) => (
        <Note
          key={eachNote.key}
          title={eachNote.title}
          content={eachNote.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
