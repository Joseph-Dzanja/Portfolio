'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code2, GraduationCap } from 'lucide-react';
import Skills from './Skills';
import Languages from './Languages';
import Education from './Education';
import SectionTitle from './SectionTitle';

const tabs = [
  { id: 'skills', label: 'What I Do', icon: Briefcase, Panel: Skills },
  { id: 'languages', label: 'Tech Stack', icon: Code2, Panel: Languages },
  { id: 'education', label: 'Education', icon: GraduationCap, Panel: Education },
];

export default function Expertise() {
  const [activeTab, setActiveTab] = useState('skills');
  const tabRefs = useRef({});
  const { Panel } = tabs.find((t) => t.id === activeTab);

  // Arrow keys / Home / End move between tabs (WAI-ARIA tabs pattern).
  const handleKeyDown = (e) => {
    const index = tabs.findIndex((t) => t.id === activeTab);
    const next = {
      ArrowRight: (index + 1) % tabs.length,
      ArrowLeft: (index - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setActiveTab(tabs[next].id);
    tabRefs.current[tabs[next].id]?.focus();
  };

  return (
    <section id="skills" className="bg-band py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle ghost="Skills">What I Can Do</SectionTitle>

        <div
          role="tablist"
          aria-label="Expertise"
          onKeyDown={handleKeyDown}
          className="flex flex-wrap gap-x-8 border-b border-white/10"
        >
          {tabs.map(({ id, label, icon: Icon }) => {
            const selected = activeTab === id;
            return (
              <button
                key={id}
                ref={(el) => (tabRefs.current[id] = el)}
                id={`tab-${id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`panel-${id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveTab(id)}
                className={`relative -mb-px flex cursor-pointer items-center gap-2 py-3 text-sm font-medium transition-colors md:text-base ${
                  selected ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <Icon aria-hidden="true" className="size-4" />
                {label}
                {selected && (
                  <motion.span layoutId="tab-underline" className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" />
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            tabIndex={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-8"
          >
            <Panel />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
