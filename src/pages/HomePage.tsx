import React from "react";
import FrontImageSection from "../sections/FrontImageSection/FrontImageSection";
import ServicesSection from "../sections/ServicesSection/ServicesSection";
import { BrandSection } from "../sections/BrandSection";
import { BlogSection } from "../sections/BlogSection";
import { ContactUsSection } from "../sections/ContactUsSection/ContactUsSection";
import TechnologiesSection from "../sections/TechnologiesSection/TechnologiesSection";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export const HomePage = React.memo(() => (
  <>
    <FrontImageSection />
    <ServicesSection />
    <ImageGallery items={images} />;
    <TechnologiesSection />
    <BrandSection />
    <BlogSection />
    <ContactUsSection />
  </>
));
