"use client";

import { Button } from "../elements";
import Image from "next/image";
import { useApp } from "@/hooks";
import { useTranslations } from "next-intl";
import { ButtonColors, Sizes } from "@/common.types";
import { IoCarSport as CarIcon } from "react-icons/io5";
import { contacts } from "@/constants";
import { useEffect, useState } from "react";

const Hero = () => {
  const app = useApp();
  const t = useTranslations();

  const images = [
    "/hero-img-1.png",
    "/hero-img-2.png",
    "/hero-img-3.png",
    "/hero-img-4.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-r from-rose-100 to-teal-100">
        <div className="relative z-10 app-container">
          <div className="lg:flex lg:items-center lg:gap-x-6">
            <div className="lg:w-1/2">
              <div className="pt-16 pb-20 lg:pt-32 lg:pb-44">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {app.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {app.description}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button
                    color={ButtonColors.DARK}
                    size={Sizes.LG}
                    Icon={CarIcon}
                    link="/fleet"
                  >
                    {t("our fleet")}
                  </Button>
                  <Button
                    color={ButtonColors.PRIMARY}
                    size={Sizes.LG}
                    Icon={contacts.phone.icon}
                    link={contacts.phone.href}
                  >
                    {t("call now")}
                  </Button>
                </div>
              </div>
            </div>
            <div className="mb-28 lg:mb-0 lg:w-1/2">
              <div className="max-w-xl mx-auto">
                <Image
                  src={images[currentImageIndex]}
                  alt=""
                  className="object-contain w-[48rem] max-w-nones sm:w-[57rem] md:-ml-4 lg:-ml-0"
                  width={1024}
                  height={1024}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
