let num1=2, num2=3;
let result=num1+num2;
console.log("Result : "+result);//5

let result1=num1/'Hi';
console.log('num/"Hello" :',result1); // NaN

let result2=num1/0;
console.log('num/0 :',result2); // Infinity

let num3= new Number(10);
console.log("typeof (num1):",typeof(num1));//number
console.log("typeof (num2):",typeof(num2));//number
console.log("typeof (num3):",typeof(num3));//object

let num4=1.2e4;
let num5=1.2e-4;
console.log("Exponential Larger Number :",num4);
console.log("Exponential Smaller Number :",num5);