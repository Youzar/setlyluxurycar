"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Combobox, Input } from "../elements";
import Modal from "../elements/Modal";
import { makes, places } from "@/constants";
import { ButtonColors, ButtonTypes, Sizes } from "@/common.types";
import { IoMdPin as PinIcon } from "react-icons/io";
import { IoCarSport as CarIcon, IoCog as CogIcon } from "react-icons/io5";

const makesList = makes.map((make) => ({
  name: make.name,
  image: make.image,
  cars: make.cars.map((car) => ({
    name: car.model,
    image: car.image,
  })),
}));

interface BookingProps {
  whatsapp: string;
  email: string;
}

const Booking = ({ whatsapp, email }: BookingProps) => {
  const t = useTranslations();

  const [openModal, setOpenModal] = useState(false);

  const initialPickUp = places[3];
  const initialPickUpDate = new Date();
  const initialDropOffDate = new Date();
  const initialMake = { cars: [] };
  const initialModel = "";
  const initialCustomerName = "";
  const initialCustomerPhone = "";
  const initialCustomerEmail = "";

  const [pickUp, setPickUp] = useState(initialPickUp);
  const [pickUpDate, setPickUpDate] = useState<Date>(initialPickUpDate);
  const [dropOffDate, setDropOffDate] = useState<Date>(initialDropOffDate);
  const [make, setMake] = useState(initialMake);
  const [model, setModel] = useState(initialModel);
  const [customerName, setCustomerName] = useState(initialCustomerName);
  const [custonerPhone, setCustomerPhone] = useState(initialCustomerPhone);
  const [customerEmail, setCustomerEmail] = useState(initialCustomerEmail);

  useEffect(() => {
    setModel(initialModel);
  }, [make]);

  const isObjectEmpty = (obj: {}): boolean => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  const requiredError = (): void => {
    alert(t("required_error"));
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (isObjectEmpty(pickUp) || !pickUpDate || !dropOffDate) {
      requiredError();
    } else {
      setOpenModal(true);
    }
  };

  const handleSend = (via: "whatsapp" | "email"): void => {
    if (
      isObjectEmpty(pickUp) ||
      !pickUpDate ||
      !dropOffDate ||
      isObjectEmpty(make) ||
      !model ||
      !customerName ||
      !custonerPhone ||
      !customerEmail
    ) {
      requiredError();
    } else {
      const formatDate = (date: Date, locale: "fr-MA" | "en-US" = "en-US") => {
        const options: Intl.DateTimeFormatOptions = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };

        return date.toLocaleDateString(locale, options);
      };

      const place = pickUp.name;
      const formatedPickUpDate = `${formatDate(pickUpDate)} (${formatDate(
        pickUpDate,
        "fr-MA"
      )})`;
      const formatedDropOffDate = `${formatDate(dropOffDate)} (${formatDate(
        dropOffDate,
        "fr-MA"
      )})`;
      const car = `${make.name} ${
        model.constructor === Object ? model.name : model
      }`;

      const BookingMessage =
        "Vous avez reçu une nouvelle demande de réservation d'un client";
      // "You have received a new booking request from a customer";

      if (via === "whatsapp") {
        const messageBody =
          `${BookingMessage}\n` +
          `*${t("name")}*: ${customerName}\n` +
          `*${t("phone")}*: ${custonerPhone}\n` +
          `*${t("email")}*: ${customerEmail}\n` +
          `------\n` +
          `*${t("car")}: ${car}*\n` +
          `*${t("pick-up place")}*: ${place}\n` +
          `*${t("pick-up date")}*: ${formatedPickUpDate}\n` +
          `*${t("drop-off date")}*: ${formatedDropOffDate}`;
        const encodedMessage = encodeURIComponent(messageBody);
        const whatsappWithoutSpaces = whatsapp.split(" ").join("");
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappWithoutSpaces}&text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
      } else if (via === "email") {
        const subject = `New Booking Request - ${customerName}`;
        const body = `
          ${BookingMessage}

          Booking Details:

          ${t("name")}: ${customerName}
          ${t("phone")}: ${custonerPhone}
          ${t("email")}: ${customerEmail}
          -----------------------
          ${t("car")}: ${car}
          ${t("pick-up place")}: ${place}
          ${t("pick-up date")}: ${formatedPickUpDate}
          ${t("drop-off date")}: ${formatedDropOffDate}
        `;
        const encodedBody = encodeURIComponent(body);
        const mailToUrl = `mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodedBody}`;
        window.open(mailToUrl, "_blank");
      }
    }
  };

  const handleCancel = () => {
    setOpenModal(false);

    setPickUp(initialPickUp);
    setPickUpDate(initialPickUpDate);
    setDropOffDate(initialDropOffDate);
    setMake(initialMake);
    setModel(initialModel);
    setCustomerName(initialCustomerName);
    setCustomerPhone(initialCustomerPhone);
    setCustomerEmail(initialCustomerEmail);
  };

  return (
    <>
      <div className="relative app-container">
        <div className="mx-auto max-w-md sm:max-w-3xl lg:max-w-full">
          <form onSubmit={handleSearch}>
            <div className="bg-white p-4 rounded-lg items-center shadow-2xl shadow-neutral-400/20 lg:flex lg:items-end lg:p-8">
              <div className="lg:grow">
                <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-2">
                  <div className="col-span-2">
                    <Combobox
                      label={t("pick-up")}
                      items={places}
                      selected={pickUp}
                      setSelected={setPickUp}
                      customValue
                      Icon={PinIcon}
                    />
                  </div>

                  <div className="w-full">
                    <Input
                      type="date"
                      name="pickUpDate"
                      label={t("pick-up date")}
                      value={pickUpDate.toISOString().split("T")[0]} // Ensure value is in 'YYYY-MM-DD' format for the date input
                      handleChange={(e) =>
                        setPickUpDate(new Date(e.target.value))
                      }
                    />
                  </div>
                  <div>
                    <Input
                      type="date"
                      name="dropOffDate"
                      label={t("drop-off date")}
                      value={dropOffDate.toISOString().split("T")[0]} // Ensure value is in 'YYYY-MM-DD' format for the date input
                      handleChange={(e) =>
                        setDropOffDate(new Date(e.target.value))
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:ml-4 lg:mt-0">
                <Button type={ButtonTypes.SUBMIT} block>
                  {t("search")}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Modal isOpen={openModal} setIsOpen={setOpenModal} title={t("booking")}>
        <div className="mt-6 space-y-6">
          <p className="text-base font-medium text-gray-900">
            {t("car information")} :
          </p>
          <Combobox
            label={t("make")}
            items={makesList}
            selected={make}
            setSelected={setMake}
            customValue
            Icon={CogIcon}
          />
          {make.cars ? (
            make.cars.length > 0 && (
              <Combobox
                label={t("model")}
                items={make.cars}
                selected={model}
                setSelected={setModel}
                imageSize={Sizes.XL}
                customValue
                Icon={CarIcon}
              />
            )
          ) : (
            <Input
              name="model"
              label={t("model")}
              value={model}
              handleChange={(e) => setModel(e.target.value)}
            />
          )}

          <hr />

          <p className="text-base font-medium text-gray-900">
            {t("customer information")} :
          </p>

          <Input
            name="customerName"
            label={t("full name")}
            value={customerName}
            handleChange={(e) => setCustomerName(e.target.value)}
          />
          <Input
            type="tel"
            name="custonerPhone"
            label={t("phone")}
            value={custonerPhone}
            handleChange={(e) => setCustomerPhone(e.target.value)}
          />
          <Input
            type="email"
            name="customerEmail"
            label={t("email")}
            value={customerEmail}
            handleChange={(e) => setCustomerEmail(e.target.value)}
          />

          <hr />

          <div className="space-y-3">
            <Button
              text={t("send via whatsapp")}
              handleClick={() => handleSend("whatsapp")}
              color={ButtonColors.SUCCESS}
              block
            />
            <Button
              text={t("send via email")}
              handleClick={() => handleSend("email")}
              color={ButtonColors.DANGER}
              block
            />
            <Button
              text={t("cancel")}
              handleClick={() => handleCancel()}
              color={ButtonColors.DEFAULT}
              block
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Booking;
