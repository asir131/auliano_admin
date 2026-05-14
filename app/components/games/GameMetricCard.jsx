import DashboardIcon from "../DashboardIcon";

export default function GameMetricCard({ metric }) {
  const [label, value, trend, icon, tone] = metric;

  return (
    <article className="flex min-h-[116px] items-center justify-between rounded-[14px] border border-white/[0.05] bg-[#111720] p-4">
      <div>
        <p className="text-sm leading-5 text-white/40">{label}</p>
        <p className="mt-2 text-2xl leading-8 tracking-[-0.6px] text-white">{value}</p>
        <span className="mt-3 inline-flex rounded-lg bg-[#00bc7d]/10 px-2 py-0.5 text-xs font-medium leading-4 text-[#00d492]">
          {trend}
        </span>
      </div>
      <div className={`grid size-11 shrink-0 place-items-center rounded-[14px] bg-gradient-to-br ${tone} text-white`}>
        <DashboardIcon className="size-5" name={icon} />
      </div>
    </article>
  );
}
