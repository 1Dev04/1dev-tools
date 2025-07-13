import { useState } from "react";

export const FAQItem = ({ question, answer, answer2 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-semibold text-content text-2xl hover:text-accent primary-focus focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`faq-${question}`}
      >
        {question}
      </button>

      <div
        id={`faq-${question}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-100 opacity-100 mt-2 text-xl" : "max-h-0 opacity-0"
        } text-base-content`}
      >
        <div className="py-4 ">{answer}</div>
        <div className="py-2">{answer2}</div>
      </div>

      <hr className="my-4" />
    </div>
  );
};
