import React, { useState } from "react";
import "../css/eraziler.css";
import { useTranslation } from "react-i18next";

const Eraziler = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("ferdi");

  // === LISTS FROM i18n ===
  const ferdiList = t("areas.ferdiList", { returnObjects: true });
  const korporativList = t("areas.korporativList", { returnObjects: true });
  const mtkList = t("areas.mtkList", { returnObjects: true });

  const openMap = (location) => {
    if (location === "Bakixanov Residence") {
      window.open(
        "https://maps.google.com/?q=40.4156321521609,49.9659651517868",
        "_blank"
      );
      return;
    }

    if (location === "NUR MTK") {
      window.open(
        "https://maps.google.com/maps/search/Nərimanov%20r.%20Şəmsi%20Rəhimov%20küç%20Baku%2C%20Baku%201063%2C%20Azərbaycan/@40.3999176546111,49.84435480088,17z",
        "_blank"
      );
      return;
    }

    window.open(
      `https://www.google.com/maps/search/${encodeURIComponent(location)}`,
      "_blank"
    );
  };

  const listToShow =
    activeTab === "ferdi"
      ? ferdiList
      : activeTab === "korporativ"
      ? korporativList
      : mtkList;

  return (
    <section id="eraziler" className="eraziler-section">
      
      <h2 className="eraziler-title-pill">{t("areas.title")}</h2>

      <div className="tabs-erazi-capsule">
        <button
          className={activeTab === "ferdi" ? "erazi-switch active" : "erazi-switch"}
          onClick={() => setActiveTab("ferdi")}
        >
          {t("areas.ferdi")}
        </button>

        <button
          className={activeTab === "korporativ" ? "erazi-switch active" : "erazi-switch"}
          onClick={() => setActiveTab("korporativ")}
        >
          {t("areas.korporativ")}
        </button>

        <button
          className={activeTab === "mtk" ? "erazi-switch active" : "erazi-switch"}
          onClick={() => setActiveTab("mtk")}
        >
          {t("areas.mtk")}
        </button>
      </div>

      <div className="erazi-content">
        <div className="address-columns">
          
          <div className="address-column">
            {listToShow
              .slice(0, Math.ceil(listToShow.length / 2))
              .map((item, index) => (
                <div
                  key={index}
                  className="address-item"
                  onClick={() => openMap(item)}
                >
                  <span className="loc-icon">📍</span> {item}
                </div>
              ))}
          </div>

          <div className="divider-erazi"></div>

          <div className="address-column">
            {listToShow
              .slice(Math.ceil(listToShow.length / 2))
              .map((item, index) => (
                <div
                  key={index}
                  className="address-item"
                  onClick={() => openMap(item)}
                >
                  <span className="loc-icon">📍</span> {item}
                </div>
              ))}
          </div>

        </div>

        <div className="map-container">
           <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30374.327723106943!2d49.815!3d40.409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4023f1b3d7%3A0xa99f9fa6466b7403!2sBaku!5e0!3m2!1sen!2saz!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>
 
                {activeTab === "korporativ" && (
                  <p className="korporativ-note">
                   {t("areas.korporativNote")}
               </p>
                )}
                </div>
  
            </div>
             </section>
              );
};

export default Eraziler;
