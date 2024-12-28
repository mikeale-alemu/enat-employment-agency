import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "../assets/photo/agency1.jpg";
import aboutBack from "../assets/photo/9267.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative 2xl:max-container 2xl:center-items" id="about">
      <div className="absolute -top-16 left-0 sm:left-10 md:left-20 lg:left-44 xl:left-[715px] 2xl:left-[930px]">
        <img
          src={aboutBack}
          alt="About Image"
          width={599}
          height={1045}
          className="object-cover object-center bg-cover opacity-95"
        />
      </div>
      <main className="relative flex flex-col xl:flex-row py-10 pb-32 gap-10 xl:gap-0 overflow-hidden lg:py-20 z-10 2xl:px-32">
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 } }}
          className="relative w-[630px] h-full z-20 order-2 xl:order-1 items-end left-0 sm:left-10 md:left-20 lg:left-44 xl:left-0"
        >
          <img
            src={aboutImage}
            alt="about image"
            // layout="responsive"
            width={670}
            height={461}
            className="bg-cover bg-no-repeat bg-[50%]"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 } }}
          className="relative flex w-[598px] order-1 xl:order-2 gap-6 items-start -translate-x-0 -translate-y-3 left-[4%] md:left-[6%] lg:left-[56px]"
        >
          <div className="flex flex-col">
            <h1 className="bold-26 xs:bold-31 sm:regular-40">About Us</h1>
            <div className="flex flex-col w-[598px] gap-4">
              <p className="regular-18 w-[328px] xs:w-[387px] sm:w-[597px] text-gray-800">
                ENAT Foreign Employment Agent PLC is a leading overseas
                recruitment agency based in Addis Ababa, Ethiopia, renowned for
                its exceptional services in connecting qualified candidates with
                suitable job opportunities abroad. With a highly skilled team of
                professionals, we have established ourselves as a trusted name
                in the industry.
              </p>
              <p className="regular-18 w-[328px] xs:w-[387px] sm:w-[597px] text-gray-800">
                One of our core strengths lies in our commitment to excellence.
                We prioritize delivering high-quality services to both our
                clients and candidates.
              </p>
              <p className="regular-18 w-[328px] xs:w-[387px] sm:w-[597px] text-gray-800">
                As a recognized agency, we specialize in providing Ethiopian
                housemaids to Saudi Arabia, Dubai, and Jordan, meeting the
                demand for domestic help in these regions. Furthermore, we have
                established agreements with Jordanian companies to supply
                skilled and semi-skilled professionals, thus contributing to the
                development of the workforce in Jordan.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </section>
  );
};

export default About;
