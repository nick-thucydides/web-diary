import React from 'react';

const CRUD = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        I’ve just created a new database, what are the essential operations I need to be able to do?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      CRUD: Create Read Update Delete. Analogous to HTTP methods: Post Get Put/Patch, Delete. Or SQL INSERT SELECT UPDATE DELETE
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      Ok now it’s pretty obvious WHAT these 4 operations do. but WHO is very important. Should the same person who can read always be allowed to write or update? No definitely not. hence we consider authorization, we need different roles. And yes we could sanitize input on the client side but really this is not very safe, and the server side should make no assumptions about the quality of input from client side. We can also implement different types of delete. Ex I’ve seen memes about the intern deleting all rows from database. This wouldn’t happen if we used soft delete to mark rows for deletion instead of hard delete (delete rigjht away.
    </p>

    {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`// Add your code examples here
console.log('Example code');`}</pre>
    </div> */}

    <h3 className="text-2xl font-bold text-gray-800 mb-4"> Common Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• What security measures should we implement for each crud operation?</li>
        {/* <li>• Add interview question 2</li>
        <li>• Add interview question 3</li> */}
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Add practical examples and use cases here.
    </p>
  </div>
);

export default CRUD;
