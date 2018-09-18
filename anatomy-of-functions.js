/*
 * --------------------
 * JAVASCRIPT FUNCTIONS
 * Reading Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 * --------------------
 */

/*
 * NAMED VS. ANONYMOUS FUNCTIONS
 * Reading Tip: https://www.linkedin.com/pulse/javascript-named-vs-anonymous-functions-chris-ng
 */

/**
 * 1. Define a function that greets you with 'Hello World!'
 * 2. What is the part between the curly braces called? Function body
 * 2. Invoke/Call the function?
 * 3. Can you think of different ways of defining a function?
 */

/* 
 * Function declaration (named function)
 * Reading Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 */
function sayGreetingDecl() {
  console.log("Hello World!");
}

/* Function expression (anonymous)
 * Reading Tip: https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function
 */
let sayGreetingExp = function() {
  console.log("Hello World!");
};

// Call/Invoke the functions
sayGreetingDecl();
sayGreetingExp();

// Can you combine expression and declaration? Yes

/* IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) or SELF INVOKED FUNCTION
 * Reading Tip: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 */

// How can you change the function so it does not need to be explicitly called or invoked?
(function sayGreetingImmediate() {
  console.log("Hello World!");
})();

// Why is naming important? Compare errors in named and anonymous function.
(function sayGreetingImmediate() {
  consol.log("Hello World!");
})();

(function() {
  consol.log("Hello World!");
})();

(function() {
  (function() {
    (function() {
      consol.log("Hello World!");
    })();
  })();
})();

(function greetTheSolarSystem() {
  (function greetTheUniverse() {
    (function greatTheWorld() {
      consol.log("Hello World!");
    })();
  })();
})();

// PARAMETERS & ARGUMENTS

/* How do you change the function so it greets anyone we want
 * i.e. with 'Hello John!' or 'Hello Lisa!'?
 */

function sayGreetingWithName(name) {
  console.log("Hello " + name + "!");
}

// Call/Invoke the function
sayGreetingWithName("John");

/*
 * What is 'name' called? Parameter
 * Why does it not need quotes around it? Variable/Placeholder
 * What is 'John' called? Argument
 * Why does 'John' need quotes around it? Value/String in this case
 */

// What happens if the function gets called without an argument?
sayGreetingWithName();
// Hello undefined! How can it be avoided?

/* Include default parameter in case function gets called without argument
 * Reading Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */

function sayGreetingWithDefaultName(name = "World") {
  console.log("Hello " + name + "!");
}

// How can the console.log be written with less single quotes? Tip: ES6 feature
function sayGreetingWithDefaultNameES6(name = "World") {
  console.log(`Hello ${name}!`);
}

// RETURN STATEMENT

// Why is 'undefined' printed after invoking calling the functions before?

/* Write the function so it returns the 'Hello World!' string an then log 
 * 'Hello World' by calling the function as a argument to consol.log()
 */

function sayGreetingReturn() {
  return "Hello World!";
}

// Not undefined is logged to console but the string "Hello World"
sayGreetingReturn();

/* Is it the same result as from console.log before? Look closely!
 * The return statement returns a string ( double quotes around it ) whereas
 * console.log prints the string to the console
 */

// Log the returned 'Hello World' string to the console
console.log(sayGreetingReturn());

/* ES6 ARROW FUNCTIONS
 * Reading Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

// How could all these functions be written as a ES6 arrow function?

let sayGreetingES6 = () => {
  console.log("Hello World!");
};

// Invoked Arrow Function
sayGreetingES6(); // same as normal function

/*
 * Are arrow functions named or anonymous? Anonymous
 * SYNTAX ERROR
 * sayGreetingES6Named() => {
 *  console.log("Hello World!");
 * };
 */

// Can I immediatly invoked an arrow function? Yes
(() => {
  console.log("Hello World!");
})();

// What about parameter?
let sayGreetingES6WithName = name => {
  console.log(`Hello ${name}!`);
};

// Only need parenthesis (roundies) if you have multiple paramters
let sayGreetingES6WithNameAndAge = (name, age) => {
  console.log(`Hello I am ${name}! I am ${age} old`);
};

/* Do I need curly braces? No, not if expression (single value) is returned and 
 * arrow function is written on one line. Console.log() is an expression
 */
let sayGreetingES6NoCurlies = name => console.log(`Hello ${name}!`);

// What about the return statement?
let sayGreetingES6Return = () => {
  return "Hello World!";
};
// Works jsut fine
sayGreetingES6Return();
console.log(sayGreetingES6Return());

// Is there any way to shorten this up?

// Implicit Return statement on single line without curly braces
let sayGreetingES6ImplicitReturn = () => "Hello World!";
console.log(sayGreetingES6ImplicitReturn());
