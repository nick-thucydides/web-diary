import React from 'react';

const AsyncProgramming = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        How would you fetch data from an API without freezing the webpage while you wait for a response?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      As we discussed earlier, JS is single-threaded, so we don't want to block that thread. Asynchrnous programming allows us to handle tasks without doing that.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      An async function runs independently of the main thread. This is very useful because we don't necessarily know how long a task might take beforehand.
      The event loop handles these async operations, only running them when the execution stack is clear. And so the main thread can keep doing other stuff while we wait for a response.

    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`async function fetchData() {
  console.log('fetching data from API...');
  let data = await fetch('https://someapi.com/data');
  console.log('data received!');
}

console.log('start');
fetchData();
console.log('end');

// start
// fetching data from API ...
// end
// data received!
      `}</pre>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• How does the event loop prioritize tasks?
        </li>
        <li>• Will async code run in order? Why?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      There are very many practical examples, but one useful example is when we want to fetch something from a database, which may take some time with a larger database where we have to query many entires.
    </p>
  </div>
);

export default AsyncProgramming;
