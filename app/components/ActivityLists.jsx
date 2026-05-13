import DashboardIcon from "./DashboardIcon";
import { actions, reviews } from "./data";

function Stars({ count }) {
  return (
    <span className="flex gap-1 text-xs leading-none">
      {Array.from({ length: 5 }).map((_, index) => (
        <span className={index < count ? "text-[#ffb000]" : "text-white/20"} key={index}>★</span>
      ))}
    </span>
  );
}

export function RecentReviews() {
  return (
    <section className="rounded-[14px] border border-white/[0.05] bg-[#161b22] p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base leading-6 text-white">Recent Reviews</h2>
        <a className="text-sm font-medium leading-5 text-[#a684ff]" href="#">View all</a>
      </div>
      <div className="mt-10 space-y-3">
        {reviews.map(([avatar, user, game, time, stars]) => (
          <article className="flex min-h-16 items-center gap-3 rounded-[10px] p-3" key={`${user}-${game}`}>
            <img alt={user} className="size-9 shrink-0 rounded-full object-cover" src={`/figma/${avatar}`} />
            <div className="min-w-0">
              <p className="truncate text-sm leading-5 text-white/60">
                {user} <span className="text-white">reviewed</span> <span className="text-[#c4b4ff]">{game}</span>
              </p>
              <div className="mt-1 flex items-center gap-3">
                <Stars count={stars} />
                <span className="text-xs leading-4 text-white/40">{time}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RecentActions() {
  return (
    <section className="rounded-[14px] border border-white/[0.05] bg-[#161b22] p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base leading-6 text-white">Recent Actions</h2>
        <a className="text-sm font-medium leading-5 text-[#a684ff]" href="#">View log</a>
      </div>
      <div className="mt-10 space-y-3">
        {actions.map(([icon, title, time, color]) => (
          <article className="flex min-h-[62px] items-center gap-3 rounded-[10px] p-3" key={`${title}-${time}`}>
            <div className={`grid size-9 shrink-0 place-items-center rounded-[10px] bg-white/[0.05] ${color}`}>
              <DashboardIcon name={icon} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm leading-5 text-white/80">{title}</p>
              <p className="text-xs leading-4 text-white/40">{time}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
