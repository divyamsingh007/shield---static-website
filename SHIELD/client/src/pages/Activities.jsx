import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const createPlayerDetails = () => ({
  fullName: "",
  rollNumber: "",
  collegeEmail: "",
  contactNumber: "",
});

const branchOptions = [
  "B.Tech CSE",
  "B.Tech ECE",
  "B.Tech Other",
  "Dual Degree / M.Tech",
];

const yearOptions = [
  "1st Year",
  "2nd Year",
  "Pre-Final Year (3rd Year)",
  "Final Year (4th Year)",
];

const domainOptions = [
  "Web Security",
  "Network Security",
  "Offensive Security",
  "Defensive Security",
  "Cryptography",
  "Cloud Security",
  "Digital Forensics",
  "AI Security",
];

const experienceOptions = [
  "Complete Beginner (Curious & enthusiastic)",
  "Novice (Basic Linux/Python/Networking)",
  "Intermediate (Played picoCTF/OverTheWire)",
  "Experienced (Active CTF player / Bug hunter)",
];

const Activities = () => {
  const { hash } = useLocation();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [playerCount, setPlayerCount] = useState(1);
  const [players, setPlayers] = useState([createPlayerDetails()]);

  useEffect(() => {
    if (!hash) return;

    const targetId = hash.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  useEffect(() => {
    if (!isRegisterOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsRegisterOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isRegisterOpen]);

  useEffect(() => {
    setPlayers((currentPlayers) => {
      if (currentPlayers.length === playerCount) {
        return currentPlayers;
      }

      if (currentPlayers.length > playerCount) {
        return currentPlayers.slice(0, playerCount);
      }

      return [
        ...currentPlayers,
        ...Array.from({ length: playerCount - currentPlayers.length }, () =>
          createPlayerDetails(),
        ),
      ];
    });
  }, [playerCount]);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    setIsRegisterOpen(false);
  };

  const handlePlayerChange = (index, field, value) => {
    setPlayers((currentPlayers) =>
      currentPlayers.map((player, playerIndex) =>
        playerIndex === index ? { ...player, [field]: value } : player,
      ),
    );
  };

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
            From overnight Capture-The-Flag battles and defensive red-vs-blue
            scrims to weekend bootcamps, we provide students with hands-on
            technical rigor.
          </p>
        </section>

        {/* Upcoming Events Header */}
        <div className="flex flex-col gap-3 max-w-4xl border-t border-white/5 pt-16 -mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Upcoming Flagship Events
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Official schedule for orientations, practical hack-labs, and
            competitive cyber leagues.
          </p>
        </div>

        {/* Latest Event Banner */}
        <section className="relative pt-12 scroll-mt-32" id="latest-events">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#61dca3] rounded-full blur-[120px] opacity-[0.15] pointer-events-none"></div>

          <div className="relative z-10 bg-[#0a0a0a] border border-[#61dca3]/40 rounded-3xl p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl">
            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-3 py-1 bg-[#61dca3] text-black text-xs font-bold tracking-widest uppercase rounded">
                  Upcoming Event
                </span>
                <span className="text-[#61b3dc] font-mono text-sm">
                  Registrations Open
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Cybersecurity 101: Hands-On Defensive Workshop
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Join us for an intensive, beginner-friendly workshop covering
                the absolute fundamentals of network defense, web
                vulnerabilities, and secure coding practices.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-2 border-l-2 border-white/10 pl-4">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1.5">
                    Date & Time
                  </span>
                  <span className="text-gray-200 font-mono text-sm">
                    Oct 24, 2026 • 10:00 AM
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1.5">
                    Location
                  </span>
                  <span className="text-gray-200 font-mono text-sm">
                    Computer Center, NIT Hamirpur
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsRegisterOpen(true)}
                  className="px-8 py-3.5 bg-[#61dca3] text-neutral-950 font-bold rounded hover:bg-[#4fbe8b] transition-colors shadow-lg"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Visual Graphic Area */}
            <div className="w-full md:w-[35%] aspect-square bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(97,220,163,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]"></div>
              <div className="text-[#61dca3] font-mono text-8xl font-light opacity-30 group-hover:scale-110 transition-transform duration-700">
                {"</>"}
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

      {isRegisterOpen && (
        <div className="fixed inset-0 z-10000 flex items-center justify-center px-4 py-8">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsRegisterOpen(false)}
            aria-hidden="true"
          />

          <div
            className="relative z-10 w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 shadow-2xl scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="register-modal-title"
          >
            <div className="flex items-start justify-between gap-4 mb-8 border-b border-white/10 pb-6">
              <div>
                <p className="text-[#61dca3] font-mono text-xs tracking-wider uppercase mb-2">
                  Official Application Form
                </p>
                <h2
                  id="register-modal-title"
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
                >
                  Apply / Join SHIELD
                </h2>
                <p className="mt-2 text-sm text-gray-400">Cycle 2026 Open</p>
              </div>

              <button
                type="button"
                onClick={() => setIsRegisterOpen(false)}
                className="text-gray-400 hover:text-white transition-colors text-2xl leading-none"
                aria-label="Close registration form"
              >
                ×
              </button>
            </div>

            <form className="space-y-8" onSubmit={handleRegisterSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="register-name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="register-name"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="register-roll"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Roll Number *
                  </label>
                  <input
                    id="register-roll"
                    name="rollNumber"
                    type="text"
                    required
                    placeholder="Roll number"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="register-email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    College Email *
                  </label>
                  <input
                    id="register-email"
                    name="collegeEmail"
                    type="email"
                    required
                    placeholder="you@college.edu"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="register-branch"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Branch *
                  </label>
                  <select
                    id="register-branch"
                    name="branch"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                  >
                    <option value="" disabled>
                      Select branch
                    </option>
                    {branchOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#0a0a0a]"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="register-year"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Year *
                  </label>
                  <select
                    id="register-year"
                    name="year"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                  >
                    <option value="" disabled>
                      Select year
                    </option>
                    {yearOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#0a0a0a]"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="register-domain"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Primary Domain of Interest *
                  </label>
                  <select
                    id="register-domain"
                    name="domain"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                  >
                    <option value="" disabled>
                      Choose a domain
                    </option>
                    {domainOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#0a0a0a]"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="register-experience"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Prior Experience *
                  </label>
                  <select
                    id="register-experience"
                    name="experience"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                  >
                    <option value="" disabled>
                      Choose your experience level
                    </option>
                    {experienceOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#0a0a0a]"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="register-players"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Total Number of Players *
                  </label>
                  <input
                    id="register-players"
                    name="playersCount"
                    type="number"
                    min="1"
                    max="10"
                    value={playerCount}
                    onChange={(event) =>
                      setPlayerCount(
                        Math.max(1, Number(event.target.value) || 1),
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    This includes the team leader.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/3 p-5 sm:p-6">
                <div className="flex flex-col gap-2 mb-5">
                  <h3 className="text-xl font-semibold text-white">
                    Player Details
                  </h3>
                  <p className="text-sm text-gray-400">
                    Add details for each player in the team. The first player
                    can be treated as the primary applicant.
                  </p>
                </div>

                <div className="space-y-6">
                  {players.map((player, index) => (
                    <section
                      key={`player-${index}`}
                      className="rounded-2xl border border-white/10 bg-[#050505] p-4 sm:p-5"
                    >
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <h4 className="text-lg font-semibold text-white">
                          {index === 0 ? "Team Leader" : `Player ${index + 1}`}
                        </h4>
                        <span className="text-xs uppercase tracking-widest text-gray-500">
                          {index === 0 ? "Primary applicant" : "Required"}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor={`player-${index}-name`}
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            id={`player-${index}-name`}
                            type="text"
                            required
                            value={player.fullName}
                            onChange={(event) =>
                              handlePlayerChange(
                                index,
                                "fullName",
                                event.target.value,
                              )
                            }
                            placeholder="Player full name"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`player-${index}-roll`}
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Roll Number *
                          </label>
                          <input
                            id={`player-${index}-roll`}
                            type="text"
                            required
                            value={player.rollNumber}
                            onChange={(event) =>
                              handlePlayerChange(
                                index,
                                "rollNumber",
                                event.target.value,
                              )
                            }
                            placeholder="Roll number"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`player-${index}-email`}
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            College Email *
                          </label>
                          <input
                            id={`player-${index}-email`}
                            type="email"
                            required
                            value={player.collegeEmail}
                            onChange={(event) =>
                              handlePlayerChange(
                                index,
                                "collegeEmail",
                                event.target.value,
                              )
                            }
                            placeholder="player@college.edu"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`player-${index}-contact`}
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Contact Number
                          </label>
                          <input
                            id={`player-${index}-contact`}
                            type="tel"
                            value={player.contactNumber}
                            onChange={(event) =>
                              handlePlayerChange(
                                index,
                                "contactNumber",
                                event.target.value,
                              )
                            }
                            placeholder="Optional"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#61dca3]/70 focus:bg-white/10"
                          />
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-xl bg-[#61dca3] text-neutral-950 font-bold transition-colors hover:bg-[#4fbe8b]"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setIsRegisterOpen(false)}
                  className="px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold transition-colors hover:bg-white/10"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Activities;
