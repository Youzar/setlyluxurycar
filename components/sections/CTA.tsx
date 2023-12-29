import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Heading from "./Heading";
import { app, contacts } from "@/constants";
import bg from "../../public/images/driver.webp";

const CTA = () => {
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
            centered
            onDark
            title={
              locale === "fr"
                ? "Réservez votre prochain trajet"
                : "Book you next ride"
            }
            description={
              locale === "fr"
                ? `Opérateurs disponibles 24/7`
                : `Operators available 24/7`
            }
          >
            <a href={contacts.phone.href} className="text-2xl font-bold text-center text-primary-400 hover:text-primary-600 sm:text-6xl">
              {contacts.phone.description}
            </a>
          </Heading>
        </div>
      </div>
    </>
  );
};

export default CTA;
