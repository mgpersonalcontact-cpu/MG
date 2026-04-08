import React, { useRef } from 'react';
import { X, Phone, Mail, MapPin, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileImageSrc: string;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profileImageSrc }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const resumeContent = resumeRef.current;
    if (!resumeContent) return;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Mitesh Gupta - Resume</title>
  <meta charset="UTF-8">
  <style>
    @page {
      size: A4;
      margin: 15mm 12mm 15mm 12mm;
    }
    @page :first {
      margin-top: 10mm;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      background: #fff;
      color: #1e293b;
      line-height: 1.5;
      width: 100%;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .a4-page {
      width: 186mm;
      min-height: 267mm;
      padding: 0;
      margin: 0 auto;
      background: #fff;
    }
    .header {
      text-align: center;
      border-bottom: 3px solid #1e293b;
      padding-bottom: 15px;
      margin-bottom: 18px;
    }
    .header img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #1e293b;
      margin-bottom: 10px;
    }
    .header h1 {
      font-size: 26px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: #1e293b;
      margin-bottom: 6px;
    }
    .header p {
      font-size: 11px;
      color: #475569;
      max-width: 90%;
      margin: 0 auto 8px auto;
      line-height: 1.4;
    }
    .contact-bar {
      display: flex;
      justify-content: center;
      gap: 20px;
      font-size: 10px;
      color: #475569;
      flex-wrap: wrap;
    }
    .two-col {
      display: grid;
      grid-template-columns: 47% 47%;
      gap: 6%;
    }
    .left-col, .right-col {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .section {
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .section-title {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #1e293b;
      border-bottom: 2px solid #1e293b;
      padding-bottom: 5px;
      margin-bottom: 10px;
    }
    .edu-item, .exp-item {
      margin-bottom: 12px;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .edu-item:last-child, .exp-item:last-child {
      margin-bottom: 0;
    }
    .edu-title, .exp-title {
      font-weight: 700;
      font-size: 11px;
      color: #1e293b;
      margin-bottom: 2px;
    }
    .edu-sub, .exp-company {
      font-size: 10px;
      color: #64748b;
      margin-bottom: 3px;
      font-style: italic;
    }
    .edu-year, .exp-period {
      display: inline-block;
      font-size: 9px;
      background: #1e293b;
      color: #fff;
      padding: 2px 8px;
      border-radius: 3px;
      font-weight: 600;
    }
    .exp-desc {
      font-size: 10px;
      color: #475569;
      margin-top: 4px;
      padding-left: 12px;
      list-style: disc;
    }
    .exp-desc li {
      margin-bottom: 2px;
      line-height: 1.4;
    }
    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .skill-tag {
      font-size: 9px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 3px 8px;
      border-radius: 4px;
      white-space: nowrap;
    }
    .skill-cat {
      font-size: 10px;
      font-weight: 700;
      color: #334155;
      margin: 8px 0 5px 0;
    }
    .skill-cat:first-child { margin-top: 0; }
    .achievements-list {
      font-size: 10px;
      padding-left: 14px;
      margin: 0;
    }
    .achievements-list li {
      margin-bottom: 5px;
      line-height: 1.4;
    }
    .highlight {
      font-weight: 700;
      color: #1e293b;
    }
    .cert-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 4px;
    }
    .cert-badge {
      font-size: 8px;
      background: #1e293b;
      color: #fff;
      padding: 2px 6px;
      border-radius: 3px;
      font-weight: 600;
    }
    ul { margin: 0; padding-left: 14px; }
    li { margin-bottom: 2px; }
    .contact-section {
      margin-bottom: 16px;
    }
    .contact-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 10px;
      color: #475569;
      margin-bottom: 6px;
    }
    .contact-icon {
      width: 22px;
      height: 22px;
      background: #1e293b;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 10px;
      flex-shrink: 0;
    }
    @media print {
      body { background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .a4-page { width: 100%; min-height: auto; padding: 0; margin: 0; }
    }
  </style>
</head>
<body>
  <div class="a4-page">
    <div class="header">
      <img src="${profileImageSrc}" alt="Mitesh Gupta" onerror="this.src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80'">
      <h1>Mitesh Gupta</h1>
      <p>Equity & Derivative Market Investor. Bridging the gap between complex market data and actionable strategy.</p>
      <div class="contact-bar">
        <span>+91 9306304224</span>
        <span>•</span>
        <span>miteshgupta1712@gmail.com</span>
        <span>•</span>
        <span>M.G road, Rohtak [Haryana]</span>
      </div>
    </div>
    
    <div class="two-col">
      <div class="left-col">
        <div class="section">
          <h3 class="section-title">Education</h3>
          <div class="edu-item">
            <div class="edu-title">Master of Business Administration (MBA)</div>
            <div class="edu-sub">St. Andrews Institute of Technology, Gurugram</div>
            <span class="edu-year">Current</span>
          </div>
          <div class="edu-item">
            <div class="edu-title">Bachelor's in Commerce Honours</div>
            <div class="edu-sub">MD University</div>
            <span class="edu-year">2022 - 2025</span>
          </div>
          <div class="edu-item">
            <div class="edu-title">AISSCE (Class XII)</div>
            <div class="edu-sub">Shri Baba Mastnath School</div>
          </div>
          <div class="edu-item">
            <div class="edu-title">Diploma in Investment Advisory</div>
            <div class="edu-sub">NISM Series 8</div>
            <div class="cert-badges">
              <span class="cert-badge">Diploma in Equity Market</span>
              <span class="cert-badge">Certified Derivative Trader</span>
            </div>
          </div>
        </div>
        
        <div class="section">
          <h3 class="section-title">Skills</h3>
          <div class="skill-cat">Analysis & Trading</div>
          <div class="skills-grid">
            <span class="skill-tag">Technical Analyst</span>
            <span class="skill-tag">Research Analyst</span>
            <span class="skill-tag">Certified Derivative Trader</span>
            <span class="skill-tag">Market Knowledge</span>
            <span class="skill-tag">Portfolio Management</span>
            <span class="skill-tag">Commodity Trading</span>
          </div>
          <div class="skill-cat">Tools & Soft Skills</div>
          <div class="skills-grid">
            <span class="skill-tag">IC 38 Certified</span>
            <span class="skill-tag">Advanced Excel</span>
            <span class="skill-tag">Problem Solving</span>
            <span class="skill-tag">Communication</span>
            <span class="skill-tag">Active Listening</span>
            <span class="skill-tag">Negotiation</span>
            <span class="skill-tag">Keyboard Proficiency</span>
          </div>
          <div class="skill-cat">Leadership & Management</div>
          <div class="skills-grid">
            <span class="skill-tag">Event Management</span>
            <span class="skill-tag">Team Management</span>
            <span class="skill-tag">Leadership</span>
            <span class="skill-tag">Mentorship</span>
            <span class="skill-tag">Adaptability</span>
            <span class="skill-tag">Decision Making</span>
          </div>
        </div>
      </div>
      
      <div class="right-col">
        <div class="section">
          <h3 class="section-title">Achievements</h3>
          <ul class="achievements-list">
            <li><span class="highlight">22% Annual ROI (2025)</span> - Outperformed major indices</li>
            <li><span class="highlight">Published Author:</span> "Trader's Matrix" book</li>
            <li><span class="highlight">3x Student Union President</span> & <span class="highlight">2x Lion's Club Head</span></li>
            <li>Organized public event with <span class="highlight">800+ attendees</span></li>
            <li>Recognized member of <span class="highlight">Bharat Vikas Parishad</span></li>
            <li>Mentored <span class="highlight">15+ students</span> in 2025</li>
            <li>IC 38 Certified Professional Financial Advisor</li>
          </ul>
        </div>

        <div class="section">
          <h3 class="section-title">Professional Experience</h3>
          
          <div class="exp-item">
            <div class="exp-title">Insurance Agent</div>
            <div class="exp-company">TATA AIA Life Insurance</div>
            <span class="exp-period">2022 - 2024</span>
            <ul class="exp-desc">
              <li>Managed portfolio of clients with personalized financial planning</li>
              <li>Gained substantial practical exposure in the live market</li>
            </ul>
          </div>
          
          <div class="exp-item">
            <div class="exp-title">Financial Literacy Speaker</div>
            <div class="exp-company">Rotract Club (NPO)</div>
            <span class="exp-period">Volunteer</span>
            <ul class="exp-desc">
              <li>Conducted financial literacy seminar in government school</li>
              <li>Educated students on saving, investing, and economic concepts</li>
            </ul>
          </div>
          
          <div class="exp-item">
            <div class="exp-title">Equity Market Educator</div>
            <div class="exp-company">Bulls Trader</div>
            <span class="exp-period">2 Months</span>
            <ul class="exp-desc">
              <li>Trained aspiring traders on chart patterns and market psychology</li>
              <li>Developed educational content for trading strategies</li>
            </ul>
          </div>
        </div>
        
        <div class="section">
          <h3 class="section-title">Key Highlights</h3>
          <ul class="achievements-list">
            <li>Equity & Derivative Market Investor with 3+ years experience</li>
            <li>22% ROI achieved in 2025 through strategic market analysis</li>
            <li>Specialized in commodities markets using macro-economic data</li>
            <li>Dedicated to financial literacy and empowering traders</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
       <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
       
       <div className="relative w-full max-w-4xl bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 rounded-lg shadow-2xl overflow-hidden max-h-[90vh] animate-in fade-in zoom-in duration-300 transition-colors border border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">Resume Preview</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-sm font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
              >
                <Download size={16} />
                Download PDF
              </button>
              <button 
                onClick={onClose}
                className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-900 dark:text-white"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="overflow-y-auto flex-1">
          
          <div ref={resumeRef} className="p-8 md:p-12 font-sans">
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
                  Equity & Derivative Market Investor. Bridging the gap between complex market data and actionable strategy.
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
                            <p className="font-bold text-slate-800 dark:text-white">Master of Business Administration (MBA)</p>
                            <p className="text-slate-600 dark:text-slate-400">St. Andrews Institute of Technology, Gurugram</p>
                            <span className="inline-block mt-1 px-2 py-0.5 bg-slate-800 dark:bg-slate-600 text-white text-[10px] font-bold uppercase rounded transition-colors">Current</span>
                         </div>
                         <div>
                            <p className="font-bold text-slate-800 dark:text-white">Bachelor's in Commerce Honours</p>
                            <p className="text-slate-600 dark:text-slate-400">MD University | 2022 - 2025</p>
                         </div>
                         <div>
                            <p className="font-bold text-slate-800 dark:text-white">AISSCE (Class XII)</p>
                            <p className="text-slate-600 dark:text-slate-400">Shri Baba Mastnath School</p>
                         </div>
                         <div>
                            <p className="font-bold text-slate-800 dark:text-white">Diploma in Investment Advisory</p>
                            <p className="text-slate-600 dark:text-slate-400">NISM Series 8</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                               <span className="px-2 py-0.5 bg-gold-500/20 text-gold-600 dark:text-gold-500 text-[10px] rounded border border-gold-500/30">Diploma in Equity Market</span>
                               <span className="px-2 py-0.5 bg-gold-500/20 text-gold-600 dark:text-gold-500 text-[10px] rounded border border-gold-500/30">Certified Derivative Trader</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Skills */}
                   <div>
                      <h3 className="text-lg font-bold uppercase tracking-widest text-slate-800 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 pb-1 mb-4 transition-colors">Skills</h3>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Analysis & Trading</p>
                      <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1 font-medium transition-colors mb-4">
                         <li>Technical Analyst</li>
                         <li>Research Analyst</li>
                         <li>Certified Derivative Trader</li>
                         <li>Market Knowledge</li>
                         <li>Portfolio Management</li>
                         <li>Commodity Trading</li>
                      </ul>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tools & Soft Skills</p>
                      <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1 font-medium transition-colors mb-4">
                         <li>IC 38 Certified</li>
                         <li>Advanced Excel</li>
                         <li>Problem Solving</li>
                         <li>Communication & Persuasion</li>
                         <li>Active Listening</li>
                         <li>Negotiation Skills</li>
                         <li>Effective Keyboard Proficiency</li>
                      </ul>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Leadership & Management</p>
                      <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1 font-medium transition-colors">
                         <li>Event Management</li>
                         <li>Team Management</li>
                         <li>Leadership</li>
                         <li>Mentorship & Coaching</li>
                         <li>Adaptability</li>
                         <li>Decisive Decision Making</li>
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
                           <span className="font-bold text-slate-900 dark:text-white">22% Annual ROI (2025)</span>
                           <br/><span className="text-slate-600 dark:text-slate-400 font-normal">Outperformed major indices through strategic derivatives trading</span>
                         </li>
                         <li>
                           <span className="font-bold text-slate-900 dark:text-white">Published Author: "Trader's Matrix"</span>
                           <br/><span className="text-slate-600 dark:text-slate-400 font-normal">Book on chart patterns and technical analysis</span>
                         </li>
                         <li><span className="font-bold text-slate-900 dark:text-white">3x Student Union President</span> & <span className="font-bold text-slate-900 dark:text-white">2x Lion's Club Head</span></li>
                         <li>Organized public event with <span className="font-bold text-slate-900 dark:text-white">800+ attendees</span></li>
                         <li>Recognized member of <span className="font-bold text-slate-900 dark:text-white">Bharat Vikas Parishad</span></li>
                         <li>Mentored <span className="font-bold text-slate-900 dark:text-white">15+ students</span> in 2025</li>
                         <li>IC 38 Certified Professional Financial Advisor</li>
                      </ul>
                   </div>

                   {/* Work Experiences */}
                   <div>
                      <h3 className="text-lg font-bold uppercase tracking-widest text-slate-800 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 pb-1 mb-4 transition-colors">Work Experiences</h3>
                      <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300 transition-colors">
                         <div>
                            <p className="font-bold text-slate-900 dark:text-white text-base">Insurance Agent</p>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">TATA AIA Life Insurance</p>
                            <p className="text-slate-500 dark:text-slate-400 mb-2 font-bold">2022 - 2024</p>
                            <ul className="list-disc list-outside ml-5 space-y-1 font-medium">
                               <li>Managed portfolio of clients with personalized financial planning</li>
                               <li>Gained substantial practical exposure in the live market</li>
                            </ul>
                         </div>
                         <div>
                            <p className="font-bold text-slate-900 dark:text-white text-base">Financial Literacy Speaker</p>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">Rotract Club (NPO)</p>
                            <p className="text-slate-500 dark:text-slate-400 mb-2 font-bold">Volunteer</p>
                            <ul className="list-disc list-outside ml-5 space-y-1 font-medium">
                               <li>Conducted a financial literacy seminar in a government school</li>
                               <li>Educated students on basic saving, investing, and economic concepts</li>
                            </ul>
                         </div>
                         <div>
                            <p className="font-bold text-slate-900 dark:text-white text-base">Equity Market Educator</p>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">Bulls Trader</p>
                            <p className="text-slate-500 dark:text-slate-400 mb-2 font-bold">2 Months</p>
                            <ul className="list-disc list-outside ml-5 space-y-1 font-medium">
                               <li>Trained aspiring traders on chart patterns and market psychology</li>
                               <li>Developed educational content for trading strategies</li>
                            </ul>
                         </div>
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
