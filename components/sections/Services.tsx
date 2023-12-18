import { services } from "@/constants";
import { useLocale, useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            {t("services")}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {locale === "fr"
              ? "L'Excellence rencontre la Commodité"
              : "Excellence Meets Convenience"}
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            {locale === "fr"
              ? "Chez 3 Étoiles, nous nous efforçons de dépasser vos attentes avec notre gamme de services haut de gamme. Voici ce qui nous distingue:"
              : "At 3 Étoiles, we strive to exceed your expectations with our range of premium services. Here's what sets us apart:"}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-16 gap-x-6 sm:mt-20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {services.map((service: any) => (
            <div
              key={service.name[locale]}
              className="pt-6 flow-root rounded-lg bg-gray-50 shadow-2xl shadow-neutral-500/10 px-6 pb-8"
            >
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center rounded-full bg-primary-500 ring-white ring-2 p-6 shadow-lg -mt-10">
                    <service.icon
                      className="h-8 w-8 text-primary-50"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-neutral-900">
                  {service.name[locale]}
                </h3>
                <p className="mt-5 text-base leading-7 text-neutral-600">
                  {service.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
