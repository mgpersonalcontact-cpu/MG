import React from 'react';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    category: 'Analysis & Trading',
    items: ['Technical Analyst', 'Research Analyst', 'Certified Derivative Trader', 'Market Knowledge', 'Portfolio Management', 'Commodity Trading']
  },
  {
    category: 'Tools & Soft Skills',
    items: ['Advanced Excel', 'Problem Solving', 'Communication & Persuasion', 'Active Listening', 'Negotiation Skills', 'Effective Keyboard Proficiency']
  },
  {
    category: 'Leadership & Mgmt',
    items: ['Event Management', 'Team Management', 'Leadership', 'Mentorship & Coaching', 'Adaptability', 'Decisive Decision Making']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors">
          Technical <span className="text-gold-500">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-gold-500/50 transition-all duration-300 group shadow-sm dark:shadow-none">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-3 group-hover:text-gold-500 transition-colors">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-sm rounded border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 cursor-default transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;