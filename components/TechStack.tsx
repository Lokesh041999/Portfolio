import { FaAward } from "react-icons/fa6";

import { certificates, techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <div className="w-full">
      <div className="mb-10">
        <h1 className="text-5xl font-black tracking-tight">Skills</h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-cyan-400" />
      </div>

      <div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.label}
                className="flex min-h-[88px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-base font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
              >
                <Icon size={24} className="shrink-0 text-cyan-300" />
                <span className="leading-tight">{skill.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-black tracking-tight">Certificates</h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-cyan-400" />

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
            >
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <FaAward size={22} />
                </span>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-base text-slate-300">
                    {certificate.platform}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex rounded-lg bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                      {certificate.year}
                    </span>

                    {certificate.href ? (
                      <a
                        href={certificate.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-lg border border-cyan-400/40 px-3 py-1 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                      >
                        View Certificate
                      </a>
                    ) : null}
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
