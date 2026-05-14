import DashboardIcon from "../DashboardIcon";
import ReviewStars from "./ReviewStars";
import ReviewStatusBadge from "./ReviewStatusBadge";

export default function ReviewsTable({ reviews }) {
  return (
    <div className="hidden overflow-x-auto md:block">
      <table className="w-full min-w-[920px] border-collapse">
        <thead>
          <tr className="text-left text-xs font-medium uppercase leading-4 tracking-[0.08em] text-white/30">
            <th className="pb-4 pt-5 pr-4">Reviewer</th>
            <th className="px-4 pb-4 pt-5">Game</th>
            <th className="px-4 pb-4 pt-5">Review</th>
            <th className="px-4 pb-4 pt-5">Rating</th>
            <th className="px-4 pb-4 pt-5">Status</th>
            <th className="px-4 pb-4 pt-5">Date</th>
            <th className="pb-4 pt-5 pl-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr className="border-t border-white/[0.05]" key={`${review.user}-${review.game}`}>
              <td className="py-4 pr-4">
                <div className="flex min-w-[176px] items-center gap-3">
                  <img alt={review.user} className="size-9 shrink-0 rounded-full object-cover" src={`/figma/${review.avatar}`} />
                  <p className="truncate text-sm leading-5 text-white">{review.user}</p>
                </div>
              </td>
              <td className="px-4 py-4 text-sm leading-5 text-[#c4b4ff]">{review.game}</td>
              <td className="px-4 py-4">
                <p className="line-clamp-2 max-w-[320px] text-sm leading-5 text-white/60">{review.text}</p>
              </td>
              <td className="px-4 py-4">
                <ReviewStars count={review.rating} />
              </td>
              <td className="px-4 py-4">
                <ReviewStatusBadge status={review.status} />
              </td>
              <td className="px-4 py-4 text-sm leading-5 text-white/45">{review.date}</td>
              <td className="py-4 pl-4">
                <div className="flex justify-end gap-1">
                  <button className="grid size-9 place-items-center rounded-lg bg-white/[0.05] text-white/55 transition hover:bg-white/[0.08] hover:text-white" type="button" aria-label={`View ${review.user} review`}>
                    <DashboardIcon className="size-4" name="eye" />
                  </button>
                  <button className="grid size-9 place-items-center rounded-lg bg-[#ff2056]/10 text-[#ff5d81] transition hover:bg-[#ff2056]/15" type="button" aria-label={`Delete ${review.user} review`}>
                    <DashboardIcon className="size-4" name="trash" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
