import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take?",
    answer:
      "Most users complete the required deals within 15–30 minutes. Your gift card is typically delivered within 24–48 hours after verification.",
  },
  {
    question: "What are 'deals'?",
    answer:
      "Deals are simple tasks like downloading a free app, signing up for a free trial, or completing a short survey. They are quick and easy to complete.",
  },
  {
    question: "Do I have to pay anything?",
    answer:
      "No, you do not have to pay anything. The deals are free to complete. Some may require a free trial signup, which you can cancel anytime.",
  },
  {
    question: "Why do I need to enter my email?",
    answer:
      "We need your email to send you the Uber Eats gift card code and to verify your completed deals.",
  },
  {
    question: "When do I get the Uber Eats gift card?",
    answer:
      "After completing the required deals and verification, your gift card will be delivered to your email within 24–48 hours.",
  },
];

const FAQSection = () => {
  return (
    <section className="px-4 py-8">
      <div className="card-dark mx-auto max-w-lg py-6">
        <h2 className="section-heading mb-4 text-center">Common Questions</h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-muted/20 px-4"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
