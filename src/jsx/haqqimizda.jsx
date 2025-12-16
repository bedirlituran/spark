import "../css/Haqqimizda.css"
import { useTranslation } from "react-i18next";

function Haqqimizida() {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="Haqqimizida">
      <div className="about-wrapper">
        <div className="about-card">
          <h2 className="about-title">{t("about.title")}</h2>

          <p
            className="about-text"
            dangerouslySetInnerHTML={{
              __html: `${t("about.text1")}<br/><br/>${t("about.text2")}`
            }}
          ></p>

        </div>
      </div>
    </section>
  );
}

export default Haqqimizida;
