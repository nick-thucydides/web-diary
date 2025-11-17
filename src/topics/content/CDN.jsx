import React from 'react';

const CDN = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        How can Netflix load a movie so quickly to different geographically diverse locations?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      A CDN is a network that delivers content based on where the users are. A CDN will have a copy of a website's content and then deliver the content from its local server to the users. In this way, the data does not travel as far
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      Edge servers are distributed servers that cache the content users need (ex. images, videos HTML, etc). Similar to the concepts we learned about in our Operating Systems lectures, if the requested content is found in the edge server we have a cache hit and it gets served quickly. If not found (cache miss) then we have to fetch it from the origin server. This is slower but we do this less often.
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
        <li>•
          Can you think of any security risks associated with CDNs?
        </li>
        <li>•
          What is Subresource Integrity  SRI and what does it guard against?
        </li>
        {/* <li>• Add interview question 3</li> */}
      </ul>
    </div>

    {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Add practical examples and use cases here.
    </p> */}
  </div>
);

export default CDN;
