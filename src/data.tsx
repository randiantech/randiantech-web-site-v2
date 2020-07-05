export const BLOG_ITEMS = [
  {},
  {
    title: "Using BPF to Transform SSH Sessions into Structured Events",
    desc: `Teleport 4.2 introduced a new feature called Enhanced Session Recording that takes an unstructured SSH session and outputs a stream of structured events. It’s the next step in Teleport’s evolution that uses new technology (eBPF or now simply known as BPF) to close some gaps in Teleport’s audit abilities. Below you can see an illustration of this feature and if you keep reading, we’ll get into some of the technical details.`,
    img: "/images/blog/img1.jpg",
    url:
      "https://findwork.dev/blog/advanced-usage-python-requests-timeouts-retries-hooks/",
  },
  {
    title: "Iranian Hackers Have Been ‘Password-Spraying’ the US Grid",
    desc:
      "In the wake of the US assassination of Iranian general Qasem Soleimani and the retaliatory missile strike that followed, Iran-watchers have warned that the country could deploy cyberattacks as well, perhaps even targeting US critical infrastructure like the electric grid. A new report lends some fresh details to the nature of that threat: By all appearances, Iranian hackers dont currently have the capability to start causing blackouts in the US. But they’ve been working to gain access to American electric utilities, long before tensions between the two countries came to a head.",
    img: "/images/blog/img2.jpg",
    url: "Some URL",
  },
  {
    title: 'Ford CEO says the company "overestimated" self-driving cars',
    desc:
      "Ford CEO Jim Hackett scaled back hopes about the company's plans for self-driving cars this week, admitting that the first vehicles will have limits. 'We overestimated the arrival of autonomous vehicles,' said Hackett, who once headed the company's autonomous vehicle division, at a Detroit Economic Club event on Tuesday. While Ford still plans on launching its self-driving car fleet in 2021, Hackett added that 'its applications will be narrow, what we call geo-fenced, because the problem is so complex'.",
    img: "/images/blog/img3.jpg",
    url: "Some URL",
  },
  {
    title: "Epistemic standards for “Why did it take so long to invent X?”",
    desc:
      "In seeking to understand the history of progress, I keep running across intriguing cases of “ideas behind their time”—inventions that seem to have come along much later than they could have, such as the cotton gin or the bicycle. I’ve started collecting a list here, and will update that page with new analyses as I find them.",
    img: "/images/blog/img4.jpg",
    url:
      "https://rootsofprogress.org/epistemic-standards-for-why-it-took-so-long",
  },
  {
    title: "Advanced usage of Python requests - timeouts, retries, hooks",
    desc:
      "The Python HTTP library requests is probably my favourite HTTP utility in all the languages I program in. Its simple, intuitive and ubiquitous in the Python community. Most of the programs that interface with HTTP use either requests or urllib3 from the standard library.",
    img: "/images/blog/img5.jpg",
    url:
      "https://findwork.dev/blog/advanced-usage-python-requests-timeouts-retries-hooks/",
  },
];

export const SERVICES_ITEMS = [
  {
    img: "/images/technologies-groups/tg-staff-augmentation.svg",
    text: "Staff Augmentation",
    link: "/services#staff-augmentation",
  },
  {
    img: "/images/technologies-groups/tg-fixed-price-project.svg",
    text: "Fixed Price Projects",
    link: "/services#fixed-price",
  },
  {
    img: "/images/technologies-groups/tg-managed-agile-teams.svg",
    text: "Managed Agile Teams",
    link: "/services#managed-agile-teams",
  },
  {
    img: "/images/technologies-groups/tg-field-agent-management.png",
    text: "Field Agent Management",
    link: "/services#field-agent-management",
  },
  {
    img: "/images/technologies-groups/tg-technical-mentoring.png",
    text: "Technical Mentoring",
    link: "/services#technical-mentoring",
  },
  {
    img: "/images/technologies-groups/tg-on-site-training.svg",
    text: "On Site Training",
    link: "/services#on-site-training",
  },
];

export const ABOUT_PAGE = {
  header: {
    title: "This is Randiantech",
    subtitle: "Mastering the Art of crafting innovative software",
    desc: "From early stage startups, ",
  },
  body: {
    title: "How We Can Help",
    desc: "BODY DESC COMPLETE",
    list: {
      title: "BODY LIST TITLE COMPLETE",
      items: ["item1", "item2", "item3"],
    },
  },
  footer: {
    image: "URL",
  },
};

export const MENU_ITEMS = ["ABOUT", "SERVICES", "TEAM", "CAREERS", "CONTACT"];

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
