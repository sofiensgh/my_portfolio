export function Tag({ label }: { label: string }) {
  return (
    <span
      className="rounded-lg border border-[var(--color-border)] bg-white/5 px-2 py-1 font-mono text-[11px] font-medium tracking-wide text-[var(--color-fg)]/80"
      style={{ fontFamily: 'var(--font-mono)' }}
    >
      {label}
    </span>
  )
}

