//String, Number, Null, Undefined, "", Symbol, Boolean

/* The implicit type conversion takes place automatically by the interpreter or the compiler when there is an internal requirement for that. */

const resultOne = "Hey " + "you";
//console.log(typeof resultOne) ;

const resultTwo = "Hey " + 1;
//console.log(typeof resultTwo);

const resultThree = 1 + 'iop';
//console.log(typeof resultThree)

const resultFour = true + "hey";
//console.log(typeof resultFour, resultFour);

// null and undefined are not converted to string when concatenated with a string

//When you have a numeric value in a string but you perform a math operation (specifically subtraction, multiplication, or division) with another numeric value, the numeric string will be converted to a number
const resultNull = "null" + null
console.log(resultNull, typeof resultNull);

const numOne = "1" * 2;
console.log(numOne, typeof numOne);

const numTwo = "2" - 3;
console.log(Math.abs(numTwo), typeof numTwo);

const numThree = "1" * "1";
console.log(numThree, typeof numThree);

//Boolean an Numbers
/* If you use booleans in math operations with numbers then true is always converted to 1 and false is always converted to 0. Note that if it’s a numeric string (a number in the string) then plus will convert the boolean to a string but anything else will convert the numeric string into a number. */

const boolTrue = 5 - true; //true is always converted to 1
console.log(boolTrue, typeof boolTrue);

const boolFalse = 5 - false; //false is always converted to 0
console.log(boolFalse, typeof boolFalse);

const boolINfinity = 1 / false;
console.log(boolINfinity, typeof boolINfinity);

//The implicit typecasting of null to numbers
//When used with numbers, null is converted to 0 whether it’s a plus, minus, division, or multiplication.

let numNull = 45 + null; //null is converted to 0 
console.log(numNull, typeof numNull);

//Undifined 
/* undefined always returns NaN whether it’s a boolean, number, or null. Although an undefined plus string will convert it to a string as we learned earlier. */
const undefVar = "Hello" + undefined;
console.log(undefVar, typeof undefVar);

const numUndefined = 89  - undefined;
console.log("undefined value: ", numUndefined, typeof numUndefined)

/* undefined with Null */
const unNull = null / undefined;
console.log(unNull, typeof unNull);

/* undefined with Boolean */
const unBoolean = true * undefined;
console.log(unBoolean, typeof unBoolean);

/* _____________________________________________________________________________________________ */

//The explicit typecasting

//Opposite to implicit typecasting, explicit typecasting means data type conversion manually. 

//Built-in methods are functions that already exist in JavaScript and you don’t create them yourself.

//The explicit typecasting to number
let strgToNumeber = Boolean("1" < "8");
console.log(strgToNumeber, typeof strgToNumeber);

let  stringNum = Number(true); //1
console.log(stringNum, typeof stringNum);

let nullNumber = Number(null); //0
console.log(nullNumber, typeof nullNumber);

let undefinedNum = Number(undefined); //NaN
console.log(undefinedNum, typeof undefinedNum);

let numEmptyString = Number(" "); //0
console.log(numEmptyString, typeof numEmptyString);


//The explicit typecasting to String
/* To convert anything to a string you can use a String() method or toString(). Mostly we use toString() but it might give a different result in some situations. */
let boolToString = String(false);
console.log(boolToString, typeof boolToString);

let numString = String(33);
console.log(numString, typeof numString);

let nullStrg = String(null); //same result for undefine
// let nullStrg = (null).toString(); //will give you an error
console.log(nullStrg, typeof nullStrg);
/* ___________________________________________________________________________________________ */

/* The explicit typecasting to boolean */

/* The explicit typecasting to false
The data types that confer to false using the Boolean() method are undefined, null, 0, NaN, ‘’ (an empty string without space). */
/* When we try to convert any value except for the following values into a boolean:
0 - Returns true;
"" (empty string) - Returns true;
NaN - Returns true;
null - Returns true;
undefined - Returns true;*/ 
let zeroBool = Boolean(0);
console.log(zeroBool, typeof zeroBool);

let emptyStringBool = Boolean("");
console.log(emptyStringBool, typeof emptyStringBool);

//array convert to object
const myArray = ["javascript", "HTML", "CSS"];
const myObj = {...myArray};
console.log(myObj);

const myObj2 ={};
for(let i = 0; i < myArray.length; i++){
    myObj2[i]  = myArray[i];
}
console.log(myObj2);

//object.assign
let myObj3 = Object.assign({}, myArray);
console.log(myObj3);

//Type conversion vs Type coercion

/* JavaScript is a dynamic language with dynamic data types because variable types are defined when they are assigned a value. Typecasting in JavaScript can be done explicitly or implicitly. Implicit typecasting is automatic when the interpreter or compiler requires it. Explicit typecasting is performed manually using built-in methods. The Number() method is used to convert anything to a number, and the String() or toString() method is used to convert anything to a string. The Boolean() method is used to convert a data type to a boolean. In addition, arrays can be converted to objects using the spread operator or a for loop. */


/* 
In programming, an interpreter is a software component that takes source code as input and directly executes the instructions it contains, without the need to compile the code into machine code first. 

Interpreters typically work by reading the source code one statement at a time, converting each statement into machine code as it is executed, and then discarding that code when it is no longer needed.

Compiler: C, C++, Java 
INterpriter:  JavaScript, Python
HIgh level Langauge: C, C++, Java 
Computer doesn't understand human language , so we need some mechanism which will covert these high level language into machine language. Here Compiler and Intepreter comes in picture. These both converts our high level programe into machine language. 

Compiler takes all the code in one go and convert it in machine language and give that code to system for execustion and then user can see output.

Interpreter take one instracutions at a time and convert it into machine langauge and gives result to user

*/

/* Falsy Value:
   null, false, 0, '', -0, undefined, NaN, BigInt 

Truthy Value:
    1, true, [], {}, Infinity, -Infinity, " ", "0", "false", function(){}; */

//how to check array is empty or not
let arr = [];
if(arr.length === 0){
    console.log('array is empty')
}   

/* Nullish Coalescing Operator (??) null and undefiend*/
let x = null ?? 'Hello'; //output Hello
let  y = undefined ?? 'Hello'; // output Hello
let z = undefined ?? null; 
console.log(z) //null

/* Optional Chaining (?. ) : It allows safe access to object properties without throwing an error if the property does not exist in the object
/* Optional Chaining (?. ) It helps us to access the properties of object which may be null or undefined*/
let obj = {name :'John', age:45 , address:{city:'New York'}};
console.log(obj.address.country) //Error because address is undefined
console.log(obj.address?.country) //undefined

let arrList = ["Noman", "Roan", "Lion"]
let int = 0;
while(int < arrList.length){
    console.log(arrList[int]);
    int++
}











