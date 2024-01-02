import { ElementType, ReactNode } from "react";

export enum Size {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export enum Alignment {
  START = "start",
  CENTER = "center",
  END = "end",
}

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export enum ButtonColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info",
  DANGER = "danger",
  DARK = "dark",
  DEFAULT = "default",
}

export enum CarType {
  SEDAN = "Sedan",
  SUV = "SUV",
  VAN = "Van/Minivan",
  HATCHBACK = "Hatchback",
  COUPE = "Coupe",
}

export enum Transmission {
  MANUAL = "Manual",
  AUTOMATIC = "Automatic",
}

export enum FuelType {
  DIESEL = "Diesel",
  GASOLINE = "Gasoline",
}

export interface CarProps {
  model: string;
  type: CarType;
  year?: number;
  doors: number;
  seats: number;
  transmission: Transmission;
  fuelType: FuelType;
  fuelConsumption: string;
  price: number | "";
  isActive: boolean;
  showInMain: boolean;
  image: string;
}

export interface InputProps {
  name: string;
  id?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "date";
  value?: any;
  className?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  rounded?: boolean;
}

export interface InputGroupProps extends InputProps {
  label?: string;
  children?: ReactNode;
  addOn?: string;
  inlineLeading?: string;
  inlineTrailing?: string;
  LeadingIcon?: ElementType;
  TrailingIcon?: ElementType;
  LeadingButton?: ElementType;
  TrailingButton?: ElementType;
}

// Select Menu item for (Listbox | Combobox)
export interface SelectMenuItem {
  name: string;
  icon?: ElementType;
  image?: string;
  leading?: any;
}

interface BaseSelectMenuProps {
  items: SelectMenuItem[];
  Icon?: ElementType;
  imageSize?: Size;
  allowCustomValue?: boolean; // used with Combobox
  secondaryText?: string; // used with Listbox
}

// Listbox Or Combobox
export interface SelectMenuProps extends BaseSelectMenuProps {
  id: string;
  by?: string;
  selected: SelectMenuItem;
  setSelected: SelectMenuItem;
  rounded?: boolean;
  inGroup?: Alignment;
  displayName?: boolean; // used with Listbox
  displaySecondaryText?: boolean; // used with Listbox
}

export interface SelectMenuOptionsProps extends BaseSelectMenuProps {
  menuType: "Listbox" | "Combobox";
  open?: boolean; // used with Listbox *required
  query?: string; // used with Combobox *required
  afterLeave?: () => void; // used with Combobox *required
}
