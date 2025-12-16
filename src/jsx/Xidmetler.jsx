import React, { useState } from "react";
import "../css/xidmetler.css";
import { useTranslation } from "react-i18next";

// Xidmətlər listi
const services = [
  {
    id: "internet",
    title: "services.internet.title",
    blueIcon: "/wifigoy.png",
    greenIcon: "/wifiyasil.png",
    description: "services.internet.desc",
  },
  {
    id: "iptv",
    title: "services.iptv.title",
    blueIcon: "/iptvgoy.png",
    greenIcon: "/iptvyasil.png",
    description: "services.iptv.desc",
  },
  {
    id: "wireless",
    title: "services.wireless.title",
    blueIcon: "/simsizgoy.png",
    greenIcon: "/simsizyasil.png",
    description: "services.wireless.desc",
  },
  {
    id: "ipphone",
    title: "services.ipphone.title",
    blueIcon: "/phonegoy.png",
    greenIcon: "/phoneyasil.png",
    description: "services.ipphone.desc",
  },
  {
    id: "localnet",
    title: "services.localnet.title",
    blueIcon: "/lokalgoy.png",
    greenIcon: "/lokalyasil.png",
    description: "services.localnet.desc",
  },
  {
    id: "datacanal",
    title: "services.datacanal.title",
    blueIcon: "/datakanalgoy.png",
    greenIcon: "/datakanalyasil.png",
    description: "services.datacanal.desc",
  },
];

// 🔥 BÜTÜN IPTV KANALLARI (Sənin orijinal kodun — heç nə dəyişmədim)
const iptvChannels = [
  "Aztv", "Aztv HD", "Mədəniyyət", "Mədəniyyət HD", "Idman TV", "Idman TV HD",
  "Azad Azərbaycan", "Azad Azərbaycan HD", "XezerTV", "Xezer TV HD", "SpaceTV",
  "Ictimai TV", "Ictimai TV HD", "CBC Azerbaijan", "CBC Sport HD", "DunyaTV",
  "ARBTV", "ARB Gunes", "ARB24", "ARB24 HD", "RealTV", "Real TV HD",
  "Sehiyye TV HD", "MTV Azerbaycan", "24 TV HD", "TVNET Sport HD", "Baku tv",
  // türk
  "ATV Turkey", "ATV Turkey HD", "Kanal D HD", "Show TV", "Show TV HD", "Kanal 7",
  "Kanal 7 HD", "TRT Turkey", "TRT Turk HD", "TRT 1", "TRT1 HD", "TRT2 HD",
  "TRT AVAZ HD", "TRT Belgesel", "TRT Belgesel HD", "TLC Turkey", "TLC Turkey HD",
  "TRT Çocuk", "TRT Çocuk HD", "Cartoon Network Turkey", "Power Turkey HD",
  "TRT Music HD", "TRT Haber", "TRT Haber HD", "CNN Turkey", "NTV Turkey",
  "NTV Turkey HD", "TRT Spor HD", "Bloomberg Türkiye", "Haber Global HD",
  "TV8-İnt", "Star TV HD", "Star TV", "TV-8 HD", "TV-8",
  // xarici
  "Первый","Первый канал HD","Россия 1","Россия 1 HD","НТВ","HTB HD","ТНТ4","CTC",
  "РЕН ТВ","ТВ Центр","Че!","Домашний","Пятница","5 канал","Время","Мир","МИР 24",
  "Euronews","Viju TV1000","Viju TV 1000 Action","Viju TV1000 Русское",
  "Кинокомедия","Киномикс HD","Киносвидание","Киносемья HD","Киносерия",
  "Кинохит HD","Кинопремьера HD","Мужское кино HD","Индийское кино HD",
  "Родное кино","Русский Иллюзион","Дом Кино","Дом Кино Премиум HD",
  "Наше Новое Кино","Иллюзион+","КИНЕКО","КИНЕКО HD","САПФИР HD","ЕвроКино",
  "CinemaTV","Amedia 1","Amedia 2","HCT","BLACK","Viju Megahit HD",
  "Viju Premiere HD","Viju Comedy HD","Bridge TV","Bridge TV Classic","RU.TV",
  "THT Music","Жара TV","Музыка Первого","24 Техно","TLC Russia","TLC Russia HD",
  "Авто 24","Авто Плюс","Домашние животные","Кухня ТВ","Мама","Моя Планета",
  "Охота и рыбалка","Телекафе","Карусель HD","Мульт HD","365 дней HD",
  "Animal Planet Russia HD","Da Vinci Learning HD","Investigation Discovery Russia",
  "Nat Geo Wild Russia HD","National Geographic HD","Viju Explore Russia",
  "Viju History Russia","Viju Nature","Живая планета","Наука","Ностальгия",
  "DiscoveryChannelHD","Eurosport 1","EuroSport1 HD","Eurosport 2",
  "Euro Sport2 HD","Setanta Sports 1 HD","Setanta Sports 2 HD","КХЛ ТВ",
  "Viju Sport","Viju Serial HD","Точка отрыва","Усадьба-ТВ","ПОЕХАЛИ!",
  "BBC World News Int","CNN International","France 24 HD","NHK World Japan HD",
  "Silkway TV HD","Sport TV HD"
];

