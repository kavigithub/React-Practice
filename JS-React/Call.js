//we use call for function borrowing. We can borrwo functions from other objects and use it data with other objects
//call lets you borrow methods from one object and use them for another, or simply call a function with a specific context and arguments.
//call method is used to invoke (call) a function with a specified this value and arguments provided individually.
//call is holding refernce of 'this' variable with current context
//This flexibility is particularly useful when you want to reuse functions across different objects or contexts in JavaScript.


function userName(name){
    this.name= name
}

function userLoginDetails(name, isLogin, loginCount){
    userName.call(this, name);
    this.isLogin = isLogin;
    this.loginCount = loginCount;
}

let userOne = new userLoginDetails('Kavita', true, 34);
let userTwo = new userLoginDetails('Hitesh', false, 80);
console.log(userOne);
console.log(userTwo);

// You can also pass arguments individually after the 'this' context

function calculatingAge(birthPlace){
    return `${this.name} ${new Date().getFullYear() - this.birthYear} ${birthPlace}`;
}

let person1 = {
    name: 'Yogesh',
    birthYear: 1980
}

// You can also pass arguments individually after the 'this' context
// Call the calculatingAge function with the 'person' object as 'this' and additional arguments

console.log(calculatingAge.call(person1, 'Mumabi'))