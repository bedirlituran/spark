import "../css/melumat.css";
import { useTranslation } from "react-i18next";

const Melumat = () => {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="melumat-section" id="melumat">

      {/* LOGO */}
      <div className="melumat-logo">
        <img src="/logoag.png" alt="SparkTel" />
        {/* <img src="/sparktellogo.png" alt="SparkTel" /> */}
      </div>

      {/* TOP NAV LINKS */}
      <div className="melumat-links">
        <button onClick={() => scrollTo("haqqimizda")}>{t("footer.about")}</button>
        <button onClick={() => scrollTo("tarifler")}>{t("footer.tariffs")}</button>
        <button onClick={() => scrollTo("xidmetler")}>{t("footer.services")}</button>
        <button onClick={() => scrollTo("eraziler")}>{t("footer.areas")}</button>
        <button onClick={() => scrollTo("odenisler")}>{t("footer.payments")}</button>
        <button onClick={() => scrollTo("faq")}>FAQ</button>
        {/* <button onClick={() => scrollTo("muraciet")}>{t("footer.support")}</button> */}
      </div>

      {/* GREEN LINE */}
      <div className="melumat-divider"></div>

      {/* CONTACT INFO */}
      <div className="melumat-contact">

        <div className="melumat-phone-row">
          <div className="melumat-phone">
            <img src="/phonewhite.png" alt="Phone" />
            <a href="tel:0705652222">070-565-22-22</a>
          </div>

          <div className="melumat-phone">
            <img src="/phonewhite.png" alt="Phone" />
            <a href="tel:0125652222">012-565-22-22</a>
          </div>
        </div>

        <div className="melumat-location">
          <img src="/locationwhite.png" alt="Location" />
          <span>{t("footer.address")}</span>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="melumat-social">
        <a href="https://www.instagram.com/sparktel.mmc" target="_blank">
          <img src="/instawhite.png" alt="Instagram" />
          {/* <img src="/instablue.png" alt="Instagram" /> */}
        </a>
        <a href="https://www.facebook.com/share/195wvSDPkr/" target="_blank">
          <img src="/facewhite.png" alt="Facebook" />
          {/* <img src="/fbblue.png" alt="Facebook" /> */}
        </a>
        <a href="https://wa.me/994705652222" target="_blank">
           <img src="/wpwhite.png" alt="WhatsApp" />
            </a>
        <a href="mailto:info@sparktel.az" target="_blank">
          <img src="/emailwhite.png" alt="Email" />
          {/* <img src="/emailblue.png" alt="Email" /> */}
        </a>
            </div>

      {/* COPYRIGHT */}
      <div className="melumat-copy">
        © 2025 Sparktel MMC
      </div>

    </footer>
  );
};

export default Melumat;
