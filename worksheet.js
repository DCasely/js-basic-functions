// FUNCTIONS

function doSomething() {
  console.log('HELLO WORLD');
}

doSomething();
doSomething();
doSomething();
doSomething();

function sayHi() {
  console.log('HELLO!');
  console.log('GOODBYE!');
}

function singSong() {
  console.log('Twinkle, twinkle, little star,');
  console.log('How I wonder what you are!');
  console.log('Up above the world so high,');
  console.log('Like a diamond in the sky.');
}

// ARGUMENTS

function square(num) {
  console.log(num * num);
}

square(10);
square(3);
square(4);

// -----------------------

function sayHello() {
  console.log('Hello there!');
}

function sayHello(name) {
  console.log('Hello there ' + name + '!');
}

// MULTIPLE ARGUMENTS

function area(length, width) {
  console.log(length * width);
}

area(9, 2);

// ========================

function greet(person1, person2, person3) {
  console.log('hi ' + person1);
  console.log('hi ' + person2);
  console.log('hi ' + person3);
}

greet('Harry', 'Ron', 'Hermione');

// The 'RETURN' Keyword

function square(x) {
  return x * x;
}

square(4);

'4 squared is: ' + square(4);

// Next Exercise

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = 'paris';
var capital = 'capitalize(city)';

// Next Exercise

function capitalize(str) {
  if (typeof str === 'number') {
    return "that's not a string!";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = 'paris';
var capital = 'capitalize(city)';

var num = 37;
var capital = capitalize(num);

// FUNCTION DECLARATION VS FUNCTION EXPRESSION

// function declaration
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// function expression
var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// EXERCISE 1

function test(x, y) {
  return y - x;
}

test(10, 40);

// EXERCISE 2

function test(x) {
  return x * 2;
  console.log(x);
  return x / 2;
}

test(40);

// FUNCTION PROBLEM SET

function isEven(num) {
  return num % 2 === 0;
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);

// Next Problem Set

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}

factorial(5);
factorial(2);
factorial(10);
factorial(0);

// Last Problem Set

function kebabToSnake(str) {
  // find and replace dashes to underscores
  return str.replace(/-/g, '_');
}

kebabToSnake('hello-world');
kebabToSnake('dogs-are-awesome');
kebabToSnake('blah');

// INTRO to JS SCOPE

function doMath() {
  var x = 40;
  console.log(x);
}

var num = 8;
function doMath() {
  num += 1;
  if (num % 5 == 0) {
    return true;
  } else {
    return false;
  }
}

num += 1;
doMath();

function hi() {
  var name = 'Rusty';
  console.log(name);
}
function bye() {
  console.log(name);
}

// Higher Order Functions

function sing() {
  console.log('twinkle twinkle...');
  console.log('how i wonder...');
}

setInterval(sing, 1000);
setInterval(function() {
  console.log('I am an anonymous function!');
  console.log('THIS IS AWESOME');
}, 2000);
