const ProofSection = () => {
  return (
    <section className="px-4 py-12 text-center">
      <h2 className="section-heading mb-3">Your Saving Hack for 2026!</h2>
      <p className="mb-8 text-lg text-muted-foreground">
        Hot offer not to be missed! 🎁
      </p>

      {/* Proof image placeholder — swap this out easily */}
      <div className="mx-auto mb-8 max-w-md overflow-hidden rounded-xl border border-border">
        <div className="flex aspect-[4/5] items-center justify-center bg-muted/30 text-muted-foreground">
          <span className="text-sm">[ Replace with proof screenshot ]</span>
        </div>
      </div>

      {/* Social proof bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="text-accent">👥</span> 25,000+ Vouchers Claimed
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <span>⭐</span> 4.8★ average rating
        </span>
      </div>
    </section>
  );
};

export default ProofSection;
