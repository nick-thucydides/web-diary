import React from 'react';

const ArchPatterns = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        Our startup consists of one monolithic application. Now that it’s getting annoying to deal with, we need to choose a new pattern. What to choose?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      What is a pattern in this context anyway? We know that patterns outside of computing offer some sort of reusable solution to a problem. It’s the same here, where our pattern will define how our application works at a high level, how its different parts will interact with each other, and more.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      Each pattern has pros and cons. Some are better at other things than others. Security, scalability, and maintainability are a few of the things to keep in mind. Some of the common patterns are Monolithic, Microservices, Event Driven, and Layered.
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
        <li>• When do we choose microservices over monolithic?</li>
        {/* <li>• Why would we ever use layered architecture?</li>
        <li>• Add interview question 3</li> */}
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Add practical examples and use cases here.
    </p>
  </div>
);

export default ArchPatterns;
