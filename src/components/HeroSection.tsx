const CTA_URL = "https://trkio.org/aff_c?offer_id=633&aff_id=150406";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center px-4 pt-7 pb-5 text-center">
      {/* Icon */}
      <div className="relative mb-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground">
          <span className="text-3xl font-bold text-background">$</span>
        </div>
        <span className="absolute -top-1 -right-1 text-accent text-lg">✦</span>
      </div>

      {/* Heading */}
      <h1 className="mb-2 text-3xl md:text-4xl font-bold text-accent not-italic whitespace-nowrap">
        Claim Your Gift Card Now!
      </h1>

      <p className="mb-4 text-base text-muted-foreground">
        Higher value deals = faster rewards!
      </p>

      {/* CTA Button */}
      <a
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta mb-2 rounded-full px-7 py-2.5"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
          UE
        </span>

        <span className="flex flex-col items-start leading-tight">
          <span className="text-base font-semibold">$750 Uber Eats Gift Card</span>
          <span className="text-xs font-normal opacity-80">
            (Enter Email &amp; Complete Deals)
          </span>
        </span>
      </a>
    </section>
  );
};

export default HeroSection;
