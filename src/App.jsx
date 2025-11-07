//App.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Menu, BookOpen } from 'lucide-react';
import { topicsData } from './topics/topicsData';

// import HomeContent from './topics/content/HomeContent';
import JSHoisting from './topics/content/JSHoisting';
import Closure from './topics/content/Closure';
import ExecutionStack from './topics/content/ExecutionStack';
import SingleThreadedJS from './topics/content/SingleThreadedJS';
import AsyncProgramming from './topics/content/AsyncProgramming';
import PromisesAsync from './topics/content/PromisesAsync';
import MemoryLeak from './topics/content/MemoryLeak';
import WebWorkers from './topics/content/WebWorkers';
import ClassesJS from './topics/content/ClassesJS';
import ECMA6 from './topics/content/ECMA6';
import InjectionAttacks from './topics/content/InjectionAttacks';
import SecurityBestPractices from './topics/content/SecurityBestPractices';
import Encryption from './topics/content/Encryption';
import Hashing from './topics/content/Hashing';
import PublicPrivateKey from './topics/content/PublicPrivateKey';
import SSL from './topics/content/SSL';
import Cookies from './topics/content/Cookies';
import SessionJWT from './topics/content/SessionJWT';
import CRUD from './topics/content/CRUD';
import RDBMS from './topics/content/RDBMS';
import OneToMany from './topics/content/OneToMany';
import ManyToMany from './topics/content/ManyToMany';
import Normalization from './topics/content/Normalization';
import RESTfulAPIs from './topics/content/RESTfulAPIs';
import Fetch from './topics/content/Fetch';
import Ajax from './topics/content/Ajax';
import GetVsPost from './topics/content/GetVsPost';
import ArchPatterns from './topics/content/ArchPatterns';
import Monolithic from './topics/content/Monolithic';
import Microservices from './topics/content/Microservices';
import MVC from './topics/content/MVC';
import APICentric from './topics/content/APICentric';
import Serverless from './topics/content/Serverless';
import CDN from './topics/content/CDN';
import SingleSignOn from './topics/content/SingleSignOn';
import OAuth from './topics/content/OAuth';
import HostingLLM from './topics/content/HostingLLM';
import WebSockets from './topics/content/Websockets';
import WebAssembly from './topics/content/WebAssembly';





// Placeholder content component
const PlaceholderContent = ({ title }) => (
  <div className="text-gray-700">
    <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
      <p className="text-purple-800 font-semibold">📝 Content Coming Soon</p>
      <p className="text-purple-600 text-sm mt-2">This topic will be filled with detailed notes and examples.</p>
    </div>
  </div>
);

