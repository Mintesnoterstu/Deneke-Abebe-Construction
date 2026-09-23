import { stats } from "@/data/company";

export function StatsBar() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4 md:px-12">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-heading text-3xl font-bold text-accent md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
