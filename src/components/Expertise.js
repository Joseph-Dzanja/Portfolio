'use client';

import { useState } from 'react';
import Skills from './Skills';
import Languages from './Languages';
import Education from './Education';
import { FadeInOnScroll } from './FadeInOnScroll';
import { motion, AnimatePresence } from 'framer-motion';

const Expertise = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'education', label: 'Education' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return <Skills />;
      case 'languages':
        return <Languages />;
      case 'education':
        return <Education />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full sm:w-4/5 m-auto p-8">
      <FadeInOnScroll delayOrder={0}>
        <h1 className="text-center text-3xl font-semibold mb-8">
          What I Can Do
        </h1>
      </FadeInOnScroll>

      <FadeInOnScroll delayOrder={1}>
        <div className="flex mb-8 border-b border-gray-300 justify-center flex-wrap gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 text-lg font-medium transition-colors duration-300 ease-in-out focus:outline-none
                ${
                  activeTab === tab.id
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-blue-500'
                }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute left-0 bottom-0 h-1 w-full bg-blue-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delayOrder={2}>
        <div className="text-center"><AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="text-center"
  >
    {renderTabContent()}
  </motion.div>
</AnimatePresence></div>
      </FadeInOnScroll>
    </div>
  );
};

export default Expertise;
