import {
  MdOutlineTimer as LongTermIcon,
  MdOutlineSupport as AssistanceIcon,
} from "react-icons/md";
import { TbCalendarCheck as BookingIcon } from "react-icons/tb";
import { BsAirplane as AirPlaneIcon } from "react-icons/bs";

export const services: any = [
  {
    name: {
      en: "Easy Online Booking",
      fr: "Réservation en ligne facile",
    },
    description: {
      en: "Our user-friendly website allows you to book your desired car quickly and effortlessly. Save time and secure your vehicle in just a few clicks",
      fr: "Notre site web convivial vous permet de réserver rapidement et sans effort la voiture de votre choix. Gagnez du temps et sécurisez votre véhicule en seulement quelques clics",
    },
    icon: BookingIcon,
  },
  {
    name: {
      en: "Flexible Rental Options",
      fr: "Options de location flexibles",
    },
    description: {
      en: "Choose from a variety of rental periods, whether it's a short weekend getaway or an extended road trip across Morocco",
      fr: "Choisissez parmi une variété de périodes de location, que ce soit une courte escapade le week-end ou un long voyage à travers le Maroc",
    },
    icon: LongTermIcon,
  },
  {
    name: {
      en: "Airport Pick-up & Drop-off",
      fr: "Prise en charge et retour à l'aéroport",
    },
    description: {
      en: "We offer seamless airport transfers to get you on the road as soon as you arrive, and we'll be there to collect the car when it's time to say goodbye",
      fr: "Nous proposons des transferts aéroport sans faille pour vous mettre en route dès votre arrivée, et nous serons présents pour récupérer la voiture lorsque viendra le moment de dire au revoir",
    },
    icon: AirPlaneIcon,
  },
  {
    name: {
      en: "24/7 Customer Support",
      fr: "Assistance clientèle 24/7",
    },
    description: {
      en: "Your comfort and safety are our top priorities. Our customer support team is available around the clock to assist you with any inquiries or emergencies",
      fr: "Votre confort et votre sécurité sont notre priorité absolue. Notre équipe d'assistance clientèle est disponible en permanence pour vous aider avec toutes vos questions ou urgences",
    },
    icon: AssistanceIcon,
  },
];
