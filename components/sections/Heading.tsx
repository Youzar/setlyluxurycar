import { ReactNode } from "react";

interface HeadingProps {
  title: string;
  description?: string;
  eyebrow?: string;
  largeTitle?: boolean;
  centered?: boolean;
  onDark?: boolean;
  children?: ReactNode;
}

const Heading = ({
  title,
  description,
  eyebrow,
  centered,
  largeTitle,
  onDark,
  children,
}: HeadingProps) => {
  return (
    <div
      className={`mx-auto max-w-2xl ${centered ? "text-center" : "lg:mx-0"}`}
    >
      <h2
        className={`text-base font-semibold leading-7 uppercase ${
          onDark ? "text-primary-400" : "text-primary-600"
        }`}
      >
        {eyebrow}
      </h2>
      <p
        className={`mt-2 font-bold tracking-tight
        ${onDark ? "text-white" : "text-gray-900"}
        ${largeTitle ? "text-4xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}
      >
        {title}
      </p>
      <p
        className={`mt-6 text-lg leading-8 ${
          onDark ? "text-gray-200" : "text-gray-900"
        }`}
      >
        {description}
      </p>

      {children}
    </div>
  );
};

export default Heading;
