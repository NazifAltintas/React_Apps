import React from "react";

const name = "Nazif";
const lname = "Developer";
const currentDate = new Date();
console.log(currentDate); //Mon Dec 05 2022 15:42:31 GMT+0100 (Orta Avrupa Standart Saati)
const currentYear = currentDate.getFullYear();

function Footer() {
  return (
    <div>
      <p>Created by {`${name} ${lname}`}</p>
      <p>{`Copyright ©${currentYear}`}</p>
    </div>
  );
}

export default Footer;
