import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINK,
  FOOTER_LINK1,
  SOCIALS,
} from "../../constants/index";

import enatlogo from "../assets/enatlogo.svg";
import worldMap1 from "../assets/photo/9267.png";
import worldMap2 from "../assets/photo/96.png";

const Footer = () => {
  return (
    <footer className="2xl:max-container">
      <section className="relative flex flex-col flex-1">
        <div className="flex">
          <img
            src={worldMap2}
            alt="logo"
            width={340}
            height={200}
            className="w-[50%] h-[670px] translate-y-10 mix-blend-overlay bg-cover bg-center"
          />
          <img
            src={worldMap1}
            alt="logo"
            width={340}
            height={200}
            className="w-[50%] h-[670px] translate-y-10 mix-blend-overlay bg-cover bg-center"
          />
        </div>
        <main className="absolute flex flex-col w-full overflow-hidden translate-y-72 padding-container max-container gap-14">
          <div className="flex flex-col items-start justify-center gap-[5%] md:flex-row">
            <a href="/" className="mb-10">
              <img src={enatlogo} alt="logo" width={184} height={29} />
            </a>

            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
              {FOOTER_LINK.map((columns) => (
                <div className="" key={columns.title}>
                  <FooterColumn title={columns.title}>
                    <ul className="flex flex-col gap-4 regular-14 text-gray-30">
                      {columns.links.map((items) => (
                        <div key={items.value} className="">
                          <a href={items.link} className="">
                            <li className="transition duration-500 ease-in-out hover:scale-105 hover:text-blue-600">
                              {items.value}
                            </li>
                          </a>
                        </div>
                      ))}
                    </ul>
                  </FooterColumn>
                </div>
              ))}

              {FOOTER_LINK1.map((columns) => (
                <div className="" key={columns.title}>
                  <FooterColumn title={columns.title}>
                    <ul className="flex flex-col gap-4 regular-14 text-gray-30">
                      {columns.links.map((items) => (
                        <div
                          key={items.value}
                          className="flex flex-row items-center gap-3 transition duration-500 ease-in-out hover:text-blue-600 hover:scale-105"
                        >
                          <div className="flex flex-row items-center">
                            <img
                              src={items.flag}
                              alt="logo"
                              width={23}
                              height={23}
                            />
                          </div>
                          <p className="">{items.value}</p>
                        </div>
                      ))}
                    </ul>
                  </FooterColumn>
                </div>
              ))}

              <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <div
                      key={link.label}
                      className="flex flex-row items-center gap-4"
                    >
                      <div className="p-3 bg-blue-200 rounded-full">
                        <img
                          src={link.icon}
                          alt="logo"
                          width={18}
                          height={18}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-gray-50 whitespace-nowrap">
                          {link.label}
                        </p>
                        <a
                          href="/"
                          className="text-blue-800 medium-14 whitespace-nowrap"
                        >
                          {link.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </FooterColumn>
              </div>

              <div className="flex flex-col gap-5">
                <FooterColumn title={SOCIALS.title}>
                  <ul className="flex gap-4 regular-14 text-gray-30">
                    {SOCIALS.links.map((link) => (
                      <a href={`${link.href}`} key={link.icon}>
                        <img
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className="transition duration-300 ease-in-out hover:scale-105"
                        />
                      </a>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>
          </div>

          <div className="border bg-gray-20" />
          <p className="w-full text-center regular-14 text-gray-30">
            &copy; 2024 Enat Employment Agency | All rights reserved
          </p>
        </main>
      </section>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
