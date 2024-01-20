import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ServiceCardContainer from "@/components/ServiceCardContainer";

const services = [
  {
    title: "One-on-One sessions",
    desc: "Tailored individual training sessions focusing on the client's specific fitness goals and needs.",
    href: "/services/one-on-one-sessions",
    url: "/assets/service-1.png",
  },
  {
    title: "Nutritional Guidance",
    desc: "Developing personalized nutrition plans to complement clients' fitness goals and enhance overall well-being.",
    href: "/services/nutritional-guidance",
    url: "/assets/service-2.png",
  },
  {
    title: "Lifestyle Coaching",
    desc: "Incorporating holistic lifestyle coaching to address factors beyond fitness, such as stress management, sleep, and overall well-being.",
    href: "/services/lifestyle-coaching",
    url: "/assets/service-3.png",
  },
];

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
        {/* card grid container */}
        <ServiceCardContainer />
      </div>
    </div>
  );
};

export default Home;
