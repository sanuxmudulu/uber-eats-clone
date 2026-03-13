const CTA_URL = "https://giftclick.org/aff_c?offer_id=3142&aff_id=150406";

const steps = [
  {
    number: 1,
    title: "REGISTER",
    description: "Click the Claim Now button below and enter your basic details.",
  },
  {
    number: 2,
    title: "VERIFY",
    description: "Complete 4–5 sponsored deals to prove you are a real person.",
  },
  {
    number: 3,
    title: "GET REWARDED",
    description:
      "Receive your Woolworths Gift Card instantly upon completion to fund your groceries!",
  },
];

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center px-4 pt-6 pb-4 text-center">

      {/* Brand */}
      <h1 className="mb-5 text-4xl md:text-5xl font-extrabold tracking-widest text-green-600">
        WOOLWORTHS
      </h1>

      {/* Steps Heading */}
      <h2 className="mb-4 text-xl md:text-2xl font-bold uppercase text-foreground">
        HOW IT WORKS
      </h2>

      {/* Step Cards */}
      <div className="mx-auto flex w-full max-w-lg flex-col gap-3 mb-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl bg-card px-4 py-4 text-left shadow-sm"
          >
            <div className="flex items-start gap-3">

              {/* Step Number */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                {step.number}
              </div>

              <div>
                <h3 className="text-xl font-extrabold uppercase leading-none text-foreground mb-1">
                  {step.title}
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-foreground">
                  {step.description}
                </p>
              </div>

            </div>
          </div>
        ))}
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
