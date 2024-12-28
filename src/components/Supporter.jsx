import logo1 from "../assets/Supporters/logo1.svg";
import logo2 from "../assets/Supporters/logo2.svg";
import logo3 from "../assets/Supporters/logo3.svg";
import logo5 from "../assets/Supporters/logo5.svg";

const Supporter = () => {
  return (
    <main className="w-full py-8 my-16">
      <div className="flex flex-col items-center gap-3 md:gap-4 ">
        <h1 className="flex items-center justify-center mb-8 bold-26 xs:bold-31 sm:regular-40">
          Partner Network
        </h1>
        <div className="flex gap-10 lg:gap-14 items-center justify-center 2xl:max-container pl-[65%] xs:pl-[60%] sm:pl-[23%] md:pl-[2%] lg:pl-[0%] px-3 xl:center-items flex-row hide-scrollbar w-full overflow-x-auto overflow-y-hidden">
          <img
            src={logo3}
            alt="logo3"
            width={67}
            height={29}
            className="hover:scale-105 hover:-translate-y-[3px] transition ease-in-out duration-700"
          />
          <img
            src={logo5}
            alt="logo4"
            width={198}
            height={29}
            className="transition duration-700 ease-in-out hover:scale-105 hover:-translate-y-1"
          />
          <img
            src={logo2}
            alt="logo2"
            width={168}
            height={29}
            className="transition duration-700 ease-in-out hover:scale-105 hover:-translate-y-1"
          />
          <img
            src={logo1}
            alt="logo1"
            width={258}
            height={29}
            className="transition duration-700 ease-in-out hover:scale-105 hover:-translate-y-1"
          />
        </div>
      </div>
    </main>
  );
};

export default Supporter;
