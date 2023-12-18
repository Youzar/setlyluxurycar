import { app } from "@/constants";
import { useLocale } from "next-intl";

const useApp = () => {
  const locale = useLocale();

  return {
    ...app,
    description: app.description[locale],
    tagline: app.tagline[locale],
  };
};

export default useApp;
