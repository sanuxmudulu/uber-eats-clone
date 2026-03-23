import { useEffect, useMemo, useState } from "react";

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
    description: "Complete 3–5 sponsored deals to prove you are a real person.",
  },
  {
    number: 3,
    title: "GET REWARDED",
    description:
      "Receive your Woolworths Gift Card instantly upon completion to fund your groceries!",
  },
];

const notifications = [
  "Olivia claimed $500 for completing 5 deals",
"Charlotte received $400 for doing 4 deals",
"Amelia claimed $250 for completing 3 deals",
"Isla received $500 for doing 5 deals",
"Ava claimed $400 for completing 4 deals",
"Mia received $250 for doing 3 deals",
"Grace claimed $500 for completing 5 deals",
"Willow received $400 for doing 4 deals",
"Harper claimed $250 for completing 3 deals",
"Chloe received $500 for doing 5 deals",
];

const HeroSection = () => {
  const [activeCount, setActiveCount] = useState(179);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const shuffledNotifications = useMemo(() => {
    const arr = [...notifications];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    const cycleTimer = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % shuffledNotifications.length);
        setActiveCount((prev) => {
  const changes = [-2, -1, 1, 2];
  const change = changes[Math.floor(Math.random() * changes.length)];
  const next = prev + change;

  if (next < 175) return prev + 1;
  if (next > 184) return prev - 1;

  return next;
});
        setVisible(true);
      }, 350);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(cycleTimer);
    };
  }, [shuffledNotifications.length]);

  return (
    <section className="flex flex-col items-center px-4 pt-6 pb-4 text-center">
      <div className="mb-4 flex w-full max-w-lg justify-end">
  <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent shadow-sm">
    Active: {activeCount}
  </div>
</div>
      {/* Brand */}
      <h1 className="mb-6 text-4xl md:text-5xl font-bold text-[#00843D]">
        WOOLWORTHS
      </h1>

      {/* HOW IT WORKS */}
      <h2 className="mb-6 text-2xl md:text-3xl font-bold uppercase text-foreground">
        HOW IT WORKS
      </h2>

      {/* Step Cards */}
      <div className="mx-auto mb-6 flex w-full max-w-lg flex-col gap-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl bg-card px-4 py-4 text-left shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                {step.number}
              </div>

              <div>
                <h3 className="mb-1 text-lg font-extrabold uppercase leading-none text-foreground md:text-xl">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-foreground md:text-base">
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
        className="flex w-full max-w-lg items-center justify-center rounded-full bg-accent px-6 py-3 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] md:text-xl"
      >
        CLAIM NOW
      </a>

      <p className="mt-2 max-w-lg text-xs text-muted-foreground">
        Start with a few quick deals and unlock Woolworths rewards. Complete
        more deals to increase your reward amount (up to $500).
      </p>

      {/* Floating notification */}
      <div className="pointer-events-none fixed bottom-4 left-1/2 z-50 w-[calc(100%-24px)] max-w-md -translate-x-1/2 md:bottom-5">
        <div
          className={`rounded-xl border border-border bg-card/95 px-3 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <p className="truncate text-xs font-medium text-foreground sm:text-sm">
              {shuffledNotifications[currentIndex]}
            </p>
            <span className="shrink-0 rounded-full bg-accent/10 px-2 py-1 text-[10px] font-semibold text-accent sm:text-xs">
              Active: {activeCount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
