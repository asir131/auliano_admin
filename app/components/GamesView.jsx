import { games } from "./data";
import FeaturedGame from "./games/FeaturedGame";
import GamesCatalog from "./games/GamesCatalog";
import GameMetricCard from "./games/GameMetricCard";
import { gameMetrics } from "./games/gameConstants";

export default function GamesView() {
  return (
    <div className="mx-auto flex max-w-[1214px] flex-col gap-4">
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.42fr_1fr]">
        <FeaturedGame game={games[0]} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-1">
          {gameMetrics.map((metric) => (
            <GameMetricCard key={metric[0]} metric={metric} />
          ))}
        </div>
      </section>

      <GamesCatalog games={games} />
    </div>
  );
}
