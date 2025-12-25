import React from 'react';
import { X, Phone, Mail, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileImageSrc: string;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profileImageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
       <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
       
       <div className="relative w-full max-w-4xl bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 rounded-lg shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in duration-300 transition-colors border border-slate-200 dark:border-slate-800">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors z-10 text-slate-900 dark:text-white"
          >
            <X size={20} />
          </button>
          
          <div className="p-8 md:p-12 font-sans">
            {/* Header */}
             <div className="flex flex-col items-center text-center border-b-4 border-slate-800 dark:border-slate-700 pb-8 mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-700 mb-4 shadow-md">
                   <img 
                      src={profileImageSrc} 
                      alt="Profile" 
                      className="w-full h-full object-cover" 
                      onError={(e) => {e.currentTarget.src = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80'}} 
                   />
                </div>
                <h1 className="text-4xl font-bold uppercase tracking-wider text-slate-800 dark:text-white transition-colors">Mitesh Gupta</h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-xl text-sm font-medium transition-colors">
                  A PROFESSIONAL EQUITY AND DERIVATIVE MARKET INVESTOR WITH OVER THREE YEARS OF EXPERIENCE.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
                {/* Left Column (Approx 40%) */}
                <div className="md:col-span-5 space-y-8">
                   
                   {/* Contact */}
                   <div>
                      <h3 className="text-lg font-bold uppercase tracking-widest text-slate-800 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 pb-1 mb-4 transition-colors">Contact</h3>
                      <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 font-medium transition-colors">
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-900 dark:bg-slate-700 text-white rounded-full flex-shrink-0"><Phone size={14} /></div>
                            <span>+91 9306304224</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-900 dark:bg-slate-700 text-white rounded-full flex-shrink-0"><Mail size={14} /></div>
                            <span className="break-all">miteshgupta1712@gmail.com</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-900 dark:bg-slate-700 text-white rounded-full flex-shrink-0"><MapPin size={14} /></div>
                            <span>M.G road, Rohtak [Haryana]</span>
                         </div>
                      </div>
                   </div>

                   {/* Education */}
                   <div>
                      <h3 className="text-lg font-bold uppercase tracking-widest text-slate-800 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 pb-1 mb-4 transition-colors">Education</h3>
                      <div className="space-y-4 text-sm">
                         <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-md border-l-4 border-slate-800 dark:border-slate-600 transition-colors">
                            <p className="font-bold text-slate-800 dark:text-white">St. Andrews Institute of Technology, Gurugram</p>
                            <p className="text-slate-600 dark:text-slate-400">Master of Computer Applications (MCA)</p>
                            <span className="inline-block mt-1 px-2 py-0.5 bg-slate-800 dark:bg-slate-600 text-white text-[10px] font-bold uppercase rounded transition-colors">Pursuing</span>
                         </div>
                         <div>
                            <p className="font-bold text-slate-800 dark:text-white">AISSCE [Class XII]</p>
                            <p className="text-slate-600 dark:text-slate-400">Shri Baba Mastnath School</p>
                         </div>
                         <div>
                            <p className="font-bold text-slate-800 dark:text-white">MD University | 2022 - 2025</p>
                            <p className="text-slate-600 dark:text-slate-400">Bachelor's in Commerce Honours</p>
                         </div>
                         <div>
                            <p className="font-bold text-slate-800 dark:text-white">Diploma</p>
                            <p className="text-slate-600 dark:text-slate-400">Diploma in Investment Advisory</p>
                            <p className="text-slate-600 dark:text-slate-400">Diploma in Equity market</p>
                            <p className="text-slate-600 dark:text-slate-400">NISM Series 8</p>
                            <p className="text-slate-600 dark:text-slate-400">Certified Derivative Trader</p>
                         </div>
                      </div>
                   </div>

                   {/* Skills */}
                   <div>
                      <h3 className="text-lg font-bold uppercase tracking-widest text-slate-800 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 pb-1 mb-4 transition-colors">Skills</h3>
                      <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1 font-medium transition-colors">
                         <li>IC 38 Certified</li>
                         <li>Portfolio Management</li>
                         <li>Technical Analyst</li>
                         <li>Research Analyst</li>
                         <li>Event Management</li>
                         <li>Communication and Persuasion</li>
                         <li>Problem Solving</li>
                         <li>Adaptability and flexibility</li>
                         <li>Decisive and Active listening</li>
                         <li>Effective Keyboard proficiency</li>
                         <li>Market Knowledge</li>
                         <li>Negotiation Skills</li>
                      </ul>
                   </div>

                </div>

                {/* Right Column (Approx 60%) */}
                <div className="md:col-span-7 space-y-8">
                   
                   {/* Achievements */}
                   <div>
                      <h3 className="text-lg font-bold uppercase tracking-widest text-slate-800 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 pb-1 mb-4 transition-colors">Achievements</h3>
                      <ul className="list-disc list-outside ml-5 text-sm text-slate-700 dark:text-slate-300 space-y-2 font-medium transition-colors">
                         <li>
                           <span className="font-bold text-slate-900 dark:text-white">Trader's Matrix [Authored By Me]</span>
                           <br/><span className="text-slate-600 dark:text-slate-400 font-normal">Book Focusing on Chart Specialisation</span>
                         </li>
                         <li>Organised a Public Event in Home Town <br/><span className="text-slate-600 dark:text-slate-400 font-normal">[With 800+ persons]</span></li>
                         <li>Leadership and Team Management</li>
                         <li>Professional certification</li>
                         <li>Content Creation</li>
                         <li>Successfully Executed 30% ROI Previous year</li>
                         <li>Recognised member of Bharat Vikas Parishad</li>
                         <li>3 Times Student Union President</li>
                         <li>2 Times Elected as Lion's Club Head</li>
                         <li>Mentorship and Coaching</li>
                      </ul>
                   </div>

                   {/* Work Experiences */}
                   <div>
                      <h3 className="text-lg font-bold uppercase tracking-widest text-slate-800 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 pb-1 mb-4 transition-colors">Work Experiences</h3>
                      <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300 transition-colors">
                         <div>
                            <p className="font-bold text-slate-900 dark:text-white text-base">TATA AIA - Own franchise of tata aia life insurance</p>
                            <p className="text-slate-500 dark:text-slate-400 mb-2 font-bold">[2022-2024]</p>
                            <ul className="list-disc list-outside ml-5 space-y-1 font-medium">
                               <li>Managed Portfolio of 18 clients</li>
                               <li>Practical Exposure in live market [3.5 years]</li>
                            </ul>
                         </div>
                         <div>
                             <p className="font-bold text-slate-900 dark:text-white text-base mb-1">Worked as sales executive in General Health Insurance</p>
                         </div>
                         <div>
                             <p className="font-bold text-slate-900 dark:text-white text-base mb-1">Equity Market Educator for Bulls Trader [2 months]</p>
                         </div>
                         <div>
                             <p className="font-bold text-slate-900 dark:text-white text-base mb-1">Internship on Content Creation</p>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default ResumeModal;