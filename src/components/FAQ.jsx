import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import FAQItem from "./FAQItem";
import { FAQItems } from "../../constants/index";
import FAQ2 from "../assets/photo/FAQ2.jpg";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="faq">
      <main className="w-full 2xl:max-container">
        <h2 className="px-2 mb-0 text-center bold-26 xs:bold-31 sm:regular-40 sm:mb-14">
          Frequently Asked Questions
        </h2>
        <div className="grid px-2 xl:grid-cols-2 sm:px-6 md:px-10">
          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, x: { type: "spring", stiffness: 70 } }}
            className="sl:w-full sl:h-[597px] py-4 sm:py-10 gap-8 sm:gap-[60px] flex flex-col sl:flexCenter"
          >
            <div className="sm:flexCenter w-[290px] xs:w-[380px] sm:w-[409px]">
              <img
                src={FAQ2}
                alt="FAQ image"
                //  layout='responsive'
                width={409}
                height={230}
                className="bg-cover bg-no-repeat bg-[50%]"
              />
            </div>
            <div className="xs:ml-14 sl:ml-0 flex flex-col w-[270px] xs:w-[340px] sl:w-[505px] h-[216px] gap-[30px]">
              <div className="gap-5">
                <h3 className="text-center regular-30">Have Questions?</h3>
                <p className="text-center regular-10 xs:regular-1 sl:regular-14 sm:regular-18 text-black/60">
                  Here you'll find the answers most valued by our partners,
                  along with access to step-by-step instructions and support
                </p>
              </div>
              <div className="flex flex-row items-center justify-center w-[260px] xs:w-[300px] sl:w-[505px] gap-[10px]">
                <Input
                  id="subject"
                  placeholder="Enter here"
                  className="sl:w-[331px] h-[35px] sl:h-[40px]  bg-gray-100 border px-4 xs:px-6 sm:px-[25px] py-2 gap-[10px] border-gray-300 text-black rounded-full regular-10 xs:regular-12 sm:regular-14"
                />
                <Button className="px-6 xs:px-7 sl:px-8 h-[35px] sm:h-[40px] py-2 text-white bg-[#007AFF] hover:bg-blue-600 rounded-full regular-12 sm:regular-14 cursor-pointer">
                  Send
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, x: { type: "spring", stiffness: 70 } }}
            className="w-auto sl:w-full flex flex-col gap-2gg sm:gap-[25px] flexCenter"
          >
            <div className="sl:p-[10px] flex flex-col gap-[10px] -translate-x-[0px]  md:-translate-x-[70px] lg:-translate-x-[0px] 2xl:-translate-x-[70px]">
              <h1 className="bold-20 sl:bold-25">General FAQs</h1>
              <p className="sl:w-[549px] sl:h-12 regular-10 xs:regular-14 sl:regular-15 sm:regular-17 text-black/70">
                Here you'll find the answers most valued by our partners, along
                with access to step-by-step instructions and support
              </p>
            </div>
            <div className="my-auto">
              {FAQItems.map((item, i) => (
                <div key={i} className="space-y-5">
                  <FAQItem title={item.title} content={item.content} />
                </div>
              ))}
              <hr className="h-px my-[25px] bg-[#B3B3B3] border-0"></hr>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default FAQ;
