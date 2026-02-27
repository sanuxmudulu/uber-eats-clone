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
  target="_self"
  rel="noopener noreferrer"
  className="group relative mb-2 flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 text-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
>
  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25 text-xs font-bold">
    UE
  </span>

  <div className="leading-tight text-center">
    <div className="text-base font-semibold">
      $750 Uber Eats Gift Card
    </div>
    <div className="text-xs opacity-90">
      (Enter Email &amp; Complete Deals)
    </div>
  </div>
</a>
    </section>
  );
};

export default HeroSection;
