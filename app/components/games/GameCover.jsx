import DashboardIcon from "../DashboardIcon";

export default function GameCover({ game }) {
  return (
    <div className={`relative aspect-[16/10] overflow-hidden rounded-[10px] bg-gradient-to-br ${game.cover}`}>
      <div className={`absolute inset-0 ${game.glow}`} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_50%_110%,rgba(0,0,0,0.92),transparent_45%)]" />
      <div className="absolute left-3 top-3">
        <span className="inline-flex rounded-md bg-black/45 px-2 py-1 text-[11px] font-medium leading-none text-white/80 backdrop-blur">
          {game.genre}
        </span>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium leading-5 text-white">{game.title}</p>
          <p className="truncate text-xs leading-4 text-white/50">{game.studio}</p>
        </div>
        <span className="inline-flex h-7 shrink-0 items-center gap-1 rounded-lg bg-black/50 px-2 text-xs font-medium leading-none text-white backdrop-blur">
          <DashboardIcon className="size-3 text-[#ffb000]" name="star" stroke={false} />
          {game.rating}
        </span>
      </div>
    </div>
  );
}
