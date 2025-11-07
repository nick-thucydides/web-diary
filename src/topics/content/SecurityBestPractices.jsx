import React from 'react';

const SecurityBestPractices = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        You may not have time to make your application bulletproof against every single possible risk. But what are the most import threats and the respective practices to follow?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      An application must be secure, at every layer from the backend to the front end. Earlier, we discussed sanitizing input from users but this is not enough regarding injection attacks. We need to be careful in deciding what data a user account can or should access, and what privileges they should have.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      Developers should consult the OWASP top ten, a document detailing the top 10 security risks to web applications. The top 10 for 2025 should be released during November.
      Threats are constantly evolving, and attacks can be relentless and sophisticated. Taking injection attacks as an example, we need to make sure multiple layers are secure. Yes we can try to sanitize the input but our backend should not then assume that the data is fine and hasn't been tampered with.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`
console.log('Example code');`}</pre>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• Why HTTPS over HTTP?</li>
        <li>• What could happen if we do not limit the number of requests per user?</li>
        <li>• Why use CORS configuration?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Github implements the three practices mentioned in the above questions, and many more besides. As a result, they haven't had a major data breach in years.
    </p>
  </div>
);

export default SecurityBestPractices;
