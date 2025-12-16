import React, { useState, useEffect } from "react";
import "../css/hero.css";
import { useTranslation } from "react-i18next";

const slides = [
  {
    id: 1,
    image: "/heroart1.png",
    title: "hero.slide1.title",
    rectLines: ["hero.slide1.line1", "hero.slide1.line2"],
  },
  {
    id: 2,
    image: "/heroart2.png",
    title: "hero.slide2.title",
    rectLines: ["hero.slide2.line1"],
  },
  {
    id: 3,
    image: "/heroart3.png",
    title: "hero.slide3.title",
    rectLines: ["hero.slide3.line1"],
  },
  {
    id: 4,
    image: "/heroart4.png",
    title: "hero.slide4.title",
    rectLines: ["hero.slide4.line1"],
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
    <section className="hero-section" id="hero">
      <div className="hero-wrapper">
        <div className={`hero-card slide-${currentSlide.id}`}>
          <img
            src={currentSlide.image}
            alt={t(currentSlide.title)}
            className="hero-bg"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">
              {currentSlide.id === 1 ? (
                <>
                  <span>{t("hero.slide1.part1")}</span>
                  <span>{t("hero.slide1.part2")}</span>
                </>
              ) : currentSlide.id === 2 ? (
                <>
                  <span>{t("hero.slide2.part1")}</span>
                  <span>{t("hero.slide2.part2")}</span>
                  <span>{t("hero.slide2.part3")}</span>
                </>
              ) : currentSlide.id === 3 ? (
                <>
                  <span>{t("hero.slide3.part1")}</span>
                  <span>{t("hero.slide3.part2")}</span>
                </>
              ) : (
                t(currentSlide.title)
              )}
            </h1>
            <div className="hero-rect">
              <p className="hero-rect-text">
                {currentSlide.rectLines.map((line, i) => (
                  <span key={i}>
                    {t(line)}
                    {i !== currentSlide.rectLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <button className="hero-arrow hero-arrow-left" onClick={handlePrev}>
            <span className="arrow-icon" />
          </button>
          <button className="hero-arrow hero-arrow-right" onClick={handleNext}>
            <span className="arrow-icon" />
          </button>

          {/* Dots */}
          <div className="hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === activeIndex ? "active" : ""}`}
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