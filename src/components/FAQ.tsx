import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Are tutors qualified for UK syllabus?",
      answer: "Yes! All our tutors are specially trained in UK exam boards (AQA, Edexcel, OCR) and have years of experience teaching GCSE and A-Level students.",
    },
    {
      question: "How secure is Zoom for my child?",
      answer: "We use password-protected Zoom sessions with waiting rooms enabled. Parents can monitor sessions, and all classes are recorded for safety and review purposes.",
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 100% money-back guarantee if you're not satisfied after your first paid class. No questions asked.",
    },
    {
      question: "Can I switch subjects or tutors?",
      answer: "Absolutely! You can change subjects or request a different tutor anytime at no extra cost.",
    },
    {
      question: "How do group classes work?",
      answer: "Groups are capped at 5 students of similar ability levels. This ensures personalized attention while maintaining an interactive learning environment.",
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes! We provide comprehensive notes, practice worksheets, and past papers aligned with your exam board, all included in your subscription.",
    },
    {
      question: "What if my child misses a class?",
      answer: "No worries! All sessions are recorded and available within 24 hours. Your child can watch the recording and catch up anytime.",
    },
    {
      question: "How do I track my child's progress?",
      answer: "You'll receive monthly progress reports with grades, attendance, and tutor feedback. Plus, our parent portal shows real-time class participation.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-lg px-6 border-none"
            >
              <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary">
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

export default FAQ;
