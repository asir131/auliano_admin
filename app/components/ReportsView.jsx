import DashboardIcon from "./DashboardIcon";
import { reportRows } from "./data";

const reportStats = [
  ["Open Reports", "12", "text-[#ff4f8b]"],
  ["Resolved Today", "37", "text-[#00d4c7]"],
  ["Avg. Response", "1.8h", "text-[#00c8ff]"],
];

function StatCard({ stat }) {
  const [label, value, color] = stat;

  return (
    <article className="rounded-[10px] border border-white/[0.05] bg-[#171b22] px-5 py-5 md:px-6 md:py-6">
      <p className="text-xs leading-4 text-white/34">{label}</p>
      <p className={`mt-7 text-xl font-medium leading-7 tracking-[-0.35px] ${color}`}>{value}</p>
    </article>
  );
}

function ActionButton({ icon, label, tone }) {
  const styles = {
    ignore: "bg-white/[0.05] text-white/70 hover:bg-white/[0.08] hover:text-white",
    ban: "bg-[#a16b00]/50 text-[#ffcd38] hover:bg-[#a16b00]/65",
    remove: "bg-[#ff1768] text-white hover:bg-[#ff2e77]",
  };

  return (
    <button className={`inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-md px-3 text-xs font-medium transition ${styles[tone]}`} type="button">
      <DashboardIcon className="size-3" name={icon} />
      {label}
    </button>
  );
}

function ReportCard({ report }) {
  return (
    <article className="rounded-[10px] border border-white/[0.045] bg-[#171b22] p-4 md:px-5 md:py-[18px]">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex min-w-0 gap-4">
          <div className={`grid size-11 shrink-0 place-items-center rounded-[12px] ${report.tone}`}>
            <DashboardIcon className="size-5 text-white" name={report.icon} stroke={report.icon !== "star"} />
          </div>

          <div className="min-w-0 pt-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-white/[0.08] px-2 py-0.5 text-[10px] font-medium leading-none text-white/64">{report.category}</span>
              <h2 className="text-sm font-medium leading-5 text-white">{report.title}</h2>
            </div>

            <p className="mt-2 text-xs leading-5 text-white/66">{report.detail}</p>
            <p className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] leading-4 text-white/34">
              <DashboardIcon className="size-3" name="flag" />
              {report.meta}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2 md:justify-end">
          <time className="mr-1 whitespace-nowrap text-[11px] leading-4 text-white/34">{report.time}</time>
          <ActionButton icon="x" label="Ignore" tone="ignore" />
          <ActionButton icon="ban" label="Ban" tone="ban" />
          <ActionButton icon="trash" label="Remove" tone="remove" />
        </div>
      </div>
    </article>
  );
}

export default function ReportsView() {
  return (
    <div className="mx-auto max-w-[1218px]">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {reportStats.map((stat) => (
          <StatCard key={stat[0]} stat={stat} />
        ))}
      </section>

      <section className="mt-6 space-y-3.5">
        {reportRows.map((report) => (
          <ReportCard key={`${report.category}-${report.title}`} report={report} />
        ))}
      </section>
    </div>
  );
}
