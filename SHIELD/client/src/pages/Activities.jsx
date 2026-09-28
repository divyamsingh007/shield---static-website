import React from 'react';

const Activities = () => {
  return (
    <main className="bg-neutral-950 min-h-screen text-white pt-32 pb-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Top Hero Section */}
        <section className="flex flex-col gap-6 max-w-5xl">
          <p className="text-[#61dca3] font-mono text-sm tracking-wider uppercase mb-1">
            Practice & Engagement
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Society Activities & Events
          </h1>
          <div className="w-24 h-1 bg-[#61b3dc] rounded mt-2"></div>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium leading-snug max-w-4xl mt-4">
            From overnight Capture-The-Flag battles and defensive red-vs-blue scrims to weekend bootcamps, we provide students with hands-on technical rigor.
          </p>
        </section>

        {/* Upcoming Events Header */}
        <div className="flex flex-col gap-3 max-w-4xl border-t border-white/5 pt-16 -mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Upcoming Flagship Events
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Official schedule for orientations, practical hack-labs, and competitive cyber leagues.
          </p>
        </div>

        {/* Latest Event Banner */}
        <section className="relative pt-12">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#61dca3] rounded-full blur-[120px] opacity-[0.15] pointer-events-none"></div>
          
          <div className="relative z-10 bg-[#0a0a0a] border border-[#61dca3]/40 rounded-3xl p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl">
            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-3 py-1 bg-[#61dca3] text-black text-xs font-bold tracking-widest uppercase rounded">Upcoming Event</span>
                <span className="text-[#61b3dc] font-mono text-sm">Registrations Open</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Cybersecurity 101: Hands-On Defensive Workshop
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Join us for an intensive, beginner-friendly workshop covering the absolute fundamentals of network defense, web vulnerabilities, and secure coding practices. 
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-2 border-l-2 border-white/10 pl-4">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1.5">Date & Time</span>
                  <span className="text-gray-200 font-mono text-sm">Oct 24, 2026 • 10:00 AM</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1.5">Location</span>
                  <span className="text-gray-200 font-mono text-sm">Computer Center, NIT Hamirpur</span>
                </div>
              </div>
              
              <div className="pt-4">
                <button className="px-8 py-3.5 bg-[#61dca3] text-neutral-950 font-bold rounded hover:bg-[#4fbe8b] transition-colors shadow-lg">
                  Register Now
                </button>
              </div>
            </div>
            
            {/* Visual Graphic Area */}
            <div className="w-full md:w-[35%] aspect-square bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(97,220,163,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
               <div className="text-[#61dca3] font-mono text-8xl font-light opacity-30 group-hover:scale-110 transition-transform duration-700">{'</>'}</div>
            </div>
          </div>
        </section>

        {/* Activities List Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start relative border-t border-white/5 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32">
            <p className="text-[#61b3dc] font-mono text-sm tracking-wider uppercase mb-3">
              Engagement
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What We Organize
            </h2>
          </div>
          
          <div className="md:col-span-8 flex flex-col gap-6">
            
            {/* Activity 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/10 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-[#61dca3]">Capture The Flag (CTF)</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                We regularly host and participate in local and international CTF tournaments. Members team up to solve challenges across web exploitation, cryptography, reverse engineering, and digital forensics.
              </p>
            </div>
            
            {/* Activity 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/10 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-[#61dca3]">Red vs Blue Scrimmages</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Live-fire cyber exercises where the Red Team attempts to breach simulated corporate infrastructure while the Blue Team actively monitors SIEM alerts and defends the network in real-time.
              </p>
            </div>

            {/* Activity 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/10 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-[#61dca3]">Weekend Bootcamps</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Intensive 2-day hands-on workshops focused on mastering specific tools and techniques, such as Advanced Burp Suite fuzzing, malware reverse engineering, or AWS cloud security auditing.
              </p>
            </div>

            {/* Activity 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/10 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-[#61dca3]">Speaker Sessions</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Guest lectures and knowledge-sharing sessions featuring alumni and industry professionals from top cybersecurity firms, discussing real-world threat landscapes and career roadmaps.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
};

export default Activities;
