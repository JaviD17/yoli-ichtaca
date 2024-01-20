import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

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

const ServiceCardContainer = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 lg:px-0 px-6">
      {services.map((service) => (
        <Link key={service.href} href={service.href}>
          <Card
            className="group bg-no-repeat bg-cover bg-center relative h-[480px] hover:scale-105 active:scale-95 transition"
            style={{
              backgroundImage: `url(${service.url})`,
            }}
          >
            <CardHeader className="text-center bg-slate-950/70 absolute top-0 z-20 rounded-t-lg">
              <CardTitle
                className={`text-slate-50 tracking-wide group-hover:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500 group-hover:text-transparent group-hover:bg-clip-text`}
              >
                {service.title}
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">
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
  );
};

export default ServiceCardContainer;
