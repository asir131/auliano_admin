import DashboardIcon from "./DashboardIcon";
import { reviewRows } from "./data";

const tabs = ["Latest", "Popular", "Reported"];

function ReviewStars({ count }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <DashboardIcon
          className={`size-[13px] ${index < count ? "text-[#ffb000]" : "text-white/25"}`}
          key={index}
          name="star"
          stroke={false}
        />
      ))}
    </span>
  );
}

function Avatar({ review }) {
  if (!review.avatar) {
    return <div className="size-10 shrink-0 rounded-full bg-[#a735ff]" />;
  }

  return <img alt={review.user} className="size-10 shrink-0 rounded-full object-cover" src={`/figma/${review.avatar}`} />;
}

function Meta({ icon, value }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs leading-4 text-white/38">
      <DashboardIcon className="size-3.5" name={icon} />
      {value}
    </span>
  );
}

function ReportedBadge() {
  return (
    <span className="inline-flex h-[18px] items-center gap-1 rounded-md border border-[#ff2056]/35 bg-[#ff2056]/12 px-1.5 text-[10px] font-medium leading-none text-[#ff5d81]">
      <DashboardIcon className="size-3" name="flag" />
      Reported
    </span>
  );
}

function ReviewItem({ review }) {
  const reported = review.status === "Reported";

  return (
    <article
      className={`relative rounded-[10px] border p-4 sm:p-5 ${
        reported ? "border-[#ff2056]/45 bg-[#130d14]" : "border-white/[0.045] bg-[#161b22]"
      }`}
    >
      <div className="flex gap-3">
        <Avatar review={review} />

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-5">
                <span className="text-white">{review.user}</span>
                <span className="text-xs text-white/35">reviewed</span>
                <span className="text-[#c4b4ff]">{review.game}</span>
                {reported ? <ReportedBadge /> : null}
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <ReviewStars count={review.rating} />
              </div>
            </div>

            <time className="shrink-0 text-xs leading-4 text-white/38">{review.time}</time>
          </div>

          <p className={`mt-3 text-sm leading-5 ${reported ? "text-white/62" : "text-white/70"}`}>{review.text}</p>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Meta icon="heart" value={review.likes} />
              <Meta icon="comment" value={review.comments} />
            </div>

            <button className="inline-flex items-center gap-2 text-xs font-medium leading-4 text-[#ff5d81] transition hover:text-[#ff7a98]" type="button">
              <DashboardIcon className="size-3.5" name="trash" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReviewsView() {
  return (
    <div className="mx-auto max-w-[1214px]">
      <div className="mb-5 flex gap-1 rounded-[10px] bg-[#161b22] p-1 w-max max-w-full overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            className={`inline-flex h-7 shrink-0 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium leading-none ${
              index === 0 ? "bg-white/[0.08] text-white" : "text-white/52 transition hover:text-white"
            }`}
            key={tab}
            type="button"
          >
            {tab === "Reported" ? <DashboardIcon className="size-3" name="flag" /> : null}
            {tab}
          </button>
        ))}
      </div>

      <section className="space-y-2">
        {reviewRows.map((review) => (
          <ReviewItem key={`${review.user}-${review.game}`} review={review} />
        ))}
      </section>
    </div>
  );
}
