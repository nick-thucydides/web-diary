import React from 'react';

const Closure = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example:
      </p>
      <p className="text-gray-600 text-sm">
        How would you create a counter function that remembers its count without using a global variable?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      Closure is where a function can still access variables from its outer/parent scope even after the outer function has finished executing.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      <b>Lexical scope</b> is a functions access to variables in parent scope.
      The <b>Inner function</b> is a function defined inside another function. It "closes over" the outer variables.
      Closure allows variables to be hidden from global scope. It's nice to avoid global variables where possible.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`
function Counter() {
  let count = 0;
  function increment() {
    return count++;
  }
  return increment;
}

const counter = Counter(); 

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2`}</pre>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>•
          Can a closure access a variable that's declared after it’s defined?
        </li>
        <li>• Can a closure cause a memory leak? Why or why not?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Students may recall from previous term experience with Kotlin that it's useful for a component to have a private state that persists across different renders.
    </p>
  </div>
);

export default Closure;
