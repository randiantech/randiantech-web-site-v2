import React from "react";
import FrontImageSection from "../sections/FrontImageSection/FrontImageSection";
import ServicesSection from "../sections/ServicesSection/ServicesSection";
import { BrandSection } from "../sections/BrandSection";
import { BlogSection } from "../sections/BlogSection";
import { ContactUsSection } from "../sections/ContactUsSection/ContactUsSection";

export const HomePage = React.memo(() => (
  <>
    <FrontImageSection />
    <ServicesSection />
    <BrandSection />
    <BlogSection />
    <ContactUsSection />
  </>
));
