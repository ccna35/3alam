import { useEffect, useState } from "react";

import { languages } from "../utils/constants";
import { useLanguage } from "../contexts/LanguageContext";

export const useRTL = () => {
  const { language } = useLanguage();

  const changeRTL = () => {
    // return language === languages.arabic;
    return true;
  };

  const [isRTL, setIsRTL] = useState(changeRTL());

  useEffect(() => {
    setIsRTL(changeRTL());
  }, [language]);

  return { isRTL };
};
