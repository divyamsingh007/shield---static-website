import React, { useEffect, useRef, useState } from "react";
import BorderGlow from "../components/BorderGlow";

const ScrollRevealCard = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`h-full transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <main className="site-page bg-neutral-950 min-h-screen text-white pt-32 pb-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Top Hero Section */}
        <section className="flex flex-col gap-6 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            SHIELD Cybersecurity Society
          </h1>
          <div className="w-24 h-1 bg-[#61dca3] rounded mt-2"></div>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium leading-snug max-w-4xl mt-4">
            The premier cybersecurity society of National Institute of
            Technology Hamirpur, dedicated to cultivating skilled, ethically
            driven defenders of the digital realm.
          </p>
        </section>

        {/* Who We Are Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start relative">
          <div className="md:col-span-4 md:sticky md:top-32">
            <p className="text-[#61b3dc] font-mono text-sm tracking-wider uppercase mb-3">
              Organization
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Who We Are
            </h2>
          </div>
          <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 lg:p-12 backdrop-blur-sm">
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              <strong className="text-white font-semibold">SHIELD</strong> is a
              cybersecurity society of NIT Hamirpur focused on cybersecurity
              education, ethical hacking, security research, practical projects,
              CTFs, workshops, and collaboration.
            </p>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mt-6">
              We bring together students from all disciplines who share a hunger
              to understand how computer systems work, how they can be
              exploited, and how to defend them against modern threats.
            </p>
          </div>
        </section>

        {/* Core Tenets Section */}
        <section className="pt-8 border-t border-white/5">
          <div className="mb-16">
            <p className="text-[#61dca3] font-mono text-sm tracking-wider uppercase mb-3">
              Learn · Build · Collaborate · Defend
            </p>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 max-w-2xl">
              The core tenets that guide every event, workshop, and research
              track.
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed border-l-2 border-[#61b3dc]/50 pl-4">
              These four pillars are the foundation of everything organized
              under SHIELD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <ScrollRevealCard delay={0}>
              <BorderGlow
                className="h-full"
                backgroundColor="#0a0a0a"
                glowColor="150 65 62"
                colors={["#61dca3", "#61b3dc", "#2b4539"]}
                borderRadius={8}
              >
                <div className="h-full flex flex-col items-start p-8 group">
                  <span className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">
                    Pillar 1
                  </span>
                  <h3 className="text-2xl sm:text-3xl text-white font-bold mb-1 tracking-tight">
                    LEARN
                  </h3>
                  <h4 className="text-[#61b3dc] font-medium mb-5">
                    Foundations & Concepts
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Master core networking, operating system security,
                    cryptographic protocols, and security auditing from scratch.
                  </p>
                </div>
              </BorderGlow>
            </ScrollRevealCard>

            <ScrollRevealCard delay={150}>
              <BorderGlow
                className="h-full"
                backgroundColor="#0a0a0a"
                glowColor="150 65 62"
                colors={["#61dca3", "#61b3dc", "#2b4539"]}
                borderRadius={8}
              >
                <div className="h-full flex flex-col items-start p-8 group">
                  <span className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">
                    Pillar 2
                  </span>
                  <h3 className="text-2xl sm:text-3xl text-white font-bold mb-1 tracking-tight">
                    BUILD
                  </h3>
                  <h4 className="text-[#61b3dc] font-medium mb-5">
                    Tools & Systems
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Develop security scanners, secure backend APIs, defensive
                    monitoring bots, and custom detection algorithms.
                  </p>
                </div>
              </BorderGlow>
            </ScrollRevealCard>

            <ScrollRevealCard delay={0}>
              <BorderGlow
                className="h-full"
                backgroundColor="#0a0a0a"
                glowColor="150 65 62"
                colors={["#61dca3", "#61b3dc", "#2b4539"]}
                borderRadius={8}
              >
                <div className="h-full flex flex-col items-start p-8 group">
                  <span className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">
                    Pillar 3
                  </span>
                  <h3 className="text-2xl sm:text-3xl text-white font-bold mb-1 tracking-tight">
                    COLLABORATE
                  </h3>
                  <h4 className="text-[#61b3dc] font-medium mb-5">
                    Community & Red/Blue Teams
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Solve Capture-the-Flag (CTF) challenges together,
                    peer-review architectures, and organize knowledge sessions.
                  </p>
                </div>
              </BorderGlow>
            </ScrollRevealCard>

            <ScrollRevealCard delay={150}>
              <BorderGlow
                className="h-full"
                backgroundColor="#0a0a0a"
                glowColor="150 65 62"
                colors={["#61dca3", "#61b3dc", "#2b4539"]}
                borderRadius={8}
              >
                <div className="h-full flex flex-col items-start p-8 group">
                  <span className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">
                    Pillar 4
                  </span>
                  <h3 className="text-2xl sm:text-3xl text-white font-bold mb-1 tracking-tight">
                    DEFEND
                  </h3>
                  <h4 className="text-[#61b3dc] font-medium mb-5">
                    Resilience & Protection
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Harden real-world digital infrastructure, detect zero-day
                    exploits, and enforce sound ethical principles.
                  </p>
                </div>
              </BorderGlow>
            </ScrollRevealCard>
          </div>
        </section>

        {/* Ethos & Principles Section */}
        <section className="pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start relative">
          <div className="md:col-span-4 md:sticky md:top-32">
            <p className="text-[#61b3dc] font-mono text-sm tracking-wider uppercase mb-3">
              Ethos & Principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Our Guiding Values
            </h2>
          </div>

          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/10 group">
              <h3 className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-[#61dca3]">
                Integrity First
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Security research must always serve the public good. We hold
                every member accountable to white-hat ethics and responsible
                disclosure.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/10 group">
              <h3 className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-[#61dca3]">
                Peer-to-Peer Mentorship
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Seniors and domain leads actively guide beginners through guided
                workshops, code reviews, and structured roadmaps.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/10 group">
              <h3 className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-[#61dca3]">
                Hands-on Pragmatism
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We place real terminal sessions, capture-the-flag problem
                solving, and tool building above passive lecture learning.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-colors hover:bg-white/10 group">
              <h3 className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-[#61dca3]">
                Continuous Innovation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                As adversary tactics evolve, our research spans from classical
                network protocols to modern LLM security and cloud defenses.
              </p>
            </div>
          </div>
        </section>

        {/* Code of Ethics Section */}
        <section className="pt-16 pb-12">
          <div className="bg-[#0a0a0a] border border-[#61dca3]/30 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Background glow for emphasis */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#61dca3] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#61b3dc] rounded-full blur-[100px] opacity-5 pointer-events-none"></div>

            <div className="relative z-10">
              <p className="text-[#61dca3] font-mono text-sm tracking-wider uppercase mb-3">
                Institutional Code of Ethics
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                The SHIELD Ethical Hacking Pledge
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
                Cybersecurity tools and knowledge are potent double-edged
                swords. At SHIELD, we mandate that every member abides by
                standard ethical disclosure frameworks and national
                cybersecurity regulations.
              </p>

              <ul className="space-y-5 max-w-3xl">
                <li className="flex items-start gap-4">
                  <span className="text-[#61dca3] mt-1 font-bold">→</span>
                  <span className="text-gray-400 text-lg">
                    Authorized testing only in controlled lab sandboxes
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#61dca3] mt-1 font-bold">→</span>
                  <span className="text-gray-400 text-lg">
                    Strict prohibition of unauthorized network probing
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#61dca3] mt-1 font-bold">→</span>
                  <span className="text-gray-400 text-lg">
                    Responsible disclosure to affected vendors/parties
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#61dca3] mt-1 font-bold">→</span>
                  <span className="text-gray-400 text-lg">
                    Fostering a culture of privacy protection and defense
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
