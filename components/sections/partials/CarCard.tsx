import {
  TbManualGearbox as GearBoxIcon,
  TbDashboard as DashboardIcon,
} from "react-icons/tb";
import { BiGasPump as GasPumpIcon } from "react-icons/bi";
import { MdOutlineAirlineSeatReclineExtra as SeatIcon } from "react-icons/md";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ButtonColors, Car, Sizes } from "@/common.types";
import { Button } from "@/components/elements";

interface CarProps extends Car {
  make: string;
}

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const t = useTranslations();

  const features = [
    { title: "Fuel Type", text: car.fuelType, icon: GasPumpIcon, active: true },
    {
      title: "Transmission",
      text: car.transmission,
      icon: GearBoxIcon,
      active: true,
    },
    {
      title: "Seats",
      text: `${car.seats} ${t("seats")}`,
      icon: SeatIcon,
      active: true,
    },
    {
      title: "Fuel Consumption",
      text: car.fuelConsumption,
      icon: DashboardIcon,
      active: false,
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl shadow-neutral-500/10">
        <dl className="px-6 pt-6 pb-10 flex flex-col bg-gradient-to-r from-black to-gray-700">
          <dt className="text-xl font-bold tracking-tight text-white">
            {car.make}
          </dt>
          <dd className="text-base font-semibold leading-6 text-gray-300">
            {car.model}
          </dd>
        </dl>
        <div className="-mt-4 px-4 py-6 bg-white rounded-t-3xl">
          <div className="-mt-24 h-36 flex items-end justify-end">
            <Image
              src={car.image}
              alt=""
              width={256}
              height={256}
              className=""
            />
          </div>
          <div className="">
            <div className="mt-4 p-2 rounded-2xl bg-gray-100 grid grid-cols-3 gap-x-4 font-semibold text-sm">
              {features.map(
                (feature) =>
                  feature.active && (
                    <dl
                      key={feature.title}
                      className="flex flex-col text-center"
                    >
                      <dt className="mx-auto">
                        <feature.icon className="h-6 w-6 text-gray-500" />
                      </dt>
                      <dd className="text-gray-900">{feature.text}</dd>
                    </dl>
                  )
              )}
            </div>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-xs font-medium text-neutral-500">
                  {t("start from")}
                </p>
                <div className="">
                  <p className="font-bold text-lg text-gray-700">
                    {car.price ? car.price : "__"} dhs
                    <span className="font-normal text-sm ml-2 text-gray-500">
                      / Day
                    </span>
                  </p>
                </div>
              </div>

              <Button
                text={t("book now")}
                color={ButtonColors.DARK}
                pill
                // handleClick={}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
