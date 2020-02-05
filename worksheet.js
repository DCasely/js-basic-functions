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
