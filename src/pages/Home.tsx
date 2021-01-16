import React, { useContext, useEffect } from "react";
import FrontImageSection from "../sections/FrontImage";
import ServicesSection from "../sections/Services";
import Brand from "../sections/Brand";
import Blog from "../sections/Blog";
import ContactUs from "../sections/ContactUs";
import TechnologiesSection from "../sections/Technologies";
import { AppContext } from "../AppContext";

const Home = React.memo(() => {
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
      <Brand />
      <TechnologiesSection isMobile={isMobile} />
      {!isMobile && <Blog />}
      <ContactUs isMobile={isMobile} />
    </>
  );
});

export default Home;