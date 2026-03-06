import React, { createContext, useContext, ReactNode } from 'react';

interface I18nContextType {
  t: (key: string) => string;
  locale: string;
  setLocale: (locale: string) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

const translations = {
  en: {
    freeWorkshop: "Free Workshop",
    initiativeBy: "Initiative by",
    register: "Register",
    topics: "Topics",
    schedule: "Schedule",
  },
};

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [locale, setLocale] = React.useState('en');

  const t = (key: string): string => {
    return translations[locale as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <I18nContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};