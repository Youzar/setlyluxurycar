import {
  About,
  Booking,
  CTA,
  Fleet,
  Hero,
  Services,
} from "@/components/sections";
import MakesLogos from "@/components/sections/MakesLogos";
import { contacts } from "@/constants";
import { useApp } from "@/hooks";

const Home = () => {
  const app = useApp();

  return (
    <main>
      <Hero />
      <div className="-mt-16">
        <Booking
          whatsapp={contacts.whatsapp.description}
          email={contacts.email.description}
        />
        <MakesLogos />
        <Services />
        <Fleet />
        <About />
        <CTA />
      </div>
    </main>
  );
};

export default Home;
