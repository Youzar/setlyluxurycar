import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { ElementType } from "react";
import { BsWhatsapp as WhatsappIcon } from "react-icons/bs";

// APP
export const app: any = {
  name: "Setly Luxury Car",
  shortName: "setlyluxurycar",
  title: "Setly Luxury Car",
  description: {
    en: "We know the difference is in the details and that's why our car rental services, in the tourism and business industry, stand out for their quality and good taste, to offer you an unique experience.",
    fr: "Nous savons que la différence se trouve dans les détails, c'est pourquoi nos services de location de voiture, dans l'industrie du tourisme et des affaires, se distinguent par leur qualité et leur bon goût, afin de vous offrir une expérience unique.",
  },
  tagline: {
    en: "Rent your luxury car",
    fr: "Louez votre voiture de luxe",
  },
  url: "https://setlyluxurycar.com",
  baseUrl: "/",
  favicon: "/logo.svg",
  logo: "/logo.svg",
  logoInverse: "/logo-inverse.svg",
};

// SEO
export const seo: any = {
  en: {
    title: "Premium Car Rental Services in Morocco | Setly Luxury Car",
    description:
      "Experience the best car rental services in Morocco with Setly Luxury Car. Explore our diverse fleet, flexible rental options, competitive prices, and exceptional customer service. Book now and embark on unforgettable adventures!",
    Keywords:
      "car rental Morocco, premium car rental, luxury car hire, Morocco travel, rent a car in Morocco",
  },
  fr: {
    title:
      "Services de location de voitures haut de gamme au Maroc | Setly Luxury Car",
    description:
      "Découvrez les meilleurs services de location de voitures au Maroc avec Setly Luxury Car. Explorez notre flotte variée, nos options de location flexibles, nos prix compétitifs et notre service client exceptionnel. Réservez dès maintenant et embarquez pour des aventures inoubliables !",
    Keywords:
      "location de voiture au Maroc, location de voiture haut de gamme, location de voiture de luxe, voyage au Maroc, louer une voiture au Maroc",
  },
};

// Navigation
export const navigation: any = [
  { name: "home", href: "/" },
  { name: "about us", href: "/about" },
  { name: "services", href: "/services" },
  { name: "fleet", href: "/fleet" },
  // { name: "Contact Us", href: "/" },
];

// Contacts
export const phone = "+212 661 80 74 70";
export const phone2 = "+212 661 80 74 70";

export interface ContactItem {
  title: string;
  description: string;
  href: string;
  icon: ElementType;
}

type ContactsType = {
  [key: string]: ContactItem;
};

export const contacts: ContactsType = {
  phone: {
    title: "phone",
    description: phone,
    href: `tel:${phone}`,
    icon: PhoneIcon,
  },
  phone2: {
    title: "phone2",
    description: phone2,
    href: `tel:${phone2}`,
    icon: PhoneIcon,
  },
  whatsapp: {
    title: "whatsapp",
    description: phone,
    href: `https://api.whatsapp.com/send?phone=212661807470`,
    icon: WhatsappIcon,
  },
  email: {
    title: "email",
    description: "contact@setlyluxurycar.com",
    href: "mailto:contact@setlyluxurycar.com",
    icon: EnvelopeIcon,
  },
  address: {
    title: "address",
    description:
      "Mohammed V International Airport, Nouaceur Casablanca. Morocco.",
    href: "https://www.google.com/maps?ll=33.373135,-7.580584&z=17&t=m&hl=en&gl=MA&mapclient=embed&q=33%C2%B022%2722.1%22N+7%C2%B034%2750.2%22W+33.372806,+-7.580611@33.3728056,-7.5806111",
    icon: MapPinIcon,
  },
};

export { places } from "./places";
export { makes } from "./makes";
export { services } from "./services";
