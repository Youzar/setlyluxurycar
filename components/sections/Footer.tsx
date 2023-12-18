import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const social = [
  {
    name: "Facebook",
    href: "http://facebook.com/setly.luxury.car/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/setly.luxury.car/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

interface NavigationTypes {
  name: string;
  href: string;
}

interface FooterProps {
  app: any;
  navigation: NavigationTypes[];
  contacts: any;
}

const Footer = ({ app, navigation, contacts }: FooterProps) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-neutral-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="cursor-pointer ">
              <span className="sr-only">{app.name}</span>
              <Image
                src={app.logo}
                className="h-16 w-auto object-contain"
                width={200}
                height={200}
                alt=""
              />
            </Link>
            <p className="text-sm leading-6 text-neutral-600">
              {locale === "fr"
                ? "Votre agence de location de voitures de confiance au Maroc."
                : "Your Trusted Car Rental Agency in Morocco."}
            </p>
            <div className="flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 hover:text-neutral-500"
                  target="_blank"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 xl:col-span-2 xl:mt-0">
            {/* <div>
              <h3 className="text-sm font-semibold leading-6 text-neutral-900">
                Menu
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            <div>
              <h3 className="text-sm font-semibold leading-6 text-neutral-900">
                Contact
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {Object.values(contacts).map((contact) => {
                  if (contact.title !== "whatsapp") {
                    return (
                      <li
                        key={"footer-contacts-" + contact.title}
                        className="flex space-x-2"
                      >
                        <span>
                          <contact.icon className="w-5 h-5 text-neutral-500" />
                        </span>
                        <a
                          href={contact.href}
                          className="text-sm leading-6 text-neutral-600 hover:text-neutral-900"
                          target="_blank"
                        >
                          {contact.description}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3331.933447238747!2d-7.580605399999999!3d33.372803499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDIyJzIyLjEiTiA3wrAzNCc1MC4yIlc!5e0!3m2!1sen!2sma!4v1681678854883!5m2!1sen!2sma"
                className="w-full h-full max-h-80"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-neutral-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm leading-6 text-neutral-600 hover:text-neutral-900 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-neutral-500 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} {app.name}.{" "}
            {locale === "fr" ? "Tous droits réservés" : "All rights reserved"}.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
