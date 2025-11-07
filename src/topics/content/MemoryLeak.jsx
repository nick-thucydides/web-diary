import React from 'react';

const MemoryLeak = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example:
      </p>
      <p className="text-gray-600 text-sm">
        If you keep clicking a button and notice that the browser keeps on getting slower, what might be the cause?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      A memory leak occurs when memory is allocated but never freed. Normally the garbage collector will free the memory when there are no more references,
      but the GC won't take care of global variables. If we remove an event without removing its event listener we can also have a memory leak.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      The garbage collector won't mark global variables for collection, and if we don't declare a variable properly it can be global.
      We can avoid memory leaks by removing event listeners when we don't need them, and by being dilligent with our closures, as we'll see in the next example.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`<script>
   var newElem;
 
   function outer() {
       var someText = new Array(1000000); 
       var elem = newElem;
 
       function inner() {
           if (elem) return someText;
       }
 
       return function () {};
   }
 
   setInterval(function () {
       newElem = outer();
   }, 5);
</script>`}</pre>
    </div>
    <p className="text-gray-600 mb-6">
      Outer() returns a function that can still access someText, so the memory can't be freed.
      We can fix this by calling outer()() instead. This way, when outer()'s result  and variables go out of scope, the memory can be freed.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• What makes an object eligible for clean up by the GC?</li>
        <li>• How to prevent a memory leak with DOM elements?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Consider a chat app. Each message has an element with listeners (ex. reply, react) and so the event listeners need to be removed before the elements.
    </p>
  </div>
);

export default MemoryLeak;
