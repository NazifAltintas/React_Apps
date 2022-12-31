// Creating a variable
const pi = 3.141596;

// Creating a function
function doublePi() {
  return 2 * pi;
}

// creating another function
function triplePi() {
  return 3 * pi;
}
// visible from other js or jsx classes
export default pi; //first export is default
export { doublePi, triplePi }; //other exports should be in {}. And not default
// export {triplePi};
