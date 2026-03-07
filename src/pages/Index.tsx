import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import FooterDisclaimer from "@/components/FooterDisclaimer";

const Index = () => {
  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-background">
      <HeroSection />
      <FAQSection />
      <FooterDisclaimer />
    </main>
  );
};

export default Index;
