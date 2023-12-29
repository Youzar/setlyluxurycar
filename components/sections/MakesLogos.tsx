import { makes } from "@/constants";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const MakesLogos = () => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-3xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-12">
          {makes.map((make, idx) => (
            <Image
              key={"make-logo" + idx}
              className="max-h-12 w-full object-contain object-center"
              src={make.image}
              alt={make.name}
              width={200}
              height={200}
            />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
            <span className="hidden md:inline">
              {locale === "fr"
                ? "Explorez le Maroc en toute confiance avec des véhicules de marques renommées."
                : "Explore Morocco with confidence in vehicles from renowned brands."}
            </span>
            <a href="#" className="font-semibold text-primary-600">
              <span className="absolute inset-0" aria-hidden="true" />{" "}
              {t("our fleet")}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakesLogos;
