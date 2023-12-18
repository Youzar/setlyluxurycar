import Label from "./Label";

interface InputProps {
  name: string;
  id?: string;
  label?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "date";
  value?: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Input = ({
  name,
  id,
  label,
  type = "text",
  value,
  handleChange,
  placeholder,
  disabled = false,
}: InputProps) => {
  return (
    <div>
      {label && <Label text={label} htmlFor={name ?? id} />}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${label && "mt-1"} app-input`}
      />
    </div>
  );
};

export default Input;