// 🔥 Azərbaycan kanalları
const azChannels = [
  "Aztv","Aztv HD","Mədəniyyət","Mədəniyyət HD","Idman TV","Idman TV HD",
  "Azad Azərbaycan","Azad Azərbaycan HD","XezerTV","Xezer TV HD","SpaceTV",
  "Ictimai TV","Ictimai TV HD","CBC Azerbaijan","CBC Sport HD","DunyaTV",
  "ARBTV","ARB Gunes","ARB24","ARB24 HD","RealTV","Real TV HD",
  "Sehiyye TV HD","MTV Azerbaycan","24 TV HD","TVNET Sport HD","Baku tv"
];

// 🔥 Türk kanalları
const trChannels = [
  "ATV Turkey","ATV Turkey HD","Kanal D HD","Show TV","Show TV HD","Kanal 7",
  "Kanal 7 HD","TRT Turkey","TRT Turk HD","TRT 1","TRT1 HD","TRT2 HD","TRT AVAZ HD",
  "TRT Belgesel","TRT Belgesel HD","TLC Turkey","TLC Turkey HD","TRT Çocuk",
  "TRT Çocuk HD","Cartoon Network Turkey","Power Turkey HD","TRT Music HD",
  "TRT Haber","TRT Haber HD","CNN Turkey","NTV Turkey","NTV Turkey HD",
  "TRT Spor HD","Bloomberg Türkiye","Haber Global HD","TV8-İnt",
  "Star TV HD","Star TV","TV-8 HD","TV-8"
];

// 🔥 Xarici kanallar
const foreignChannels = [
  "Первый","Первый канал HD","Россия 1","Россия 1 HD","НТВ","HTB HD","ТНТ4","CTC",
  "РЕН ТВ","ТВ Центр","Че!","Домашний","Пятница","5 канал","Время","Мир","МИР 24",
  "Euronews","Viju TV1000","Viju TV 1000 Action","Viju TV1000 Русское",
  "Кинокомедия","Киномикс HD","Киносвидание","Киносемья HD","Киносерия",
  "Кинохит HD","Кинопремьера HD","Мужское кино HD","Индийское кино HD",
  "Родное кино","Русский Иллюзион","Дом Кино","Дом Кино Премиум HD",
  "Наше Новое Кино","Иллюзион+","КИНЕКО","КИНЕКО HD","САПФИР HD","ЕвроКино",
  "CinemaTV","Amedia 1","Amedia 2","HCT","BLACK","Viju Megahit HD",
  "Viju Premiere HD","Viju Comedy HD","Bridge TV","Bridge TV Classic","RU.TV",
  "THT Music","Жара TV","Музыка Первого","24 Техно","TLC Russia","TLC Russia HD",
  "Авто 24","Авто Плюс","Домашние животные","Кухня ТВ","Мама","Моя Планета",
  "Охота и рыбалка","Телекафе","Карусель HD","Мульт HD","365 дней HD",
  "Animal Planet Russia HD","Da Vinci Learning HD",
  "Investigation Discovery Russia",
  "Nat Geo Wild Russia HD","National Geographic HD","Viju Explore Russia",
  "Viju History Russia","Viju Nature","Живая планета","Наука","Ностальгия",
  "DiscoveryChannelHD","Eurosport 1","EuroSport1 HD","Eurosport 2",
  "Euro Sport2 HD","Setanta Sports 1 HD","Setanta Sports 2 HD","КХЛ ТВ",
  "Viju Sport","Viju Serial HD","Точка отрыва","Усадьба-ТВ","ПОЕХАЛИ!",
  "BBC World News Int","CNN International","France 24 HD","NHK World Japan HD",
  "Silkway TV HD","Sport TV HD"
];

