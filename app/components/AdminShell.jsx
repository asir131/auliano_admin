"use client";

import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const pageCopy = {
  "/": {
    title: "Dashboard",
    subtitle: "Welcome back - here's what's happening on PlayLog today.",
  },
  "/users": {
    title: "Users",
    subtitle: "Manage PlayLog users, permissions, and account activity.",
  },
  "/games": {
    title: "Game Library",
    subtitle: "Add, edit, and curate the games catalog.",
  },
  "/reviews": {
    title: "Review Moderation",
    subtitle: "Monitor and moderate user reviews.",
  },
  "/comments": {
    title: "Comments",
    subtitle: "Review recent conversations and moderation queues.",
  },
  "/lists": {
    title: "Lists",
    subtitle: "Manage curated game collections.",
  },
  "/reports": {
    title: "Reports",
    subtitle: "Investigate user reports and policy flags.",
  },
  "/notifications": {
    title: "Notifications",
    subtitle: "Send and monitor admin notifications.",
  },
};

function getPageCopy(pathname) {
  const match = Object.keys(pageCopy)
    .filter((path) => path !== "/" && pathname.startsWith(path))
    .sort((a, b) => b.length - a.length)[0];

  return pageCopy[match || pathname] || pageCopy["/"];
}

export default function AdminShell({ children }) {
  const pathname = usePathname();
  const copy = getPageCopy(pathname);

  return (
    <div className="min-h-screen bg-[#0a0d12] text-white">
      <Sidebar />
      <Topbar subtitle={copy.subtitle} title={copy.title} />
      <MobileNav />
      <main className="px-4 py-8 md:px-8 lg:ml-64">{children}</main>
    </div>
  );
}
