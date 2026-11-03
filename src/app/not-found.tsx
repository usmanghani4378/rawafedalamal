import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <div className="text-center">
        <p className="font-display text-8xl font-bold text-navy">404</p>
        <h1 className="heading-lg mt-4 text-navy">This Page Got Scrapped</h1>
        <p className="mt-3 text-steel">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
