/* Infinite scrolling materials strip under the hero — decorative. */
const ITEMS = [
  "Copper Wire & Cable",
  "Brass",
  "Aluminum",
  "HMS Steel",
  "Rebar",
  "Stainless 304/316",
  "Lead",
  "Zinc",
  "Car Batteries",
  "AC Units",
  "Electric Motors",
  "Radiators",
];

export default function MaterialsMarquee() {
  const row = [...ITEMS, ...ITEMS]; // duplicated for a seamless loop
  return (
    <div className="marquee overflow-hidden border-y border-line bg-navy py-3.5">
      <div className="marquee-track items-center" aria-hidden="true">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.22em] text-gray-400 sm:text-base"
          >
            <span className="px-4 sm:px-6">{item}</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
          </span>
        ))}
      </div>
    </div>
  );
}
