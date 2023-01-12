import React from "react";
import animals from "./data";

// 1. Array destructuring
console.log(animals);
// 0: {name: 'cat', sound: 'meow'}
// 1: {name: 'dog', sound: 'woof'}

// Destructuring the animals array
const [cat, dog] = animals;
console.log(cat); //{name: 'cat', sound: 'meow'}
console.log(dog); //{name: 'dog', sound: 'woof'}

const [cat1] = animals;
console.log(cat1); //{name: 'cat', sound: 'meow'}
// Note: When you destructure arrays, we must give unique names

//2. Object destructuring
// destructure cat object
const { name, sound } = cat;
// const {catName,catSound} = cat;//WIL NOT WORK becasue catName doesn't exist in animals array
// Note 1: In object destrucring property names must match. you cannot give any name you want.

//destructring the dog
const { name1 = "dog", sound1 = "woof" } = dog;

//3. Destructuring Nester Object
const animals2 = [
  {
    name2: "Persion Cat",
    sound2: "yyyyyy",
    feed2: {
      food: 2,
      drink: 3,
    },
  },
  {
    name3: "British Cat",
    sound3: "miyawwww",
    feed3: {
      food: 4,
      drink: 6,
    },
  },
  {
    name4: "Kangal",
    sound4: "howwww",
  },
];

const [persionCat, britishCat, kangal] = animals2;
console.log(persionCat.name2); //Persion Cat
const { name2, sound2, feed2 } = persionCat;
console.log(name2); //Persion Cat
console.log(feed2.drink);
const { food, drink } = feed2;
console.log(drink);

//3. Destructing functions
function animalFunction(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}
console.log(animalFunction(cat)); //['cat', ƒ]

// Destructuring function
const [animal, makeSound] = animalFunction(cat);
console.log(animal);
cat;
makeSound(); //meow
function Destructing() {
  return (
    <>
      <p>{animals[0].name}</p>
      <p>{animals[0].sound}</p>
      <p>{cat.name}</p>
      <p>{cat.sound}</p>
      <p>{animals[1].name}</p>
      <p>{animals[1].sound}</p>
      <p>{dog.name}</p>
      <p>{dog.sound}</p>
      <p>Cat Name : {name}</p>
      <p>Cat Sound : {sound}</p>
      <p>Dog Name : {name1}</p>
      <p>Dog Sound : {sound1}</p>
    </>
  );
}
export default Destructing;
