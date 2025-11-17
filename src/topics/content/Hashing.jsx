import React from 'react';

const Hashing = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        Obviously it’s very bad to store passwords as plain text and we won’t do that. So what can we do?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      Hashing is a one way function which transforms one string into another. So not symmetrical and we can’t just reverse it.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      The same input always results in the same hash so there’s no probability involved, and the length is always the same. You may be wondering, can two different inputs result in the same hash? yes in theory but very unlikely in practice.  There are different algorithms we can use with different strengths: bcrypt is slow but better for passwords than SHA-256 which is fast.  security vs speed
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`// Add your code examples here
console.log('Example code');`}</pre>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• Why is hashing different than encryption?</li>
        <li>• what is a salt and why do we need it for password security?</li>
        <li></li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Add practical examples and use cases here.
    </p>
  </div>
);

export default Hashing;
