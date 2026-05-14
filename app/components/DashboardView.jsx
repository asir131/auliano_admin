import { RecentActions, RecentReviews } from "./ActivityLists";
import { ActivityTrend, TopGenres } from "./Charts";
import StatCard from "./StatCard";
import { stats } from "./data";

export default function DashboardView() {
  return (
    <div className="mx-auto flex max-w-[1214px] flex-col gap-6">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[2fr_1fr]">
        <ActivityTrend />
        <TopGenres />
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <RecentReviews />
        <RecentActions />
      </section>
    </div>
  );
}
