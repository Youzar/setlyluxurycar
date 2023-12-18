"use client";

import { makes } from "@/constants";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Car from "./partials/CarCard";
import { Button } from "../elements";
import { ButtonColors } from "@/common.types";

const Fleet = ({ showAll = false }) => {
  const [selectedCars, setSelectedCars] = useState([]);
  const carsRef = useRef(null);
  const t = useTranslations();
  const locale = useLocale();

  const cars = makes.flatMap((make) =>
    make.cars.map((car) => ({
      make: make.name,
      ...car,
    }))
  );

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const filteredCars = cars.filter((car) => car.showInMain === true);

  useEffect(() => {
    const selectedCars = showAll
      ? shuffleArray(cars)
      : // shuffledCars.slice(0, 6);
        shuffleArray(filteredCars.slice(0, 9));
    setSelectedCars(selectedCars);
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <div ref={carsRef}>
      <div className="relative py-16 sm:py-24 lg:py-32 bg-neutral-50">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              {t("our fleet")}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === "fr"
                ? "Luxure, Confort et Performance"
                : "Luxury, Comfort, and Performance"}
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              {locale === "fr"
                ? "Découvrez une flotte diversifiée et bien entretenue qui répond à tous vos besoins de voyage. Des voitures citadines élégantes aux spacieux SUV, notre sélection de véhicules est conçue pour répondre aux exigences de chaque voyageur. La sécurité et la qualité sont primordiales ; chaque voiture fait l'objet d'inspections régulières pour vous assurer une tranquillité d'esprit sur la route"
                : "Discover a diverse and well-maintained fleet that caters to all your travel needs. From sleek city cars to spacious SUVs, our selection of vehicles is designed to meet the demands of every traveler. Safety and quality are paramount; each car undergoes regular inspections to ensure your peace of mind on the road"}
            </p>
          </div>
          <div className="mt-12">
            <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-8">
              {selectedCars.map((car, idx) => (
                <Car key={"car-" + idx} car={car} />
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            {!showAll && (
              <Button
                text={t("show more")}
                color={ButtonColors.SECONDARY}
                link="/fleet"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
