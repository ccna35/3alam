import React, { createContext, useState, useEffect } from "react";

type ScrollContextProps = {
  activeSection: string;
  setActiveSection: any;
};

export const ScrollContext = createContext<ScrollContextProps | undefined>(
  undefined
);

export const ScrollProvider = ({ children }: any) => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSetActiveSection = (section: string) => {
    setActiveSection(section);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let activeSection = "home";

    sections.forEach((section) => {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      if (sectionTop <= 0 && sectionBottom > 0) {
        activeSection = section.id;
      }
    });

    setActiveSection(activeSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{ activeSection, setActiveSection: handleSetActiveSection }}
    >
      <div className="snap">
        {children}
      </div>
    </ScrollContext.Provider>
  );
};
