import React, { useContext, useEffect } from "react";
import FrontImageSection from "../sections/FrontImageSection/FrontImageSection";
import ServicesSection from "../sections/ServicesSection/ServicesSection";
import { BrandSection } from "../sections/BrandSection";
import { BlogSection } from "../sections/BlogSection";
import { ContactUsSection } from "../sections/ContactUsSection/ContactUsSection";
import TechnologiesSection from "../sections/TechnologiesSection/TechnologiesSection";
import { AppContext } from "../AppContext";

export const HomePage = React.memo(() => {
  const { state } = useContext(AppContext);
  const { isMobile } = state;

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <FrontImageSection isMobile={isMobile} />
      <ServicesSection isMobile={isMobile} />
      <BrandSection />
      <TechnologiesSection isMobile={isMobile} />
      {!isMobile && <BlogSection />}
      <ContactUsSection isMobile={isMobile} />
    </>
  );
});
