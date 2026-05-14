import DashboardIcon from "../DashboardIcon";
import GameCover from "./GameCover";
import GameStatusBadge from "./GameStatusBadge";

export default function GameCard({ game }) {
  return (
    <article className="rounded-[14px] border border-white/[0.05] bg-[#111720] p-3">
      <GameCover game={game} />
      <div className="mt-4 space-y-4 px-1 pb-1">
        <div className="flex items-center justify-between gap-3">
          <GameStatusBadge status={game.status} />
          <p className="text-xs leading-4 text-white/40">{game.updated}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-xs leading-4 text-white/35">Players</p>
            <p className="mt-1 leading-5 text-white/80">{game.players}</p>
          </div>
          <div>
            <p className="text-xs leading-4 text-white/35">Reviews</p>
            <p className="mt-1 truncate leading-5 text-white/80">{game.reviews}</p>
          </div>
        </div>

        <p className="truncate text-xs leading-4 text-white/40">{game.platform}</p>

        <div className="grid grid-cols-[1fr_1fr_42px] gap-2 pt-1">
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-white/[0.05] text-sm font-medium text-white/70 transition hover:bg-white/[0.08] hover:text-white" type="button">
            <DashboardIcon className="size-4" name="eye" />
            View
          </button>
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#8e51ff] text-sm font-medium text-white transition hover:bg-[#9b66ff]" type="button">
            <DashboardIcon className="size-4" name="edit" />
            Edit
          </button>
          <button className="grid h-10 place-items-center rounded-lg bg-[#ff2056]/10 text-[#ff5d81] transition hover:bg-[#ff2056]/15" type="button" aria-label={`Delete ${game.title}`}>
            <DashboardIcon className="size-4" name="trash" />
          </button>
        </div>
      </div>
    </article>
  );
}
