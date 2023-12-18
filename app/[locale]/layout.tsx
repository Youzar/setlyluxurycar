import { Footer } from "@/components/sections";
import "../globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/elements";
import { useApp } from "@/hooks";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { contacts, navigation, seo } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const meta = seo[locale];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  //

  let messages;
  try {
    messages = (await import(`../../lang/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const t = createTranslator({ locale, messages });

  const app = useApp();

  const translatedNavigation = navigation.map((nav: any) => ({
    name: t(nav.name),
    href: nav.href,
  }));

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header
            logo={app.logoInverse}
            title={app.title}
            navigation={translatedNavigation}
          />

          {children}

          <Footer
            app={app}
            contacts={contacts}
            navigation={translatedNavigation}
          />
        </NextIntlClientProvider>

        <div className="relative">
          <a
            href={contacts.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="fixed z-90 bottom-8 right-8 drop-shadow-md inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <contacts.whatsapp.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </body>
    </html>
  );
}
