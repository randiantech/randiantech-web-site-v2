import React from "react";
import FrontImageSection from "../sections/FrontImageSection/FrontImageSection";
import ServicesSection from "../sections/ServicesSection/ServicesSection";
import { BrandSection } from "../sections/BrandSection";
import { BlogSection } from "../sections/BlogSection";
import { ContactUsSection } from "../sections/ContactUsSection/ContactUsSection";
import TechnologiesSection from "../sections/TechnologiesSection/TechnologiesSection";
import { ImageGallerySection } from "../sections/ImageGallerySection";

export const HomePage = React.memo(() => (
  <>
    <FrontImageSection />
    <ServicesSection />
    <BrandSection />
    <BlogSection />
    <TechnologiesSection />
    <ContactUsSection />
  </>
));
