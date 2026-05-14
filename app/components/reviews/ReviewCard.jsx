import DashboardIcon from "../DashboardIcon";
import ReviewStars from "./ReviewStars";
import ReviewStatusBadge from "./ReviewStatusBadge";

export default function ReviewCard({ review }) {
  return (
    <article className="rounded-[12px] border border-white/[0.05] bg-white/[0.03] p-4 md:hidden">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <img alt={review.user} className="size-10 shrink-0 rounded-full object-cover" src={`/figma/${review.avatar}`} />
          <div className="min-w-0">
            <p className="truncate text-sm leading-5 text-white">{review.user}</p>
            <p className="truncate text-xs leading-4 text-[#c4b4ff]">{review.game}</p>
          </div>
        </div>
        <ReviewStatusBadge status={review.status} />
      </div>

      <p className="mt-4 text-sm leading-5 text-white/65">{review.text}</p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <ReviewStars count={review.rating} />
          <p className="mt-1 text-xs leading-4 text-white/35">{review.date}</p>
        </div>
        <div className="flex gap-1">
          <button className="grid size-9 place-items-center rounded-lg bg-white/[0.05] text-white/55 transition hover:bg-white/[0.08] hover:text-white" type="button" aria-label={`View ${review.user} review`}>
            <DashboardIcon className="size-4" name="eye" />
          </button>
          <button className="grid size-9 place-items-center rounded-lg bg-[#ff2056]/10 text-[#ff5d81] transition hover:bg-[#ff2056]/15" type="button" aria-label={`Delete ${review.user} review`}>
            <DashboardIcon className="size-4" name="trash" />
          </button>
        </div>
      </div>
    </article>
  );
}
