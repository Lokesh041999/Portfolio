import { FaDownload, FaGraduationCap } from "react-icons/fa6";

import { education, personalInfo } from "@/lib/data";

export default function About() {
  return (
    <div className="w-full">
      <div className="mb-10">
        <h1 className="text-5xl font-black tracking-tight">About Me</h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-cyan-400" />
      </div>

      <div className="w-full">
        <p className="text-xl leading-9 text-slate-300">
          {personalInfo.summary}
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          I specialize in building production-ready dashboards, geospatial
          tools, reusable UI systems, authentication flows, real-time
          application features, and scalable frontend architecture.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          My work focuses on clean UI architecture, performance optimization,
          API integrations, real-time features, and map-based product
          experiences using React.js, Next.js, Node.js, and Mapbox GL JS.
        </p>
      </div>

      <div className="mt-6">
        <div className="mb-6">
          <h2 className="text-3xl font-black tracking-tight">Education</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-cyan-400" />
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
            >
              <div className="flex gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <FaGraduationCap size={26} />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-lg bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                      {item.shortDegree}
                    </span>

                    <span className="text-sm font-semibold text-slate-400">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-base font-semibold text-slate-300">
                    {item.institute}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-400">
                    <span>{item.location}</span>
                    <span>•</span>
                    <span>CGPA: {item.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
