import React, { useState } from "react";
import "./FaqComponent.css"; // Ձեր CSS-ը
import { ChevronIcon } from "../../iconFolder/icon";
import { useTranslation } from "react-i18next";

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {t} = useTranslation()
  
  const questions = [
      {
        id: 1,
        question: t('frequently_asked_questions.0'),
        answer: t('frequently_asked_questions_answers.0'),
      },
        {
        id: 2,
        question: t('frequently_asked_questions.1'),
        answer: t('frequently_asked_questions_answers.1'),
      },
        {
        id: 3,
        question: t('frequently_asked_questions.2'),
        answer: t('frequently_asked_questions_answers.2'),
      },
      {
        id: 4,
        question: t('frequently_asked_questions.3'),
        answer: t('frequently_asked_questions_answers.3'),
      },

      { 
        id: 5,
        question: t('frequently_asked_questions.4'),
        answer: t('frequently_asked_questions_answers.4'),
      },
      
    ]

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <div className="faq_component">
      <div className="container">
        <h2 className="heading">{t('frequently_asked_questions_title')}</h2>
        <div className="faq">
            {questions.map((faq, index) => (
            <div
                key={index}
                className="question-wrapper"
                onClick={() => toggleQuestion(index)}
            >
                <div className="question">
                <h3>{faq.question}</h3>
                <button>
                    <ChevronIcon  isActive={activeIndex === index}/>
                </button>
                </div>
                <div className={`answer ${activeIndex === index ? "active" : ""}`}>
                {faq.answer}
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
