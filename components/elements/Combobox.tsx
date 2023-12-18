"use client";

import { ElementType, Fragment, useState } from "react";
import { Combobox as Autocomplete, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Sizes } from "@/common.types";
import Image from "next/image";

interface Item {
  name: string;
  icon?: any;
  image?: string;
}

interface ComboboxProps {
  items: Item[];
  label?: string;
  customValue?: boolean;
  selected: any;
  setSelected: any;
  imageSize?: Sizes;
  Icon?: ElementType;
}

const Combobox = ({
  items,
  label,
  customValue = false,
  selected,
  setSelected,
  imageSize = Sizes.SM,
  Icon,
}: ComboboxProps) => {
  const t = useTranslations();
  const [query, setQuery] = useState("");

  const imageSizeClasses = {
    xs: "h-4 w-4",
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10",
  }[imageSize];

  const filteredItems =
    query === ""
      ? items
      : items.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div>
      <Autocomplete value={selected} onChange={setSelected}>
        {label && (
          <Autocomplete.Label className="block text-sm font-medium text-gray-500 uppercase">
            {label}
          </Autocomplete.Label>
        )}
        <div className="relative mt-1">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {selected.icon ? (
                <selected.icon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              ) : selected.image ? (
                <Image
                  src={selected.image}
                  alt=""
                  className="h-5 w-5"
                  width={64}
                  height={64}
                />
              ) : (
                Icon && (
                  <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                )
              )}
            </div>
            <Autocomplete.Input
              className={`${
                selected.icon || selected.image || Icon ? "pl-10" : ""
              } pr-10 app-input`}
              displayValue={(item: Item) => item.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Autocomplete.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Autocomplete.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Autocomplete.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {customValue && query.length > 0 && (
                <Autocomplete.Option
                  className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-900"
                  value={{
                    name: query,
                    icon: Icon,
                  }}
                >
                  {t("create")} "{query}"
                </Autocomplete.Option>
              )}

              {!customValue && filteredItems.length === 0 && query !== "" ? (
                <div className="relative cursor-pointer select-none py-2 px-4 text-gray-700">
                  {t("nothing found")}
                </div>
              ) : (
                filteredItems.map((item, idx) => (
                  <Autocomplete.Option
                    key={`combobox-item-${idx}-${item.name}`}
                    className={({ active }) =>
                      `cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                        active ? "bg-primary-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span className="flex-shrink-0 inline-block">
                            {item.icon ? (
                              <item.icon
                                className={`w-5 h-5 ${
                                  active ? "text-white" : "text-gray-400"
                                }`}
                                aria-hidden="true"
                              />
                            ) : (
                              item.image && (
                                <Image
                                  src={item.image}
                                  alt=""
                                  className={imageSizeClasses}
                                  width={64}
                                  height={64}
                                />
                              )
                            )}
                          </span>
                          <span
                            className={`${
                              selected ? "font-semibold" : "font-normal"
                            } ml-3 block truncate`}
                          >
                            {item.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={`${
                              active ? "text-white" : "text-secondary-600"
                            } absolute inset-y-0 right-0 flex items-center pr-4`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Autocomplete.Option>
                ))
              )}
            </Autocomplete.Options>
          </Transition>
        </div>
      </Autocomplete>
    </div>
  );
};

export default Combobox;
