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
      "2-3 mins per deal on average",
  },
  {
    question: "What are 'deals'?",
    answer:
      "Simple tasks like app downloads, surveys, or trial",
  },
  {
    question: "Do I have to pay anything?",
    answer:
      "Many deals are free. Some optional trials may include a small subscription",
  },
  {
    question: "Why do I need to enter my email?",
    answer:
      "So your reward + updates can be sent to you",
  },
  {
    question: "When do I get the Uber Eats gift card?",
    answer:
      "After you finish the recommended deals, you’ll receive the gift card in email",
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
