const CTA_URL = "https://trkio.org/aff_c?offer_id=633&aff_id=150406";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center px-4 pt-12 pb-8 text-center">
      {/* Icon */}
      <div className="relative mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground">
          <span className="text-3xl font-bold text-background">$</span>
        </div>
        <span className="absolute -top-1 -right-1 text-accent text-lg">✦</span>
      </div>

      {/* Heading */}
      <h1 className="section-heading mb-4 text-3xl md:text-5xl">
        Claim Your Gift Card Now!
      </h1>

      <p className="mb-8 text-lg text-muted-foreground">
        Higher value deals = faster rewards!
      </p>

      {/* CTA Button */}
      <a
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta mb-4"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
          UE
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span>$750 Uber Eats Gift Card</span>
          <span className="text-sm font-normal opacity-80">
            (Enter Email &amp; Complete Deals)
          </span>
        </span>
      </a>
    </section>
  );
};

export default HeroSection;
