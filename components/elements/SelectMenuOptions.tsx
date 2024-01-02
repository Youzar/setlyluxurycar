"use client";

import { SelectMenuOptionsProps, Size } from "@/common.types";
import { classNames } from "@/utils";
import { Combobox, Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment, useState } from "react";

const SelectMenuOptions = ({
  menuType,
  items,
  open,
  query,
  afterLeave,
  allowCustomValue,
  Icon,
  imageSize = Size.SM,
  secondaryText,
}: SelectMenuOptionsProps) => {
  // TODO: test this
  // Check if menuType is "Listbox" and open is not provided
  if (menuType === "Listbox" && open === undefined) {
    throw new Error('When menuType is "Listbox", open is required');
  }

  if (
    menuType === "Combobox" &&
    query === undefined &&
    afterLeave === undefined
  ) {
    throw new Error(
      'When menuType is "Combobox", query and afterLeave are required'
    );
  }

  const t = useTranslations();
  const isCombobox = menuType === "Combobox";
  const SelectMenu = isCombobox ? Combobox : Listbox;
  const hasLeading = (item: any): boolean =>
    item.icon || item.image || item.leading;

  const imageSizeClasses = {
    xs: "h-4 w-4",
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10",
  }[imageSize];

  return (
    <Transition
      show={open}
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={afterLeave}
    >
      <SelectMenu.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        {/* for Combobox */}
        {isCombobox && allowCustomValue && query.length > 0 && (
          <SelectMenu.Option
            className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-neutral-900"
            value={{
              name: query,
              icon: Icon,
            }}
          >
            {t("create")} "{query}"
          </SelectMenu.Option>
        )}

        {isCombobox &&
        !allowCustomValue &&
        items.length === 0 &&
        query !== "" ? (
          <div className="relative cursor-pointer select-none py-2 px-4 text-neutral-700">
            {t("nothing found")}
          </div>
        ) : (
          items.map((item, idx) => (
            <SelectMenu.Option
              key={`selectmenu-item-${idx}-${item.name}`}
              className={({ active }) =>
                classNames(
                  active ? "bg-primary-600 text-white" : "text-neutral-900",
                  "relative cursor-default select-none py-2 pl-3 pr-9"
                )
              }
              value={item}
            >
              {({ selected, active }) => (
                <>
                  <div
                    className={classNames(
                      hasLeading(item) || secondaryText
                        ? "flex items-center"
                        : ""
                    )}
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt=""
                        className={`${imageSizeClasses} flex-shrink-0`}
                        width={64}
                        height={64}
                      />
                    ) : item.icon ? (
                      <item.icon
                        className="h-5 w-5 flex-shrink-0 text-neutral-400"
                        aria-hidden="true"
                      />
                    ) : (
                      item.leading
                    )}

                    <span
                      className={classNames(
                        selected ? "font-semibold" : "font-normal",
                        hasLeading(item) ? "ml-3" : "",
                        "block truncate"
                      )}
                    >
                      {item.name}
                    </span>

                    {secondaryText && (
                      <span
                        className={classNames(
                          active ? "text-primary-200" : "text-neutral-500",
                          "ml-2 truncate"
                        )}
                      >
                        {item[secondaryText]}
                      </span>
                    )}
                  </div>

                  {selected ? (
                    <span
                      className={classNames(
                        active ? "text-white" : "text-primary-600",
                        "absolute inset-y-0 right-0 flex items-center pr-4"
                      )}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </SelectMenu.Option>
          ))
        )}
      </SelectMenu.Options>
    </Transition>
  );
};

export default SelectMenuOptions;
