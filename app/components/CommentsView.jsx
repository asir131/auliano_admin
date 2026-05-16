import DashboardIcon from "./DashboardIcon";
import { commentRows } from "./data";

function Avatar({ comment }) {
  return <img alt={comment.user} className="size-9 shrink-0 rounded-full object-cover md:size-10" src={`/figma/${comment.avatar}`} />;
}

function FlaggedBadge() {
  return (
    <span className="inline-flex h-[18px] items-center gap-1 rounded-[5px] border border-[#ff2056]/35 bg-[#ff2056]/15 px-1.5 text-[10px] font-medium leading-none text-[#ff5d81]">
      <DashboardIcon className="size-3" name="flag" />
      Flagged
    </span>
  );
}

function CommentRow({ comment }) {
  const flagged = comment.status === "Flagged";

  return (
    <article
      className={`rounded-[10px] border px-4 py-3.5 md:px-5 md:py-4 ${
        flagged ? "border-[#ff2056]/45 bg-[#161923]" : "border-white/[0.045] bg-[#171b22]"
      }`}
    >
      <div className="flex gap-3">
        <Avatar comment={comment} />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                <span className="text-xs font-semibold leading-4 text-white md:text-[13px]">{comment.user}</span>
                <span className="truncate text-[10px] leading-4 text-white/34 md:text-[11px]">{comment.context}</span>
                {flagged ? <FlaggedBadge /> : null}
              </div>
              <p className="mt-1.5 text-xs leading-5 text-white/75 md:text-[13px]">{comment.text}</p>
            </div>

            <div className="flex shrink-0 items-start gap-4">
              <time className="whitespace-nowrap text-[10px] leading-4 text-white/38 md:text-xs">{comment.time}</time>
              <button className="grid size-4 place-items-center text-[#ff5d81] transition hover:text-[#ff7a98]" type="button" aria-label={`Delete ${comment.user} comment`}>
                <DashboardIcon className="size-3.5" name="trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CommentsView() {
  return (
    <div className="mx-auto max-w-[1218px]">
      <section className="rounded-[12px] border border-white/[0.055] bg-[#151a21] p-3.5 md:p-4">
        <label className="relative block">
          <DashboardIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/35" name="search" />
          <input
            className="h-[38px] w-full rounded-[9px] border border-white/[0.08] bg-white/[0.035] pl-9 pr-3 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#8e51ff]/50 md:h-10"
            placeholder="Search comments..."
            type="search"
          />
        </label>
      </section>

      <section className="mt-5 space-y-2.5 md:space-y-3">
        {commentRows.map((comment) => (
          <CommentRow comment={comment} key={`${comment.user}-${comment.time}`} />
        ))}
      </section>
    </div>
  );
}
