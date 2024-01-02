"use client";

import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { SelectMenuItem, SelectMenuProps, Size } from "@/common.types";
import Image from "next/image";
import { classNames } from "@/utils";
import { SelectMenuOptions } from ".";

const ComboBox = ({
  id,
  by = "name",
  items,
  selected,
  setSelected,
  imageSize = Size.SM,
  Icon,
  allowCustomValue,
}: SelectMenuProps) => {
  const hasImage = (item: any): boolean => item.icon || item.image || Icon;
  const t = useTranslations();
  const [query, setQuery] = useState("");

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
    <div id={id}>
      <Combobox value={selected} by={by} onChange={setSelected}>
        <div className="relative">
          <div className="relative w-full">
            {hasImage(selected) && (
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
                    <Icon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  )
                )}
              </div>
            )}

            <Combobox.Input
              className={classNames(
                hasImage(selected) ? "pl-10" : "",
                "pr-10 app-input"
              )}
              displayValue={(item: SelectMenuItem) => item.name}
              onChange={(event) => setQuery(event.target.value)}
            />

            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>

          <SelectMenuOptions
            menuType="Combobox"
            items={filteredItems}
            Icon={Icon}
            imageSize={imageSize}
            allowCustomValue={allowCustomValue}
            afterLeave={() => setQuery("")}
            query={query}
          />
        </div>
      </Combobox>
    </div>
  );
};

export default ComboBox;
