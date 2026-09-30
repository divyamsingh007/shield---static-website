import React, { useState, useRef, useEffect } from "react";
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

// ─── Team Data ───────────────────────────────────────────────
const teamData = {
  faculty: [
    {
      name: "Dr.Mohit Kumar",
      role: "Faculty Incharge",
      id: "FAC-001",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Dr. Ashwani Kumar Sharma",
      role: "Technical Advisor",
      id: "FAC-003",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
  ],
  assistantFaculty: [
    {
      name: "Dr. Grace Hopper",
      role: "Asst. Faculty Incharge",
      id: "FAC-002",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
  ],

  super_finalYear: [
    {
      name: "Avisheet Srivastava",
      role: "Founder",
      id: "22BDCS005",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Abhimanyu Singh",
      role: "Founder",
      id: "22DCS001",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Kunal Dhiman",
      role: "Founder",
      id: "22DCS012",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Sankalp Gupta",
      role: "Founder",
      id: "22DCS023",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },

    {
      name: "Shibhu",
      role: "Founder",
      id: "22DCS026",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
  ],
  finalYear: [
    {
      name: "Nimish Saxena",
      role: "Coordinator",
      id: "23BEC068",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
  ],

  thirdYear: [
    {
      name: "Ankit Kumar",
      role: "Domain Lead",
      id: "24BCS018",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Divyam Singh Duhoon",
      role: "Domain Lead",
      id: "24BCS041",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Rajat Aggarwal",
      role: "Domain Lead",
      id: "24BCS090",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Ravi Kumar Verma",
      role: "Domain Lead",
      id: "24BCS096",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Aditya Chhimpa",
      role: "Domain Lead",
      id: "24BEC007",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Abhayraj Mishra",
      role: "Domain Lead",
      id: "24BME002",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Aditya",
      role: "Domain Lead",
      id: "24BME005",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
  ],

  secondYear: [
    {
      name: "Abanshika Sharma",
      role: "Executive",
      id: "25BCS003",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Ansh Barnwal",
      role: "Executive",
      id: "25BCS026",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Karan Yadav",
      role: "Executive",
      id: "25BCS059",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Komal",
      role: "Executive",
      id: "25BCS063",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Mayank",
      role: "Executive",
      id: "25BCS073",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Rohit Bambar",
      role: "Executive",
      id: "25BCS091",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },

    {
      name: "Tanuj Kumar",
      role: "Executive",
      id: "25BEC106",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Mayank",
      role: "Executive",
      id: "25BEE066",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Nikhil Acharya",
      role: "Executive",
      id: "25BME025",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Soha Khan",
      role: "Executive",
      id: "25BME046",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Suyash Singh",
      role: "Executive",
      id: "25BME048",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Dev Garg",
      role: "Executive",
      id: "25BMS014",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Pranab Mandal",
      role: "Executive",
      id: "25BMS033",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Nishant Singh",
      role: "Executive",
      id: "25DEC011",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Yashraj Saini",
      role: "Executive",
      id: "25DEC027",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
  ],
};

const visibleTeamGroups = [
  teamData.faculty,
  teamData.super_finalYear,
  teamData.finalYear,
  teamData.thirdYear,
  teamData.secondYear,
];

const totalMembers = visibleTeamGroups.reduce(
  (total, group) => total + group.length,
  0,
);

const teamStats = [
  { value: totalMembers, label: "Members" },
  { value: teamData.faculty.length, label: "Faculty Mentor" },
  { value: totalMembers - teamData.faculty.length, label: "Student Members" },
  { value: visibleTeamGroups.length - 1, label: "Student Cohorts" },
];

// ─── Team Member Card ────────────────────────────────────────
const TeamCard = ({ member, index }) => (
  <ScrollRevealCard delay={(index % 3) * 150}>
    <BorderGlow
      className="h-full"
      backgroundColor="#0a0a0a"
      glowColor="150 65 62"
      colors={["#61dca3", "#61b3dc", "#2b4539"]}
      borderRadius={12}
    >
      <div className="h-full flex flex-col items-center p-8 group relative overflow-hidden">
        {/* Avatar */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 rounded-full p-0.5 bg-linear-to-br from-[#61dca3]/40 via-transparent to-[#61b3dc]/40 group-hover:from-[#61dca3]/80 group-hover:to-[#61b3dc]/80 transition-all duration-500">
          <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Info */}
        <h3 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-[#61dca3] transition-colors duration-300">
          {member.name}
        </h3>
        <span className="text-[#61b3dc] font-mono text-xs uppercase tracking-widest mb-4">
          {member.role}
        </span>

        {/* Social icons */}
        {/* <div className="flex gap-4 mb-5">
          <a href="#" className="text-gray-500 hover:text-[#61dca3] transition-colors"><FaGithub size={16} /></a>
          <a href="#" className="text-gray-500 hover:text-[#61b3dc] transition-colors"><FaLinkedinIn size={16} /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><FaXTwitter size={16} /></a>
        </div> */}

        {/* Divider + ID */}
        <div className="w-full border-t border-white/10 pt-4 mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#61dca3] animate-pulse"></span>
            <span className="font-mono text-xs text-gray-500 tracking-wider">
              {member.id}
            </span>
          </div>
          <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
            SHIELD
          </span>
        </div>
      </div>
    </BorderGlow>
  </ScrollRevealCard>
);

// ─── Section Component ───────────────────────────────────────
const TeamSection = ({ label, title, members }) => (
  <section className="pt-8 border-t border-white/5">
    <div className="mb-12">
      <p className="text-[#61dca3] font-mono text-sm tracking-wider uppercase mb-3">
        {label}
      </p>
      <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">
        {title}
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {members.map((member, idx) => (
        <TeamCard key={member.id} member={member} index={idx} />
      ))}
    </div>
  </section>
);

// ─── Main Team Page ──────────────────────────────────────────
const Team = () => {
  return (
    <main className="site-page bg-neutral-950 min-h-screen text-white pt-32 pb-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Hero Section */}
        <section className="flex flex-col gap-6 max-w-5xl">
          <p className="text-[#61dca3] font-mono text-sm tracking-wider uppercase mb-1">
            The People Behind the Shield
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Our Team
          </h1>
          <div className="w-24 h-1 bg-[#61dca3] rounded mt-2"></div>
          <p className="text-xl sm:text-2xl text-gray-300 font-medium leading-snug max-w-4xl mt-4">
            Meet the brilliant minds defending the digital frontier — dedicated
            faculty mentors and passionate students united by one mission: to
            secure tomorrow.
          </p>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed border-l-2 border-[#61b3dc]/50 pl-4">
            From guiding research tracks to leading CTF campaigns, every member
            plays a vital role in the SHIELD initiative.
          </p>
        </section>

        {/* Roster Snapshot */}
        <section className="grid grid-cols-2 sm:grid-cols-4 border-y border-white/10 bg-white/3">
          {teamStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-6 sm:px-8 sm:py-7 ${
                index % 2 === 1 ? "border-l border-white/10" : ""
              } ${index > 0 ? "sm:border-l sm:border-white/10" : ""}`}
            >
              <p className="text-2xl sm:text-3xl font-bold text-[#61dca3]">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* Faculty Incharge */}
        <TeamSection
          label="Mentorship"
          title="Faculty Incharge"
          members={teamData.faculty}
        />

        {/* Assistant Faculty Incharge */}
        {/* <TeamSection
          label="Mentorship"
          title="Assistant Faculty Incharge"
          members={teamData.assistantFaculty}
        /> */}

        {/* Super-Final Year */}
        <TeamSection
          label="Batch of 2027"
          title="Super Final Year"
          members={teamData.super_finalYear}
        />
        {/* Final Year */}
        <TeamSection
          label="Batch of 2027"
          title="Final Year"
          members={teamData.finalYear}
        />

        {/* Third Year */}
        <TeamSection
          label="Batch of 2028"
          title="Third Year"
          members={teamData.thirdYear}
        />

        {/* Second Year */}
        <TeamSection
          label="Batch of 2029"
          title="Second Year"
          members={teamData.secondYear}
        />

        {/* Join CTA */}
        <section className="pt-16 pb-12">
          <div className="bg-[#0a0a0a] border border-[#61dca3]/30 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#61dca3] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#61b3dc] rounded-full blur-[100px] opacity-5 pointer-events-none"></div>

            <div className="relative z-10">
              <p className="text-[#61dca3] font-mono text-sm tracking-wider uppercase mb-3">
                Recruitments Closed
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                Ready to join the ranks?
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
                Recruitment applications are currently closed. Follow SHIELD for
                announcements about the next intake.
              </p>
              <span
                aria-disabled="true"
                className="inline-block cursor-not-allowed rounded bg-white/10 px-6 py-3 font-semibold text-gray-500"
              >
                Apply Now
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Team;
