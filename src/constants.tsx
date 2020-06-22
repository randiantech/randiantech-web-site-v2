/*eslint-disable no-useless-escape*/

export const MOBILE_WIDTH = 1200;

export const DESKTOP_ITEMS = [
  "ABOUT",
  "SERVICES",
  "TEAM",
  "CAREERS",
  "CONTACT",
];

export const FOOTER_ITEMS = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Careers",
    url: "/careers",
  },
  {
    name: "Privacy",
    url: "/privacy",
  },
  {
    name: "Company Brochure",
    url: "/brochure",
  },
  {
    name: "Terms of Services",
    url: "/tos",
  },
  {
    name: "Media",
    url: "/media",
  },
  {
    name: "Information",
    url: "/info",
  },
];

export const CONTACT_US_ITEMS = [
  {
    label: "First Name",
    id: "firstName",
    initialValue: "",
    isRequired: true,
    isValid: (value: string) => value.length > 1,
  },
  {
    label: "Last Name",
    id: "lastName",
    initialValue: "",
    isRequired: true,
    isValid: (value: any) => value.length > 1,
  },
  {
    label: "Email",
    id: "email",
    initialValue: "",
    isRequired: true,
    isValid: (value: any) => {
      const isValidEmail = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );
      return isValidEmail.test(value);
    },
  },
  {
    label: "Phone",
    id: "phone",
    isRequired: false,
    initialValue: "",
    isValid: (value: any) => {
      if (!value) return false;
      const isValidPhone = new RegExp(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      );
      return isValidPhone.test(value);
    },
  },
  {
    label: "Comments",
    id: "comments",
    isRequired: true,
    initialValue: "",
    style: "free-text",
  },
];

export const SOCIAL_NETWORKS = [
  {
    img: "/images/icons/facebook.png",
    name: "Facebook",
    url: "https://www.facebook.com/randiantech/",
  },
  {
    img: "/images/icons/linkedin.png",
    name: "Linkedin",
    url: "https://www.linkedin.com/company/randiantech",
  },
  {
    img: "/images/icons/twitter.png",
    name: "Twitter",
    url: "https://twitter.com/randiantech",
  },
  {
    img: "/images/icons/youtube.png",
    name: "Youtube",
    url: "https://www.youtube.com/",
  },
  {
    img: "/images/icons/github.png",
    name: "Github",
    url: "https://www.linkedin.com/company/randiantech",
  },
];
