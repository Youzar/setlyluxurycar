import { ReactNode } from "react";
import PageHeader from "./PageHeader";
import { CTA } from ".";
import { useTranslations } from "next-intl";

interface Props {
  headerTitle: string;
  headerDescription?: string;
  headerImgUrl?: string;
  children: ReactNode;
}

const PageLayout = ({
  headerTitle,
  headerDescription,
  headerImgUrl,
  children,
}: Props) => {
  const t = useTranslations();
  return (
    <div>
      <PageHeader
        title={t(headerTitle)}
        description={headerDescription}
        imageUrl={headerImgUrl}
      />
      {children}

      <CTA />
    </div>
  );
};

export default PageLayout;
