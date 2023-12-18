"use client";

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

function CarCard({ car }: CarCardProps) {
  const t = useTranslations();

  return (
    <div className="relative  overflow-hidden bg-white rounded-xl shadow-sm">
      <Image
        src={car.image}
        alt=""
        width={500}
        height={500}
        className="aspect-[16/9] w-full bg-gray-100 object-cover"
      />
      <div className="space-y-6 p-4">
        <div className="mt-1 flex justify-between items-center">
          <h3 className="text-gray-900 font-medium truncate" title={car.model}>
            <span className="uppercase">{car.make}</span>{" "}
            <span>{car.model}</span>
          </h3>
          <span className="py-0.5 px-2 text-xs bg-gray-50 rounded-full">
            {car.year}
          </span>
        </div>
        <div
          className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm"
          title="Seats"
        >
          <p className="flex text-gray-700 space-x-2">
            <SeatIcon className="h-5 w-4 text-accent-400" />
            <span>
              {car.seats} {t("seats")}
            </span>
          </p>
          <p className="flex text-gray-700 space-x-2" title="Transmission">
            <GearBoxIcon className="h-5 w-4 text-accent-400" />
            <span>{car.transmission}</span>
          </p>
          <p className="flex text-gray-700 space-x-2" title="Fuel Type">
            <GasPumpIcon className="h-5 w-4 text-accent-400" />
            <span>{car.fuelType}</span>
          </p>
          <p className="flex text-gray-700 space-x-2" title="Fuel Consumption">
            <DashboardIcon className="h-5 w-4 text-accent-400" />
            <span>{car.fuelConsumption}</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          {/* <div className='flex items-center'>
            <p className='font-bold text-lg text-gray-700'>{car.price} dhs</p>
            <span className='font-normal text-sm ml-2 text-gray-500'>
              {" "}
              / Day
            </span>
          </div> */}
          {/* <Button
            text={t("book")}
            size={Sizes.XS}
            color={ButtonColors.PRIMARY}
            handleClick={}
          /> */}
        </div>
      </div>
    </div>
  );
}
export default CarCard;
