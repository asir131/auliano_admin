import "./globals.css";

export const metadata = {
  title: "PlayLog Admin Dashboard",
  description: "Responsive PlayLog admin dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
