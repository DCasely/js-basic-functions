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
  // define a result variable
  var result = 1;
  // calculate factorial and store value in result
  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  // return the result variable
  return result;
}

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
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
  var newStr = str.replace(/-/g, '_');
  return newStr;
}

kebabToSnake('hello-world');
kebabToSnake('dogs-are-awesome');
kebabToSnake('blah');
