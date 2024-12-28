import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import NavItems from "./NavItems";
import menu from "../assets/menu.svg";
import enatlogo from "../assets/enatlogo.svg";

const MobileNav = () => {
  return (
    <nav>
      <Sheet>
        <SheetTrigger className="align-middle xl:hidden">
          <img
            src={menu}
            alt="menu"
            height={24}
            width={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white xl:hidden ">
          <img src={enatlogo} alt="logo" height={27} width={184} />
          <Separator className="mb-6 border border-gray-100" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
