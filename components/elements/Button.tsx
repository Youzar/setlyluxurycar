import { ButtonColors, Sizes, ButtonTypes } from "@/common.types";
import Link from "next/link";
import { ElementType, ReactNode } from "react";

interface ButtonProps {
  text?: string;
  link?: string;
  linkType?: "link" | "anchor";
  type?: ButtonTypes;
  color?: ButtonColors;
  size?: Sizes;
  disabled?: boolean;
  rounded?: boolean;
  pill?: boolean;
  block?: boolean;
  outline?: boolean;
  Icon?: ElementType;
  handleClick?: () => void;
  children?: ReactNode;
}

const Button = ({
  text,
  link,
  linkType = "link",
  type = ButtonTypes.BUTTON,
  color = ButtonColors.PRIMARY,
  size,
  disabled = false,
  rounded = true,
  pill = false,
  block = false,
  outline = false,
  Icon,
  handleClick,
  children,
  ...props
}: ButtonProps) => {
  let sizeClasses = "";
  let iconClasses = "";

  switch (size) {
    case Sizes.XS:
      sizeClasses = `px-2.5 py-1.5 text-xs`;
      iconClasses = "ml-0.5 h-4 w-4";
      break;
    case Sizes.SM:
      sizeClasses = `px-3 py-2 text-sm`;
      iconClasses = "ml-0.5 h-4 w-4";
      break;
    case Sizes.LG:
      sizeClasses = `px-4 py-2 text-base`;
      iconClasses = "-ml-0.5 h-5 w-5";
      break;
    case Sizes.XL:
      sizeClasses = `px-6 py-3 text-base`;
      iconClasses = "-ml-0.5 h-5 w-5";
      break;

    case Sizes.MD:
    default:
      sizeClasses = `px-4 py-2 text-sm`;
      iconClasses = "-ml-0.5 h-5 w-5";
      break;
  }

  let style = {
    primary: outline
      ? "text-primary-700 ring-1 ring-inset ring-primary-700 hover:text-white hover:ring-primary-500 hover:bg-primary-500"
      : "text-white bg-primary-500 hover:bg-primary-700 focus:bg-primary-800",
    secondary: outline
      ? "text-secondary-700 ring-1 ring-inset ring-secondary-700 hover:text-white hover:ring-secondary-500 hover:bg-secondary-500"
      : "text-white bg-secondary-500 hover:bg-secondary-700 focus:bg-secondary-800",
    success: outline
      ? "text-success-700 ring-1 ring-inset ring-success-700 hover:text-white hover:ring-success-500 hover:bg-success-500"
      : "text-white bg-success-500 hover:bg-success-700 focus:bg-success-800",
    danger: outline
      ? "text-danger-700 ring-1 ring-inset ring-danger-700 hover:text-white hover:ring-danger-500 hover:bg-danger-500"
      : "text-white bg-danger-500 hover:bg-danger-700 focus:bg-danger-800",
    warning: outline
      ? "text-warning-700 ring-1 ring-inset ring-warning-700 hover:text-white hover:ring-warning-500 hover:bg-warning-500"
      : "text-white bg-warning-500 hover:bg-warning-700 focus:bg-warning-800",
    info: outline
      ? "text-info-700 ring-1 ring-inset ring-info-700 hover:text-white hover:ring-info-500 hover:bg-info-500"
      : "text-white bg-info-500 hover:bg-info-700 focus:bg-info-800",
    dark: outline
      ? "text-gray-900 ring-1 ring-inset ring-gray-900 hover:text-white hover:ring-gray-800 hover:bg-gray-800"
      : "text-white bg-gray-800 hover:bg-gray-900 focus:bg-gray-900",
    default: outline
      ? "text-gray-900 ring-1 ring-inset ring-secondary-900 hover:text-white hover:ring-secondary-100 hover:bg-secondary-100"
      : "ring-1 ring-inset ring-gray-300 text-gray-900 bg-white hover:bg-gray-100 focus:bg-gray-200",
  }[color];

  let classes = `
  ${block ? "block w-full" : ""}
  ${Icon ? "inline-flex items-center justify-center" : ""}
  ${Icon && (size == Sizes.LG || size == Sizes.XL) ? "gap-x-2" : "gap-x-1.5"}
  ${sizeClasses} font-semibold
  ${pill ? "rounded-full" : rounded ? "rounded-md" : ""}
  text-center shadow-sm cursor-pointer ${style} transition-colors duration-200`;

  const content = (
    <>
      {Icon && <Icon className={iconClasses} />}
      {children ?? text}
    </>
  );

  return (
    <>
      {link && linkType === "link" ? (
        <Link href={link} className={classes} {...props}>
          {content}
        </Link>
      ) : link && linkType === "anchor" ? (
        <a href={link} className={classes} {...props}>
          {content}
        </a>
      ) : (
        <button
          type={type}
          className={classes}
          onClick={handleClick}
          disabled={disabled}
          {...props}
        >
          {content}
        </button>
      )}
    </>
  );
};

export default Button;
