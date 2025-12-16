// src/App.jsx
import "./i18n";

import "./App.css";
import Navbar from "./jsx/navbar";
import Hero from "./jsx/hero";
import Ustunlukler from "./jsx/ustunlukler";
import Haqqimizda from "./jsx/haqqimizda";
import Tarifler from "./jsx/tarifler";
import Xidmetler from "./jsx/xidmetler";
import Eraziler from "./jsx/eraziler";
import Odemeler from "./jsx/odemeler";
import Faq from "./jsx/faq";
// import Muraciet from "./jsx/muraciet";
import Melumat from "./jsx/melumat";
import WhatsappButton from "./jsx/whatsappbutton";


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
