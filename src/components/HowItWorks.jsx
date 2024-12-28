import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Group27 from "../assets/photo/Group27.png";
import Group28 from "../assets/photo/Group28.png";
import idea from "../assets/idea.svg";
import headphon from "../assets/headphon.svg";
import agreem from "../assets/agreem.svg";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="howitwork"
      className="flex flex-col items-center w-full gap-5 overflow-hidden max-container mb-28"
    >
      <motion.main
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.5, x: { type: "spring", stiffness: 70 } }}
        className="max-container xl:w-[932px] padding-container my-16 flex flex-col gap-10"
      >
        <h1 className="text-center bold-26 xs:bold-31 sm:bold-40">
          How Enat works?
        </h1>
        <p className="text-gray-800 text-[16px] font-normal leading-5 text-center">
          Ethiopian Housemaids to Gulf countries: We have successfully supplied
          Ethiopian housemaids to clients in Saudi Arabia, Qatar, UAE, Kuwait,
          and Jordan ensuring a reliable and trustworthy workforce. We have more
          than 8 years of experience and still counting.
        </p>
      </motion.main>
      <main className="flex flex-col gap-10 mt-10 xl:flex-row lg:mg-20 lg:gap-20">
        <div className="">
          <FeatureItem
            title="Comprehensive & Reliable"
            icon={idea}
            description="We pride ourselves on offering end-to-end recruitment solutions tailored to meet the specific needs of our clients."
          />
          <div className="hidden xl:block absolute translate-x-[230px] -translate-y-[230px]">
            <img src={Group27} alt="map" width={294} height={20} />
          </div>
        </div>
        <div className="">
          <div className="hidden xl:block absolute translate-x-[230px] translate-y-6">
            <img src={Group28} alt="map" width={294} height={20} />
          </div>
          <FeatureItem
            title="Quality Support & Assistance"
            icon={headphon}
            description="Ensuring exceptional support and guidance for a smooth and successful international employment process."
          />
        </div>
        <div className="">
          <FeatureItem
            title="Right Career Opportunities"
            icon={agreem}
            description="Right Career Opportunities Committed to empowering individuals and organizations, connect talented professionals. "
          />
        </div>
      </main>
    </section>
  );
};

const FeatureItem = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-center gap-14 w-[335px]">
      <div className="rounded-[20px] p-4 bg-gray-200">
        <img src={icon} alt="map" width={46} height={36} />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-center bold-20">{title}</h2>
        <p className="text-center text-gray-800 regular-14">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
