import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next-intl/link";

interface MenuItem {
  name: string;
  href: string;
  locale?: string;
  show?: boolean;
}

interface DropdownProps {
  button: any;
  icon?: any;
  buttonClasses?: string;
  items: MenuItem[];
}

const Dropdown = ({ button, buttonClasses, items }: DropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={buttonClasses}>{button}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 max-w-xs origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, idx) => (
              <Menu.Item key={`dropdown-menu-item-${idx}`}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    locale={item.locale}
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
