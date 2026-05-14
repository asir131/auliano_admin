import { gameStatusStyles } from "./gameConstants";

export default function GameStatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-lg px-2 py-1 text-xs font-medium leading-4 ${gameStatusStyles[status]}`}>
      {status}
    </span>
  );
}
