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

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 overflow-x-auto border-b border-white/[0.05] bg-[#0d1117] px-4 py-3 lg:hidden">
      {navItems.map(([icon, label, href]) => {
        const active = isActivePath(pathname, href);

        return (
          <Link
            className={`flex h-10 shrink-0 items-center gap-2 rounded-[10px] border px-3 text-sm font-medium ${
              active
                ? "border-[#8e51ff]/20 bg-gradient-to-r from-[#8e51ff]/20 to-[#e12afb]/10 text-white"
                : "border-white/[0.03] bg-white/[0.03] text-white/60"
            }`}
            href={href}
            key={label}
          >
            <DashboardIcon className="size-4" name={icon} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
