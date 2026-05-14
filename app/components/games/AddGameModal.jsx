"use client";

import { useEffect } from "react";
import DashboardIcon from "../DashboardIcon";

const genres = ["Action RPG", "Open World", "Metroidvania", "Roguelike", "Simulation", "Adventure"];
const statuses = ["Published", "Review", "Draft", "Archived"];
const platforms = ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"];

function Field({ label, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-medium leading-5 text-white/70">{label}</span>
      {children}
    </label>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={`h-11 w-full rounded-lg border border-white/10 bg-white/[0.05] px-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#8e51ff]/50 ${className}`}
      {...props}
    />
  );
}

function Select({ children, ...props }) {
  return (
    <span className="relative block">
      <select
        className="h-11 w-full appearance-none rounded-lg border border-white/10 bg-white/[0.05] px-3 pr-10 text-sm text-white outline-none focus:border-[#8e51ff]/50"
        {...props}
      >
        {children}
      </select>
      <DashboardIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-white/35" name="chevronDown" />
    </span>
  );
}

function PlatformOption({ label }) {
  return (
    <label className="flex h-10 items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 text-sm text-white/65">
      <input className="size-4 accent-[#8e51ff]" type="checkbox" defaultChecked={label === "PC"} />
      <span className="truncate">{label}</span>
    </label>
  );
}

export default function AddGameModal({ open, onClose }) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 px-0 backdrop-blur-sm sm:items-center sm:px-4" role="dialog" aria-modal="true" aria-labelledby="add-game-title">
      <button className="absolute inset-0 cursor-default" type="button" aria-label="Close add game modal" onClick={onClose} />

      <section className="relative flex max-h-[calc(100vh-24px)] w-full flex-col overflow-hidden rounded-t-[18px] border border-white/[0.06] bg-[#161b22] shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:max-h-[90vh] sm:max-w-[760px] sm:rounded-[18px]">
        <header className="flex items-start justify-between gap-4 border-b border-white/[0.05] px-5 py-5 sm:px-6">
          <div>
            <p className="text-sm font-medium leading-5 text-[#a684ff]">Game Library</p>
            <h2 id="add-game-title" className="mt-1 text-xl font-medium leading-7 tracking-[-0.4px] text-white">
              Add New Game
            </h2>
            <p className="mt-1 text-sm leading-5 text-white/40">Create a catalog entry with status, media, and platform details.</p>
          </div>
          <button className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-white/[0.05] text-white/55 transition hover:bg-white/[0.08] hover:text-white" type="button" aria-label="Close modal" onClick={onClose}>
            <DashboardIcon className="size-5" name="x" />
          </button>
        </header>

        <form className="overflow-y-auto px-5 py-5 sm:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Game Title">
              <Input placeholder="Enter game title" type="text" />
            </Field>

            <Field label="Developer">
              <Input placeholder="Studio name" type="text" />
            </Field>

            <Field label="Genre">
              <Select defaultValue="">
                <option value="" disabled>
                  Select genre
                </option>
                {genres.map((genre) => (
                  <option className="bg-[#161b22]" key={genre}>
                    {genre}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Status">
              <Select defaultValue="Draft">
                {statuses.map((status) => (
                  <option className="bg-[#161b22]" key={status}>
                    {status}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Release Date">
              <span className="relative block">
                <Input className="pr-10" type="date" />
                <DashboardIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-white/35" name="calendar" />
              </span>
            </Field>

            <Field label="Rating">
              <Input placeholder="4.8" type="number" min="0" max="5" step="0.1" />
            </Field>

            <Field label="Description" className="sm:col-span-2">
              <textarea
                className="min-h-[104px] w-full resize-none rounded-lg border border-white/10 bg-white/[0.05] px-3 py-3 text-sm leading-5 text-white outline-none placeholder:text-white/30 focus:border-[#8e51ff]/50"
                placeholder="Write a short game description..."
              />
            </Field>

            <div className="sm:col-span-2">
              <p className="mb-2 text-sm font-medium leading-5 text-white/70">Platforms</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {platforms.map((platform) => (
                  <PlatformOption key={platform} label={platform} />
                ))}
              </div>
            </div>

            <div className="sm:col-span-2">
              <p className="mb-2 text-sm font-medium leading-5 text-white/70">Cover Image</p>
              <button className="flex min-h-[126px] w-full flex-col items-center justify-center rounded-[12px] border border-dashed border-white/15 bg-white/[0.03] px-4 text-center transition hover:border-[#8e51ff]/50 hover:bg-[#8e51ff]/5" type="button">
                <span className="grid size-11 place-items-center rounded-[14px] bg-gradient-to-br from-[#8e51ff] to-[#e12afb] text-white">
                  <DashboardIcon className="size-5" name="upload" />
                </span>
                <span className="mt-3 text-sm font-medium leading-5 text-white">Upload cover image</span>
                <span className="mt-1 text-xs leading-4 text-white/35">PNG, JPG, or WEBP up to 10MB</span>
              </button>
            </div>
          </div>
        </form>

        <footer className="flex flex-col-reverse gap-3 border-t border-white/[0.05] px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
          <button className="inline-flex h-11 items-center justify-center rounded-lg bg-white/[0.05] px-5 text-sm font-medium text-white/65 transition hover:bg-white/[0.08] hover:text-white" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#8e51ff] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(142,81,255,0.22)] transition hover:bg-[#9b66ff]" type="button">
            <DashboardIcon className="size-4" name="plus" />
            Add Game
          </button>
        </footer>
      </section>
    </div>
  );
}
