import React, { useState } from "react";
import "../css/Faq.css";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ❗ JSON-da 10 sual var: Faq.q1 ... Faq.q10
  const Faqs = Array.from({ length: 10 }).map((_, i) => ({
    q: t(`Faq.q${i + 1}`),
    a: t(`Faq.a${i + 1}`)
  }));

  const leftColumn = Faqs.slice(0, 5);
  const rightColumn = Faqs.slice(5, 10);

  return (
    <section id="Faq" className="Faq-section">
      
      <div className="Faq-title-pill">
        {t("Faq.title")}
        {/* <span className="Faq-title-white">{t("Faq.title1")}</span>
        <span className="Faq-title-dark">{t("Faq.title2")}</span> */}
      </div>

      <div className="Faq-container">

        {/* LEFT COLUMN */}
        <div className="Faq-column">
          {leftColumn.map((item, index) => {
            const globalIndex = index;
            return (
              <div key={globalIndex} className="Faq-item">
                <div
                  className={
                    openIndex === globalIndex ? "Faq-card open" : "Faq-card"
                  }
                >
                  <div
                    className="Faq-question"
                    onClick={() => toggleFaq(globalIndex)}
                  >
                    <span>{item.q}</span>

                    <span
                      className={
                        openIndex === globalIndex
                          ? "Faq-icon rotate"
                          : "Faq-icon"
                      }
                    >
                      ❯
                    </span>
                  </div>

                  <div
                    className={
                      openIndex === globalIndex
                        ? "Faq-answer open"
                        : "Faq-answer"
                    }
                  >

                  
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN */}
        <div className="Faq-column">
          {rightColumn.map((item, index) => {
            const globalIndex = index + 5;
            return (
              <div key={globalIndex} className="Faq-item">
                <div
                  className={
                    openIndex === globalIndex ? "Faq-card open" : "Faq-card"
                  }
                >
                  <div
                    className="Faq-question"
                    onClick={() => toggleFaq(globalIndex)}
                  >
                    <span>{item.q}</span>

                    <span
                      className={
                        openIndex === globalIndex
                          ? "Faq-icon rotate"
                          : "Faq-icon"
                      }
                    >
                      ❯
                    </span>
                  </div>

                  <div
                    className={
                      openIndex === globalIndex
                        ? "Faq-answer open"
                        : "Faq-answer"
                    }
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
