"use client";

import { useEffect, useState } from "react";
import { InputGroup, ListBox } from ".";
import { countries } from "countries-list";
import { Alignment, InputGroupProps, SelectMenuItem } from "@/common.types";
import { PhoneIcon } from "@heroicons/react/20/solid";
import ReactCountryFlag from "react-country-flag";
import { AsYouType } from "libphonenumber-js";

interface PhoneInputProps extends InputGroupProps {
  onSelect: (country: CountryInfo) => void;
}

interface CountryInfo extends SelectMenuItem {
  code: string;
  nationalNumber: string;
  callingCode: string;
}

const countryList: CountryInfo[] = Object.keys(countries)
  .filter((code) => code !== "EH")
  .map((code) => ({
    code,
    name: countries[code].name,
    nationalNumber: countries[code].phone,
    callingCode: `+${countries[code].phone}`,
    leading: (
      <ReactCountryFlag countryCode={code} className="!text-xl !leading-none" />
    ),
  }))
  .sort((a, b) => a.name.localeCompare(b.name)); // Sort countries by name

const PhoneInput = ({ onSelect, ...props }: PhoneInputProps) => {
  const [country, setCountry] = useState(
    countryList.find((country) => country.code === "MA") ?? countryList[0]
  );

  useEffect(() => {
    const phoneUtil = new AsYouType(country.code).input(phoneNumber);
    const formattedPhone = phoneUtil.getNumber();

    if (formattedPhone) {
      onSelect(formattedPhone.formatInternational());
    }
  }, [country, onSelect]);

  return (
    <>
      <InputGroup
        value={props.value}
        {...props}
        LeadingButton={() => (
          <ListBox
            id="countries"
            items={countryList}
            selected={country}
            setSelected={setCountry}
            secondaryText="callingCode"
            inGroup={Alignment.START}
            Icon={PhoneIcon}
            displayName={false}
          />
        )}
      />
    </>
  );
};

export default PhoneInput;
