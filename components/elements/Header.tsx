"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  GlobeAltIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { contacts } from "@/constants";
import { Button } from ".";
import { ButtonColor } from "@/common.types";

interface NavigationTypes {
  name: string;
  href: string;
}

interface HeaderProps {
  logo: string;
  title: string;
  navigation: NavigationTypes[];
  constrained?: Boolean;
}

const Header = ({ logo, title, navigation, constrained }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations();

  const phone = contacts.phone;
  const whatsapp = contacts.whatsapp;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav>
        {/* Top navigation */}
        {/* <div className="bg-black">
          <div className="mx-auto flex h-10 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Dropdown
              button={
                <>
                  <GlobeAltIcon
                    className="-ml-1 w-5 h-5 text-neutral-500"
                    aria-hidden="true"
                  />
                  {t("language")}
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-4 text-gray-200"
                    aria-hidden="true"
                  />
                </>
              }
              buttonClasses="inline-flex w-full items-center justify-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-200 hover:text-white"
              items={[
                { name: t("english"), href: "/", locale: "en" },
                { name: t("french"), href: "/", locale: "fr" },
              ]}
            />

            <div className="flex items-center space-x-6">
              <Link
                href={phone.href}
                className="text-sm font-medium text-white hover:text-gray-100 flex space-x-2"
              >
                <span>
                  <phone.icon className="w-5 h-5 text-neutral-500" />
                </span>
                <span>{phone.description}</span>
              </Link>
            </div>
          </div>
        </div> */}
        {/* Secondary navigation */}
        <div
          className={`flex ${
            constrained && "mx-auto max-w-7xl"
          } items-center justify-between p-6 lg:px-8`}
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{title}</span>
              <Image
                src={logo}
                className="h-8 w-auto object-contain"
                width={200}
                height={200}
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-200 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href={whatsapp.href}
              target="_blank"
              className="flex items-center text-base font-medium text-white hover:text-gray-100 space-x-2"
            >
              <span>
                <whatsapp.icon className="w-5 h-5 text-green-500" />
              </span>
              <span>{whatsapp.description}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{title}</span>
              <Image
                src={logo}
                className="h-8 w-auto object-contain"
                width={100}
                height={100}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  );
};

export default Header;
