import React, { useState } from "react";
import "../css/faq.css";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ❗ JSON-da 10 sual var: faq.q1 ... faq.q10
  const faqs = Array.from({ length: 10 }).map((_, i) => ({
    q: t(`faq.q${i + 1}`),
    a: t(`faq.a${i + 1}`)
  }));

  const leftColumn = faqs.slice(0, 5);
  const rightColumn = faqs.slice(5, 10);

  return (
    <section id="faq" className="faq-section">
      
      <div className="faq-title-pill">
        {t("faq.title")}
        {/* <span className="faq-title-white">{t("faq.title1")}</span>
        <span className="faq-title-dark">{t("faq.title2")}</span> */}
      </div>

      <div className="faq-container">

        {/* LEFT COLUMN */}
        <div className="faq-column">
          {leftColumn.map((item, index) => {
            const globalIndex = index;
            return (
              <div key={globalIndex} className="faq-item">
                <div
                  className={
                    openIndex === globalIndex ? "faq-card open" : "faq-card"
                  }
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(globalIndex)}
                  >
                    <span>{item.q}</span>

                    <span
                      className={
                        openIndex === globalIndex
                          ? "faq-icon rotate"
                          : "faq-icon"
                      }
                    >
                      ❯
                    </span>
                  </div>

                  <div
                    className={
                      openIndex === globalIndex
                        ? "faq-answer open"
                        : "faq-answer"
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
        <div className="faq-column">
          {rightColumn.map((item, index) => {
            const globalIndex = index + 5;
            return (
              <div key={globalIndex} className="faq-item">
                <div
                  className={
                    openIndex === globalIndex ? "faq-card open" : "faq-card"
                  }
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(globalIndex)}
                  >
                    <span>{item.q}</span>

                    <span
                      className={
                        openIndex === globalIndex
                          ? "faq-icon rotate"
                          : "faq-icon"
                      }
                    >
                      ❯
                    </span>
                  </div>

                  <div
                    className={
                      openIndex === globalIndex
                        ? "faq-answer open"
                        : "faq-answer"
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

export default FAQ;
