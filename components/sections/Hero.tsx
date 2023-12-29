"use client";

import { Button } from "../elements";
import Image from "next/image";
import { useApp } from "@/hooks";
import { useTranslations } from "next-intl";
import { ButtonColors, Sizes } from "@/common.types";
import { IoCarSport as CarIcon } from "react-icons/io5";
import { contacts } from "@/constants";
import { useEffect, useState } from "react";
import { Booking } from ".";

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
      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="pt-20">
          <div className="app-container">
            <div className="flex flex-col">
              <div className="lg:flex lg:items-center lg:gap-x-6">
                <div className="lg:w-1/2">
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                      {app.title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                      {app.description}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                      <Button
                        color={ButtonColors.DARK}
                        size={Sizes.LG}
                        Icon={CarIcon}
                        link="/fleet"
                        rounded={false}
                      >
                        {t("our fleet")}
                      </Button>
                      <Button
                        color={ButtonColors.PRIMARY}
                        size={Sizes.LG}
                        Icon={contacts.phone.icon}
                        link={contacts.phone.href}
                        rounded={false}
                        linkType="anchor"
                      >
                        {t("call now")}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-24 mb-16 lg:mb-0 lg:w-1/2">
                  <div className="max-w-lg mx-auto">
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

              <div className="order-first mb-24 lg:mt-32 lg:-mb-16 lg:order-last">
                <Booking whatsapp={contacts.whatsapp} email={contacts.email} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
