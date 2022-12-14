import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Note name="John" age="22" />
      <Note name="Sam" age="85" />{" "}
      <Note
        name="Alex"
        age="52"
        noteImg="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      />
      <Footer />
    </div>
  );
}

export default App;
