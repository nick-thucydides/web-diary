import React from 'react';

const Cookies = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        My application keeps on forgetting who the logged-in user is and asks them to log in again when the page loads. How might we fix this?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      Cookies are small data stored in the browser that are sent with HTTP requests. We can use them to keep track of our user’s sessions
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">

      The size limit is around 4KB. They expire unlike local storage. Good for authentication. Naturally if a user is logged in we want to remember it, but if it’s been a while we’ll want them to log back in (hence expiration) Like how BCIT D2L requires it after hours of inactivity. Security risks []

    </p>

    {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3> */}
    {/* <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`// Add your code examples here
console.log('Example code');`}</pre>
    </div> */}

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• Which of the following are cookies tied to: path, origin, protocol, domain</li>
        <li>• What's the max size of a cookie?</li>
        <li>• Main difference vs local storage? Why use one vs the other?</li>
        <li>• What are the security concerns of using cookies?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    {/* <p className="text-gray-600">
      Add practical examples and use cases here.
    </p> */}
  </div>
);

export default Cookies;
