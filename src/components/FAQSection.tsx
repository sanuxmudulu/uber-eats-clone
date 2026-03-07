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
      "Most people complete the required deals in about 8-12 minutes",
  },
  {
    question: "What are 'deals'?",
    answer:
      "Simple offers like app downloads, free trials, or short surveys",
  },
  {
    question: "Do I have to pay anything?",
    answer:
      "Many deals are completely free. Some optional trials may require a small subscription",
  },
  {
    question: "Why do I need to enter my email?",
    answer:
      "Your email is used to track your progress and send your Woolworths gift card",
  },
  {
    question: "When do I receive the Woolworths gift card?",
    answer:
      "Once the required deals are completed and verified, your reward is sent to your email",
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
