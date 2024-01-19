"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";

import styles from "./index.module.css";
// import useScreenSize from "@/hooks/useScreenSize";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="lg:max-w-7xl max-w-sm sm:max-w-xl md:sm:max-w-3xl mx-auto lg:py-12 py-4 sm:py-6 md:py-8">
      {/* Desktop hero */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center relative">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/assets/hero-1.png"
            alt="gym room"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>

        <div className="absolute top-10 z-20 text-slate-50 bg-slate-950 bg-opacity-85 p-6 rounded-md text-center">
          <h3 className="text-2xl lg:text-5xl font-semibold tracking-wide bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 inline-block text-transparent bg-clip-text mb-2">
            Yoli Ichtaca:
          </h3>
          <Separator />
          <p className="text-lg mt-2">
            Uncover Your Inner Strength, Embrace Resilience, Forge Your Destiny.
          </p>
        </div>

        <div className="absolute lg:top-1/3 z-20">
          <Image
            src={"/assets/logo-white.svg"}
            alt="logo"
            height={400}
            width={400}
            onClick={() => router.push("/")}
            className={`${styles.box}`}
            // className={`${styles.box} ${styles.spin}`}
          />
        </div>

        <div className="absolute bottom-10 z-20">
          <Button
            className="font-semibold text-xl hover:scale-105 active:scale-95 transition opacity-85"
            size={"lg"}
            onClick={() => router.push("/services")}
          >
            Shop Services
          </Button>
        </div>

        <div className="rounded-md bg-slate-950/60 absolute inset-0 z-10" />
      </div>

      {/* Mobile Hero */}
      <div className="lg:hidden flex flex-col items-center justify-center relative">
        <AspectRatio ratio={2 / 3}>
          <Image
            src="/assets/hero-1.png"
            alt="gym room"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>

        <div className="absolute top-10 z-20 text-slate-50 bg-slate-950 bg-opacity-85 p-6 rounded-md text-center">
          <h3 className="text-2xl lg:text-5xl font-semibold tracking-wide bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 inline-block text-transparent bg-clip-text mb-2">
            Yoli Ichtaca:
          </h3>
          <Separator />
          <p className="text-lg mt-2">
            Uncover Your Inner Strength, Embrace Resilience, Forge Your Destiny.
          </p>
        </div>

        <div className="absolute bottom-24 lg:top-1/2 z-20">
          <Image
            src={"/assets/logo-white.svg"}
            alt="logo"
            height={240}
            width={240}
            onClick={() => router.push("/")}
            className={`${styles.box}`}
          />
        </div>

        <div className="absolute bottom-10 z-20">
          <Button
            className="font-semibold text-xl hover:scale-105 active:scale-95 transition opacity-85"
            size={"lg"}
            onClick={() => router.push("/services")}
          >
            Shop Services
          </Button>
        </div>

        <div className="rounded-md bg-slate-950/60 absolute inset-0 z-10" />
      </div>
    </div>
  );
};

export default Hero;
