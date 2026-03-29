const faqs = [
  {
    question: "Does this app work completely offline?",
    answer: "Yes. Once you download the content pack, all lessons and audio work without internet. Perfect for traveling in Lithuania or anywhere without reliable WiFi.",
  },
  {
    question: "Is LietuCoach suitable for complete beginners?",
    answer: "Yes. We start with the basics - the alphabet, simple greetings like Labas (hello), and everyday phrases. No prior Lithuanian knowledge is needed.",
  },
  {
    question: "What kind of Lithuanian will I learn?",
    answer: "Practical, everyday Lithuanian - the kind you actually need in a cafe, on public transport, or when meeting locals. We skip textbook grammar that you wont use.",
  },
  {
    question: "Do I need to create an account?",
    answer: "Not at all. You can start learning immediately. Creating an account is optional and lets you sync your progress across devices.",
  },
  {
    question: "Is the app really free?",
    answer: "The core Survival A1 course is completely free - no ads, no subscriptions. Additional advanced content may be added later, but the basics will always be free.",
  },
  {
    question: "Is there an iOS version?",
    answer: "Not yet. We are focused on perfecting the Android experience first. An iOS version is planned for the future.",
  },
  {
    question: "How do I get help if something is not working?",
    answer: "Visit our Support Center or email us at hello@dhossain.com. We typically respond within 24-48 hours.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Common questions about LietuCoach.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            Quick answers to help you decide if LietuCoach is right for you.
          </p>
        </div>
        <div className="mx-auto max-w-3xl divide-y divide-neutral-200 rounded-xl bg-white shadow-sm">
          {faqs.map((faq, index) => (
            <details key={index} className="group p-6 open:bg-neutral-50">
              <summary className="flex cursor-pointer list-none items-center justify-between font-heading font-semibold text-neutral-900">
                <span>{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}