"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "@/lib/utils";
import {
  Instagram,
  MenuSquareIcon,
  User,
  Twitter,
  Youtube,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const NavRoutes = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  // Nav Routes
  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: "/services",
      label: "Services",
      active: pathname === `/services`,
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === `/contact`,
    },
  ];

  // Profile Routes
  const profileRoutes = [
    {
      href: `/profile`,
      label: "Profile",
      active: pathname === `/profile`,
    },
    {
      href: `/orders`,
      label: "Orders",
      active: pathname === `/orders`,
    },
    {
      href: `/settings`,
      label: "Settings",
      active: pathname === `/settings`,
    },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <div className="relative z-20 hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:py-4 bg-slate-950/50">
        <Image
          src={"/assets/logo-white.svg"}
          alt="logo"
          height={75}
          width={75}
          onClick={() => router.push("/")}
          className="flex-grow-0"
        />

        <div className="flex gap-8 flex-grow">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                `text-lg tracking-widest`,
                route.active
                  ? "font-semibold bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 inline-block text-transparent bg-clip-text"
                  : "text-slate-50"
                // route.active ? "font-semibold text-[#7D87F2]" : "text-slate-50"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>

        <Avatar className="h-12 w-12 hover:cursor-pointer" onClick={() => router.push("/profile")}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>

      {/* Mobile Nav */}
      <div className="relative z-20 lg:hidden flex justify-between items-center py-3 bg-slate-100">
        {/* menu */}
        <Sheet>
          <SheetTrigger asChild className="ml-2">
            <MenuSquareIcon size={48} className="text-slate-950" />
          </SheetTrigger>
          <SheetContent side={"left"} className="bg-slate-50">
            <SheetHeader className="pb-4">
              <SheetTitle className="text-2xl text-slate-950">Menu</SheetTitle>
              <SheetDescription className="text-xs">
                Explore our site!
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <div className="flex flex-col gap-4 items-center py-4">
              {routes.map((route) => (
                <SheetClose asChild key={route.href}>
                  <Link
                    href={route.href}
                    className={cn(
                      `text-base tracking-widest`,
                      route.active
                        ? "font-semibold text-slate-950"
                        : "text-slate-500"
                    )}
                  >
                    {route.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <Separator />
            <SheetFooter className="pt-4">
              <div className="flex justify-center items-center gap-8">
                <Twitter size={25} />
                <Instagram size={25} />
                <Youtube size={25} />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* logo */}
        <Image
          src={"/assets/logo-white.svg"}
          alt="logo"
          height={75}
          width={75}
          onClick={() => router.push("/")}
          className="flex-grow-0"
        />

        {/* avatar */}
        <Sheet>
          <SheetTrigger asChild className="mr-2">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>
                <User className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
          </SheetTrigger>
          <SheetContent side={"right"} className="bg-slate-50">
            <SheetHeader className="pb-4">
              <SheetTitle className="text-2xl text-slate-950">
                Profile
              </SheetTitle>
              <SheetDescription className="text-xs">
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <div className="flex flex-col gap-4 items-center py-4">
              {profileRoutes.map((route) => (
                <SheetClose asChild key={route.href}>
                  <Link
                    href={route.href}
                    className={cn(
                      `text-base tracking-widest`,
                      route.active
                        ? "font-semibold text-slate-950"
                        : "text-slate-500"
                    )}
                  >
                    {route.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <Separator />
            <SheetFooter>
              {/* <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose> */}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default NavRoutes;
