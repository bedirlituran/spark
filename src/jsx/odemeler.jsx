import React, { useState } from "react";
import "../css/odemeler.css";
import { useTranslation } from "react-i18next";

const Odemeler = () => {
  const [activeTab, setActiveTab] = useState("online");
  const { t } = useTranslation(); // 🔥 i18n

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="odenisler" className="odenisler-section">
      <h2 className="odenisler-title">{t("payment.title")}</h2>

      {/* TAB SWITCH */}
      <div className="tabs">
        <button
          className={activeTab === "online" ? "tab active" : "tab"}
          onClick={() => setActiveTab("online")}
        >
          {t("payment.online")}
        </button>

        <button
          className={activeTab === "terminal" ? "tab active" : "tab"}
          onClick={() => setActiveTab("terminal")}
        >
          {t("payment.terminal")}
        </button>
      </div>

      {/* MAIN CONTAINER */}
      <div className="payment-box">

        {activeTab === "online" ? (
          // ---------------- ONLINE PAYMENT ----------------
          <div className="logos-wrapper">

            {/* FPAY */}
            <div
              className="logo-card"
              onClick={() =>
                handleClick(
                  "https://fpay.az/guest/payments/new-payment/category/4950/merchant/6295"
                )
              }
            >
              <img src="/fpaylogo.png" alt="Fpay" className="logo-img" />
            </div>

            <div className="divider"></div>

            {/* HESAB.AZ */}
            <div
              className="logo-card"
              onClick={() =>
                handleClick(
                  "https://hesab.az/unregistered/#/direct-pay/internet/sparktel/parameters"
                )
              }
            >
              <img
                src="/hesabazlogo.png"
                alt="Hesab.az"
                className="logo-img small-logo"
              />
            </div>
          </div>
        ) : (
          // ---------------- TERMINAL PAYMENT ----------------
          <div className="logos-wrapper">

            {/* EXPRESSPAY */}
            <div
              className="logo-card"
              onClick={() => handleClick("https://expresspay.az")}
            >
              <img src="/expresspaylogo.png" alt="ExpressPay" className="logo-img" />
            </div>

            <div className="divider"></div>

            {/* EMANAT */}
            <div
              className="logo-card"
              onClick={() => handleClick("https://emanat.az")}
            >
              <img
                src="/emanatlogo.png"
                alt="eManat"
                className="logo-img small-logo"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Odemeler;
