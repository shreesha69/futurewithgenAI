import React, { createContext, useContext, useState, ReactNode } from "react";

// simple translations object
const translations = {
  en: {
    freeWorkshop: "Free Workshop · March 2026",
    initiativeBy: "An initiative by",
    registerFree: "Register Free",
    viewAgenda: "View Agenda",
    schedule: "Schedule",
    learningJourney: "Learning Journey",
    fiveEvenings: "Five evenings of focused, hands-on learning — 7:00 to 8:00 PM daily.",
    interactiveText: "Each session is interactive • hands-on • certificate included",
    registerHeading: "Register Free",
    openTo: "Open exclusively to college students in Pondicherry. Five evenings that could change your career.",
  },
  hi: {
    freeWorkshop: "मुफ़्त कार्यशाला · मार्च 2026",
    initiativeBy: "एक पहल",
    registerFree: "मुफ़्त पंजीकरण",
    viewAgenda: "एजेंडा देखें",
    schedule: "समय सारिणी",
    learningJourney: "सीखने की यात्रा",
    fiveEvenings: "केंद्रित, व्यावहारिक सीखने की पाँच शामें — रोज़ 7:00 से 8:00 बजे तक।",
    interactiveText: "प्रत्येक सत्र इंटरैक्टिव है • व्यावहारिक है • प्रमाणपत्र शामिल है",
    registerHeading: "मुफ़्त पंजीकरण",
    openTo: "पांडिचेरी के कॉलेज छात्रों के लिए विशेष रूप से खुला। पाँच शामें जो आपके करियर को बदल सकती हैं।",
  },
  ja: {
    freeWorkshop: "無料ワークショップ · 2026年3月",
    initiativeBy: "主催：",
    registerFree: "無料登録",
    viewAgenda: "アジェンダを見る",
    schedule: "スケジュール",
    learningJourney: "ラーニングジャーニー",
    fiveEvenings: "5晩にわたる集中ハンズオン学習 — 毎日19:00〜20:00。",
    interactiveText: "各セッションはインタラクティブ • ハンズオン • 修了証付き",
    registerHeading: "無料登録",
    openTo: "ポンディシェリの大学生限定。キャリアを変える5つの夜。",
  },
};

type Lang = keyof typeof translations;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: keyof typeof translations[Lang]) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key as string,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: keyof typeof translations[Lang]) => {
    return translations[lang][key] || key;
  };
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
};

export const useTranslation = () => useContext(I18nContext);
