interface LabelProps {
  text: string;
  htmlFor?: string;
}

const Label = ({ text, htmlFor }: LabelProps) => {
  return (
    <label className="app-form-label" htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default Label;
