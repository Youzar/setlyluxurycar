import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const About = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary-600">
                {t("about us")}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {locale === "fr"
                  ? "Découvrez la Différence Setly Luxury"
                  : "Discover the Setly Luxury Difference"}
              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                {locale === "fr"
                  ? "Chez Setly Luxury Car Rental, nous sommes fiers d'être l'une des principales sociétés de location de voitures au Maroc. Forts de plusieurs années d'expérience, nous avons acquis notre réputation en proposant un service de qualité supérieure, des véhicules sûrs et fiables, ainsi que des tarifs compétitifs. Notre mission est de rendre votre voyage au Maroc inoubliable, en vous offrant les clés de l'aventure et de l'exploration."
                  : "At Setly Luxury Car Rental, we take pride in being one of Morocco's leading car rental companies. With years of experience, we have earned our reputation for providing top-notch service, safe and reliable vehicles, and competitive prices. Our mission is to make your journey in Morocco unforgettable, offering you the keys to adventure and exploration."}
              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                {locale === "fr"
                  ? "Nous apprécions votre confiance et plaçons la satisfaction du client au-dessus de tout. Notre équipe de professionnels dévoués est toujours prête à vous aider, garantissant une expérience de location sans accroc du début à la fin. Avec 3 Étoiles, vous pouvez entreprendre votre voyage au Maroc en toute confiance."
                  : "We value your trust and prioritize customer satisfaction above all. Our team of dedicated professionals is always ready to assist you, ensuring a smooth rental experience from start to finish. With 3 Étoiles, you can embark on your Moroccan journey with confidence."}
              </p>
            </div>
          </div>
          {/* TODO: use locale image */}
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
