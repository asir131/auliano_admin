"use client";

import { useState } from "react";
import AddGameModal from "./AddGameModal";
import GameCard from "./GameCard";
import GamesToolbar from "./GamesToolbar";

export default function GamesCatalog({ games }) {
  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <section className="rounded-[14px] border border-white/[0.05] bg-[#161b22] p-5 md:p-6">
      <GamesToolbar onAddGame={() => setAddModalOpen(true)} />

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {games.map((game) => (
          <GameCard game={game} key={game.title} />
        ))}
      </div>

      <AddGameModal open={addModalOpen} onClose={() => setAddModalOpen(false)} />
    </section>
  );
}
