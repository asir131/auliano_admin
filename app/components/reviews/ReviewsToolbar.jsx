import DashboardIcon from "../DashboardIcon";

const filters = ["All Reviews", "Published", "Pending", "Flagged"];

export default function ReviewsToolbar() {
  return (
    <>
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h2 className="text-base leading-6 text-white">Reviews</h2>
          <p className="text-sm leading-5 text-white/40">Manage game reviews and moderation status</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative sm:w-72">
            <DashboardIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" name="search" />
            <input
              className="h-9 w-full rounded-lg border border-white/10 bg-white/[0.05] pl-9 pr-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#8e51ff]/50"
              placeholder="Search reviews..."
              type="search"
            />
          </label>
          <button className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.03] px-4 text-sm font-medium text-white/60 transition hover:bg-white/[0.06] hover:text-white" type="button">
            <DashboardIcon className="size-4" name="filter" />
            Filter
          </button>
        </div>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto border-b border-white/[0.05] pb-4">
        {filters.map((filter, index) => (
          <button
            className={`h-9 shrink-0 rounded-lg border px-4 text-sm font-medium ${
              index === 0
                ? "border-[#8e51ff]/20 bg-gradient-to-r from-[#8e51ff]/20 to-[#e12afb]/10 text-white"
                : "border-white/[0.05] bg-white/[0.03] text-white/50 transition hover:text-white"
            }`}
            key={filter}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
    </>
  );
}
