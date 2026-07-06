import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <div className="w-full">
      <div className="mb-12">
        <h1 className="text-5xl font-black tracking-tight">Projects</h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-cyan-400" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
          >
            <h2 className="text-3xl font-black">{project.title}</h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/[0.08] px-4 py-2 text-sm font-bold text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-7 text-lg leading-9 text-slate-300">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
