const ProofSection = () => {
  return (
    <section className="px-4 py-8 text-center">
      <h2 className="section-heading mb-2">Your Saving Hack for 2026!</h2>
      <p className="mb-6 text-lg text-muted-foreground">
        Hot offer not to be missed! 🎁
      </p>

      <div className="mx-auto mb-6 max-w-md overflow-hidden rounded-xl border border-border">
        <img
  src="/uber eats proof.png"
  alt="Uber Eats voucher proof"
  className="w-full h-full object-cover"
/>
      </div>

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
