import DashboardIcon from "./DashboardIcon";
import { notificationLogs } from "./data";

function FieldLabel({ children }) {
  return <label className="text-xs font-medium leading-4 text-white/58">{children}</label>;
}

function NotificationLogItem({ item, active }) {
  return (
    <article className="rounded-[8px] border border-white/[0.045] bg-[#151a21] px-4 py-3">
      <div className="flex gap-3">
        <span className="mt-1 grid size-3 shrink-0 place-items-center rounded-full border border-[#00d4a6]">
          <span className="size-1.5 rounded-full bg-[#00d4a6]" />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className={`text-xs font-medium leading-4 text-white ${active ? "outline outline-2 outline-[#0094ff] outline-offset-2" : ""}`}>
            {item.title}
          </h3>
          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[11px] leading-4 text-white/34">
            <span>{item.audience}</span>
            <span>Reached {item.reached}</span>
            <span>{item.time}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function NotificationsView() {
  return (
    <div className="mx-auto grid max-w-[1218px] grid-cols-1 gap-5 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-[12px] border border-white/[0.055] bg-[#171b22] p-5 md:p-6">
        <div className="flex items-start gap-4">
          <div className="grid size-10 shrink-0 place-items-center rounded-[12px] bg-[#0f72ff]">
            <DashboardIcon className="size-5 text-white" name="megaphone" />
          </div>
          <div>
            <h2 className="text-sm font-medium leading-5 text-white">Send Announcement</h2>
            <p className="text-[11px] leading-4 text-white/34">Reach your community</p>
          </div>
        </div>

        <form className="mt-8 space-y-4">
          <div className="space-y-2">
            <FieldLabel>Audience</FieldLabel>
            <select className="h-10 w-full rounded-[8px] border border-white/[0.07] bg-white/[0.045] px-3 text-xs text-white/82 outline-none focus:border-[#0f72ff]/60">
              <option>All users</option>
              <option>Active users</option>
              <option>New users</option>
            </select>
          </div>

          <div className="space-y-2">
            <FieldLabel>Title</FieldLabel>
            <input
              className="h-10 w-full rounded-[8px] border border-white/[0.07] bg-white/[0.045] px-3 text-xs text-white outline-none placeholder:text-white/28 focus:border-[#0f72ff]/60"
              placeholder="A short, attention-grabbing title"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <FieldLabel>Message</FieldLabel>
            <textarea
              className="min-h-[64px] w-full resize-none rounded-[8px] border border-white/[0.07] bg-white/[0.045] px-3 py-3 text-xs text-white outline-none placeholder:text-white/28 focus:border-[#0f72ff]/60"
              placeholder="Write your announcement..."
            />
          </div>

          <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[8px] bg-[#0f72ff] text-xs font-semibold text-white transition hover:bg-[#2682ff]" type="button">
            <DashboardIcon className="size-4" name="megaphone" />
            Send Now
          </button>
        </form>
      </section>

      <section className="rounded-[12px] border border-white/[0.055] bg-[#171b22] p-5 md:p-6">
        <div className="flex items-start gap-4">
          <div className="grid size-10 shrink-0 place-items-center rounded-[12px] bg-white/[0.045] text-white/58">
            <DashboardIcon className="size-5" name="bell" />
          </div>
          <div>
            <h2 className="text-sm font-medium leading-5 text-white">Notification Log</h2>
            <p className="text-[11px] leading-4 text-white/34">Recent system-wide announcements</p>
          </div>
        </div>

        <div className="mt-7 space-y-3">
          {notificationLogs.map((item, index) => (
            <NotificationLogItem active={index === 0} item={item} key={item.title} />
          ))}
        </div>
      </section>
    </div>
  );
}
