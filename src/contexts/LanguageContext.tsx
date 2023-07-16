import { createContext, useContext, useState } from "react";

import { languages } from "../utils/constants";
import { IContent } from "../content/IContent";
import contentAR from "../content/en.json";
import contentEN from "../content/ar.json";

type IProps = {
  children: React.ReactElement<any, any> & React.ReactNode;
};

type ContextType = {
  language: any;
  setLanguage: (lang: any) => void;
  content: IContent;
};

const initialValues: ContextType = {
  language: languages.english,
  setLanguage: () => {},
  content: contentEN,
};

export const LanguageContext = createContext<ContextType>(initialValues);

export const LanguageProvider: React.FC<IProps> = ({ children }) => {
  const [language, setLanguage] = useState<any>(languages.english);
  const [content, setContent] = useState<any>(contentEN);

  const handleSetLanguage = (lang: any) => {
    setLanguage(lang);
    if (lang === languages.arabic) {
      setContent(contentAR);
    } else {
      setContent(contentEN);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, content }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): ContextType => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
