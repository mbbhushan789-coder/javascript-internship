// Assignment 5: Function Architecture and Scope

// Standard function with default parameter values
function rectangleArea(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameter values
const arrowArea = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${arrowArea(10, 3)}`);

// Scope demonstration
function scopeTest() {
  var functionVar = "I live inside the function";   // function scope
  if (true) {
    let blockVar = "I live inside the block";       // block scope
    console.log(blockVar);
  }
  try {
    console.log(blockVar);                           // not accessible here
  } catch (error) {
    console.log(`Scope Test Error: ${error.name}: ${error.message}`);
  }
}
scopeTest();

try {
  console.log(functionVar);                          // not accessible outside the function
} catch (error) {
  console.log(`Function scope error: ${error.name}: ${error.message}`);
}
