import minusIcon from "../../assets/minusIcon.svg";
import plusIcon from "../../assets/plusIcon.svg";
import { useRef, useEffect, useState } from "react";

function Question({ faqObject: { question, answer }, num: val }) {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);
  const iconRef = useRef(null);

  const toggle = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;

    if (isOpen) {
      el.style.height = el.scrollHeight + "px";
      el.style.opacity = "1";
    } else {
      el.style.height = el.scrollHeight + "px";
      requestAnimationFrame(() => {
        el.style.height = "0px";
        el.style.opacity = "0";
      });
    }
    const onTransitionEnd = (e) => {
      if (e.propertyName !== "height") return;
      if (isOpen) {
        el.style.height = "auto";
      }
    };
    el.addEventListener("transitionend", onTransitionEnd);
    return () => el.removeEventListener("transitionend", onTransitionEnd);
  }, [isOpen]);

  return (
    <div className="faq-box">
      <div className="questionNum">
        <p>{val < 10 ? `0${val}` : val}</p>
      </div>

      <div
        className="question"
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } }}
        aria-expanded={isOpen}
        aria-controls={`answer-${val}`}
      >
        <h4>{question}</h4>
        <img
          ref={iconRef}
          className={`icon ${isOpen ? "open" : ""}`}
          src={isOpen ? minusIcon : plusIcon}
          alt={isOpen ? "collapse" : "expand"}
          onClick={(e) => { e.stopPropagation(); toggle(); }}
        />
      </div>

      <span></span>

      <div
        id={`answer-${val}`}
        ref={answerRef}
        className={`answer ${isOpen ? "open" : ""}`}
        // we keep content in a container (div) so height animation works
      >
        <p style={{ margin: 0, padding: "8px 12px 16px 12px" }}>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const queAns = [
    {
      question: "What is the fee for the program?",
      answer: "The full program costs around 2,500 £, an affordable investment for an internationally recognized qualification."
    },
    {
      question: "Are installment plans offered?",
      answer: "Yes, we offer easy and flexible installment options to make payments manageable."
    },
    {
      question: "Is the program online or on-site?",
      answer: "Currently offered on-site for a richer, face-to-face learning experience."
    },
    {
      question: "Which countries accept this qualification?",
      answer: "LRN Foundation 3 is accepted worldwide, including the USA, UK, Canada, Australia, Malaysia, and the UAE."
    },
    {
      question: "Is it accepted in Pakistan?",
      answer: "Yes, LRN Foundation 3 is officially approved by IBCC, ensuring eligibility for Pakistani universities."
    },
    {
      question: "Is visa assistance available?",
      answer: "Yes, Crownbridge provides complete visa guidance and assistance to support your study journey abroad."
    },
  ];

  return (
    <div className="faq">
      <div className="faqHead">
        <h1>FAQs</h1>
      </div>
      <div className="questions">
        {queAns.map((que, index) => (
          <Question faqObject={que} key={index} num={index + 1}/>
        ))}
      </div>
    </div>
  );
}