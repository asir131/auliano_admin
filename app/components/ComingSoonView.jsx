export default function ComingSoonView({ name }) {
  return (
    <section className="mx-auto flex min-h-[520px] max-w-[1214px] items-center justify-center rounded-[14px] border border-white/[0.05] bg-[#161b22] p-6 text-center">
      <div>
        <p className="text-sm font-medium leading-5 text-[#a684ff]">{name}</p>
        <h2 className="mt-2 text-2xl font-medium leading-8 tracking-[-0.6px] text-white">Page coming soon</h2>
        <p className="mt-3 max-w-md text-sm leading-5 text-white/45">
          The route is ready. Add the {name.toLowerCase()} interface here when that dashboard section is designed.
        </p>
      </div>
    </section>
  );
}
