const myBoolean = true;
const myString = 'Hello World';
let firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;
let myArray = ['myBoolean', 'myString'];
let myObject = {firstProperty: myArray, 
                    sumProperty: firstNumber + secondNumber
                }
console.log(myObject);
let result = myObject.sumProperty
console.log(result);
let result1 = myArray[1];
console.log(result1);
