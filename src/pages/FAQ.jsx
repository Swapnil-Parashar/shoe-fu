import React, { useState } from "react";

const FAQPage = () => {
  // Define an array of questions and answers
  const faqs = [
    {
        question: "How can I track my order?",
        answer: "You can track your order by logging into your account and navigating to the order history page. Alternatively, you can use the tracking link provided in the order confirmation email."
      },
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for unused items. Please refer to our Returns & Exchanges page for detailed instructions on how to initiate a return."
      },
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary depending on the destination. Please refer to our Shipping & Delivery page for more information."
      },
      {
        question: "How do I contact customer support?",
        answer: "You can contact our customer support team via email at support@example.com or by phone at 1-800-123-4567. Our support team is available Monday to Friday from 9:00 AM to 5:00 PM (EST)."
      },
      {
        question: "Can I cancel or modify my order after it has been placed?",
        answer: "Once your order has been placed, it enters our processing system and cannot be canceled or modified. However, you may be able to return the item(s) for a refund or exchange once you receive them. Please refer to our Returns & Exchanges policy for more information."
      },
    // Add more questions and answers here
  ];

  // Define state to track which dropdown is open
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container mx-auto mt-10 px-10"> {/* Reduced max width */}
      <h1 className="text-3xl font-semibold mb-10">Frequently Asked Questions</h1>

      {/* FAQ Section */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="text-base-content rounded-lg shadow-md">
            {/* Question */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full px-4 py-3 focus:outline-none"
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span className="text-gray-500">
                {openIndex === index ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-4 py-3 text-base-content">
                <p className="text-gray-500">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