// Home Content Component
const HomeContent = ({ chapters, goToPage }) => {
  return (
    <div className="text-gray-700">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome to My Web Development Diary</h2>
        <p className="text-xl text-gray-600 mb-2">A comprehensive guide to building secure modern web applications</p>
        <p className="text-gray-500">Click on any topic below to start learning</p>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">📚 About This Diary</h3>
        <p className="text-gray-700 mb-3">
          This is my personal collection of web development knowledge, covering everything from JavaScript fundamentals
          to advanced architectural patterns and security best practices.
        </p>
        <p className="text-gray-700">
          <strong>Total Topics:</strong> {topicsData.length - 1} | <strong>Chapters:</strong> {Object.keys(chapters).length}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-semibold">JavaScript</span>
          <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm font-semibold">Security</span>
          <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold">APIs</span>
          <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-semibold">Architecture</span>
          <span className="px-3 py-1 bg-pink-200 text-pink-800 rounded-full text-sm font-semibold">DevOps</span>
          <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-semibold">AI/ML</span>
        </div>
      </div>

      {Object.entries(chapters).map(([chapterName, chapterTopics]) => (
        <div key={chapterName} className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-purple-300 pb-2">
            {chapterName}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {chapterTopics.map(topic => (
              <button
                key={topic.id}
                onClick={() => goToPage(topic.id)}
                className="text-left p-4 bg-white hover:bg-purple-50 border border-gray-200 hover:border-purple-300 rounded-lg transition-all shadow-sm hover:shadow-md group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg flex-shrink-0">{topic.id}.</span>
                  <div>
                    <div className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                      {topic.title}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}


    </div>
  );
};

const componentMap = {
  Home: HomeContent,
  JSHoisting,
  Closure,
  ExecutionStack,
  SingleThreadedJS,
  AsyncProgramming,
  PromisesAsync,
  MemoryLeak,
  WebWorkers,
  ClassesJS,
  ECMA6,
  InjectionAttacks,
  SecurityBestPractices,
  Encryption,
  Hashing,
  PublicPrivateKey,
  SSL,
  Cookies,
  SessionJWT,
  CRUD,
  RDBMS,
  OneToMany,
  ManyToMany,
  Normalization,
  RESTfulAPIs,
  Fetch,
  Ajax,
  GetVsPost,
  ArchPatterns,
  Monolithic,
  Microservices,
  MVC,
  APICentric,
  Serverless,
  CDN,
  SingleSignOn,
  OAuth,
  HostingLLM,
  WebSockets,
  WebAssembly,
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const currentTopic = topicsData[currentPage];
  const isHome = currentPage === 0;
  const isLast = currentPage === topicsData.length - 1;

  const goNext = () => {
    if (currentPage < topicsData.length - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const goHome = () => {
    setCurrentPage(0);
    setShowNav(false);
    window.scrollTo(0, 0);
  };

  const goToPage = (id) => {
    setCurrentPage(id);
    setShowNav(false);
    window.scrollTo(0, 0);
  };

  // Group topics by chapter (excluding Home)
  const chapters = topicsData.slice(1).reduce((acc, topic) => {
    if (!acc[topic.chapter]) {
      acc[topic.chapter] = [];
    }
    acc[topic.chapter].push(topic);
    return acc;
  }, {});

  const renderContent = () => {
    if (isHome) {
      return <HomeContent chapters={chapters} goToPage={goToPage} />;
    }

    const ContentComponent = componentMap[currentTopic.component];

    return ContentComponent ? (
      <ContentComponent />
    ) : (
      <PlaceholderContent title={currentTopic.title} />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Sidebar Navigation */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-slate-800 shadow-2xl transform transition-transform duration-300 z-50 overflow-y-auto ${showNav ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Navigation</h2>
            <button
              onClick={() => setShowNav(false)}
              className="text-white hover:text-purple-400 text-2xl"
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>

          <button
            onClick={goHome}
            className="w-full text-left px-4 py-3 mb-4 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold inline-flex items-center gap-2 cursor-pointer"
          >
            <Home size={20} />
            <span>Home</span>
          </button>

          {Object.entries(chapters).map(([chapterName, chapterTopics]) => (
            <div key={chapterName} className="mb-6">
              <h3 className="text-purple-400 font-semibold mb-2 text-sm uppercase tracking-wide">
                {chapterName}
              </h3>
              {chapterTopics.map(topic => (
                <button
                  key={topic.id}
                  onClick={() => goToPage(topic.id)}
                  className={`w-full text-left px-4 py-2 mb-1 rounded transition ${currentPage === topic.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-slate-700'
                    }`}
                >
                  {topic.id}. {topic.title}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 relative min-h-20">
          <button
            onClick={() => setShowNav(true)}
            className="absolute left-0 top-0 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors z-10 cursor-pointer"
          >
            <Menu size={20} />
            <span>Menu</span>
          </button>

          {!isHome && (
            <button
              onClick={goHome}
              className="absolute right-0 top-0 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors z-10 cursor-pointer"
            >
              <Home size={20} />
              <span>Home</span>
            </button>
          )}

          <h1 className="text-5xl font-bold text-white mt-16 mb-4 drop-shadow-lg">
            Building Secure Modern Web Applications
          </h1>
          <p className="text-purple-300 text-xl">
            Web diary by Nick Thucydides
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {!isHome && (
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
                <div className="text-purple-200 text-sm font-semibold mb-2">
                  {currentTopic.chapter}
                </div>
                <h2 className="text-4xl font-bold text-white">
                  {currentTopic.title}
                </h2>
                <div className="text-purple-200 mt-2">
                  Topic {currentPage} of {topicsData.length - 1}
                </div>
              </div>
            )}

            <div className="px-8 py-12">
              <div className="prose prose-lg max-w-none">
                {renderContent()}
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-6 border-t flex justify-between items-center">
              <button
                onClick={goPrev}
                disabled={isHome}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${isHome
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <div className="text-gray-600 font-medium">
                {currentPage === 0 ? 'Home' : `${currentPage} / ${topicsData.length - 1}`}
              </div>

              <button
                onClick={goNext}
                disabled={isLast}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${isLast
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <footer className="text-center mt-12 text-purple-300">
          <p>© 2025 Web Diary | Full-Stack Web Development Guide</p>
          <p className="text-sm mt-2">{topicsData.length - 1} Topics • {Object.keys(chapters).length} Chapters</p>
        </footer>
      </div>
    </div>
  );
};

export default App;