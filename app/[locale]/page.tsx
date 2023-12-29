import { About, CTA, Fleet, Hero, Services } from "@/components/sections";
import MakesLogos from "@/components/sections/MakesLogos";
import { useApp } from "@/hooks";

const Home = () => {
  const app = useApp();

  return (
    <main>
      <div className="bg-black">
        <Hero />
      </div>
      <div className="">
        <MakesLogos />
        <About />
        <Fleet />
        <Services />
        <CTA />
      </div>
    </main>
  );
};

export default Home;
