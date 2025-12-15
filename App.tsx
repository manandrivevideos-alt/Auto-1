import React from 'react';
import { Section } from './components/ui/Section';
import { Card } from './components/ui/Card';
import { InstagramEmbed } from './components/InstagramEmbed';
import { StickyCTA } from './components/StickyCTA';
import { 
  CheckCircle, 
  Brain, 
  Video, 
  Calendar, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  AlertCircle,
  Stethoscope,
  Users,
  Mic,
  ArrowRight,
  PlayCircle,
  Download
} from 'lucide-react';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100">
      <StickyCTA />
      
      {/* 1. COVER */}
      <header className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center text-center bg-slate-900 text-white overflow-hidden print:h-auto print:min-h-0 print:py-24">
        
        {/* PDF Download Button (Hidden in Print) */}
        <div className="absolute top-6 right-6 z-50 print:hidden">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm font-medium transition-all"
            title="Save as PDF"
          >
            <Download size={16} />
            <span>Download PDF</span>
          </button>
        </div>

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="z-10 px-6 max-w-4xl">
          <div className="inline-block mb-6 px-3 py-1 border border-blue-500/50 rounded-full bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wide uppercase">
            Proposal for Clinics & Doctors
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6">
            AUTOFLUENCE
          </h1>
          <p className="text-xl md:text-3xl text-slate-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Doctor Content, <span className="text-blue-400 font-semibold">Automated</span>.
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-400">
            Build trust, familiarity, and patient recall — <span className="text-white font-semibold">without recording content.</span>
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full bg-slate-950 py-4 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-xs md:text-sm text-slate-400 font-mono uppercase tracking-wider">
            <span>AI-Powered</span>
            <span>Doctor-Safe</span>
            <span>Managed End-to-End</span>
          </div>
        </div>
      </header>

      {/* 2. THE PROBLEM */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900">The Reality of Medical Social Media</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Doctors don't avoid content because they don't care. <br/>
              <span className="font-bold text-slate-900">They avoid it because the effort feels disproportionate.</span>
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 break-inside-avoid">
                <div className="p-2 bg-red-100 text-red-600 rounded-lg shrink-0"><Clock size={24} /></div>
                <div>
                  <h3 className="font-bold text-slate-900">Mentally Draining</h3>
                  <p className="text-sm text-slate-500">Repeated recording disrupts clinical focus.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 break-inside-avoid">
                <div className="p-2 bg-amber-100 text-amber-600 rounded-lg shrink-0"><AlertCircle size={24} /></div>
                <div>
                  <h3 className="font-bold text-slate-900">Credibility Risk</h3>
                  <p className="text-sm text-slate-500">Unsure what trends are professional vs. cringe.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 break-inside-avoid">
                <div className="p-2 bg-slate-100 text-slate-600 rounded-lg shrink-0"><TrendingUp size={24} /></div>
                <div>
                  <h3 className="font-bold text-slate-900">Inconsistency</h3>
                  <p className="text-sm text-slate-500">Sporadic posting kills algorithmic growth and patient trust.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 break-inside-avoid">
             <div className="space-y-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 opacity-50 blur-[1px]">
                   <div className="h-4 w-1/3 bg-slate-200 rounded mb-2"></div>
                   <div className="h-32 bg-slate-100 rounded mb-2"></div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 relative transform md:-translate-x-8">
                   <h3 className="font-bold text-xl mb-2">The Faceless Content Trap</h3>
                   <p className="text-slate-600 text-sm">Stock photos and generic graphics fail to build trust. Patients choose <span className="font-bold text-blue-600">people</span>, not logos.</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 opacity-50 blur-[1px]">
                   <div className="h-4 w-1/3 bg-slate-200 rounded mb-2"></div>
                   <div className="h-32 bg-slate-100 rounded mb-2"></div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 3. CORE INSIGHT */}
      <Section dark className="text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-8 tracking-wide uppercase text-sm">
            <Brain size={16} /> Core Insight
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight flex flex-col gap-3 md:gap-4">
            <span className="block">
              Doctors don’t need to <span className="text-blue-500 decoration-4 underline decoration-blue-500/30 whitespace-nowrap">record often.</span>
            </span>
            <span className="block">
              Doctors need to be <span className="text-emerald-400 decoration-4 underline decoration-emerald-500/30 whitespace-nowrap">seen often.</span>
            </span>
          </h2>

          <div className="bg-slate-800 p-8 md:p-10 rounded-2xl border border-slate-700 shadow-2xl max-w-2xl mx-auto transform transition-transform hover:scale-[1.01] duration-500 break-inside-avoid">
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              We separate <span className="font-bold text-white whitespace-nowrap">Recording Frequency</span> from <span className="font-bold text-white whitespace-nowrap">Posting Frequency</span>.
            </p>
            <p className="mt-6 text-slate-400 text-xs md:text-sm font-semibold tracking-widest uppercase opacity-70">
              This is the foundation of the Autofluence system.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. THE BIG IDEA */}
      <Section className="bg-blue-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
            Create Content<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Without Recording Content</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            One-time recording. Continuous content. Zero daily effort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
           <Card className="text-center py-10 break-inside-avoid">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">No Weekly Shoots</h3>
              <p className="text-slate-500">Reclaim your weekends and clinic hours.</p>
           </Card>
           <Card className="text-center py-10 break-inside-avoid" highlight>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-300">
                <Brain size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">No Idea Fatigue</h3>
              <p className="text-slate-500">We analyze patient data to find topics.</p>
           </Card>
           <Card className="text-center py-10 break-inside-avoid">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">No Social Management</h3>
              <p className="text-slate-500">We handle the platform, you handle the patients.</p>
           </Card>
        </div>
      </Section>

      {/* 5. HOW IT WORKS */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">The Process</h2>
            <p className="text-lg text-slate-600 mb-8">From a single session to a year of content.</p>
            <div className="bg-slate-100 rounded-xl p-6 border border-slate-200">
               <div className="flex items-center gap-3 text-slate-500 font-mono text-sm mb-2">
                 <span className="w-2 h-2 rounded-full bg-green-500"></span> System Status
               </div>
               <div className="text-2xl font-bold text-slate-900">Autofluence Engine</div>
            </div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-slate-200">
            {/* Step 1 */}
            <div className="relative pl-24 break-inside-avoid">
              <div className="absolute left-4 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold z-10">1</div>
              <h3 className="text-xl font-bold mb-2">One-Time Guided Recording</h3>
              <p className="text-slate-600">Doctor records a small set of natural videos once, with our specific guidance to capture mannerisms and tone.</p>
            </div>
             {/* Step 2 */}
            <div className="relative pl-24 break-inside-avoid">
              <div className="absolute left-4 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold z-10">2</div>
              <h3 className="text-xl font-bold mb-2">Digital Content Library</h3>
              <p className="text-slate-600">Your face, voice, expressions, and credibility become reusable digital assets within our secure system.</p>
            </div>
             {/* Step 3 */}
            <div className="relative pl-24 break-inside-avoid">
              <div className="absolute left-4 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold z-10 shadow-lg shadow-blue-200">3</div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">AI + Human Strategy</h3>
              <p className="text-slate-600">AI generates high-fidelity video content using your assets. Humans verify every frame for ethical framing, safety, and professional tone.</p>
            </div>
             {/* Step 4 */}
            <div className="relative pl-24 break-inside-avoid">
              <div className="absolute left-4 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold z-10">4</div>
              <h3 className="text-xl font-bold mb-2">Patient-Question-Led Content</h3>
              <p className="text-slate-600">We produce content based on FAQs, common doubts, and pre-consultation fears to drive conversions.</p>
            </div>
             {/* Step 5 */}
            <div className="relative pl-24 break-inside-avoid">
              <div className="absolute left-4 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold z-10">5</div>
              <h3 className="text-xl font-bold mb-2">End-to-End Management</h3>
              <p className="text-slate-600">Editing, captions, hashtags, scheduling, and consistency. All handled.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. EMBEDDED PROOF - CRITICAL SECTION */}
      <Section className="bg-slate-900 text-white overflow-hidden">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-4 tracking-wide uppercase text-sm border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-500/10">
            <PlayCircle size={16} /> Real Output
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Autofluence-Style<br/>Content Looks Like
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            High-trust, face-led content that positions you as the authority.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-start">
          <InstagramEmbed 
            url="https://www.instagram.com/p/DSOvCoMD7dK/" 
            caption="Example: Educational, calm, face-led content created using the Autofluence framework."
          />
          <InstagramEmbed 
            url="https://www.instagram.com/p/DRE8G_SiYxc/" 
            caption="Example: Trust-building, consistent visual identity without constant recording."
          />
        </div>
      </Section>

      {/* 7. WHAT WE HANDLE */}
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold mb-12 text-center">Comprehensive Scope of Work</h2>
           <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Content ideation & patient research",
                "Captions & strategic hashtags",
                "Ethical medical scripting",
                "Posting & scheduling optimization",
                "AI video creation & rendering",
                "Monthly content calendar",
                "Reel editing & vertical formatting",
                "Ongoing creative strategy"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm break-inside-avoid">
                  <div className="text-green-500 shrink-0"><CheckCircle size={20} /></div>
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
           </div>
           <p className="text-center mt-10 text-slate-500 text-sm">
             *Doctor-provided updates or specific announcements can always be included in the mix.
           </p>
        </div>
      </Section>

      {/* 8. SAFETY & CONTROL */}
      <Section>
        <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden break-inside-avoid">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
             <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                <ShieldCheck size={32} />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Uncompromising Control & Safety</h2>
             <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
               <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-400/30">
                 <h3 className="font-bold text-lg mb-2">Pre-Approval</h3>
                 <p className="text-blue-100 text-sm">Monthly content plans are shared in advance. Nothing goes live without your green light.</p>
               </div>
               <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-400/30">
                 <h3 className="font-bold text-lg mb-2">Ethical Guardrails</h3>
                 <p className="text-blue-100 text-sm">We understand AHPRA/FDA guidelines (depending on region) and prioritize reputation over clickbait.</p>
               </div>
               <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-400/30">
                 <h3 className="font-bold text-lg mb-2">Feedback Loop</h3>
                 <p className="text-blue-100 text-sm">Feedback is welcomed anytime to refine the AI's tone and accuracy.</p>
               </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 9. WHY TRUST & 10. WHO IS THIS FOR */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16">
           {/* Trust */}
           <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Why Trust Us</h3>
              <h2 className="text-3xl font-bold mb-6">Not a Generic Agency. <br/>A Doctor-First System.</h2>
              <div className="space-y-6">
                 <div className="flex gap-4 break-inside-avoid">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                      <Stethoscope className="text-slate-700" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Specialized Focus</h4>
                      <p className="text-slate-600">Built specifically for the nuances of medical communication.</p>
                    </div>
                 </div>
                 <div className="flex gap-4 break-inside-avoid">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                      <TrendingUp className="text-slate-700" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">4+ Years Experience</h4>
                      <p className="text-slate-600">Deep roots in advertising strategy and trust-driven content.</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Targets */}
           <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">The Fit</h3>
              <div className="space-y-4">
                <div className="p-5 bg-green-50 border border-green-100 rounded-xl break-inside-avoid">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2"><CheckCircle size={16}/> Ideal For</h4>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 pl-1">
                    <li>Busy doctors & surgeons</li>
                    <li>Clinics wanting long-term brand equity</li>
                    <li>Professionals who prefer delegation</li>
                  </ul>
                </div>
                <div className="p-5 bg-red-50 border border-red-100 rounded-xl break-inside-avoid">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2"><AlertCircle size={16}/> Not For</h4>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 pl-1">
                    <li>DIY creators who love editing</li>
                    <li>Trend-chasers wanting viral dances</li>
                    <li>Doctors wanting daily manual control</li>
                  </ul>
                </div>
              </div>
           </div>
        </div>
      </Section>

      {/* 11. ONBOARDING */}
      <Section className="bg-slate-50">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Onboarding Timeline</h2>
         </div>
         <div className="flex flex-col md:flex-row justify-between items-center relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 -translate-y-1/2"></div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm w-64 text-center my-4 md:my-0 break-inside-avoid">
               <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
               <h4 className="font-bold">Intro Call</h4>
               <p className="text-sm text-slate-500 mt-2">Align on goals & tone.</p>
            </div>
            
            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0 my-2 md:my-0" />

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm w-64 text-center my-4 md:my-0 break-inside-avoid">
               <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
               <h4 className="font-bold">One-Time Record</h4>
               <p className="text-sm text-slate-500 mt-2">Capture your digital twin.</p>
            </div>

            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0 my-2 md:my-0" />

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm w-64 text-center my-4 md:my-0 break-inside-avoid">
               <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
               <h4 className="font-bold">Content Runs</h4>
               <p className="text-sm text-slate-500 mt-2">Approvals & growth.</p>
            </div>
         </div>
      </Section>

      {/* 12. FINAL CLOSE */}
      <footer className="bg-slate-950 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Focus on medicine.<br/>
            Let your digital presence work in the background.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12 no-print">
            <button className="bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg shadow-blue-900/50 transition-all hover:-translate-y-1">
              Book a Short Call
            </button>
            <span className="text-slate-500 text-sm">No pressure. Pure exploration.</span>
          </div>
          <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Autofluence. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;