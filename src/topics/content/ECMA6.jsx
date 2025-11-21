import React from 'react';

const ECMA6 = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm"> How can we make our code more readable and maintainable?

      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6"> ECMA6 released in 2015. Before, JS was less safe and harder to read, definitely worse for larger apps. This was a big upgrade with more modern syntax. We like this, and use this: arrows, promsies, templates for strings etc.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>

    <p className="text-gray-600 mb-6">
      We have let and const now. This is good because we don't like var, for multiple reasons including variables leaking out of scope. Let and const prevent this, which is why Amir rightly tells us not to use var. We can also use arrow functions which are nicer to look at but also safer (inherit this).
      We also have nice template literals, and it's much better to use $ rather than concatenate. Classes are also cleaner. We also have destructuring (recall from Kotlin course), see below.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`
// this:
const user = { id: 1, email: "nick@gmail.com" };
const { id, email } = user;

// is much better than:
const id = user.id;
const email = user.email;`}</pre>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4"> Common Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• why dont arrow functions have their own 'this'</li>
        <li>• does ECMA discourage var? why or why not?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      We might have to deal with some legacy code (ex. callback hell) and have to refactor to make it more modern and usable.
    </p>
  </div>
);

export default ECMA6;
