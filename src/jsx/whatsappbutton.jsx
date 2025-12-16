import React from "react";
import "../css/whatsappbutton.css";

const WhatsappButton = () => {
  return (
    <a 
      href="https://wa.me/994705652222"
      className="wp-fixed-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/wpmuraciet.png" alt="WhatsApp" />
    </a>
  );
};

export default WhatsappButton;
