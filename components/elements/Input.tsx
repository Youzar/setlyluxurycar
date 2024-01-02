import { InputProps } from "@/common.types";
import { defaultConfig } from ".";
import { classNames } from "@/utils";

const Input = ({
  name,
  id,
  type = "text",
  value,
  className = "",
  handleChange,
  placeholder,
  disabled = false,
  rounded = defaultConfig.roundedButon,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      id={id ?? name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      className={classNames(
        rounded ? "rounded-md" : "",
        "app-input",
        className
      )}
      {...props}
    />
  );
};

export default Input;
