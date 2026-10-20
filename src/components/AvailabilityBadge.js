export default function AvailabilityBadge({ isSummoning, onToggle }) {
  return (
    <button
      type="button"
      aria-pressed={isSummoning}
      onClick={onToggle}
      className="inline-flex h-10 w-44 items-center justify-center gap-2 rounded-full bg-[#0A3019] px-3 text-xs font-medium text-[#80F29A] shadow-[0_0_0_1px_rgba(128,242,154,0.12)] transition duration-300 hover:shadow-[0_0_16px_rgba(128,242,154,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80F29A] motion-reduce:transition-none"
    >
      {isSummoning ? (
        <span
          aria-hidden="true"
          className="motion-safe:animate-pulse"
        >
          ✨
        </span>
      ) : (
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#80F29A] opacity-40 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#80F29A] shadow-[0_0_8px_rgba(128,242,154,0.8)]" />
        </span>
      )}
      <span className="whitespace-nowrap">
        {isSummoning ? "Summoning Nneoma" : "Open to Work"}
      </span>
    </button>
  );
}
