import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";

import ServiceCardContainer from "@/components/ServiceCardContainer";

const Home = () => {
  return (
    <div className="relative z-20">
      <Hero />
      <div className="w-11/12 mx-auto">
        <Separator className="bg-slate-50" />
      </div>

      <div className="lg:py-12 py-4 sm:py-6 md:py-8 max-w-7xl mx-auto">
        <h3 className="lg:pb-12 pb-4 sm:pb-6 md:pb-8 text-center text-4xl font-semibold tracking-wide bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500 text-transparent bg-clip-text">
          Services
        </h3>
        <ServiceCardContainer />
      </div>
    </div>
  );
};

export default Home;
