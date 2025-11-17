// topics/content/HomeContent.jsx
import React from 'react';
import { topicsData } from '../topicsData';

const HomeContent = ({ goNext }) => (
  <div className="text-center">
    {/* <div className="text-6xl mb-6">📚</div> */}
    {/* <h2 className="text-4xl font-bold text-gray-800 mb-6">
      Welcome to My Web Development Diary
    </h2>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      A comprehensive guide covering {topicsData.length - 1} essential topics in modern web development,
      from JavaScript fundamentals to advanced security practices and real-time communication.
    </p> */}

    <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-xl font-bold text-purple-800 mb-3">
          Chapter 1
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          11 topics
        </p>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Hoisting & Closures</li>
          <li>• Async Programming</li>
          <li>• Memory & Performance</li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-xl font-bold text-purple-800 mb-3">
          Chapter 2
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          8 topics
        </p>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Injection Attacks</li>
          <li>• Encryption & Hashing</li>
          <li>• Sessions & Authentication</li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-xl font-bold text-purple-800 mb-3">
          Chapter 3
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          10 topics
        </p>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• RESTful APIs</li>
          <li>• Database Design</li>
          <li>• WebSockets</li>
        </ul>
      </div>
    </div>

    {/* <button
      onClick={goNext}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-12 py-4 rounded-xl text-xl font-semibold shadow-lg transform hover:scale-105 transition"
    >
      Start Learning →
    </button> */}
  </div>
);

export default HomeContent;