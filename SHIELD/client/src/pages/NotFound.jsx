import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import BorderGlow from "../components/BorderGlow";
import {
  FaHouse,
  FaArrowLeft,
  FaShieldHalved,
  FaTerminal,
  FaLayerGroup,
  FaCalendarDays,
  FaUserGroup,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaClockRotateLeft,
  FaCompass,
} from "react-icons/fa6";

const quickLinks = [
  {
    title: "Domains",
    desc: "8 specialized cybersecurity disciplines (Web, AI, Cloud, Forensics)",
    path: "/domains",
    icon: FaLayerGroup,
    badge: "01",
  },
  {
    title: "Activities",
    desc: "Upcoming CTFs, live-fire scrimmages, and practical workshops",
    path: "/activities",
    icon: FaCalendarDays,
    badge: "02",
  },
  {
    title: "Past Events",
    desc: "Historical archive of successfully delivered flagship sessions",
    path: "/activities#past-events",
    icon: FaClockRotateLeft,
    badge: "03",
  },
  {
    title: "About SHIELD",
    desc: "Our mission, research initiatives, and ethical hacking guidelines",
    path: "/about",
    icon: FaUserGroup,
    badge: "04",
  },
  {
    title: "Intel & Comms",
    desc: "Get in touch with society leads and community coordinators",
    path: "/contact",
    icon: FaEnvelope,
    badge: "05",
  },
];

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const handleCopyDiagnostic = async () => {
    try {
      const diagnosticText = `[SYS_DIAGNOSTIC_REPORT]
Timestamp: ${new Date().toISOString()}
Target Route: ${location.pathname}
Status: 404 (NOT_FOUND)
Origin: NIT Hamirpur SHIELD Cyber Gateway
Incident ID: 0x${Math.abs(
        location.pathname.split("").reduce((acc, char) => acc + char.charCodeAt(0), 404)
      ).toString(16).toUpperCase()}`;

      await navigator.clipboard.writeText(diagnosticText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <main
      className="site-page bg-neutral-950 min-h-screen text-white pt-28 sm:pt-36 pb-20 px-6 sm:px-12 md:px-24 flex flex-col justify-center"
      aria-labelledby="error-title"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        {/* Status Radar Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
            STATUS: 404_TARGET_UNRESOLVED // INGRESS DROPPED
          </span>
        </div>

        {/* Central Card with Glowing Border */}
        <BorderGlow
          className="w-full mb-12"
          backgroundColor="#0a0a0a"
          glowColor="150 65 62"
          colors={["#61dca3", "#61b3dc", "#2b4539"]}
          borderRadius={20}
        >
          <div className="p-8 sm:p-12 md:p-14 flex flex-col items-center">
            {/* Visual 404 Display */}
            <div className="relative mb-6 select-none">
              <div
                className="text-8xl sm:text-9xl md:text-[11rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-white/15 font-mono drop-shadow-[0_10px_35px_rgba(97,220,163,0.15)]"
                aria-hidden="true"
              >
                404
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none"
                aria-hidden="true"
              >
                <FaShieldHalved className="w-28 h-28 sm:w-36 sm:h-36 text-[#61dca3]" />
              </div>
            </div>

            {/* Simulated Live Security Console */}
            <div className="w-full max-w-2xl bg-[#080808] border border-white/15 rounded-xl overflow-hidden mb-8 text-left shadow-2xl">
              {/* Terminal Titlebar */}
              <div className="bg-white/5 border-b border-white/10 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 font-mono text-xs text-gray-400 flex items-center gap-1.5">
                    <FaTerminal className="text-[#61dca3] text-[10px]" />
                    sec-gateway@shield: ~/route_audit.log
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyDiagnostic}
                  className="font-mono text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 px-2 py-1 rounded hover:bg-white/10 cursor-pointer"
                  title="Copy incident diagnostic info"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-400 w-3 h-3" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="w-3 h-3" />
                      <span>Copy Log</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-4 font-mono text-xs sm:text-sm space-y-1.5 text-gray-400 overflow-x-auto">
                <p>
                  <span className="text-[#61dca3] font-semibold">&gt; INGRESS_SCAN:</span>{" "}
                  Attempting resolution for coordinate:
                </p>
                <p className="text-white bg-white/5 px-2.5 py-1 rounded inline-block">
                  GET {location.pathname}
                </p>
                <p>
                  <span className="text-red-400 font-semibold">&gt; GATEWAY_ERROR:</span>{" "}
                  [404_NOT_FOUND] Route does not exist or access has been restricted.
                </p>
                <p className="text-gray-500 text-[11px] pt-1">
                  &gt; Recommended Protocol: Return to base or select an authorized sector below.
                </p>
              </div>
            </div>

            {/* Headings */}
            <h1
              id="error-title"
              className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            >
              Lost in Cyberspace Coordinates?
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8">
              The requested perimeter does not exist, was deprecated, or was
              entered incorrectly. Re-route your connection back to authorized
              SHIELD sectors.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/"
                className="w-full sm:w-auto px-6 py-3 bg-[#61dca3] text-neutral-950 font-semibold rounded-lg transition-all duration-200 hover:bg-[#4fbe8b] inline-flex items-center justify-center gap-2.5 shadow-lg shadow-[#61dca3]/15 cursor-pointer"
              >
                <FaHouse className="w-4 h-4" />
                Return to Home
              </Link>

              <button
                type="button"
                onClick={handleGoBack}
                className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-200 hover:bg-white/10 inline-flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <FaArrowLeft className="w-4 h-4" />
                Previous Sector (Go Back)
              </button>
            </div>
          </div>
        </BorderGlow>

        {/* Quick Recovery Navigation Grid */}
        <div className="w-full text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px bg-white/10 grow"></div>
            <span className="font-mono text-xs uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <FaCompass className="text-[#61b3dc]" /> Or access authorized
              society perimeters
            </span>
            <div className="h-px bg-white/10 grow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#61dca3]/50 hover:bg-white/[0.08] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-2 rounded-lg bg-white/5 text-[#61dca3] group-hover:bg-[#61dca3]/10 transition-colors">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="font-mono text-xs text-gray-500 group-hover:text-gray-400">
                        {item.badge}
                      </span>
                    </div>
                    <h2 className="text-white font-semibold text-base mb-1 group-hover:text-[#61dca3] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#61b3dc]">
                    <span>Access Route</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
