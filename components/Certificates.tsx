import { FaAward } from "react-icons/fa6";

const certificates = [
  {
    title: "Frontend Developer React.js",
    platform: "HackerRank",
    year: "2026",
  },
  {
    title: "Advanced SQL",
    platform: "LinkedIn Learning",
    year: "2023",
  },
  {
    title: "Hackathon: Solving Real Life Challenges using Java",
    platform: "VIT Vellore",
    year: "2022",
  },
];

export default function Certificates() {
  return (
    <div className="w-full">
      <div className="mb-12">
        <h1 className="text-5xl font-black tracking-tight">Certificates</h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-cyan-400" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            key={certificate.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
              <FaAward size={28} />
            </span>

            <h2 className="mt-6 text-2xl font-bold">{certificate.title}</h2>
            <p className="mt-3 text-lg text-slate-300">
              {certificate.platform}
            </p>

            <span className="mt-5 inline-flex rounded-lg bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
              {certificate.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
