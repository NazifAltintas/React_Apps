const pi = 3.141596;

function doublePi() {
  return 2 * pi;
}
function triplePi() {
  return 3 * pi;
}

//visible from another js or jsx classes
export default pi;  //first export is default
//export { doublePi };
//export { triplePi };
export { doublePi, triplePi }; // other exports should be in {}. and not default
console.log(pi);
