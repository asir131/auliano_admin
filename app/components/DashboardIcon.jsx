const paths = {
  dashboard: "M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m13-10a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm7 10v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75",
  games:
    "M6 12h4m-2-2v4m7-1h.01M18 11h.01M5 8h14a3 3 0 0 1 2.94 3.59l-.67 3.36A4 4 0 0 1 17.35 18h-.72a3 3 0 0 1-2.12-.88L13.39 16h-2.78l-1.12 1.12A3 3 0 0 1 7.37 18h-.72a4 4 0 0 1-3.92-3.05l-.67-3.36A3 3 0 0 1 5 8Z",
  star:
    "m12 3 2.7 5.47 6.03.88-4.36 4.25 1.03 6-5.4-2.84L6.6 19.6l1.03-6-4.36-4.25 6.03-.88L12 3Z",
  comment:
    "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z",
  list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  flag: "M5 21V4m0 0h12l-1 5 1 5H5",
  bell:
    "M18 8A6 6 0 0 0 6 8c0 7-3 7-3 9h18c0-2-3-2-3-9Zm-8.27 13a2.5 2.5 0 0 0 4.54 0",
  search: "m21 21-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z",
  settings:
    "M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Zm8.5-3.5a7.8 7.8 0 0 0-.08-1.1l2.08-1.6-2-3.46-2.46 1a8.18 8.18 0 0 0-1.9-1.1L15.8 3h-4l-.36 2.74c-.68.25-1.32.62-1.9 1.1l-2.46-1-2 3.46 2.08 1.6A7.8 7.8 0 0 0 7.08 12c0 .37.03.74.08 1.1l-2.08 1.6 2 3.46 2.46-1c.58.48 1.22.85 1.9 1.1l.36 2.74h4l.36-2.74c.68-.25 1.32-.62 1.9-1.1l2.46 1 2-3.46-2.08-1.6c.05-.36.08-.73.08-1.1Z",
  pulse: "M22 12h-4l-3 8L9 4l-3 8H2",
  plusUser: "M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm8-4v6m3-3h-6",
  trash:
    "M3 6h18m-2 0-.9 14.1A2 2 0 0 1 16.1 22H7.9a2 2 0 0 1-2-1.9L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
};

export default function DashboardIcon({ name, className = "size-4", stroke = true }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill={stroke ? "none" : "currentColor"}
      stroke={stroke ? "currentColor" : "none"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d={paths[name]} />
    </svg>
  );
}
