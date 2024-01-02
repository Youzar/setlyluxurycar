import { ElementType } from "react";
import { Input } from ".";
import Label from "./Label";
import { Alignment, InputGroupProps } from "@/common.types";
import { classNames } from "@/utils";

const renderAddon = (
  Icon: ElementType | undefined,
  inlineText: string | undefined,
  alignment: Alignment
) => {
  return (
    <>
      {(Icon || inlineText) && (
        <div
          className={classNames(
            "pointer-events-none absolute inset-y-0 flex items-center",
            alignment === "start" ? "left-0 pl-3" : "right-0 pr-3"
          )}
        >
          {Icon ? (
            <Icon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
          ) : (
            <span className="text-neutral-500 sm:text-sm">{inlineText}</span>
          )}
        </div>
      )}
    </>
  );
};

const InputGroup = ({
  name,
  id,
  label,
  type,
  value,
  handleChange,
  placeholder,
  disabled,
  rounded,
  children,
  addOn,
  inlineLeading,
  inlineTrailing,
  LeadingIcon,
  TrailingIcon,
  LeadingButton,
  TrailingButton,
}: InputGroupProps) => {
  const inputProps = {
    type,
    name,
    id,
    value,
    handleChange,
    placeholder,
    disabled,
  };

  return (
    <div className="relative">
      {label && <Label text={label} htmlFor={id ?? name} />}
      <div className={label && "mt-1"}>
        {children ?? (
          <>
            <div className={(LeadingButton || TrailingButton) && "flex"}>
              {LeadingButton && (
                <LeadingButton /> // use this classes on button: "", "rounded-l-md" if the input is rounded
              )}

              <div
                className={classNames(
                  LeadingIcon ||
                    TrailingIcon ||
                    inlineLeading ||
                    inlineTrailing ||
                    LeadingButton ||
                    TrailingButton
                    ? "relative"
                    : "",
                  LeadingButton || TrailingButton
                    ? "flex flex-grow items-stretch focus-within:z-10"
                    : ""
                )}
              >
                {renderAddon(LeadingIcon, inlineLeading, Alignment.START)}
                <Input
                  {...inputProps}
                  className={classNames(
                    LeadingIcon || inlineLeading ? "pl-10" : "",
                    TrailingIcon || inlineTrailing ? "pr-10" : "",
                    LeadingButton || TrailingButton ? "rounded-none" : "",
                    LeadingButton && rounded
                      ? "rounded-r-md"
                      : TrailingButton && rounded
                      ? "rounded-l-md"
                      : rounded
                      ? "rounded-md"
                      : ""
                  )}
                />

                {renderAddon(TrailingIcon, inlineTrailing, Alignment.END)}
              </div>

              {TrailingButton && (
                <TrailingButton /> // use this classes on button: "-ml-px", "rounded-r-md" if the input is rounded
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InputGroup;
