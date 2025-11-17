import React from 'react';

const WebWorkers = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example:
      </p>
      <p className="text-gray-600 text-sm">
        We need to do some heavy computations without freezing the UI. How could we do this?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      We use webworkers to run JS in background threads so that it doesn't intefere with the main thread. As we know, JS is single threaded. Web workers can't access the DOM, which is fine, since we use them in an isolated environment to do some non-Ui things like big operations, network requests, etc.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      Workers doon't share memory with the main thread, they have their own thread with its own stack and memory. We would not use these for small frequent tasks, good for large less frequent tasks. Since workers don't share memory with the main thread, they can only communicate by sending copies of data (not the actual data) back and forth using postMessage().
    </p>

    {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`// Add your code examples here
console.log('Example code');`}</pre>
    </div> */}

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Interview Tips</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2">💡 Common Questions</p>
      <ul className="text-gray-700 space-y-2">
        <li>• What can WW access and what can they not access?</li>
        <li>• Whats the difference between synchronous code and web workers and when should we use one vs the other?</li>
        {/* <li>• Add interview question 3</li> */}
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      How does Google docs check your spelling without causing the UI to freeze? Webworkers. The text content gets sent to a webworker every few hundred ms or so. While we keep typing, the spell checking runs without blocking.
    </p>
  </div>
);

export default WebWorkers;
