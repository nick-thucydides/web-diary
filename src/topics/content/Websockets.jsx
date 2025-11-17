import React from 'react';

const WebSockets = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example:
      </p>
      <p className="text-gray-600 text-sm">
        I want to create a multiplayer game which involves pushing many updates to many clients instantly. Polling is too inefficient so what do I do?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      A websocket connection gives us a full-duplex channel over a single TCP connection. After the handshake, client and server can send messages any time with no reloading or polling.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      Rather than send a request, response and then close connection, after the handshake we keep the connection open so both sides can send data any time. After the client sends an HTTP request with Upgrade:Webscoket in the header, the connection upgrades to Webscoket protocol.
    </p>

    {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`// Add your code examples here
console.log('Example code');`}</pre>
    </div> */}

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions</h3>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
      <p className="text-gray-700 font-semibold mb-2"></p>
      <ul className="text-gray-700 space-y-2">
        <li>• What's the difference between Websockets and HTTP polling and when do we use one vs the other?</li>
        <li>• What are some security concerns and how do we fix them?</li>
        <li></li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      Slack uses websockets for its chats so everyone sees messages in real time.
    </p>
  </div>
);

export default WebSockets;
