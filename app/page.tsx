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
import { url } from "inspector";

const services = [
  {
    title: "One-on-One sessions",
    desc: "Tailored individual training sessions focusing on the client's specific fitness goals and needs.",
    href: "/services/one-on-one-sessions",
  },
  {
    title: "Nutritional Guidance",
    desc: "Developing personalized nutrition plans to complement clients' fitness goals and enhance overall well-being.",
    href: "/services/nutritional-guidance",
  },
  {
    title: "Lifestyle Coaching",
    desc: "Incorporating holistic lifestyle coaching to address factors beyond fitness, such as stress management, sleep, and overall well-being.",
    href: "/services/lifestyle-coaching",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-11/12 mx-auto">
        <Separator className="bg-slate-950" />
      </div>

      <div className="lg:py-12 py-4 sm:py-6 md:py-8 max-w-7xl mx-auto">
        <h3 className="lg:pb-12 pb-4 sm:pb-6 md:pb-8 text-center text-4xl font-semibold tracking-wide bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-teal-300 via-cyan-100 to-cyan-800 text-transparent bg-clip-text">
          Services
        </h3>
        {/* card grid container */}
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.href} href={service.href}>
              <Card
                className="bg-no-repeat bg-cover bg-center relative h-[640px] hover:scale-105 active:scale-95 transition"
                style={{
                  backgroundImage: "url(/assets/yoli-services-1.webp)",
                }}
              >
                <CardHeader className="text-center bg-slate-950 absolute top-0 z-20 rounded-t-md">
                  <CardTitle className="text-slate-50 tracking-wide">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
                <div className="absolute bottom-0 z-20 text-white">
                  <CardContent>
                    <p className="text-xl">Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </div>
                <div className="rounded-md bg-slate-950/60 absolute inset-0 z-10" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
