import React, { useState, useEffect, useRef } from "react";
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

const DOMAINS = [
  {
    id: "01",
    title: "Web Application Security",
    subtitle: "Core Track",
    desc: "Identifying, exploiting, and mitigating vulnerabilities across modern web architectures, APIs, and client-server systems.",
    focus: [
      "Cross-Site Scripting (XSS)",
      "SQL & NoSQL Injection",
      "Broken Auth & Session Hijacking",
      "Cross-Site Request Forgery (CSRF)",
      "Insecure Direct Object References",
      "REST & GraphQL API Security",
      "Burp Suite, OWASP ZAP, Postman",
    ],
  },
  {
    id: "02",
    title: "Network Security",
    subtitle: "Infrastructure",
    desc: "Analyzing packet flows, protocol anomalies, routing vulnerabilities, and configuring resilient perimeter defenses.",
    focus: [
      "TCP/IP & OSI Model Internals",
      "DNS Poisoning & Spoofing",
      "TLS/HTTPS Handshakes & Certs",
      "Port Scanning & Banner Grabbing",
      "Next-Gen Firewalls & IDS/IPS",
      "Packet Sniffing & Traffic Analysis",
      "Wireshark, Nmap, Suricata",
    ],
  },
  {
    id: "03",
    title: "Offensive Security & Pentesting",
    subtitle: "Red Team",
    desc: "Simulating adversary tradecraft to discover exploitable vectors before malicious threat actors can leverage them.",
    focus: [
      "Passive & Active Reconnaissance",
      "Automated & Manual Vuln Assessment",
      "Penetration Testing Methodologies",
      "Privilege Escalation (Linux/Win)",
      "Exploitation Frameworks & Shellcraft",
      "Red Team Engagement Simulation",
      "Metasploit, Nessus, Cobalt Strike",
    ],
  },
  {
    id: "04",
    title: "Defensive Security & Blue Teaming",
    subtitle: "Blue Team",
    desc: "Continuous threat detection, log telemetry correlation, incident response, and active system hardening.",
    focus: [
      "Threat Detection & TTP Analysis",
      "SIEM Concepts & Log Aggregation",
      "Incident Handling & Response",
      "Endpoint Detection & Response (EDR)",
      "OS Hardening & CIS Benchmarks",
      "Zero-Trust Architecture Principles",
      "Splunk, ELK / Wazuh, Velociraptor",
    ],
  },
  {
    id: "05",
    title: "Cloud Security & DevSecOps",
    subtitle: "Cloud Native",
    desc: "Securing cloud-native workloads, microservices, containerization, and identity permissions across AWS, Azure, and GCP.",
    focus: [
      "Cloud Shared Responsibility Model",
      "IAM Policies & Least Privilege",
      "Cloud Misconfiguration Auditing",
      "Docker & Kubernetes Hardening",
      "CI/CD Pipeline Security Integration",
      "Infrastructure as Code (IaC) Security",
      "ScoutSuite, Trivy, Prowler",
    ],
  },
  {
    id: "06",
    title: "Cryptography & Applied Protocols",
    subtitle: "Foundations",
    desc: "The mathematical foundation of confidential computing, cryptographic primitives, hashing, and digital verification.",
    focus: [
      "Symmetric (AES, ChaCha20) Encryption",
      "Asymmetric (RSA, ECC, Diffie-Hellman)",
      "Cryptographic Hashing (SHA-2, SHA-3)",
      "Digital Signatures & PKI Infrastructures",
      "Cryptanalysis & Common Flaws",
      "Post-Quantum Cryptography Basics",
      "CyberChef, OpenSSL, Cryptool",
    ],
  },
  {
    id: "07",
    title: "Digital Forensics & Incident Investigation",
    subtitle: "Forensics",
    desc: "Uncovering digital evidence, analyzing volatile memory dumps, and reconstructing cybersecurity breach timelines.",
    focus: [
      "Chain of Custody & Evidence Preservation",
      "Dead-Box & Live Memory Volatility",
      "Windows Registry & Artifact Analysis",
      "Filesystem Forensics (NTFS, ext4)",
      "Network Forensic Reconstruction",
      "Malware Triage & Reverse Engineering",
      "Autopsy, Volatility 3, FTK Imager",
    ],
  },
  {
    id: "08",
    title: "AI Security & Machine Learning Defense",
    subtitle: "Next Gen",
    desc: "Safeguarding Large Language Models and AI systems against adversarial prompts, model poisoning, and data leakage.",
    focus: [
      "Prompt Injection & Jailbreak Prevention",
      "Adversarial Perturbation Attacks",
      "Training Data Poisoning & Extraction",
      "Model Inversion & Member Inference",
      "Privacy-Preserving Machine Learning",
      "Securing Autonomous AI Agent Frameworks",
      "Garak (LLM Vuln Scanner), PyRIT, ART",
    ],
  },
];

