import "./globals.css";
import AdminShell from "./components/AdminShell";

export const metadata = {
  title: "PlayLog Admin Dashboard",
  description: "Responsive PlayLog admin dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
