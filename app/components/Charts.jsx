function CardHeader({ title, subtitle, action }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-base leading-6 text-white">{title}</h2>
        <p className="text-sm leading-5 text-white/40">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

export function ActivityTrend() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const y = ["1000", "750", "500", "250", "0"];

  return (
    <section className="rounded-[14px] border border-white/[0.05] bg-[#161b22] p-6">
      <CardHeader
        action={
          <div className="mt-3 hidden items-center gap-4 text-xs text-white/60 sm:flex">
            <span className="flex items-center gap-2"><i className="size-2.5 rounded-full bg-[#8e51ff]" />Reviews</span>
            <span className="flex items-center gap-2"><i className="size-2.5 rounded-full bg-[#00d3f2]" />Users</span>
          </div>
        }
        subtitle="Reviews & active users this week"
        title="Activity Trend"
      />
      <div className="mt-8 h-72">
        <div className="grid h-full grid-cols-[36px_1fr] grid-rows-[1fr_20px] gap-x-4">
          <div className="flex flex-col justify-between pb-5 text-right text-[11px] text-white/20">
            {y.map((label) => <span key={label}>{label}</span>)}
          </div>
          <div className="relative">
            <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 684 255">
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2b7fff" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#2b7fff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 184 C100 150 155 160 220 174 C300 190 340 90 430 73 C515 57 540 14 620 25 C650 29 670 36 684 41" fill="none" stroke="#22d3ee" strokeWidth="2.2" />
              <path d="M0 184 C100 150 155 160 220 174 C300 190 340 90 430 73 C515 57 540 14 620 25 C650 29 670 36 684 41 L684 255 L0 255 Z" fill="url(#area)" />
            </svg>
          </div>
          <div />
          <div className="flex justify-between text-[11px] text-white/20">
            {days.map((day) => <span key={day}>{day}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TopGenres() {
  const bars = [
    ["RPG", 64],
    ["FPS", 48],
    ["", 96],
    ["Strategy", 32],
    ["", 24],
    ["Horror", 40],
  ];

  return (
    <section className="rounded-[14px] border border-white/[0.05] bg-[#161b22] p-6">
      <CardHeader subtitle="Most reviewed categories" title="Top Genres" />
      <div className="mt-8 h-72">
        <div className="grid h-full grid-cols-[36px_1fr] grid-rows-[1fr_20px] gap-x-4">
          <div className="flex flex-col justify-between pb-5 text-right text-[11px] text-white/20">
            {["800", "600", "400", "200", "0"].map((label) => <span key={label}>{label}</span>)}
          </div>
          <div className="flex items-end justify-between gap-2">
            {bars.map(([label, height], index) => (
              <div className="flex h-full flex-1 items-end" key={`${label}-${index}`}>
                <div className="w-full rounded-t bg-[#0f6bff]" style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
          <div />
          <div className="flex justify-between text-[11px] text-white/20">
            {bars.map(([label], index) => <span key={`${label}-${index}`}>{label}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
