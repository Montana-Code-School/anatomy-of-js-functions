
/*
 * NAMED VS. ANONYMOUS FUNCTIONS
 * Reading Tip: https://www.linkedin.com/pulse/javascript-named-vs-anonymous-functions-chris-ng
 */

/**
 * 1. Define a function that greets you with 'Hello World!
 * 2. Invoke/Call the function?
 * 3. Can you think of different ways of defining a function?
 */

// Function declaration (named function)
function sayGreetingDecl() {
  console.log('Hello World!');
}

// Function expression (anonymous)
var sayGreetingExp = function() {
  console.log('Hello World!');
}

// Call/Invoke the functions
sayGreetingDecl();
sayGreetingExp();

// Can you combine expression and declaration? Yes

// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) or SELF INVOKED FUNCTION

// How can you change the function so it does not need to be explicitly called or invoked?
(function sayGreetingImmediate() {
  console.log('Hello World!');
})()

// Why is naming important? Compare errors in named and anonymous function.
(function sayGreetingImmediate() {
  consol.log('Hello World!');
})()

(function() {
  consol.log('Hello World!');
})()

// Another example with more levels
(function() {
  (function() {
    (function() {
      consol.log('Hello World!');
    })()
  })()
})()

(function greetTheSolarSystem() {
  (function greetTheUniverse() {
    (function greatTheWorld() {
      consol.log('Hello World!');
    })()
  })()
})()

// PARAMETERS & ARGUMENTS

/* How do you change the function so it greets anyone we want
 * i.e. with 'Hello John!' or 'Hello Lisa!'?
 */

function sayGreetingWithName(name) {
  console.log('Hello ' + name + '!');
}

// Call/Invoke the function
sayGreetingWithName('John');

/*
 * What is 'name' called? Parameter?
 * Why does it not need quotes around it? Variable/Placeholder
 * What is 'John' called? Argument
 * Why does 'John' need quotes around it? Value/String in this case
 * What happens if the function gets called without an argument? How can it be avoided?
 */

function sayGreetingWithOptionalName(name) {
  name =  name || 'World';
  console.log('Hello ' + name + '!');
}

/* Include default parameter in case function gets called without argument
 * Reading Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */

function sayGreetingWithDefaultName(name = 'World') {
  console.log('Hello ' + name + '!');
}

// How can the console.log be written with less single quotes? Tip: ES6 feature
function sayGreetingWithNameES6(name = 'World') {
  console.log(`Hello ${name}!`);
}

// RETURN STATEMENT

// Why is 'undefined' printed after console.log?

/* Write the function so it returns the 'Hello World!' string instead of 
 * logging it within the function
 */

function sayGreetingReturn() {
  return 'Hello World!';
}


