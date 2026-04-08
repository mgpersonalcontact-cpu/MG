import React, { useState, useRef } from 'react';
import { ArrowDown, Users, BookOpen, Upload, Camera, FileText, ChevronRight } from 'lucide-react';
import ResumeModal from './ResumeModal';

const Hero: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>('https://i.postimg.cc/XvsF8BJ3/Screenshot-2025-12-26-at-2-14-45-AM.png');
  const [imgError, setImgError] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageError = () => {
    setImgError(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
      setImgError(false);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
        
        {/* Background Grid Pattern - Adaptive */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] text-slate-900 dark:text-white transition-colors duration-300" 
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}></div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-10">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tight transition-colors">
                  Mitesh <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900 dark:from-slate-200 dark:via-slate-400 dark:to-slate-600">Gupta.</span>
                </h1>
              </div>

              <div className="h-px w-24 bg-gold-500"></div>

              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-xl font-light leading-relaxed transition-colors">
                Equity & Derivative Market Investor. 
                <span className="text-slate-900 dark:text-white font-normal block mt-1 transition-colors">Bridging the gap between complex market data and actionable strategy.</span>
              </p>

              <div className="flex flex-wrap gap-5 pt-4">
                 <a 
                   href="#contact" 
                   onClick={scrollToContact}
                   className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-sm uppercase tracking-widest overflow-hidden rounded-full transition-all hover:pr-12 shadow-lg"
                 >
                   <span className="relative z-10">Get in Touch</span>
                   <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
                     <ChevronRight size={18} />
                   </span>
                 </a>
                 <button 
                   onClick={() => setIsResumeOpen(true)}
                   className="px-8 py-4 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-3"
                 >
                   <FileText size={18} />
                   Resume
                 </button>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-200 dark:border-slate-800/50 transition-colors">
                <div className="space-y-1">
                  <div className="text-3xl font-serif font-bold text-slate-900 dark:text-white transition-colors">22%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">ROI (2025)</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-serif font-bold text-slate-900 dark:text-white transition-colors">800<span className="text-gold-500">+</span></div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Attendees</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-serif font-bold text-slate-900 dark:text-white transition-colors">3<span className="text-gold-500">Y</span></div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Experience</div>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-slate-800 animate-[spin_10s_linear_infinite] transition-colors"></div>
                <div className="absolute -inset-4 rounded-full border border-slate-200/50 dark:border-slate-800/30 animate-[spin_15s_linear_infinite_reverse] transition-colors"></div>
                
                {/* Main Image Circle */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-100 dark:bg-slate-800 group relative z-10 transition-colors">
                  {imgError ? (
                    <div 
                      onClick={triggerUpload}
                      className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors p-4 text-center"
                    >
                      <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-full mb-4 border border-slate-300 dark:border-slate-600 group-hover:border-gold-500 transition-colors">
                         <Upload className="text-slate-400 group-hover:text-gold-500" size={32} />
                      </div>
                      <p className="text-slate-500 dark:text-slate-300 font-bold uppercase tracking-wide group-hover:text-slate-900 dark:group-hover:text-white">Upload Photo</p>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={imageSrc} 
                        onError={handleImageError}
                        alt="Mitesh Gupta" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                    </>
                  )}

                  <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      className="hidden" 
                      accept="image/*"
                  />
                </div>

                {!imgError && (
                   <button 
                     onClick={triggerUpload}
                     className="absolute top-8 right-8 bg-black/50 hover:bg-gold-600 p-3 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-30"
                   >
                     <Camera size={20} />
                   </button>
                )}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Scroll</span>
            <ArrowDown size={16} className="animate-bounce text-slate-900 dark:text-white" />
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        profileImageSrc={imageSrc}
      />
    </>
  );
};

export default Hero;
