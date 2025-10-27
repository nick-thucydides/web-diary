import React from 'react';

const HomeContent = ({ chapters, goNext }) => (
  <div className="text-center">
    <div className="text-6xl mb-6">📚</div>
    <h2 className="text-4xl font-bold text-gray-800 mb-6">
      Welcome to Your Web Development Journey
    </h2>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      This comprehensive guide covers 37 essential topics across 6 chapters,
      taking you from JavaScript fundamentals to modern cloud architecture.
    </p>

    <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
      {Object.entries(chapters).map(([chapterName, chapterTopics]) => (
        <div key={chapterName} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-3">
            {chapterName}
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            {chapterTopics.length} topics
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            {chapterTopics.slice(0, 3).map(topic => (
              <li key={topic.id}>• {topic.title}</li>
            ))}
            {chapterTopics.length > 3 && (
              <li className="text-purple-600 font-semibold">
                + {chapterTopics.length - 3} more...
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>

    <button
      onClick={goNext}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-12 py-4 rounded-xl text-xl font-semibold shadow-lg transform hover:scale-105 transition"
    >
      Start Learning →
    </button>
  </div>
);

export default HomeContent;