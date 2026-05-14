import DashboardIcon from "./DashboardIcon";

export default function Topbar({
  title = "Dashboard",
  subtitle = "Welcome back - here's what's happening on PlayLog today.",
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.05] bg-[#0d1117]/80 px-4 py-5 backdrop-blur md:px-8 lg:ml-64">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h1 className="text-2xl font-medium leading-9 tracking-[-0.6px] text-white">{title}</h1>
          <p className="text-sm leading-5 text-[#d2d2d2]">{subtitle}</p>
        </div>

        <div className="flex h-10 items-center gap-3">
          <label className="relative min-w-0 flex-1 sm:w-72 sm:flex-none">
            <DashboardIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" name="search" />
            <input
              className="h-9 w-full rounded-lg border border-white/10 bg-white/[0.05] pl-9 pr-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#8e51ff]/50"
              placeholder="Search anything..."
              type="search"
            />
          </label>
          <button className="relative grid size-10 place-items-center rounded-[10px] bg-white/[0.05] text-white/70 transition hover:text-white">
            <DashboardIcon name="bell" />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-[#ff2056]" />
          </button>
          <button className="grid size-10 place-items-center rounded-[10px] bg-white/[0.05] text-white/70 transition hover:text-white">
            <DashboardIcon name="settings" />
          </button>
        </div>
      </div>
    </header>
  );
}
