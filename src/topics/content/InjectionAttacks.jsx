import React from 'react';

const InjectionAttacks = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        What could happen if we don't properly sanitize inputfrom user? What are the risks and how can we stop this?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      An injection attack is where malicious code is used as input and executed as code. This happens when we don't correctly separate data from code.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      SQL injection attacks are a well-known example. A malicious user can disguise their input, such as login credentials, as SQL queries to steal, modify, or destroy our data.
      Suppose a user enters 'OR '1' = '1' as their name and password. If we do nothing to sanitize this input, rather than get the user from the DB with given username and password, we might return all users from the table!
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`const name = new URLSearchParams(location.search).get('name');
document.getElementById('greeting').innerHTML = 'Hi, ${name}';`}</pre>
      <br></br>
      <p>What's the problem here and how do we fix it?</p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• How can parameterized queries help prevent injection attacks?</li>
        <li>• Considering our database and not the input validation, what's another way to help prevent or mitigate attacks?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Sony Pictures Entertainment: In 2011, over a million user accounts and documents were compromised because their sever side did not have proper validation against SQL injection attacks.
    </p>
  </div>
);

export default InjectionAttacks;
