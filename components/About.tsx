import { FaGraduationCap } from "react-icons/fa6";

import { education } from "@/lib/data";

export default function About() {
  return (
    <div className="w-full">
      <div className="mb-10">
        <h1 className="text-5xl font-black tracking-tight">About Me</h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-cyan-400" />
      </div>

      <div className="w-full">
        <p className="text-xl leading-9 text-slate-300">
          I am a software engineer interested in both frontend and backend
          development, with a strong focus on building complete, scalable, and
          production-ready web applications.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          On the frontend, I enjoy creating clean user interfaces, reusable
          components, responsive layouts, dashboards, geospatial map tools, and
          smooth user experiences using React.js, Next.js, TypeScript, and
          modern UI tooling.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          On the backend, I work with Node.js, Express.js, API integrations,
          authentication flows, automation, real-time features, database-driven
          workflows, and server-side logic that supports reliable product
          functionality.
        </p>
      </div>

      <div className="mt-14">
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
