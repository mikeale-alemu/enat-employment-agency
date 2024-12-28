import heroImage from "../assets/hero/21.jpg";

const Hero = () => {
  return (
    <section className="">
      <div className="relative z-20 flex flex-col flex-1 group">
        <div className="w-full bg-gradient-to-t from-white to-black/90">
          <img
            src={heroImage}
            alt="Hero Image"
            // layout='responsive'
            width={363}
            height={284}
            className="w-screen max-h-screen bg-center bg-cover mix-blend-overlay"
          />
        </div>
        <div className=" absolute top-  h-[294px] gap-2 -translate-x-0 translate-y-[15%] sm:translate-y-[35%] md:translate-y-[45%] lg:translate-y-[50%] left-[6%] lg:left-[110px] xl:left-[7%]">
          <h1 className="text-white bold-14 xs:bold-18 md:bold-20 lg:bold-30 2xl:bold-36 4xl:bold-52 4xl:w-[1100px]">
            Connecting You to Global Opportunities
          </h1>
          <h1 className="w-[264px] sm:w-[455px] md:w-[507px] lg:w-[652px] xl:w-[737px] 2xl:w-[840px] 4xl:w-[1500px] text-white bold-30 xs:bold-40 sm:bold-52 md:bold-60 lg:bold-75 2xl:bold-88 4xl:bold-99">
            Find your{" "}
            <span className="font-serif font-black text-blue-300">perfect</span>{" "}
            job overseas
          </h1>
          <div className="w-full max-w-5xl pr-5 md:pt-5 lg:mr-auto md:pr-10 xl:pr-0">
            <p className="regular-8 xs:regular-10 sm:regular-14 lg:regular-15 2xl:regular-18 4xl:regular-30 mt-1 sm:mt-6 text-white w-[326px] xs:w-[386px] sm:w-[579px] md:w-[687px] lg:w-[769px] xl:w-[916px] 2xl:w-[960px] 4xl:w-[1760px]">
              ENAT Foreign Employment Agent PLC is synonymous with reliability,
              professionalism, and efficiency. We prioritize the welfare of our
              candidates, ensuring their safety and well-being throughout the
              entire recruitment process. With our extensive network, expertise,
              and unwavering commitment, we strive to deliver optimal results
              and create a positive impact on both our clients and candidates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
