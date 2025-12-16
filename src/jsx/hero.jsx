import React, { useState, useEffect } from "react";
import "../css/Hero.css";
import { useTranslation } from "react-i18next";

const slides = [
  {
    id: 1,
    image: "/Heroart1.png",
    title: "Hero.slide1.title",
    rectLines: ["Hero.slide1.line1", "Hero.slide1.line2"],
  },
  {
    id: 2,
    image: "/Heroart2.png",
    title: "Hero.slide2.title",
    rectLines: ["Hero.slide2.line1"],
  },
  {
    id: 3,
    image: "/Heroart3.png",
    title: "Hero.slide3.title",
    rectLines: ["Hero.slide3.line1"],
  },
  {
    id: 4,
    image: "/Heroart4.png",
    title: "Hero.slide4.title",
    rectLines: ["Hero.slide4.line1"],
  },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const currentSlide = slides[activeIndex];

  // Auto-slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="Hero-section" id="Hero">
      <div className="Hero-wrapper">
        <div className={`Hero-card slide-${currentSlide.id}`}>
          <img
            src={currentSlide.image}
            alt={t(currentSlide.title)}
            className="Hero-bg"
          />
          <div className="Hero-overlay">
            <h1 className="Hero-title">
              {currentSlide.id === 1 ? (
                <>
                  <span>{t("Hero.slide1.part1")}</span>
                  <span>{t("Hero.slide1.part2")}</span>
                </>
              ) : currentSlide.id === 2 ? (
                <>
                  <span>{t("Hero.slide2.part1")}</span>
                  <span>{t("Hero.slide2.part2")}</span>
                  <span>{t("Hero.slide2.part3")}</span>
                </>
              ) : currentSlide.id === 3 ? (
                <>
                  <span>{t("Hero.slide3.part1")}</span>
                  <span>{t("Hero.slide3.part2")}</span>
                </>
              ) : (
                t(currentSlide.title)
              )}
            </h1>
            <div className="Hero-rect">
              <p className="Hero-rect-text">
                {currentSlide.rectLines.map((line, i) => (
                  <span key={i}>
                    {t(line)}
                    {i !== currentSlide.rectLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <button className="Hero-arrow Hero-arrow-left" onClick={handlePrev}>
            <span className="arrow-icon" />
          </button>
          <button className="Hero-arrow Hero-arrow-right" onClick={handleNext}>
            <span className="arrow-icon" />
          </button>

          {/* Dots */}
          <div className="Hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`Hero-dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;