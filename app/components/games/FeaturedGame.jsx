import DashboardIcon from "../DashboardIcon";
import GameStatusBadge from "./GameStatusBadge";

export default function FeaturedGame({ game }) {
  return (
    <article className="relative min-h-[254px] overflow-hidden rounded-[14px] border border-white/[0.05] bg-[#111720]">
      <div className={`absolute inset-0 bg-gradient-to-br ${game.cover}`} />
      <div className={`absolute inset-0 ${game.glow}`} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,23,32,0.96),rgba(17,23,32,0.78)_42%,rgba(17,23,32,0.18)),linear-gradient(180deg,transparent,rgba(0,0,0,0.66))]" />
      <div className="relative flex min-h-[254px] flex-col justify-between p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <GameStatusBadge status={game.status} />
          <span className="rounded-lg bg-black/30 px-2 py-1 text-xs font-medium leading-4 text-white/55 backdrop-blur">
            Featured
          </span>
        </div>
        <div className="max-w-[520px]">
          <p className="text-sm leading-5 text-[#a684ff]">{game.genre}</p>
          <h2 className="mt-2 text-2xl font-medium leading-8 tracking-[-0.6px] text-white sm:text-3xl sm:leading-10">
            {game.title}
          </h2>
          <p className="mt-3 text-sm leading-5 text-white/55">
            {game.studio} catalog entry with {game.reviews}, {game.players} tracked players, and a {game.rating} average score.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#0f6bff] px-4 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,107,255,0.22)] transition hover:bg-[#2478ff]" type="button">
              <DashboardIcon className="size-4" name="edit" />
              Edit Entry
            </button>
            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-white/[0.07] px-4 text-sm font-medium text-white/75 transition hover:bg-white/[0.1] hover:text-white" type="button">
              <DashboardIcon className="size-4" name="upload" />
              Upload Media
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
