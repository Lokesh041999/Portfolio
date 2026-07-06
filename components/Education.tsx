import { FaGraduationCap } from "react-icons/fa6";

import { education } from "@/lib/data";

export default function Education() {
  return (
    <div className="w-full">
      <div className="mb-12">
        <h1 className="text-5xl font-black tracking-tight">Education</h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-cyan-400" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.degree}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
          >
            <div className="flex items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <FaGraduationCap size={30} />
              </span>

              <div>
                <span className="inline-flex rounded-lg bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                  {item.shortDegree}
                </span>

                <h2 className="mt-5 text-2xl font-black text-white">
                  {item.degree}
                </h2>

                <p className="mt-3 text-lg font-semibold text-slate-300">
                  {item.institute}
                </p>

                <p className="mt-2 text-base text-slate-400">{item.location}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-slate-400">Year</p>
                <h3 className="mt-2 text-xl font-black text-white">
                  {item.year}
                </h3>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-slate-400">CGPA</p>
                <h3 className="mt-2 text-xl font-black text-white">
                  {item.cgpa}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
