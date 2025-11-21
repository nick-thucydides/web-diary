import React from 'react';

const SessionJWT = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating Example
      </p>
      <p className="text-gray-600 text-sm">
        Wouldn't it be terrible if our app had no idea who the users are and so they have to send their credentials w every request?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      Our requests need a state. We need to keep track of our users, are they logged in, for how long, whats in their cart, etc. We need to store the user identity on the server somehow. Also, what permissions do they have! A session allows the server to know all this.
      We can use JWT (JSON Web token) as a token that  proves who a user is. We use HTTPOnly (a cookie attribute) to prevents client-side scripts from accessing the cookie (no XSS attacks)

      TODO: learn more about XSS
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      Server creates session for user, and a session id, sends id to browser via httponly cookie.browser sends session id w every request. server can look up session and recognize user. Session is stateful but JWT is stateless. JWT is harder to revoke so should have a shorter lifespan. The server does not store JWTs.
      Session is good for websites and dashbaords, but JWT is better for APIs.
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

export default SessionJWT;
