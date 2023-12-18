import { ElementType } from "react";

export enum Sizes {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export enum ButtonTypes {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export enum ButtonColors {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info",
  DANGER = "danger",
  DARK = "dark",
  DEFAULT = "default",
}

export enum CarTypes {
  SEDAN = "Sedan",
  SUV = "SUV",
  VAN = "Van/Minivan",
  HATCHBACK = "Hatchback",
  COUPE = "Coupe",
}

export enum Transmissions {
  MANUAL = "Manual",
  AUTOMATIC = "Automatic",
}

export enum FuelTypes {
  DIESEL = "Diesel",
  GASOLINE = "Gasoline",
}

export interface Place {
  name: string;
  icon: ElementType;
}
export interface Car {
  model: string;
  type: CarTypes;
  year?: number;
  doors: number;
  seats: number;
  transmission: Transmissions;
  fuelType: FuelTypes;
  fuelConsumption: string;
  isActive: boolean;
  showInMain: boolean;
  image: string;
}
