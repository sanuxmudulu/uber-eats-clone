const CTA_URL = "https://giftclick.org/aff_c?offer_id=3142&aff_id=150406";

const steps = [
  {
    number: 1,
    title: 'Click on "Claim Now"',
  },
  {
    number: 2,
    title: "Enter your email and basic info",
  },
  {
    number: 3,
    title: "Complete 4–6 sponsored deals",
  },
  {
    number: 4,
    title: "Enjoy your $500 Woolworths gift card!",
  },
];

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center px-4 pt-8 pb-6 text-center">
      <h1 className="mb-2 text-3xl font-bold text-accent md:text-4xl">
        Woolworths
      </h1>

      <div className="mb-4 h-1 w-16 rounded-full bg-accent" />

      <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
        Complete Your Registration
      </h2>

      <p className="mb-8 text-base text-muted-foreground">
        Follow these simple steps to claim your $500 Woolworths gift card
      </p>

      <div className="mx-auto mb-8 flex w-full max-w-lg flex-col gap-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-5 text-left"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
              {step.number}
            </div>
            <p className="text-base font-semibold text-foreground md:text-lg">
              {step.title}
            </p>
          </div>
        ))}
      </div>

      <a
        href={CTA_URL}
        target="_self"
        rel="noopener noreferrer"
        className="mb-4 flex w-full max-w-lg items-center justify-center rounded-2xl bg-accent px-6 py-4 text-xl font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] md:text-2xl"
      >
        CLAIM NOW
      </a>

      <p className="max-w-lg text-sm text-muted-foreground">
        By clicking "Claim Now", you agree to complete the required steps to
        receive your gift card.
      </p>
    </section>
  );
};

export default HeroSection;
