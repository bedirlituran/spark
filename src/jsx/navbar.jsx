// src/jsx/Navbar.jsx
import { useState } from "react";
import "../css/Navbar.css";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "AZ", label: "Azərbaycan", flag: "/AZflag.png" },
  { code: "RU", label: "Русский", flag: "/Rusflag.png" },
  { code: "EN", label: "English", flag: "/Engflag.png" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("AZ");

  const { t, i18n } = useTranslation();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const currentLang = LANGS.find(l => l.code === selectedLang);

  const handleSelectLang = code => {
    setSelectedLang(code);
    setIsLangOpen(false);
    i18n.changeLanguage(code.toLowerCase());
  };

  const scrollToHero = () => {
    const Hero = document.getElementById("Hero");
    if (Hero) Hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="Navbar-wrapper">
      <div className="Navbar">
        <div className="Navbar-logo" onClick={scrollToHero} style={{ cursor: "pointer" }}>
          <img src="/sparktellogo.png" alt="SparkTel Logo" />
        </div>

        <nav className="Navbar-links">
          <a href="#Haqqimizida" onClick={e => handleNavClick(e, "Haqqimizida")}>
            {t("nav.Haqqimizida")}
          </a>
          <a href="#Tarifler" onClick={e => handleNavClick(e, "Tarifler")}>
            {t("nav.Tarifler")}
          </a>
          <a href="#Xidmetler" onClick={e => handleNavClick(e, "Xidmetler")}>
            {t("nav.Xidmetler")}
          </a>
          <a href="#Eraziler" onClick={e => handleNavClick(e, "Eraziler")}>
            {t("nav.Eraziler")}
          </a>
          <a href="#odenisler" onClick={e => handleNavClick(e, "odenisler")}>
            {t("nav.odenisler")}
          </a>
          <a href="#Faq" onClick={e => handleNavClick(e, "Faq")}>
            Faq
          </a>
          {/* <a href="#muraciet" onClick={e => handleNavClick(e, "muraciet")}>
            {t("nav.muraciet")}
          </a> */}
          
          <a href="#Melumat" onClick={e => handleNavClick(e, "Melumat")}>
            {t("nav.Melumat")}
          </a>
        </nav>

        <div className="Navbar-right">
          <div className="lang-select-wrapper">
            <button
              className="lang-select-trigger"
              onClick={() => setIsLangOpen(prev => !prev)}
            >
              <div className="lang-trigger-left">
                <img src={currentLang.flag} alt={currentLang.code} />
                <span>{currentLang.label}</span>
              </div>
              <span className={`lang-trigger-arrow ${isLangOpen ? "open" : ""}`}>▾</span>
            </button>

            {isLangOpen && (
              <div className="lang-select-menu">
                {LANGS.map(lang => (
                  <button
                    key={lang.code}
                    className={`lang-option ${lang.code === selectedLang ? "active" : ""}`}
                    onClick={() => handleSelectLang(lang.code)}
                  >
                    <img src={lang.flag} alt={lang.code} />
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="Navbar-burger"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="Navbar-mobile-menu">
          <a href="#Haqqimizida" onClick={e => handleNavClick(e, "Haqqimizida")}>
            {t("nav.Haqqimizida")}
          </a>
          <a href="#Tarifler" onClick={e => handleNavClick(e, "Tarifler")}>
            {t("nav.Tarifler")}
          </a>
          <a href="#Xidmetler" onClick={e => handleNavClick(e, "Xidmetler")}>
            {t("nav.Xidmetler")}
          </a>
          <a href="#Eraziler" onClick={e => handleNavClick(e, "Eraziler")}>
            {t("nav.Eraziler")}
          </a>
          <a href="#odenisler" onClick={e => handleNavClick(e, "odenisler")}>
            {t("nav.odenisler")}
          </a>
          {/* <a href="#muraciet" onClick={e => handleNavClick(e, "muraciet")}>
            {t("nav.muraciet")}
          </a> */}
          <a href="#Faq" onClick={e => handleNavClick(e, "Faq")}>
            Faq
          </a>
          <a href="#Melumat" onClick={e => handleNavClick(e, "Melumat")}>
            {t("nav.Melumat")}
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
