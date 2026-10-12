// Assignment 3: Conditional Logic Implementation
const score = Number(prompt("Enter your test score (0-100):", "85"));

if (isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid score. Enter a number between 0 and 100.");
} else {
  let grade;

  // if...else decides the grade band
  if (score >= 90) grade = "A";
  else if (score >= 80) grade = "B";
  else if (score >= 70) grade = "C";
  else if (score >= 60) grade = "D";
  else grade = "F";

  // switch confirms/prints the letter grade
  switch (grade) {
    case "A": console.log("Excellent work!"); break;
    case "B": console.log("Good job!"); break;
    case "C": console.log("Fair, keep improving."); break;
    case "D": console.log("Needs improvement."); break;
    default:  console.log("Please try again.");
  }

  // ternary operator for pass/fail
  const status = score >= 40 ? "Passed" : "Failed";

  console.log(`Score: ${score}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
}
