import DashboardIcon from "./DashboardIcon";
import { users } from "./data";

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-[#00bc7d]/10 text-[#00d492]",
    Pending: "bg-[#ffb000]/10 text-[#ffb000]",
    Suspended: "bg-[#ff2056]/10 text-[#ff5d81]",
  };

  return (
    <span className={`inline-flex rounded-lg px-2 py-1 text-xs font-medium leading-4 ${styles[status]}`}>
      {status}
    </span>
  );
}

function UserRow({ user }) {
  const [avatar, name, email, status, reviews, joined] = user;

  return (
    <tr className="border-t border-white/[0.05]">
      <td className="py-4 pr-4">
        <div className="flex min-w-[220px] items-center gap-3">
          <img alt={name} className="size-9 rounded-full object-cover" src={`/figma/${avatar}`} />
          <div className="min-w-0">
            <p className="truncate text-sm leading-5 text-white">{name}</p>
            <p className="truncate text-xs leading-4 text-white/40">{email}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4"><StatusBadge status={status} /></td>
      <td className="px-4 py-4 text-sm text-white/70">{reviews}</td>
      <td className="px-4 py-4 text-sm text-white/50">{joined}</td>
      <td className="py-4 pl-4 text-right">
        <button className="rounded-lg px-3 py-2 text-sm font-medium text-[#a684ff] transition hover:bg-white/[0.05]" type="button">
          Manage
        </button>
      </td>
    </tr>
  );
}

export default function UsersView() {
  return (
    <div className="mx-auto max-w-[1214px]">
      <section className="min-h-[720px] rounded-[14px] border border-white/[0.05] bg-[#161b22] p-5 md:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h2 className="text-base leading-6 text-white">Users</h2>
            <p className="text-sm leading-5 text-white/40">Manage members and account status</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative sm:w-72">
              <DashboardIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" name="search" />
              <input
                className="h-9 w-full rounded-lg border border-white/10 bg-white/[0.05] pl-9 pr-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#8e51ff]/50"
                placeholder="Search users..."
                type="search"
              />
            </label>
            <button className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-[#8e51ff] px-4 text-sm font-medium text-white transition hover:bg-[#9b66ff]" type="button">
              <DashboardIcon className="size-4" name="plusUser" />
              Add User
            </button>
          </div>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto border-b border-white/[0.05] pb-4">
          {["All Users", "Active", "Pending", "Suspended"].map((filter, index) => (
            <button
              className={`h-9 shrink-0 rounded-lg border px-4 text-sm font-medium ${
                index === 0
                  ? "border-[#8e51ff]/20 bg-gradient-to-r from-[#8e51ff]/20 to-[#e12afb]/10 text-white"
                  : "border-white/[0.05] bg-white/[0.03] text-white/50"
              }`}
              key={filter}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="text-left text-xs font-medium uppercase leading-4 tracking-[0.08em] text-white/30">
                <th className="pb-4 pt-5 pr-4">User</th>
                <th className="px-4 pb-4 pt-5">Status</th>
                <th className="px-4 pb-4 pt-5">Reviews</th>
                <th className="px-4 pb-4 pt-5">Joined</th>
                <th className="pb-4 pt-5 pl-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserRow key={user[1]} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
