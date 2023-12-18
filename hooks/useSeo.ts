import { seo } from "@/constants";
import { useLocale } from "next-intl";

const useSeo = () => {
  const locale = useLocale();

  return seo[locale];
};

export default useSeo;
