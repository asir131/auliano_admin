import DashboardIcon from "../DashboardIcon";

export default function ReviewStars({ count }) {
  return (
    <span className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <DashboardIcon
          className={`size-3.5 ${index < count ? "text-[#ffb000]" : "text-white/20"}`}
          key={index}
          name="star"
          stroke={false}
        />
      ))}
    </span>
  );
}
