/* LAB 1: A Trip to Woodland Park Zoo

 Welcome to Lab 1 =)

 Be sure to read all the comments!

 All of the instructions are inline with the assignment below. Look for the
 word TODO in comments.  Each TODO will have a description of what is
 required.

 Save this file wherever you like. To run it, navigate (in the terminal) to
 wherever you saved it, and type: node lab1.js

 Instructions for turning this lab in are in the assignment description in
 Canvas.

 I'm happy to answer any questions at: mel@codefellows.org. I will post the
 questions i receive and the answers i give to a discussion group in Canvas.

*/

/* ----------------- Helper ------------------------------------------------
 I've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  expression || console.log("assertion failure: ", failureMessage);
}

/*
 An assertion is something we expect to be true about the state of the
 program at the point where the assertion is made.

 Remember, state is all the variables that we've declared and their current
 values.

 Notice: I'm using short-circuiting in the assert method. I only print out
 the failure message if our assertion is incorrect.

 Here are some examples for how to use the assert method:
*/

assert(1===1);
assert(1===2, "this is an assertion failure example. 1===2");

/*
 TODO: 4 points
 Use assert twice. Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed. Each example is worth 2 points.
*/

/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of research)
 We're going to translate two sentences into meerkat speech.
*/

var sentence1 = "More food please."
var sentence2 = "Come over here so you can scratch my belly."

/*
 TODO: 10 points
 Your goal is to replace the words in the above sentences with "chirp"
 The assertions at the end of this section should pass.
 Use two different kinds of loops to implement this.
 HINT: the "split" method on String will be useful.
*/

assert(sentence1 === "chirp chirp chirp.", "sentence 1 should have 3 chirps");
assert(sentence2 === "chirp chirp chirp chirp chirp chirp chirp chirp chirp.",
  "sentence 2 should have 9 chirps");

/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next. http://www.w3schools.com/jsref/jsref_random.asp
 Hint: read the whole Math.random description on that page and try the examples
*/

var favoriteAnimals = ["elephant", "penguin", "eagle", "camel"];
var nextAnimal;

// TODO: 8 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

assert(nextAnimal, "assign something to nextAnimal");

/* ----------------- Code Style ----------------------------------------
 TODO: 10 points
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 run the tools with:
  ./node_modules/.bin/grunt jshint
  ./node_modules/.bin/grunt jscs

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors. 
*/
