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
