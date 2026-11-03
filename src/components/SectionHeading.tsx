/* Reusable section heading: amber kicker + big condensed title + optional intro */
export default function SectionHeading({
  kicker,
  title,
  intro,
  center = false,
  dark = false,
}: {
  kicker: string;
  title: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className={`kicker ${center ? "kicker--center" : ""}`}>{kicker}</span>
      <h2
        className={`heading-lg mt-3 ${dark ? "text-white" : "text-graphite"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 leading-relaxed ${dark ? "text-gray-400" : "text-steel"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
