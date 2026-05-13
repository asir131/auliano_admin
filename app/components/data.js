export const navItems = [
  ["dashboard", "Dashboard"],
  ["users", "Users"],
  ["games", "Games"],
  ["star", "Reviews"],
  ["comment", "Comments"],
  ["list", "Lists"],
  ["flag", "Reports"],
  ["bell", "Notifications"],
];

export const stats = [
  {
    icon: "users",
    label: "Total Users",
    value: "48,392",
    trend: "+12.4%",
    tone: "from-[#8e51ff] to-[#e12afb]",
  },
  {
    icon: "games",
    label: "Total Games",
    value: "2,847",
    trend: "+3.1%",
    tone: "from-[#00b8db] to-[#2b7fff]",
  },
  {
    icon: "star",
    label: "Total Reviews",
    value: "184,021",
    trend: "+18.7%",
    tone: "from-[#ff8a00] to-[#ff5f1f]",
  },
  {
    icon: "pulse",
    label: "Active Users",
    value: "12,540",
    trend: "-2.3%",
    tone: "from-[#21d4a6] to-[#00b894]",
    negative: true,
  },
];

export const reviews = [
  ["avatar-1.png", "ShadowStrike", "Elden Ring II", "2m ago", 5],
  ["avatar-2.png", "PixelQueen", "Hollow Knight: Silksong", "8m ago", 5],
  ["avatar-3.png", "NovaByte", "Cyberpunk 2078", "14m ago", 3],
  ["avatar-4.png", "RetroKnight", "Stardew Valley 2", "22m ago", 4],
  ["avatar-5.png", "VoidWalker", "Hades II", "31m ago", 5],
];

export const actions = [
  ["plusUser", "New user signed up: kira_plays", "Just now", "text-[#00d492]"],
  ["trash", "Review deleted (spam)", "5m ago", "text-[#ff2056]"],
  ["shield", "User suspended: toxic_gamer42", "12m ago", "text-[#ffb000]"],
  ["plusUser", "New user signed up: lunaquest", "18m ago", "text-[#00d492]"],
  ["trash", "Comment removed (harassment)", "26m ago", "text-[#ff2056]"],
];
