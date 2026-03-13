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
      <div className="mx-auto max-w-lg">
        <h2 className="mb-5 text-center text-2xl font-bold uppercase text-foreground md:text-3xl">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-2xl border-0 bg-card px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
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
