/// Function to multiply two numbers
function multiply(a, b) {
  if(a != 0 && b!=0){
   return a * b;
  }
  return 0;

}

// Function to add two numbers
function add(a, b) {
   return a + b;
   
}

// Function to subtract two numbers
function subtract(a, b) {
  if (a < b) { 
    return "You will get a negative number";
  }
  if(b == 0)
    return a;  
  return a - b;
}


// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }if (a === 0) {
    return 0;
  }
  return a / b;
}

// Example usage
const a = 10;
const b = 5;

// Display results on console
console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);
