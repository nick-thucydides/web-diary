import React from 'react';

const SSL = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example:
      </p>
      <p className="text-gray-600 text-sm">
        If I'm shopping online, how do I know I know someone won't intercept my credit card number when I try to buy something?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      SSL stands for Secure Sockets Layer. It's a protocol that ensures no one can read or change our data, due to encryption, and also authenticates the website.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>

    <p className="text-gray-600 mb-6">
      SSL is the predecessor to TLS (transport layer security) which is the more modern version, however apparently everyone still uses the terms interchangeably. How this works: browser connects to website, website sends certificate, browser checks it.
      As we taled about public private keys earlier, we use them to establish a secure conenction. The bank example from earlier was foreshadowing this.
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
        <li>• Add interview question 1</li>
        <li>• Add interview question 2</li>
        <li>• Add interview question 3</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Add practical examples and use cases here.
    </p>
  </div>
);

export default SSL;
