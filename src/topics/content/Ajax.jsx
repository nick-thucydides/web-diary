import React from 'react';

const Ajax = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        Imagine we click on a button and the entire page refreshes? How might we fix this annoying issue?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      AJAX stands for async javascript and XML. We use it when we want to communicate asynchronously with a server, allowing us to update parts of a web page without having to reload the whole thing.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      AJAX is non blocking, meaning that the user can keep interacting with a page while we fetch some data. Fetch is preferred (by me) since it uses promises rather than XMLHttpRequest which uses callbacks which can be annoying and not aesthetically pleasing. see example of Fetch below.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`
async function loadUser(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`, {
      headers: {
        'X-CSRF-Token': getCsrfToken(),
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });

    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    
    const data = await response.json();
    updateUI(data);
  } catch (error) {
    showError('Failed to load user');
  }
}
`}</pre>

    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4"> Common Questions </h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• Is AJAX safe? What are some vulnerabilities to consider?</li>
        {/* <li>• Add interview question 2</li>
        <li>• Add interview question 3</li> */}
      </ul>
    </div>
    {/* 
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Add practical examples and use cases here.
    </p> */}
  </div>
);

export default Ajax;
