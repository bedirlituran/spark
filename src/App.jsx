// src/App.jsx
import "./i18n";

import "./App.css";
import Navbar from "./jsx/Navbar";
import Hero from "./jsx/Hero";
import Ustunlukler from "./jsx/Ustunlukler";
import Haqqimizda from "./jsx/Haqqimizda";
import Tarifler from "./jsx/Tarifler";
import Xidmetler from "./jsx/Xidmetler";
import Odemeler from "./jsx/Odemeler";
import Faq from "./jsx/Faq";
import Melumat from "./jsx/Melumat";
import WhatsappButton from "./jsx/Whatsappbutton";
import Eraziler from "./jsx/eraziler";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Ustunlukler />
        <Haqqimizda />
        <Tarifler />
        <Xidmetler />
       <Eraziler />
        <Odemeler />
        <Faq />
        {/* <Muraciet /> */}
        <Melumat />
        <WhatsappButton />
      </main>
    </>
  );
}

export default App;
