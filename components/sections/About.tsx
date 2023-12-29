import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Heading from "./Heading";
import { app } from "@/constants";
import bg from "../../public/images/car-fleet.webp";

const About = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <div className="relative bg-black app-section">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            src={bg}
            alt=""
            className="h-full w-full object-cover object-center"
            width={1920}
            height={1080}
            placeholder="blur"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black opacity-80"
        />

        <div className="app-container">
          <Heading
            
            onDark
            eyebrow={app.title}
            title={
              locale === "fr"
                ? "Meilleure location de voiture au Maroc"
                : "Best car rental in Morocco"
            }
            description={
              locale === "fr"
                ? `${app.title} est une agence de location de voitures à Casablanca et partout au Maroc à des prix abordables avec les meilleurs véhicules et un service de qualité avec un support 24/7.`
                : `${app.title} is a car rental agency in Casablanca and everywhere in Morocco at cheap prices with the best vehicles and quality service with 24/7 support.`
            }
          >
            <div className="app-section-content text-gray-100">
              <p>
                {locale === "fr"
                  ? `Que vous voyagiez pour affaires ou pour le plaisir, avec ${app.title}, vous êtes assuré d'obtenir les meilleures voitures de location et un service adapté à n'importe quel budget.`
                  : `Whether you're traveling for business or pleasure, with ${app.title}, you're guaranteed the best rental cars and service for any budget.`}
              </p>
            </div>
          </Heading>
        </div>
      </div>
    </>
  );
};

export default About;
