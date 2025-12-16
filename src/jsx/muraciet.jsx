import React from "react";
import "../css/muraciet.css";
import { useTranslation } from "react-i18next";

const Muraciet = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.from_name.value.trim();
    const surname = form.from_surname.value.trim();
    const phone = form.phone.value.trim();
    const email = form.reply_to.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(t("contact.newRequest"));
    const body = encodeURIComponent(
      `${t("contact.newRequest")}:\n\n${t("contact.name")}: ${name}\n${t("contact.surname")}: ${surname}\n${t("contact.phone")}: ${phone}\nEmail: ${email}\n${t("contact.message")}: ${message}`
    );

    const whatsappText = encodeURIComponent(
      `${t("contact.newRequest")}:%0A%0A` +
      `${t("contact.name")}: ${name}%0A` +
      `${t("contact.surname")}: ${surname}%0A` +
       `${t("contact.phone")}: ${phone}%0A` +
       `Email: ${email}%0A` +
       `${t("contact.message")}: ${message}`
       );
       
       window.location.href = `https://wa.me/994705652222?text=${whatsappText}`;

  };

  return (
    <section id="muraciet" className="muraciet-section">
      <div className="muraciet-title-pill">
        {t("contact.title")}
         </div>

      <form className="muraciet-form" onSubmit={handleSubmit}>

        {/* Ad / Soyad */}
        <div className="form-row">
          <div className="form-group">
            <label>{t("contact.name")}</label>
            <input
              type="text"
              name="from_name"
              placeholder={t("contact.namePlaceholder")}
              required
            />
          </div>

          <div className="form-group">
            <label>{t("contact.surname")}</label>
            <input
              type="text"
              name="from_surname"
              placeholder={t("contact.surnamePlaceholder")}
              required
            />
          </div>
        </div>

        {/* Telefon / Email */}
        <div className="form-row">
          <div className="form-group">
            <label>{t("contact.phone")}</label>
            <input
              type="tel"
              name="phone"
              placeholder="(xx) xxx xx xx"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="reply_to"
              placeholder="yourmail@mail.com"
              required
            />
          </div>
        </div>

        {/* Mesaj */}
        <div className="form-row">
          <div className="form-group full-width">
            <label>{t("contact.message")}</label>
            <textarea
              name="message"
              rows="5"
              placeholder={t("contact.messagePlaceholder")}
              required
            ></textarea>
          </div>
        </div>

        {/* Button + Social Icons */}
        <div className="form-bottom">
          <button type="submit" className="submit-btn">
            {t("contact.send")}
          </button>

          <div className="social-icons">
            <a href="https://www.facebook.com/share/195wvSDPkr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <div className="social-circle">
                <img src="/facewhite.png" alt="Facebook" />
              </div>
            </a>

            <a href="https://www.instagram.com/sparktel.mmc?igsh=bTBzbXRxOHZ2amZl" target="_blank" rel="noopener noreferrer">
              <div className="social-circle">
                <img src="/instawhite.png" alt="Instagram" />
              </div>
            </a>

            <a href="https://wa.me/994705652222" target="_blank" rel="noopener noreferrer">
              <div className="social-circle">
                <img src="/wpwhite.png" alt="WhatsApp" />
              </div>
            </a>

            <a href="mailto:info@sparktel.az" target="_blank" rel="noopener noreferrer">
              <div className="social-circle">
                <img src="/emailwhite.png" alt="Email" />
              </div>
            </a>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Muraciet;
