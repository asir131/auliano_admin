"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from "./DashboardIcon";
import { navItems } from "./data";

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-white/[0.05] bg-[#0d1117] lg:flex">
      <div className="flex h-[81px] items-center gap-2 border-b border-white/[0.05] px-6 py-5">
        <div className="h-10 w-[34px] overflow-hidden rounded-lg">
          <img alt="PlayLog" className="h-full w-full scale-[1.74] object-cover" src="/figma/logo.png" />
        </div>
        <div>
          <p className="text-base leading-6 tracking-[-0.4px] text-[#65e5fc]">PlayLog</p>
          <p className="text-xs leading-4 text-white">Admin Console</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 pt-4">
        {navItems.map(([icon, label, href]) => {
          const active = isActivePath(pathname, href);

          return (
            <Link
              className={`flex h-[42px] w-full items-center gap-3 rounded-[10px] border px-[13px] py-[11px] text-left text-sm font-medium leading-5 ${
                active
                  ? "border-[#8e51ff]/20 bg-gradient-to-r from-[#8e51ff]/20 to-[#e12afb]/10 text-white"
                  : "border-transparent text-white/60 transition hover:bg-white/[0.04] hover:text-white"
              }`}
              href={href}
              key={label}
            >
              <DashboardIcon className="size-4 shrink-0" name={icon} />
              <span className="min-w-0 flex-1">{label}</span>
              {label === "Reports" ? (
                <span className="rounded-full bg-[#ff2056]/90 px-2 py-0.5 text-xs leading-4 text-white">12</span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/[0.05] px-4 py-[17px]">
        <div className="flex h-[52px] items-center gap-3 rounded-[10px] p-2">
          <div className="size-9 shrink-0 rounded-full bg-[#00d4c7]" />
          <div className="min-w-0">
            <p className="truncate text-sm leading-5 text-white">Alex Morgan</p>
            <p className="truncate text-xs leading-4 text-white/40">admin@playlog.gg</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
