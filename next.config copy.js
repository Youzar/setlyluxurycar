import withNextIntl from "next-intl/plugin";
import i18nConfig from "./i18n.js";

const config = {
  // Other Next.js configuration ...
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(i18nConfig)(config);