// 🔥 İdman kanalları
const sportChannels = [
  "Idman TV","Idman TV HD","CBC Sport HD","TVNET Sport HD","TRT Spor HD",
  "Eurosport 1","EuroSport1 HD","Eurosport 2","Euro Sport2 HD",
  "Setanta Sports 1 HD","Setanta Sports 2 HD","КХЛ ТВ","Viju Sport","Sport TV HD"
];

function Xidmetler() {
  const [viewMode, setViewMode] = useState("services");
  const [iptvFilter, setIptvFilter] = useState("all");
  const { t } = useTranslation();

  const handleServiceClick = (id) => {
    if (id === "iptv") setViewMode("iptv");
  };

  const handleBackToServices = () => {
    setViewMode("services");
  };

  const filteredChannels =
    iptvFilter === "all"
      ? iptvChannels
      : iptvFilter === "az"
      ? azChannels
      : iptvFilter === "tr"
      ? trChannels
      : iptvFilter === "foreign"
      ? foreignChannels
      : iptvFilter === "sport"
      ? sportChannels
      : iptvChannels;

  return (
    <section className="services-section" id="xidmetler">
      {/* SERVICES */}
      {viewMode === "services" && (
        <>
          <h2 className="services-title">{t("services.title")}</h2>

          <div className="services-wrapper">
            <div className="services-grid">
              {services.map((service) => {
                const isClickable = service.id === "iptv";
                return (
                  <button
                    key={service.id}
                    type="button"
                    className={
                      "service-card " +
                      (isClickable ? "service-card-iptv" : "")
                    }
                    onClick={() =>
                      isClickable ? handleServiceClick(service.id) : null
                    }
                  >
                    <div className="service-left">
                      <div className="service-icon-wrap">
                        <img
                          src={service.blueIcon}
                          alt={t(service.title)}
                          className="service-icon icon-blue"
                        />
                        <img
                          src={service.greenIcon}
                          alt={t(service.title)}
                          className="service-icon icon-green"
                        />
                      </div>

                      {/* <h3 className="service-title">
                        {service.id === "localnet" ? (
                          <>
                            <span>{t("services.localnet.part1")}</span>
                            <span>{t("services.localnet.part2")}</span>
                          </>
                        ) : (
                          t(service.title)
                        )}
                      </h3> */}

                      <h3 className="service-title">
                    {service.id === "localnet" ? (
                      <>
                        <span>{t("services.localnet.part1")}</span>
                        <span>{t("services.localnet.part2")}</span>
                      </>
                     ) : service.id === "wireless" ? (
                        <>
                      <span>{t("services.wireless.part1")}</span>
                      <span>{t("services.wireless.part2")}</span>
                        </>
                    ) : (
                       t(service.title)
                      )}
                    </h3>

                    </div>

                    <div className="service-right">
                      <p className="service-desc">
                        {t(service.description)}
                      </p>

                      {service.id === "iptv" && (
                        <span
                          className="iptv-mini-link"
                          onClick={() => handleServiceClick("iptv")}
                        >
                          {t("services.iptv.link")}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* IPTV */}
      {viewMode === "iptv" && (
        <div className="services-wrapper iptv-view">
          <h2 className="services-title">{t("iptv.title")}</h2>

          <button
            type="button"
            className="iptv-back-btn"
            onClick={handleBackToServices}
          >
            ← {t("iptv.back")}
          </button>

          {/* Kateqoriya düymələri */}
          <div className="iptv-categories">
            {[
              { key: "all", label: t("iptv.all") },
              { key: "az", label: t("iptv.az") },
              { key: "tr", label: t("iptv.tr") },
              { key: "foreign", label: t("iptv.foreign") },
              { key: "sport", label: t("iptv.sport") },
            ].map((cat) => (
              <button
                key={cat.key}
                className={iptvFilter === cat.key ? "active" : ""}
                onClick={() => setIptvFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Kanallar */}
          <div className="iptv-grid">
            {filteredChannels.map((ch, i) => (
              <div key={i} className="iptv-card">
                {ch}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Xidmetler;