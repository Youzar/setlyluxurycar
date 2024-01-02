"use client";

import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Button, SelectMenuOptions, defaultConfig } from ".";
import Image from "next/image";
import { ButtonColor, SelectMenuProps } from "@/common.types";
import { classNames } from "@/utils";

const ListBox = ({
  id,
  by = "name", // to compare the objects by a particular field instead of comparing object identity
  items,
  selected,
  setSelected,
  rounded = defaultConfig.roundedButon,
  Icon,
  secondaryText,
  displayName = true,
  displaySecondaryText = true,
  inGroup,
}: SelectMenuProps) => {
  const hasLeading = (item: any): boolean =>
    item.icon || item.image || item.leading;

  return (
    <div id={id}>
      <Listbox value={selected} by={by} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Button as={Fragment}>
              <Button
                rounded={rounded}
                color={ButtonColor.DEFAULT}
                inGroup={inGroup}
                LeadingIcon={Icon && !hasLeading ? Icon : undefined}
                trailingIconClassName="text-neutral-400"
                TrailingIcon={ChevronUpDownIcon}
              >
                <span
                  className={hasLeading(selected) ? "flex items-center" : ""}
                >
                  {selected.image ? (
                    <Image
                      src={selected.image}
                      alt=""
                      className="h-5 w-5 flex-shrink-0"
                      width={64}
                      height={64}
                    />
                  ) : selected.icon ? (
                    <selected.icon
                      className="h-5 w-5 flex-shrink-0 text-neutral-400"
                      aria-hidden="true"
                    />
                  ) : (
                    selected.leading
                  )}

                  {(displayName || displaySecondaryText) && (
                    <span className={hasLeading(selected) ? "ml-3" : ""}>
                      {displayName && (
                        <span className="truncate">{selected.name}</span>
                      )}
                      {secondaryText && displaySecondaryText && (
                        <span
                          className={classNames(
                            displayName ? "ml-2" : "",
                            "truncate text-neutral-500"
                          )}
                        >
                          {selected[secondaryText]}
                        </span>
                      )}
                    </span>
                  )}
                </span>
              </Button>
            </Listbox.Button>

            <SelectMenuOptions
              menuType="Listbox"
              items={items}
              open={open}
              secondaryText={secondaryText}
            />
          </>
        )}
      </Listbox>
    </div>
  );
};

export default ListBox;