const Domains = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDomains = DOMAINS.filter((domain) => {
    const term = searchTerm.toLowerCase();
    return (
      domain.title.toLowerCase().includes(term) ||
      domain.desc.toLowerCase().includes(term) ||
      domain.focus.some((f) => f.toLowerCase().includes(term))
    );
  });

  return (
    <main className="site-page bg-neutral-950 min-h-screen text-white pt-32 pb-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <section className="flex flex-col gap-6 max-w-4xl">
          <p className="text-[#61dca3] font-mono text-sm tracking-wider uppercase mb-1">
            Specialized Disciplines
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Our Domains
          </h1>
          <div className="w-24 h-1 bg-[#61b3dc] rounded mt-2"></div>
          <p className="text-xl sm:text-2xl text-gray-300 font-medium leading-snug max-w-3xl mt-4">
            From low-level network packet analysis and red-teaming to modern
            cloud infrastructure and AI defenses, our society is organized into
            8 deep-dive tracks.
          </p>
        </section>

        {/* Search Bar */}
        <section className="w-full max-w-xl relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search topics (e.g., XSS, SIEM, DNS, AI)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#61dca3]/50 focus:ring-1 focus:ring-[#61dca3]/50 transition-colors placeholder-gray-500 backdrop-blur-sm shadow-xl"
          />
        </section>

        {/* Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredDomains.length > 0 ? (
            filteredDomains.map((domain, index) => (
              <ScrollRevealCard key={domain.id} delay={(index % 2) * 150}>
                <BorderGlow
                  className="h-full"
                  backgroundColor="#0a0a0a"
                  glowColor="150 65 62"
                  colors={["#61dca3", "#61b3dc", "#2b4539"]}
                  borderRadius={12}
                >
                  <div className="h-full flex flex-col items-start p-8 sm:p-10 group relative overflow-hidden">
                    {/* Track Number Badge */}
                    <div className="absolute top-6 right-6 text-[#61dca3]/10 font-mono text-6xl font-bold pointer-events-none transition-colors duration-500 group-hover:text-[#61dca3]/20">
                      {domain.id}
                    </div>

                    <span className="text-xs font-mono text-[#61b3dc] mb-3 uppercase tracking-widest">
                      {domain.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl text-white font-bold mb-4 pr-12 relative z-10">
                      {domain.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base relative z-10">
                      {domain.desc}
                    </p>

                    <div className="mt-auto w-full relative z-10 border-t border-white/10 pt-6">
                      <h4 className="text-xs font-bold text-gray-200 uppercase tracking-widest mb-4">
                        Key Focus Areas
                      </h4>
                      <ul className="space-y-3">
                        {domain.focus.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-gray-400"
                          >
                            <span className="text-[#61dca3] mr-3 text-xs mt-0.5">
                              ▹
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Explore Scope Link */}
                    <span
                      aria-disabled="true"
                      className="mt-10 inline-flex cursor-not-allowed items-center text-sm font-medium text-[#61b3dc]/40"
                    >
                      Explore Scope <span className="ml-2">→</span>
                    </span>
                  </div>
                </BorderGlow>
              </ScrollRevealCard>
            ))
          ) : (
            <div className="col-span-full py-24 text-center border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
              <p className="text-gray-400 text-lg mb-6">
                No tracks found matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="px-6 py-2.5 bg-[#61dca3] text-black font-semibold rounded hover:bg-[#4fbe8b] transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Domains;
