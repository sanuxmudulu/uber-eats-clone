const CTA_URL = "https://giftclick.org/aff_c?offer_id=3142&aff_id=150406";

const steps = [
  {
    number: 1,
    title: "REGISTER",
    description: 'Click the Claim Now button above and enter your basic details.',
  },
  {
    number: 2,
    title: "VERIFY",
    description: "Complete 4-5 sponsored deals to prove you are a real person.",
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
      <h1 className="mb-4 text-4xl font-bold tracking-wide text-foreground md:text-5xl">
        WOOLWORTHS
      </h1>

      {/* CTA */}
      <a
        href={CTA_URL}
        target="_self"
        rel="noopener noreferrer"
        className="mb-6 flex w-full max-w-lg items-center justify-center rounded-full bg-accent px-6 py-3 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] md:text-xl"
      >
        CLAIM NOW
      </a>

      {/* Steps Heading */}
      <h2 className="mb-5 text-2xl font-bold uppercase text-foreground md:text-3xl">
        HOW IT WORKS
      </h2>

      {/* Step Cards */}
      <div className="mx-auto flex w-full max-w-lg flex-col gap-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-3xl bg-card px-5 py-5 text-left shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-3xl font-bold text-white shadow-md">
                {step.number}
              </div>

              <div className="pt-1">
                <h3 className="mb-2 text-2xl font-extrabold uppercase leading-none text-foreground">
                  {step.title}
                </h3>
                <p className="text-lg leading-relaxed text-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
