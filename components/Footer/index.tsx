import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerList = [
    {
      label: "Help",
      subItems: [
        { label: "FAQ", href: "/faq" },
        { label: "Contact Us", href: "/contact" },
        { label: "General Size Chart", href: "/size-chart" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    {
      label: "Shop With Us",
      subItems: [
        { label: "Search", href: "/search" },
        { label: "All Products", href: "/shop" },
        { label: "Gift Card", href: "/shop/gift-card" },
      ],
    },
    {
      label: "Explore",
      subItems: [
        { label: "Our Story", href: "/our-story" },
        { label: "Customer Reviews", href: "/reviews" },
        { label: "Careers", href: "/careers" },
        { label: "Profile", href: "/profile" },
      ],
    },
    {
      label: "Join The Yoli Ichtaca Family",
      subItems: [
        { label: "FAQ", href: "/faq" },
        { label: "Contact Us", href: "/contact" },
        { label: "General Size Chart", href: "/size-chart" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ];
  return (
    <>
      {/* Footer header */}
      {/* <div className="bg-black w-full h-32 overflow-hidden">
        <div className="flex justify-center -mt-[250px]">
          <Image
            src={"/assets/name.jpg"}
            height={640}
            width={640}
            alt="logo name"
          />
        </div>
      </div> */}

      <h3 className="text-2xl lg:text-5xl font-semibold tracking-wide bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 inline-block text-transparent bg-clip-text mb-2">
        Yoli Ichtaca:
      </h3>

      <div className="bg-black h-60">
        <ul className="flex justify-around uppercase text-xl">
          {footerList.map((item) => (
            <li key={item.label}>
              <h4 className="mb-8 text-slate-50 tracking-widest">
                {item.label}
              </h4>
              <ul>
                {item.subItems?.map((subItem) => (
                  <li
                    key={subItem.href}
                    className="text-sm text-slate-300 mb-4"
                  >
                    <Link href={subItem.href}>{subItem.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
