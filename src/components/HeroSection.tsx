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
      <h1 className="mb-2 text-3xl md:text-4xl font-bold text-accent not-italic">
        Claim $750 for Uber Eats
      </h1>

      <p className="mb-5 text-base text-muted-foreground">
        Higher value deals = faster rewards!
      </p>

      {/* CTA Button */}
      <a
        href={CTA_URL}
        target="_self"
        rel="noopener noreferrer"
        className="mb-2 flex w-full max-w-md items-center justify-center rounded-full bg-accent px-6 py-3 text-white text-lg md:text-xl font-bold shadow-lg transition-all duration-200 hover:scale-[1.02]"
      >
        Claim Now
      </a>
    </section>
  );
};

export default HeroSection;
