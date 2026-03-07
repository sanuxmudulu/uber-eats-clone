const CTA_URL = "https://giftclick.org/aff_c?offer_id=3142&aff_id=150406";

const steps = [
  { number: 1, title: 'Click on "Claim Now"' },
  { number: 2, title: "Enter your email and basic info" },
  { number: 3, title: "Complete 4–6 sponsored deals" },
  { number: 4, title: "Enjoy your $500 Woolworths gift card!" },
];

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center px-4 pt-6 pb-4 text-center">

      {/* Brand */}
      <h1 className="mb-1 text-4xl md:text-5xl font-bold text-accent">
        Woolworths
      </h1>

      <div className="mb-2 h-1 w-16 rounded-full bg-accent" />

      {/* Headline */}
      <h2 className="mb-3 text-xl md:text-2xl font-semibold text-foreground whitespace-nowrap">
        Complete Your Registration
      </h2>

      {/* Subtext */}
      <p className="mb-4 text-sm text-muted-foreground">
        Follow these simple steps to claim your $500 Woolworths gift card
      </p>

      {/* Steps Box */}
      <div className="card-dark mx-auto mb-4 w-full max-w-lg px-5 py-4">
        <div className="space-y-2">
          {steps.map((step) => (
            <div key={step.number} className="flex items-center gap-3">
              <div className="step-circle">{step.number}</div>

              <p className="text-sm md:text-base font-semibold text-foreground">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-3 text-[10px] text-muted-foreground">
          * Terms and conditions apply. Gift card values may vary based on completed offers.
        </p>
      </div>

      {/* CTA */}
      <a
        href={CTA_URL}
        target="_self"
        rel="noopener noreferrer"
        className="flex w-full max-w-lg items-center justify-center rounded-full bg-accent px-6 py-3 text-lg md:text-xl font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
      >
        CLAIM NOW
      </a>

      <p className="mt-2 max-w-lg text-xs text-muted-foreground">
        By clicking "Claim Now", you agree to complete the required steps to receive your gift card.
      </p>

    </section>
  );
};

export default HeroSection;
