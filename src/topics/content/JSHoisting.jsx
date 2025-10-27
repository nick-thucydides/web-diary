import React from 'react';

const JSHoisting = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example:
      </p>
      <p className="text-gray-600 text-sm">
        Suppose we log a variable x to the console, <i>before</i> we declare it as a const. What gets logged to the console?
        To answer this question, we must understand hoisting.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      Hoisting is where JavaScript's moves declarations of variables, functions, classes, and imports to the top of their scope. This happens during compilation and so before execution. The declarations are hoisted, but not the initializations.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      Variables declared with var are hoisted and initialized with undefined. let and const are hoisted but not initialized. From the beginning of the variable's scope until its initialization, the variable is in a Temporal Dead Zone. Functions, however are fully hoisted. Perhaps you've noticed when you've used a function in your code before you've defined it?
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`console.log(x);
var x = 5;

sayHello();
function sayHello() {
  console.log("Hello!");
}`}</pre>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4"> Common Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• What's the difference between var, let, and const hoisting?</li>
        <li>• What's a temporal dead zone?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Don't you want to prevent/fix bugs regarding variable initialization and function declarations? If you don't understand this concept, you may not understand why you have bugs in your code (or someone else's)
    </p>
  </div>
);

export default JSHoisting;