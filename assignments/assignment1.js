// Assignment 1: Variables, Data Types, and Console Operations
var name = "Alice";                          // var  - function scoped, can be re-assigned
let age = 25;                                // let  - block scoped, can be re-assigned
const isEmployed = true;                     // const - cannot be re-assigned
const skills = ["HTML", "CSS", "JavaScript"];

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${JSON.stringify(skills)} (Type: ${typeof skills})`);
