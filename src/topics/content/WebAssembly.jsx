import React from 'react';

const SingleSignOn = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        Why might Photoshop run smoothly at 60+ FPS while my react applciation is at 15 FPS?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      WebAssembly (WASM) is lower level language, somewhat similar to regular Assembly.It's binary so we won't write it ourselves, but we can compile our C++ code so it runs way faster in our browser.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      WASM code is way faster and smaller than the JS equivalent. We compile our code once and then use JS to call the WASM functions. We write C/C++ functions, compile them with emscripten, and then import them.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Example</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`// Add your code examples here
console.log('Example code');`}</pre>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• Can we use WASM without JS why or why not?</li>s
        <li>• Can our WASM code access and manipulate the DOM, why or why not?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Figma was laggy before they adopted WASM to use their RUST code, and made their application much faster and feel like a native destktop app.
    </p>
  </div>
);

export default SingleSignOn;
