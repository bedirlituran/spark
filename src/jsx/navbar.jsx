// src/jsx/navbar.jsx
import { useState } from "react";
import "../css/navbar.css";
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
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo" onClick={scrollToHero} style={{ cursor: "pointer" }}>
          <img src="/sparktellogo.png" alt="SparkTel Logo" />
        </div>

        <nav className="navbar-links">
          <a href="#haqqimizda" onClick={e => handleNavClick(e, "haqqimizda")}>
            {t("nav.haqqimizda")}
          </a>
          <a href="#tarifler" onClick={e => handleNavClick(e, "tarifler")}>
            {t("nav.tarifler")}
          </a>
          <a href="#xidmetler" onClick={e => handleNavClick(e, "xidmetler")}>
            {t("nav.xidmetler")}
          </a>
          <a href="#eraziler" onClick={e => handleNavClick(e, "eraziler")}>
            {t("nav.eraziler")}
          </a>
          <a href="#odenisler" onClick={e => handleNavClick(e, "odenisler")}>
            {t("nav.odenisler")}
          </a>
          <a href="#faq" onClick={e => handleNavClick(e, "faq")}>
            FAQ
          </a>
          {/* <a href="#muraciet" onClick={e => handleNavClick(e, "muraciet")}>
            {t("nav.muraciet")}
          </a> */}
          
          <a href="#melumat" onClick={e => handleNavClick(e, "melumat")}>
            {t("nav.melumat")}
          </a>
        </nav>

        <div className="navbar-right">
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
            className="navbar-burger"
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
        <div className="navbar-mobile-menu">
          <a href="#haqqimizda" onClick={e => handleNavClick(e, "haqqimizda")}>
            {t("nav.haqqimizda")}
          </a>
          <a href="#tarifler" onClick={e => handleNavClick(e, "tarifler")}>
            {t("nav.tarifler")}
          </a>
          <a href="#xidmetler" onClick={e => handleNavClick(e, "xidmetler")}>
            {t("nav.xidmetler")}
          </a>
          <a href="#eraziler" onClick={e => handleNavClick(e, "eraziler")}>
            {t("nav.eraziler")}
          </a>
          <a href="#odenisler" onClick={e => handleNavClick(e, "odenisler")}>
            {t("nav.odenisler")}
          </a>
          {/* <a href="#muraciet" onClick={e => handleNavClick(e, "muraciet")}>
            {t("nav.muraciet")}
          </a> */}
          <a href="#faq" onClick={e => handleNavClick(e, "faq")}>
            FAQ
          </a>
          <a href="#melumat" onClick={e => handleNavClick(e, "melumat")}>
            {t("nav.melumat")}
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
