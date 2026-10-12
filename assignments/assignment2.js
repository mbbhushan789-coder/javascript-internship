// Assignment 2: Operators, Expressions, and Input Handling
// prompt() returns a string, so we convert explicitly with Number()
let subtotal = Number(prompt("Enter the bill amount:", "100"));
let tipPercent = Number(prompt("Enter the tip percentage:", "15"));

if (isNaN(subtotal) || isNaN(tipPercent)) {
  console.log("Invalid input. Please enter numbers only.");
} else {
  let tip = (subtotal * tipPercent) / 100;   // arithmetic operators
  let total = subtotal;
  total += tip;                              // assignment operator

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercent}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
}
