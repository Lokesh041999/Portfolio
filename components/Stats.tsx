import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="glass-card grid grid-cols-1 gap-4 rounded-2xl p-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center gap-5 rounded-xl border border-white/5 bg-white/[0.02] p-5"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Icon size={26} />
              </span>

              <div>
                <h3 className="text-3xl font-black">{item.value}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
