import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/xjknllgd", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-slate-100 dark:bg-slate-950 py-24 border-t border-slate-200 dark:border-slate-900 relative z-10 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 dark:bg-gold-600/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-900/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/2 pointer-events-none transition-colors"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info Column */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-gold-600 dark:text-gold-500 text-xs font-bold tracking-wider mb-6">
                Get In Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight transition-colors">
                Let's start a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">conversation</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-md leading-relaxed text-lg transition-colors">
                Open to consulting, mentorship, and investment advisory opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6 mb-12">
                <a href="mailto:miteshgupta1712@gmail.com" className="flex items-center gap-5 p-4 rounded-xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/50 hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border border-slate-200">
                    <Mail size={20} className="text-slate-500 dark:text-slate-400 group-hover:text-gold-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5 transition-colors">Email Me</p>
                    <span className="text-lg text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">miteshgupta1712@gmail.com</span>
                  </div>
                </a>
                
                <a href="tel:+919306304224" className="flex items-center gap-5 p-4 rounded-xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/50 hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border border-slate-200">
                    <Phone size={20} className="text-slate-500 dark:text-slate-400 group-hover:text-gold-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5 transition-colors">Call Me</p>
                    <span className="text-lg text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">+91 9306304224</span>
                  </div>
                </a>
                
                <div className="flex items-center gap-5 p-4 rounded-xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/50 group shadow-sm dark:shadow-none transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border border-slate-200">
                    <MapPin size={20} className="text-slate-500 dark:text-slate-400 group-hover:text-gold-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5 transition-colors">Location</p>
                    <span className="text-lg text-slate-800 dark:text-slate-200 transition-colors">M.G road, Rohtak [Haryana]</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-8 border-t border-slate-200 dark:border-slate-900 transition-colors">
                <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-colors">
                        <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.instagram.com/mg170_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-colors">
                        <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                </div>
                
                <div className="px-5 py-3 bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-center transition-colors shadow-sm dark:shadow-none">
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm transition-colors">IC 38 Certified</h3>
                    <p className="text-slate-500 text-xs transition-colors">Professional Financial Advisor</p>
                    <p className="text-slate-500 text-xs mt-1 transition-colors">Education: Master of Business Administration (MBA)</p>
                </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="relative">
            {/* Glow effect behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-50"></div>
            
            <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl transition-colors">
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2 transition-colors">Send a Message</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 transition-colors">I usually respond within 24 hours.</p>
              
              {status === 'success' ? (
                  <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800/50">
                      <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 ring-4 ring-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                          <CheckCircle className="text-green-500" size={40} />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Message Sent!</h4>
                      <p className="text-slate-600 dark:text-slate-400 max-w-xs mb-8 transition-colors">Thank you for reaching out. I'll be in touch with you shortly.</p>
                      <button 
                          onClick={() => setStatus('idle')}
                          className="px-8 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-full text-sm font-bold transition-all"
                      >
                          Send another
                      </button>
                  </div>
              ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="group">
                          <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-gold-500 transition-colors">Your Name</label>
                          <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formState.name}
                              onChange={handleChange}
                              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400"
                              placeholder="John Doe"
                          />
                      </div>
                      
                      <div className="group">
                          <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-gold-500 transition-colors">Email Address</label>
                          <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formState.email}
                              onChange={handleChange}
                              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400"
                              placeholder="john@example.com"
                          />
                      </div>
                      
                      <div className="group">
                          <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-gold-500 transition-colors">Message</label>
                          <textarea
                              id="message"
                              name="message"
                              required
                              rows={4}
                              value={formState.message}
                              onChange={handleChange}
                              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-4 text-slate-900 dark:text-white placeholder-slate-400"
                              placeholder="How can I help you today?"
                          ></textarea>
                      </div>

                      {status === 'error' && (
                          <div className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-900/50">
                              <AlertCircle size={18} />
                              <span>Something went wrong. Please check your connection.</span>
                          </div>
                      )}

                      <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="w-full bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 text-white dark:text-slate-950 font-bold py-4 rounded-lg hover:from-slate-800 hover:to-slate-600 transition-colors flex items-center justify-center gap-3"
                      >
                          {status === 'submitting' ? (
                              <>
                                  <Loader2 size={20} className="animate-spin" />
                                  Sending...
                              </>
                          ) : (
                              <>
                                  <Send size={20} />
                                  Send Message
                              </>
                          )}
                      </button>
                  </form>
              )}
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
          <p className="text-slate-500 dark:text-slate-600 text-sm text-center md:text-left transition-colors">&copy; {new Date().getFullYear()} Mitesh Gupta. All rights reserved.</p>
          
          <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-[10px] text-slate-600 dark:text-slate-700 uppercase tracking-widest font-bold transition-colors">
                  Developed by <a href="https://parasdev.xyz" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-gold-500 transition-colors">PARAS AGARWAL</a>
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
