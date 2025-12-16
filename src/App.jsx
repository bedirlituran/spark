// src/App.jsx
import "./i18n";
import "./App.css";
import Navbar from "./jsx/Navbar";
import Hero from "./jsx/Hero";
import Ustunlukler from "./jsx/Ustunlukler";
import Tarifler from "./jsx/Tarifler";
import Xidmetler from "./jsx/Xidmetler";
import Eraziler from "./jsx/Eraziler";
import Odemeler from "./jsx/Odemeler";
import Faq from "./jsx/Faq";
import Melumat from "./jsx/Melumat";
import Whatsapp from "./jsx/Whatsapp";
import Haqqimizida from "./jsx/Haqqimizda";



function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <Ustunlukler/>
       <Haqqimizida/>
        <Tarifler/>
        <Xidmetler/>
       <Eraziler/>
        <Odemeler/>
        <Faq/>
        <Melumat/>
        <Whatsapp/>
      </main>
    </>
  );
}

export default App;
