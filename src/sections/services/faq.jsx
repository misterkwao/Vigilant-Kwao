import { FaqItem } from "../../components/faqItem";
import { faqs } from "../../data/faq";
export const Faq = () => {
  return (
    <div className="mt-18 px-6 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-100 to-slate-600 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h1>
      <div className="mt-8 w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};


