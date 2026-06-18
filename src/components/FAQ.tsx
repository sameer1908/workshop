import React from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const faqs: FAQItem[] = [
        {
            question: "Do students need prior coding experience?",
            answer: "No. Beginners are welcome.",
        },
        {
            question: "Will sessions be recorded?",
            answer: "Yes. Recordings will be shared after each session.",
        },
        {
            question: "What is required to attend?",
            answer: "A laptop and stable internet connection.",
        },
    ];

    return (
        <section className="section">
            <h2>FAQs</h2>

            {faqs.map((faq, index) => (
                <div key={index} className="faq">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </section>
    );
};

export default FAQ;