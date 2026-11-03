/* Reusable section heading: accent kicker + big condensed title + optional
   Arabic title + optional intro. Reveals on scroll. */
import Reveal from "@/components/Reveal";

export default function SectionHeading({
  kicker,
  title,
  titleAr,
  intro,
  center = false,
  dark = false,
}: {
  kicker: string;
  title: string;
  titleAr?: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className={`kicker ${center ? "kicker--center" : ""}`}>{kicker}</span>
      <h2
        className={`heading-lg mt-3 ${dark ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {titleAr && (
        <p
          lang="ar"
          className={`ar mt-1 text-xl font-bold ${dark ? "text-blue-200/80" : "text-steel"}`}
        >
          {titleAr}
        </p>
      )}
      {intro && (
        <p className={`mt-4 leading-relaxed ${dark ? "text-gray-400" : "text-steel"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
