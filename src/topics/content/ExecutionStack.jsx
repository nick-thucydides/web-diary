import React from 'react';

const ExecutionStack = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        A function that calls itself will crash the browser if it runs too many times. Why?


      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      The execution stack is a LIFO (last in first out) used by JavaScript to track function calls in a single-threaded environment.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      When too many function calls occur (like in infinite recursion) we get stack overflow. Students should hopefully recall that in a LIFO stack that the last function called is the first to complete.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`function recurse(n) {
  if (n == 0) return;
  recurse(n - 1);
}
recurse(10);

// Stack builds in this order: recurse(10) -> recurse(9) -> ... -> recurse(0)
// recurse(0) completes first, and so on, until recurse(n)
// If we call recurse with a large enough n, we get stack overflow`}</pre>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• What happens when the execution stack overflows?
        </li>
        <li>• How does the stack process asynchronous code?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      This concept is important for debugging. We can use Chrome DevTools to see the sequence of function calls to find an error.


    </p>
  </div>
);

export default ExecutionStack;
