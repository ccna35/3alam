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
    const snapElement = document.querySelector(".snap");
    let activeSection = "home";

    if (snapElement) {
      const snapRect = snapElement.getBoundingClientRect();
      const snapTop = snapRect.top;
      const scrollOffset = 1; // Adjust this value to control the scroll distance

      sections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();
        const sectionTop = sectionRect.top - snapTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (snapTop >= sectionTop && snapTop < sectionBottom) {
          // Scroll to the current section
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          activeSection = section.id;
        }
      });
    }

    setActiveSection(activeSection);
  };

  useEffect(() => {
    setTimeout(() => {
      const span = document.querySelector(".snap");
      if (span) {
        span.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
          span.removeEventListener("scroll", handleScroll);
        };
      }
    }, 1100);
  }, []);

  return (
    <ScrollContext.Provider
      value={{ activeSection, setActiveSection: handleSetActiveSection }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
