import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <div className="w-full">
      <div className="mb-12">
        <h1 className="text-5xl font-black tracking-tight">Experience</h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-cyan-400" />
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {experiences.map((item, index) => (
          <div
            key={item.role}
            className="relative border-l border-cyan-400/25 pl-8"
          >
            <span className="absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300 bg-[var(--background)] shadow-[0_0_14px_rgba(34,211,238,0.35)]">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  index === 0 ? "bg-cyan-300" : "bg-cyan-300/50"
                }`}
              />
            </span>

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">{item.role}</h2>

                <p className="mt-2 text-lg text-slate-400">
                  {item.company} · {item.location}
                </p>
              </div>

              <span className="rounded-lg bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                {item.duration}
              </span>
            </div>

            <ul className="mt-7 list-disc space-y-4 pl-5 text-lg leading-8 text-slate-300">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
