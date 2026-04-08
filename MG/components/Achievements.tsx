import React from 'react';
import { Trophy, Star, Users, Book, ArrowUpRight, Award } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent transition-colors"></div>
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-gold-500/10 dark:bg-gold-600/5 rounded-full blur-3xl transition-colors"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-3xl transition-colors"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">
            <Award className="w-4 h-4 text-gold-500 mr-2" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-colors">Milestones & Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 transition-colors">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">Results</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg transition-colors">
            A track record defined by consistent performance, community leadership, and educational impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Main Card - ROI */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-gold-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] shadow-sm dark:shadow-none">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 md:p-12 flex flex-col justify-between h-full relative z-10">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-green-500/10 rounded-2xl border border-green-500/20">
                  <Trophy className="text-green-600 dark:text-green-500 w-8 h-8 transition-colors" />
                </div>
                <ArrowUpRight className="text-slate-400 dark:text-slate-600 group-hover:text-gold-500 transition-colors" />
              </div>
              <div className="mt-8">
                <div className="text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-500 origin-left">
                  22<span className="text-green-500">%</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 transition-colors">Annual ROI (2025)</h3>
                <p className="text-slate-600 dark:text-slate-400 transition-colors">
                  Outperformed major indices through strategic derivatives trading and technical analysis in a volatile market environment.
                </p>
              </div>
            </div>
          </div>

          {/* Author Card */}
          <div className="lg:col-span-4 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-sm dark:shadow-none">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 h-full flex flex-col relative z-10">
              <div className="p-3 w-fit bg-blue-500/10 rounded-2xl border border-blue-500/20 mb-6">
                <Book className="text-blue-600 dark:text-blue-500 w-6 h-6 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Published Author</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 font-serif italic mb-4 transition-colors">"Trader's Matrix"</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-auto transition-colors">
                A specialized guide on chart patterns and technical analysis, helping beginners navigate complex market structures.
              </p>
            </div>
          </div>

          {/* Community Leadership */}
          <div className="lg:col-span-4 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all duration-500 shadow-sm dark:shadow-none">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 h-full relative z-10">
              <div className="p-3 w-fit bg-purple-500/10 rounded-2xl border border-purple-500/20 mb-6">
                <Users className="text-purple-600 dark:text-purple-500 w-6 h-6 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Community Leader</h3>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  3x Student Union President
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  2x Lion's Club Head
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  800+ Event Attendees
                </div>
              </div>
            </div>
          </div>

          {/* Mentorship */}
          <div className="lg:col-span-4 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-pink-500/50 transition-all duration-500 shadow-sm dark:shadow-none">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 h-full relative z-10">
              <div className="p-3 w-fit bg-pink-500/10 rounded-2xl border border-pink-500/20 mb-6">
                <Star className="text-pink-600 dark:text-pink-500 w-6 h-6 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Mentorship</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 transition-colors">
                Dedicated to financial literacy and empowering the next generation of traders.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900 dark:text-white transition-colors">15+</span>
                <span className="text-slate-500 uppercase text-xs font-bold tracking-wider">Students in 2025</span>
              </div>
            </div>
          </div>

          {/* Recognition Badge */}
          <div className="lg:col-span-4 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 hover:border-gold-500 transition-all duration-500 flex items-center justify-center p-8 shadow-sm dark:shadow-none">
             <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center mb-4 group-hover:border-gold-500 transition-colors">
                  <Award className="text-slate-400 group-hover:text-gold-500 transition-colors" />
                </div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Member Of</p>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">Bharat Vikas Parishad</h3>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
