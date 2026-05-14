const styles = {
  Published: "bg-[#00bc7d]/10 text-[#00d492]",
  Pending: "bg-[#ffb000]/10 text-[#ffb000]",
  Flagged: "bg-[#ff2056]/10 text-[#ff5d81]",
};

export default function ReviewStatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-lg px-2 py-1 text-xs font-medium leading-4 ${styles[status]}`}>
      {status}
    </span>
  );
}
