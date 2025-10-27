#!/bin/bash

mkdir -p src/topics/content

components=(
  "Closure"
  "ExecutionStack"
  "SingleThreadedJS"
  "AsyncProgramming"
  "PromisesAsync"
  "MemoryLeak"
  "WebWorkers"
  "ClassesJS"
  "ECMA6"
  "InjectionAttacks"
  "SecurityBestPractices"
  "Encryption"
  "Hashing"
  "PublicPrivateKey"
  "SSL"
  "Cookies"
  "SessionJWT"
  "CRUD"
  "RDBMS"
  "OneToMany"
  "ManyToMany"
  "Normalization"
  "RESTfulAPIs"
  "Fetch"
  "Ajax"
  "GetVsPost"
  "ArchPatterns"
  "Monolithic"
  "Microservices"
  "MVC"
  "APICentric"
  "Serverless"
  "CDN"
  "SingleSignOn"
  "OAuth"
  "HostingLLM"
)

for component in "${components[@]}"; do
  cat > "src/topics/content/${component}.jsx" << 'EOF'
import React from 'react';

const COMPONENT_NAME = () => (
  <div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <p className="text-gray-700 font-semibold mb-2">
        📝 Content Area - Add Your Material Here
      </p>
      <p className="text-gray-600 text-sm">
        Replace this template with your own content.
      </p>
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
    <p className="text-gray-600 mb-6">
      Add your introduction and overview here.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
    <p className="text-gray-600 mb-6">
      Add key concepts, definitions, and explanations here.
    </p>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Examples</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
      <pre>{`// Add your code examples here
console.log('Example code');`}</pre>
    </div>

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

export default COMPONENT_NAME;
EOF
  sed -i "s/COMPONENT_NAME/${component}/g" "src/topics/content/${component}.jsx"
done

echo "✅ All 36 component files created successfully in src/topics/content/"
echo "📝 You can now edit each file to add your content"