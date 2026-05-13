import DashboardIcon from "./DashboardIcon";

export default function StatCard({ stat }) {
  return (
    <article className="flex h-[182px] flex-col justify-between rounded-[14px] border border-white/[0.05] bg-[#161b22] p-[21px]">
      <div className="flex items-start justify-between">
        <div className={`grid size-11 place-items-center rounded-[14px] bg-gradient-to-br ${stat.tone} text-white`}>
          <DashboardIcon className="size-5" name={stat.icon} />
        </div>
        <span
          className={`rounded-lg px-2 py-0.5 text-xs font-medium leading-4 ${
            stat.negative ? "bg-[#ff2056]/10 text-[#ff5d81]" : "bg-[#00bc7d]/10 text-[#00d492]"
          }`}
        >
          {stat.trend}
        </span>
      </div>
      <div>
        <p className="text-2xl leading-8 tracking-[-0.6px] text-white">{stat.value}</p>
        <p className="mt-1 text-sm leading-5 text-white/40">{stat.label}</p>
      </div>
    </article>
  );
}
