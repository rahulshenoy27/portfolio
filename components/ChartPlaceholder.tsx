type ChartPlaceholderProps = {
  label: string;
  values: number[];
  captions: string[];
};

export function ChartPlaceholder({ label, values, captions }: ChartPlaceholderProps) {
  return (
    <div className="rounded-lg border border-line bg-panel p-5 shadow-panel">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-white">{label}</p>
          <p className="mt-1 text-xs text-muted">Placeholder analytical visual</p>
        </div>
        <div className="rounded-md bg-accent-soft px-3 py-1 text-xs font-medium text-accent">Live BI view</div>
      </div>
      <div className="mt-8 flex h-56 items-end gap-3 border-b border-l border-line px-3 pb-3">
        {values.map((value, index) => (
          <div key={captions[index]} className="flex flex-1 flex-col items-center gap-3">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-accent-soft to-accent transition hover:opacity-90"
              style={{ height: `${value}%` }}
              aria-label={`${captions[index]} ${value}%`}
            />
            <span className="text-xs text-muted">{captions[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
