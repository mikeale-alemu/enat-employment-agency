import { FEATURES } from "../../constants/index";
// import imag1 from "../assets/featured/UnitedArabEmirates.jpg";

const CampSite = ({ image, title, description }) => {
  return (
    <div className="relative cursor-pointer group">
      <div className="h-[408px] w-[284px] overflow-hidden rounded-[20px]">
        <img
          src={image}
          alt={`${title}'s image`}
          //  layout="fit"
          width={304}
          height={418}
          className="h-[408px] w-full bg-cover bg-center bg-no-repeat object-fill transform group-hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <div className="absolute px-4 py-2 bg-white rounded-full top-4 left-4 ">
        <h3 className="text-black regular-16">{title}</h3>
      </div>
      <div
        className="absolute min-w-[284px]  translate-y-0 group-hover:-translate-y-[216px] transition-all left-0 w-full bg-black
        bg-opacity-70 py-7 pb-5 px-6  duration-300 ease-in-out rounded-b-[20px] overflow-hidden"
      >
        <h3 className="text-white regular-16 mb-7">{title}</h3>
        <p className="w-[210px] regular-12 mb-10 text-white">{description}</p>
        <a
          href="#contact"
          className="absolute text-white right-7 bottom-4 bold-14"
        >
          More
        </a>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="relative flex flex-col 2xl:max-container">
      <h2 className="text-center bold-26 xs:bold-31 sm:regular-40 mb-14">
        Featured Destinations
      </h2>
      <div className="hide-scrollbar 2xl:center-items px-10 flex h-[408px] w-full items-start justify-start gap-5 overflow-x-auto overflow-y-hidden">
        {FEATURES.map((items) => {
          return (
            <div className="" key={items.id}>
              <CampSite
                image={items.image}
                title={items.title}
                description={items.description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
