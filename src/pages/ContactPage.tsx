import React from "react";
import { ContactUsSection } from "../sections/ContactUsSection/ContactUsSection";

export const ContactPage = React.memo(() => (
  <div>
    <ContactUsSection isMobile={false} />
  </div>
));
