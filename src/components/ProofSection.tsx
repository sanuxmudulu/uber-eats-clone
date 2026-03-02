import { Users, Star } from "lucide-react";

const ProofSection = () => {
  return (
    <section className="px-4 py-10 text-center">
      <div className="w-full max-w-6xl mx-auto">
        {/* Headline + subheadline */}
        <h2 className="text-2xl font-bold text-center mb-2 text-accent">
          Recent Reward Claims
        </h2>
        <p className="text-center text-sm mb-4 text-muted-foreground">
          Real results from real people!
        </p>

        {/* Swipe indicator (mobile only) */}
        <div className="flex items-center justify-center mb-4 md:hidden">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span>Swipe to see more</span>
          </div>
        </div>

        {/* Proof images */}
        <div className="w-full px-2 md:px-4">
          {/* Desktop view - show all 3 images side by side */}
          <div className="hidden md:flex md:justify-center md:gap-6">
            <div className="w-80">
              <img
                src="/images/proof1.jpg"
                alt="Proof of Uber Eats reward claim 1"
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="w-80">
              <img
                src="/images/proof2.jpg"
                alt="Proof of Uber Eats reward claim 2"
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="w-80">
              <img
                src="/images/proof3.jpg"
                alt="Proof of Uber Eats reward claim 3"
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Mobile view - scrollable carousel */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 px-2">
              <div className="flex-shrink-0 w-72 snap-center">
                <img
                  src="/images/proof1.jpg"
                  alt="Proof of Uber Eats reward claim 1"
                  className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
                />
              </div>
              <div className="flex-shrink-0 w-72 snap-center">
                <img
                  src="/images/proof2.jpg"
                  alt="Proof of Uber Eats reward claim 2"
                  className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
                />
              </div>
              <div className="flex-shrink-0 w-72 snap-center">
                <img
                  src="/images/proof3.jpg"
                  alt="Proof of Uber Eats reward claim 3"
                  className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-4 md:gap-6 text-sm mt-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users size={14} className="text-accent" />
            <span className="text-xs md:text-sm">25,000+ Vouchers Claimed</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground/60 rounded-full" />
          <div className="flex items-center gap-2">
            <Star size={14} className="text-accent fill-accent" />
            <span className="text-xs md:text-sm">4.8★ average rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
