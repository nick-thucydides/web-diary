import React from 'react';

const PromisesAsync = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        An API request might succeed or fail. How could we handle each case differently?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      A promise is an object that represents the completion - whether successful or not - of an async operation.
      It can be a cleaner alternative to callbacks, with three states: pending, fulfilled, and rejected.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      Whatever an async function returns, it is wrapped in a promise regardless. We can use then() to handle success, and we can chain these calls too.
      When a promise is resolved, that's it. In other words, a promise can go from pending to fulfilled or rejected, but once it's fulfilled or rejected it won't change state again.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`const myPromise = new Promise((resolve, reject) => {
  const success = false;
  if (success) resolve('success');
  else reject('failure');
});
myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// output: 'failure'`}</pre>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• What are the advantages of promises vs callbacks?</li>
        <li>• What happens if we don't handle a promise's rejection?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      When we're fetching data via an API, we can't just assume that we'll always get a successful response. And so we'd want to gracefully handle both success and failure, using a promise.
    </p>
  </div>
);

export default PromisesAsync;
