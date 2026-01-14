let num1 = 4, num2 = 10, num3 = 14;

console.log("number to string :",num1.toString());
console.log("number to binary:",num1.toString(2));
console.log("number to octal :",num2.toString(8));
console.log("number to hexadecimal :",num3.toString(16));

let num4 = 1.236342;
console.log("fixed number : ",num4.toFixed(2));//1.24
console.log("fixed number :",num4.toFixed(3));//1.236

let num5=1236342;
console.log("Exponential number :",num5.toExponential(2));//1.24e+5
console.log("Exponential number :",num5.toExponential(3));//1.236e+5