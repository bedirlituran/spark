import "../css/Ustunlukler.css";
import { useTranslation } from "react-i18next";

function Ustunlukler() {
  const { t } = useTranslation();

  const advantages = [
    {
      id: 1,
      icon: "/support.png",
      lines: [t("ustunlukler.line1_1"), t("ustunlukler.line1_2")]
    },
    {
      id: 2,
      icon: "/fiber.png",
      lines: [t("ustunlukler.line2_1"), t("ustunlukler.line2_2")]
    },
    {
      id: 3,
      icon: "/speed.png",
      lines: [t("ustunlukler.line3_1"), t("ustunlukler.line3_2")]
    },
    {
      id: 4,
      icon: "/tech.png",
      lines: [t("ustunlukler.line4_1")]
    }
  ];

  return (
    <section className="ust-section" id="ustunlukler">
      <div className="ust-wrapper">
        {advantages.map((item) => (
          <div key={item.id} className={`ust-card card-${item.id}`}>
            <img
              src={item.icon}
              alt={item.lines.join(" ")}
              className="ust-icon"
            />
            <p className="ust-text">
              {item.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i !== item.lines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ustunlukler;