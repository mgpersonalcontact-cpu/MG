import React from 'react';
import { Calendar, Building, GraduationCap, Award } from 'lucide-react';
import { ExperienceItem, EducationItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Owner & Franchise Manager',
    company: 'TATA AIA Life Insurance',
    period: '2022 - 2024',
    description: [
      'Managed a portfolio of 18 clients with personalized financial planning.',
      'Gained substantial practical exposure in the live market (3.5 years total experience).',
    ]
  },
  {
    id: '2',
    role: 'Financial Literacy Speaker',
    company: 'Rotract Club (NPO)',
    period: 'Volunteer',
    description: [
      'Conducted a financial literacy seminar in a government school.',
      'Educated students on basic saving, investing, and economic concepts.'
    ]
  },
  {
    id: '3',
    role: 'Equity Market Educator',
    company: 'Bulls Trader',
    period: '2 Months',
    description: [
      'Trained aspiring traders on chart patterns and market psychology.',
      'Developed educational content for trading strategies.'
    ]
  },
  {
    id: '4',
    role: 'Sales Executive',
    company: 'General Health Insurance',
    period: 'Previous Role',
    description: [
      'Specialized in health insurance products and client advisory.'
    ]
  },
  {
    id: '5',
    role: 'Intern',
    company: 'Content Creation',
    period: 'Internship',
    description: [
      'Focused on financial content strategy and engagement.'
    ]
  }
];

const education: EducationItem[] = [
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'St. Andrews Institute of Technology, Gurugram',
    year: 'Current'
  },
  {
    degree: 'Bachelor\'s in Commerce Honours',
    institution: 'MD University',
    year: '2022 - 2025'
  },
  {
    degree: 'Diploma in Investment Advisory',
    institution: 'NISM Series 8',
    year: 'Certified',
    details: ['Diploma in Equity Market', 'Certified Derivative Trader']
  },
  {
    degree: 'AISSCE (Class XII)',
    institution: 'Shri Baba Mastnath School',
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-100 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-16 text-center transition-colors">
          Professional <span className="text-gold-500">Journey</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Building className="text-gold-500" size={28} />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">Work Experience</h3>
            </div>
            
            <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-3 space-y-12 transition-colors">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 group">
                  <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-600 group-hover:border-gold-500 group-hover:bg-gold-500 transition-colors"></span>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">{exp.role}</h4>
                    <span className="text-sm font-mono text-gold-600 dark:text-gold-500 flex items-center gap-1 transition-colors">
                      <Calendar size={12} /> {exp.period}
                    </span>
                  </div>
                  <h5 className="text-slate-600 dark:text-slate-400 font-medium mb-3 transition-colors">{exp.company}</h5>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 dark:text-slate-300 transition-colors">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-gold-500" size={28} />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">Education & Certs</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-sm dark:shadow-none">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">{edu.degree}</h4>
                    {edu.year && (
                      <span className={`px-2 py-1 text-xs rounded border ${edu.year === 'Current' ? 'bg-gold-500/20 text-gold-600 dark:text-gold-500 border-gold-500/50' : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'}`}>
                        {edu.year}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-2 transition-colors">{edu.institution}</p>
                  {edu.details && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.details.map((d, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs bg-slate-100 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 px-2 py-1 rounded transition-colors">
                          <Award size={10} /> {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl border border-gold-500/30 transition-colors">
               <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors">Commodity Trader</h4>
               <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors">
                 Specialized in analyzing and trading commodities markets, leveraging macro-economic data and chart patterns to maximize returns.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
