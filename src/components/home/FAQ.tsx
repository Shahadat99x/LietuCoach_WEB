const faqs = [
  {
    question: "Is the app really offline?",
    answer: "Yes! Once you download the content packs, you can access lessons, audio, and quizzes without an internet connection. Perfect for travel.",
  },
  {
    question: "Is this suitable for absolute beginners?",
    answer: "Absolutely. We start from \"Labas\" (Hello) and the alphabet, guiding you through A1 basics.",
  },
  {
    question: "Do I need to create an account?",
    answer: "You can start learning immediately. Account creation is optional and mostly used if you want to save progress across devices (coming soon).",
  },
  {
    question: "Is it free?",
    answer: "LietuCoach offers free lessons to get you started. Some advanced content may require a one-time purchase or subscription.",
  },
  {
    question: "Is there an iOS version?",
    answer: "Currently, we are focused on delivering the best possible Android experience. Stay tuned!",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Clean & clear answers.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            Got questions? We've got answers.
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
