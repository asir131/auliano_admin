import { ActivityTrend, TopGenres } from "./components/Charts";
import { RecentActions, RecentReviews } from "./components/ActivityLists";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import Topbar from "./components/Topbar";
import { navItems, stats } from "./components/data";
import DashboardIcon from "./components/DashboardIcon";

function MobileNav() {
  return (
    <nav className="flex gap-2 overflow-x-auto border-b border-white/[0.05] bg-[#0d1117] px-4 py-3 lg:hidden">
      {navItems.map(([icon, label], index) => (
        <a
          className={`flex h-10 shrink-0 items-center gap-2 rounded-[10px] border px-3 text-sm font-medium ${
            index === 0
              ? "border-[#8e51ff]/20 bg-gradient-to-r from-[#8e51ff]/20 to-[#e12afb]/10 text-white"
              : "border-white/[0.03] bg-white/[0.03] text-white/60"
          }`}
          href="#"
          key={label}
        >
          <DashboardIcon className="size-4" name={icon} />
          {label}
        </a>
      ))}
    </nav>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-white">
      <Sidebar />
      <Topbar />
      <MobileNav />
      <main className="px-4 py-8 md:px-8 lg:ml-64">
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
      </main>
    </div>
  );
}
