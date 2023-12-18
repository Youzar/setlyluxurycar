import { useLocale } from "next-intl";

const CTA = () => {
  const locale = useLocale();

  return (
    <div className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              {/* TODO: use locale img */}
              <img
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src="https://images.unsplash.com/photo-1533558701576-23c65e0272fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {locale === "fr"
                ? "Réservez dès maintenant votre voiture de rêve !"
                : "Book Your Dream Ride Now!"}
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              {locale === "fr"
                ? "Découvrez les merveilles du Maroc avec 3 Étoiles Car Rental. Commencez dès aujourd'hui à planifier votre aventure en réservant votre voiture de rêve. Vivez une commodité, un confort et une fiabilité inégalés tout en explorant les paysages captivants et les villes vibrantes du Maroc. Votre voyage vous attend !"
                : "Unlock the wonders of Morocco with 3 Étoiles Car Rental. Start planning your adventure today by booking your dream ride. Experience unmatched convenience, comfort, and reliability as you explore the captivating landscapes and vibrant cities of Morocco. Your journey awaits!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
