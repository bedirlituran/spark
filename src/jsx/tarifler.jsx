import React, { useState } from "react";
import "../css/tarifler.css";
import { useTranslation } from "react-i18next";

function Tarifler() {
  const { t } = useTranslation();

  const internetTariffs = [
    {
      id: 1,
      name: t("tariffs.econom"),
      price: 15,
      speedLabel: t("tariffs.speed45"),
      features: [
        t("tariffs.fiber"),
        t("tariffs.router"),
        t("tariffs.connectfree"),
      ],
    },
    {
      id: 2,
      name: t("tariffs.classic"),
      price: 18,
      speedLabel: t("tariffs.speed60"),
      features: [
        t("tariffs.fiber"),
        t("tariffs.router"),
        t("tariffs.connectfree"),
      ],
    },
    {
      id: 3,
      name: t("tariffs.extra"),
      price: 25,
      speedLabel: t("tariffs.speed100"),
      features: [
        t("tariffs.fiber"),
        t("tariffs.router"),
        t("tariffs.connectfree"),
      ],
    },
    {
      id: 4,
      name: t("tariffs.vip"),
      price: 30,
      speedLabel: t("tariffs.speed150"),
      features: [
        t("tariffs.fiber"),
        t("tariffs.router"),
        t("tariffs.connectfree"),
      ],
    },
  ];

  const internetTvTariffs = [
    {
      id: 1,
      name: t("tariffs.econom"),
      price: 23,
      speedLabel: t("tariffs.speed45tv"),
      features: [
        t("tariffs.fiber"),
        t("tariffs.router"),
        t("tariffs.connectfree"),
      ],
    },
    {
      id: 2,
      name: t("tariffs.classic"),
      price: 26,
      speedLabel: t("tariffs.speed60tv"),
      features: [
        t("tariffs.fiber"),
        t("tariffs.router"),
        t("tariffs.connectfree"),
      ],
    },
    {
      id: 3,
      name: t("tariffs.extra"),
      price: 31,
      speedLabel: t("tariffs.speed100tv"),
      features: [
        t("tariffs.fiber"),
        t("tariffs.router"),
        t("tariffs.connectfree"),
      ],
    },
    {
      id: 4,
      name: t("tariffs.vip"),
      price: 36,
      speedLabel: t("tariffs.speed150tv"),
      features: [
        t("tariffs.fiber"),
        t("tariffs.router"),
        t("tariffs.connectfree"),
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("internet");

  const currentTariffs =
    activeTab === "internet" ? internetTariffs : internetTvTariffs;

  const handleJoinClick = () => {
  const target = document.getElementById("melumat");
  if (target) target.scrollIntoView({ behavior: "smooth" });
};

  return (
    <section className="tariffs-section" id="tarifler">
      <div className="tariffs-wrapper">

        <h2 className="tariffs-title-pill">{t("tariffs.choose")}</h2>

        <div className="tariffs-cards">
          {currentTariffs.map((tariff) => (
            <div key={tariff.id} className="tariff-card">
              <h3 className="tariff-name">{tariff.name}</h3>

              <div className="tariff-tabs-pill">
                <button
                  type="button"
                  className={`tariff-tab-btn ${
                    activeTab === "internet" ? "active" : "inactive"
                  }`}
                  onClick={() => setActiveTab("internet")}
                >
                  {t("tariffs.internet")}
                </button>

                <button
                  type="button"
                  className={`tariff-tab-btn ${
                    activeTab === "internet-tv" ? "active" : "inactive"
                  }`}
                  onClick={() => setActiveTab("internet-tv")}
                >
                  {t("tariffs.internetTv")}
                </button>
              </div>

              <div className="tariff-price-block">
                <div className="tariff-price">
                  <span className="price-number">{tariff.price}</span>
                  <span className="price-currency">₼</span>
                </div>
                <div className="tariff-speed">{tariff.speedLabel}</div>
              </div>

              <div className="tariff-separator" />

              <ul className="tariff-features">
                {tariff.features.map((feature, idx) => (
                  <li key={idx} className="tariff-feature-item">
                    <span className="feature-dot" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="tariff-join-btn"
                onClick={handleJoinClick}
              >
                {t("tariffs.join")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tarifler;
