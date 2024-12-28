import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import serviceImg from "../assets/photo/51.jpeg";
import serviceBack from "../assets/photo/9267.png";

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="services"
      className="2xl:max-container relative 2xl:center-items"
    >
      <div className="absolute -top-16 2xl:left-28">
        <img
          src={serviceBack}
          alt="About Image"
          width={699}
          height={1045}
          className="object-cover object-center opacity-95 bg-cover"
        />
      </div>
      <main className="flex flex-col py-14 gap-10 xl:gap-1 pb-32 overflow-hidden lg:py-28 xl:flex-row z-10 2xl:px-28">
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 } }}
          className="relative flex flex-col gap-7 items-start w-[598px] h-[359] -translate-x-0 -translate-y-3 left-[5%] md:left-[7%] lg:left-[140px] 2xl:left-0"
        >
          <h1 className="bold-26 xs:bold-31 sm:regular-40">Services</h1>
          <div className="flex flex-col w-[598px] gap-4">
            <p className="regular-18 w-[328px] xs:w-[387px] text-gray-800 sm:w-[597px] md:w-[615px]">
              Overseas Job Placement: We specialize in sourcing and connecting
              individuals with employment opportunities abroad. Our extensive
              network and expertise allow us to cater to various industries and
              positions, ensuring the right match for candidates.
            </p>
            <p className="regular-18 w-[328px] xs:w-[387px] text-gray-800 sm:w-[597px] md:w-[615px]">
              We provide personalized support and guidance throughout the entire
              recruitment process, ensuring satisfaction and success for
              individuals seeking overseas employment.
            </p>
            <p className="regular-18 w-[328px] xs:w-[387px] text-gray-800 sm:w-[597px] md:w-[615px]">
              Pre-Departure Training and Orientation: We offer comprehensive
              training programs for individuals preparing to work abroad. These
              programs equip candidates with the necessary skills, cultural
              awareness, and practical knowledge to adapt to their new work
              environments.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 } }}
          className="relative flex flex-col w-full h-full z-20 right-0 left-0 sm:left-10 md:left-20 lg:left-44 xl:left-[180px] 2xl:left-20"
        >
          <img
            src={serviceImg}
            alt="camp"
            width={651}
            height={521}
            className=""
          />
        </motion.div>
      </main>
    </section>
  );
};

export default Service;
