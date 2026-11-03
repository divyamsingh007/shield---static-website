import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaWhatsapp,
  FaLocationDot,
  FaCalendarDays,
  FaCircleCheck,
} from "react-icons/fa6";

const WHATSAPP_GROUP_URL =
  import.meta.env.VITE_WHATSAPP_GROUP_URL ||
  "https://chat.whatsapp.com/DBcPCGE8zpw14qrL4nIvlZ";

const Activities = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const targetId = hash.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <main className="site-page bg-neutral-950 min-h-screen text-white pt-32 pb-24 px-6 sm:px-12 md:px-24">
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
            From overnight Capture-The-Flag battles and defensive red-vs-blue
            scrims to weekend bootcamps, we provide students with hands-on
            technical rigor.
          </p>
        </section>

        {/* Upcoming Events Header */}
        <div className="flex flex-col gap-3 max-w-4xl border-t border-white/5 pt-16 -mb-12">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#61dca3] animate-pulse"></span>
            <p className="text-[#61b3dc] font-mono text-xs uppercase tracking-widest font-semibold">
              Operations Calendar
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Upcoming Flagship Events
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Official schedule for orientations, practical hack-labs, and
            competitive cyber leagues.
          </p>
        </div>

        {/* Latest Event Banner - Next Cycle in Preparation */}
        <section className="relative pt-12 scroll-mt-32" id="latest-events">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#61dca3] rounded-full blur-[120px] opacity-[0.10] pointer-events-none"></div>

          <div className="relative z-10 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl">
            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-3 py-1 bg-white/10 text-[#61dca3] border border-[#61dca3]/30 text-xs font-mono font-bold tracking-widest uppercase rounded">
                  Cycle 2026
                </span>
                <span className="text-gray-400 font-mono text-sm">
                  Announcements in Progress
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Next Operations & CTF Challenges Underway
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Our core technical leads are curating the next wave of live-fire
                cybersecurity exercises, Capture The Flag (CTF) tournaments, and
                specialized offensive & defensive workshops. Join our community
                to receive first-look announcements and registration drops.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-[#61dca3] px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-[#4fbe8b] cursor-pointer"
                >
                  <FaWhatsapp aria-hidden="true" size={18} />
                  Join Community Group
                </a>
                <a
                  href="#past-events"
                  className="inline-flex items-center gap-2 rounded bg-white/5 border border-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer"
                >
                  Explore Past Events ↓
                </a>
              </div>
            </div>

            <div className="w-full md:w-[35%] aspect-square bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(97,220,163,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]"></div>
              <div className="text-[#61dca3] font-mono text-7xl font-light opacity-30 group-hover:scale-110 transition-transform duration-700">
                {"{...}"}
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section
          className="relative pt-16 scroll-mt-32 border-t border-white/5"
          id="past-events"
        >
          <div className="flex flex-col gap-3 max-w-4xl mb-12">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#61b3dc]"></span>
              <p className="text-[#61b3dc] font-mono text-xs uppercase tracking-widest font-semibold">
                Archive & Completed Operations
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Past Events
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A historical archive of workshops, bootcamps, and cybersecurity
              initiatives successfully conducted by SHIELD.
            </p>
          </div>

          <div className="space-y-8">
            {/* Cybersecurity 101 - Concluded Workshop */}
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-stretch gap-8 md:gap-12 shadow-2xl hover:border-white/20 transition-all duration-300">
              <div className="flex-1 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold tracking-widest uppercase rounded flex items-center gap-1.5">
                      <FaCircleCheck className="w-3.5 h-3.5" />
                      Concluded
                    </span>
                    <span className="px-3 py-1 bg-white/5 text-gray-400 border border-white/10 text-xs font-mono tracking-wider rounded">
                      Introductory Workshop
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                    Cybersecurity 101: Hands-On Cybersecurity Introductory Workshop
                  </h3>

                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                    Cybersecurity 101 is a beginner-friendly, hands-on workshop
                    introducing the fundamentals of cybersecurity through practical
                    learning, covering cyber threats, network security, ethical
                    hacking, vulnerabilities, authentication, and basic security
                    practices. Participants learned how attacks occur, how
                    vulnerabilities are identified, and how modern systems can be
                    protected.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-l-2 border-white/10 pl-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1 flex items-center gap-1.5">
                        <FaCalendarDays className="w-3.5 h-3.5 text-gray-400" /> Date
                      </span>
                      <span className="text-gray-200 font-mono text-sm">
                        October 02, 2024
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1 flex items-center gap-1.5">
                        <FaLocationDot className="w-3.5 h-3.5 text-gray-400" /> Location
                      </span>
                      <span className="text-gray-200 font-mono text-sm">
                        New Lecture Hall, NIT Hamirpur
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-400">
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">
                      #ThreatModeling
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">
                      #NetworkSecurity
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">
                      #EthicalHacking
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">
                      #HandsOnPractice
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#61dca3] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#61dca3]"></span>
                    Successfully Delivered
                  </span>
                </div>
              </div>

              <div className="w-full md:w-[32%] bg-[#111] border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden text-center shrink-0">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(97,220,163,0.03)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]"></div>
                <div className="relative z-10 flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#61dca3] text-2xl font-mono font-bold">
                    101
                  </div>
                  <span className="text-white font-semibold text-sm">
                    Flagship Workshop
                  </span>
                  <p className="text-gray-500 text-xs max-w-xs">
                    Conducted by the core technical team at SHIELD Cyber Society.
                  </p>
                </div>
              </div>
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
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-[#61dca3]">
                  Capture The Flag (CTF)
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                We regularly host and participate in local and international CTF
                tournaments. Members team up to solve challenges across web
                exploitation, cryptography, reverse engineering, and digital
                forensics.
              </p>
            </div>

            {/* Activity 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/10 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-[#61dca3]">
                  Red vs Blue Scrimmages
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Live-fire cyber exercises where the Red Team attempts to breach
                simulated corporate infrastructure while the Blue Team actively
                monitors SIEM alerts and defends the network in real-time.
              </p>
            </div>

            {/* Activity 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/10 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-[#61dca3]">
                  Weekend Bootcamps
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Intensive 2-day hands-on workshops focused on mastering specific
                tools and techniques, such as Advanced Burp Suite fuzzing,
                malware reverse engineering, or AWS cloud security auditing.
              </p>
            </div>

            {/* Activity 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/10 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-[#61dca3]">
                  Speaker Sessions
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Guest lectures and knowledge-sharing sessions featuring alumni
                and industry professionals from top cybersecurity firms,
                discussing real-world threat landscapes and career roadmaps.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Activities;
