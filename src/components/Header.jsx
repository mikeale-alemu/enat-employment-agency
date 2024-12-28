import { useEffect, useState } from "react";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import enatlogo from "../assets/enatlogo.svg";
import whatsapp from "../assets/whatsapp.svg";

const Header = () => {
  const pathname = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={`fixed py-3 z-50 w-full ${
        isScrolled
          ? "bg-white shadow-md border-b-[1px] border-b-blue-300"
          : "bg-transparent"
      }`}
    >
      <div className="relative z-30 flexBetween padding-container">
        <a href="/">
          <img src={enatlogo} alt="logo" height={29} width={184} className="" />
        </a>
        <nav className="hidden h-full xl:flex">
          <NavItems />
        </nav>
        <div className="hidden h-full translate-x-16 xl:flex">
          <a
            href="https://wa.me/251983074715"
            className="transition duration-300 ease-in-out hover:scale-105"
          >
            <Button
              type="button"
              title="Chat with us"
              icon={whatsapp}
              variant={`${
                (pathname === "#contact" && "bg-black") || "bg-blue-400"
              } cursor-pointer border-blue-700 px-6 py-2 text-white shadow-lg hover:shadow-blue-400 hover:bg-blue-500 transition ease-in-out duration-300`}
            />
          </a>
        </div>
        <div className="flex items-center mr-2 gap-7">
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
