import UnitedArabEmirates from "../src/assets/featured/UnitedArabEmirates.jpg";
import Saudi from "../src/assets/featured/SaudiArabia.jpg";
import Qatar from "../src/assets/featured/Qatar.jpg";
import Kuwait from "../src/assets/featured/Kuwait.jpg";
import Jordan from "../src/assets/featured/Jordan.jpg";
import people from "../src/assets/people.svg";
import build from "../src/assets/build.svg";
import happy from "../src/assets/happy.svg";
import world from "../src/assets/world.svg";
import United from "../src/assets/United.svg";
import Saudi1 from "../src/assets/Saudi.svg";
import qatar from "../src/assets/qatar.svg";
import Kuwait1 from "../src/assets/Kuwait.svg";
import Jordan1 from "../src/assets/Jordan.svg";
import call from "../src/assets/call.svg";
import email from "../src/assets/email.svg";
import location from "../src/assets/location.svg";
import facebook from "../src/assets/facebook.svg";
import telegram from "../src/assets/telegram.svg";
import instagram from "../src/assets/instagram.svg";
import tiktok from "../src/assets/tiktok.svg";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "#about", key: "about", label: "About " },
  { href: "#services", key: "services", label: "Services" },
  { href: "#howitwork", key: "how_hilink_work", label: "How Enat Work?" },
  { href: "#faq", key: "faq", label: "FAQ" },
  { href: "#contact", key: "contact", label: "Contact" },
];

// FEATURES SECTION
export const FEATURES = [
  {
    id: 1,
    title: "United Arab Emirates",
    image: UnitedArabEmirates,
    description:
      "United Arab Emirates, a federation of seven emirates, has become a leading global business hub.",
  },
  {
    id: 2,
    title: "Saudi Arabia",
    image: Saudi,
    description:
      "Saudi Arabia is diversifying its economy, emerging as a significant global hub for various industries.",
  },
  {
    id: 3,
    title: "Qatar",
    image: Qatar,
    description:
      "Qatar's strategic growth has established it as a key destination for global business and development.",
  },
  {
    id: 4,
    title: "Kuwait",
    image: Kuwait,
    description:
      "Kuwait’s economic strength is bolstered by its ongoing efforts to diversify beyond its oil industry.",
  },
  {
    id: 5,
    title: "Jordan",
    image: Jordan,
    description:
      "Jordan’s stability and strategic importance make it a vital location for emerging global industries",
  },
];

// ACHIEVEMENT SECTION
export const Achievements = [
  {
    icon: people,
    numbers: 10,
    title: "Happy Employees",
  },
  {
    icon: build,
    numbers: 8,
    title: "Years Of Experience",
  },
  {
    icon: happy,
    numbers: 3000,
    title: "Deployed Clients",
  },
  {
    icon: world,
    numbers: 5,
    title: "Countries",
  },
];

// FREQUENTLY ASKED QUESTIONS SECTION

export const FAQItems = [
  {
    title: "What is Feedback ?",
    content:
      "Feedback is information provided by clients, candidates, or partners about their experience with Enate Employment Agency. It helps us understand what we're doing well and where we can improve, ensuring we continually enhance our services to better meet your needs",
  },
  {
    title: "What Services Does Enate Employment Agency Offer ?",
    content:
      "Enate Employment Agency specializes in connecting employers with qualified candidates across various industries. Our services include talent acquisition, workforce solutions, and customized recruitment strategies to meet your organization's unique needs.",
  },
  {
    title: "Is there a Free Trial Available ?",
    content:
      "Yes, we offer a free trial for our Feedback Application. This allows you to explore its features and benefits before making a commitment. Contact us to get started with your free trial today!",
  },
  {
    title: "How to Contact us ?",
    content:
      "Visit Enate Employment Agency at Hayahulet, Mazoria, Yeab Building, 4th Floor, Office No. 401. Call us at +251-983-074-715 or email us at info@enatemploymentagency.com.",
  },
  {
    title: "Do i Need to Pay for VISA ?",
    content:
      "No, you do not need to pay for a visa through Enate Employment Agency. We assist with visa applications and processes, but any associated fees are typically managed directly with the relevant authorities. For detailed information about visa costs and procedures, please consult the embassy or consulate.",
  },
  {
    title: "Is it One Time Payment ?",
    content:
      "No, our services typically involve ongoing or periodic payments rather than a one-time fee. Depending on the specific services you choose, there may be subscription fees, project-based costs, or other payment structures. For detailed information about our pricing and payment plans, please contact us directly.",
  },
  // {A thriving global hub with modern infrastructure, attracting business and innovation from around the world.
];

// FOOTER SECTION
export const FOOTER_LINK = [
  {
    title: "Learn More",
    links: [
      { link: "/", value: "Home" },
      { link: "#about", value: "About Enat" },
      { link: "#services", value: "Services" },
      { link: "#howitwork", value: "How Enat Work?" },
      { link: "#faq", value: "Frequently Asked Questions" },
      { link: "#contact", value: "Contact Us" },
    ],
  },
];

export const FOOTER_LINK1 = [
  {
    title: "Our Destinations",
    links: [
      {
        flag: United,
        value: "United Arab Emirates (UAE)",
      },
      { flag: Saudi1, value: "Saudi Arabia" },
      { flag: qatar, value: "Qatar" },
      { flag: Kuwait1, value: "Kuwait" },
      { flag: Jordan1, value: "Jordan" },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Call us", icon: call, value: "+251-983-074-715" },
    {
      label: "Email Address",
      icon: email,
      value: "info@enatemploymentagency.com",
    },
    {
      label: "Visit Office",
      icon: location,
      value: "Hayahulet Yeab Building 4th Floor Office No 401",
    },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    {
      href: "https://www.facebook.com/enatforeignemploymentagency",
      icon: facebook,
    },
    { href: "https://t.me/Enatfea", icon: telegram },
    {
      href: "https://www.instagram.com/enat_agency?igsh=dWRia2dzbnh6bWdx",
      icon: instagram,
    },
    { href: "https://www.tiktok.com/@enatagency", icon: tiktok },
  ],
};
