import React from 'react';

const SingleThreadedJS = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating Example
      </p>
      <p className="text-gray-600 text-sm">
        A JavaScript loop that runs for too long will freeze a webpage until it finishes. Why?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      JavaScript executes only one task at a time on a single thread. So we call it single-threaded. This is a more simple approach that requires an event loop to handle asynchronous tasks without blocking the UI.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      Although JS is single-threaded, it manages multiple operations by using the event loop to move callbacks from the microtask and macrotask queues to the call stack whenever there is no synchronous code running.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`
        function nonBlocking() {
          setTimeout(() => console.log('Delayed task'), 0);
          console.log('Immediate task');
        }
        nonBlocking();
        // 'Immediate task' first, 'Delayed task' second
        // setTimeout is a macrotask, which avoids blocking
        // added to stack after synchronous code and microstasks are finisheds

      `}</pre>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions:</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• Why does JavaScript use a single thread?
        </li>
        <li>•   What's the purpose of the event loop in single-threaded JS? Reference single-thread in answer</li>

      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      It's essential to understand the single-threaded nature of JS in order to understand how async functions work.
    </p>
  </div>
);

export default SingleThreadedJS;
