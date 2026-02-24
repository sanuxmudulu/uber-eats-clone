const steps = [
  {
    number: 1,
    title: "Click The Button Above 👆",
    description: "Start your gift card claim process",
  },
  {
    number: 2,
    title: "Enter Your Email & Basic Info",
    description: "We need this to send your gift card",
  },
  {
    number: 3,
    title: "Complete 4–6 Deals",
    description: "Simple tasks: app downloads and surveys",
  },
  {
    number: 4,
    title: "Claim Your Gift Card!",
    description: "Your reward is waiting for you!",
  },
];

const StepsSection = () => {
  return (
    <section className="px-4 pb-4">
      <div className="card-dark mx-auto max-w-lg py-5">
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-3">
              <div className="step-circle">{step.number}</div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] text-muted-foreground">
          * Terms and conditions apply. Gift card values may vary based on
          completed offers.
        </p>
      </div>
    </section>
  );
};

export default StepsSection;
