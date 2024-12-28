import { NAV_LINKS } from "../../constants/index";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import whatsapp from "../assets/whatsapp.svg";

const NavItems = () => {
  const pathname = useLocation();

  return (
    <nav className="flex flex-col items-center justify-between gap-5 list-none xl:flex-row xl:gap-1">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li
            key={link.key}
            className={`relative navbar flexCenter cursor-pointer whitespace-nowrap`}
          >
            <a
              href={link.href}
              className={`${
                isActive && "text-gray-900 font-bold tracking-[1px]"
              } text-gray-400 cursor-pointer`}
            >
              {link.label}
            </a>
          </li>
        );
      })}
      <li className="flex translate-x-6 xl:hidden">
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
      </li>
    </nav>
  );
};

export default NavItems;
