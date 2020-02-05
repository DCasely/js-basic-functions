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
