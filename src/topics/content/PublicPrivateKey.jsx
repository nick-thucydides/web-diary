import React from 'react';

const PublicPrivateKey = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating example
      </p>
      <p className="text-gray-600 text-sm">
        If our app's users are sending sensitive data, should we use a single secret shared key? What happens when/if that key is leaked?
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      We publish one key publicly, and another privately. We use the first to encrpyt and the second to decrpyt (not one symmetrical key.)
      Private keys can't be derived from a public key. This concept is important for understanding JWT, HTTPS, SSH, and more.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>

    <p className="text-gray-600 mb-6">
      The public key can encrypt messages and and verify signatures. It's safe to upload to Github.This is not the case for the private key. The private key decrypts messages and creates - not verifies - signatures. Total security breach if we leak it.
      ECDSA is a more modern way to generate secure pair of keys. We need to rotate the keys too.
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
        <li>• why dont we just use symmetric encryption that sounds easier?</li>
        <li>• how do digital signatures work?</li>
        <li>• who can verify a digital signature?</li>
      </ul>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
    <p className="text-gray-600">
      There lot's of usages. Banks for example. the server gives the public key to the browser and uses it to encrypt a key. Server decrypts it with private key. Data stays confidential
    </p>
  </div>
);

export default PublicPrivateKey;
