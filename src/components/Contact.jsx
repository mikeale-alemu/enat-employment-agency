"use client";

import { useRef } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FaTelegram } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import GoogleMapLocation from "./GoogleMapLocation";
import { GrMapLocation } from "react-icons/gr";
// import { MdOutlineMail } from 'react-icons/md'
import { GiAlarmClock } from "react-icons/gi";
import { AiFillTikTok, AiTwotoneMail } from "react-icons/ai";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="">
      <div className="pb-12 2xl:max-container">
        {/* py-12 lg:py-16 xl:py-20 */}
        <section className="py-10 lg:py-12">
          <h1 className="flex items-center justify-center bold-26 xs:bold-31 sm:regular-40 mb-14">
            Contact Us
          </h1>
          <main className="px-1 xs:px-2 sm:px-6 md:px-10">
            <div className="grid items-start gap-12 xl:grid-cols-2 xl:gap-20">
              <motion.div
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 70 },
                }}
                className="space-y-4"
              >
                <div className="mb-12 space-y-4">
                  <div className="flex flex-col mb-8 space-y-3">
                    <h1 className="text-2xl font-bold tracking-tighter text-black sm:text-3xl">
                      Get in touch
                    </h1>
                    <div className="content-[''] bg-blue-500 h-[3px] w-[30%] left-0 bottom-0 rounded-xl duration-300"></div>
                  </div>
                  <p className="text-gray-800 md:text-xl">
                    We're here to help. Fill out the form below and we'll get
                    back to you as soon as possible.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 grid-rows-2 sm:gap-6 sm:grid-cols-2">
                    <div className="flex flex-row items-center justify-start gap-3 space-y-2 sm:gap-4">
                      <GrMapLocation className="text-4xl text-blue-600 transition duration-300 ease-in-out transform" />
                      <div className="space-y-1">
                        <span className="block text-lg font-medium text-black">
                          LOCATION
                        </span>
                        <p className="regular-10 xs:text-xs sm:text-[13px] text-gray-700 leading-loose">
                          22 MAZORIA, Addis Ababa
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-3 space-y-2 sm:gap-4">
                      <AiTwotoneMail className="text-4xl text-blue-600 transition duration-300 ease-in-out transform" />
                      <div className="space-y-1">
                        <span className="block text-lg font-medium text-black">
                          EMAIL
                        </span>
                        <p className="text-[8px] xs:text-[10px]  text-gray-700 ">
                          info@enatemploymentagency.com
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-3 space-y-2 sm:gap-4">
                      <FiPhoneCall className="text-4xl text-blue-600 transition duration-300 ease-in-out transform" />
                      <div className="space-y-1">
                        <span className="block text-lg font-medium text-black">
                          PHONE
                        </span>
                        <p className="regular-10 xs:text-xs sm:text-[13px] text-gray-700 leading-loose">
                          +251-983-074-715
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-3 space-y-2 sm:gap-4">
                      <GiAlarmClock className="text-5xl text-blue-600 transition duration-300 ease-in-out transform" />
                      <div className="space-y-1">
                        <span className="block text-lg font-medium text-black">
                          OPEN HOUR
                        </span>
                        <p className="regular-10 xs:text-xs sm:text-[13px] text-gray-700 leading-loose">
                          Mon-Fri: 9:00 AM - 5:00 PM Sat-Sun: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-7">
                  <div className="border-t"></div>
                  <div className="flex flex-row items-center justify-between">
                    <h1 className="text-xl font-bold tracking-tighter text-black sm:text-2xl">
                      OUR SOCIAL MEDIA
                    </h1>
                    <div className="flex flex-row items-center justify-center gap-4 text-3xl md:gap-8">
                      <a href="https://www.instagram.com/enat_agency?igsh=dWRia2dzbnh6bWdx">
                        <RiInstagramFill className="text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-400" />
                      </a>
                      {/* <FaInstagram className="text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-400" /> */}
                      <a href="https://www.facebook.com/enatforeignemploymentagency">
                        <FaFacebookSquare className="text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-400" />
                      </a>
                      <a href="https://www.tiktok.com/@enatagency">
                        <AiFillTikTok className="text-blue-600 transition duration-300 ease-in-out transform scale-105 hover:scale-110 hover:text-gray-400" />
                      </a>
                      <a href="https://t.me/Enatfea">
                        <FaTelegram className="text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.form
                action="https://formsubmit.co/mickeyalemu108@gmail.com"
                method="POST"
                ref={ref}
                initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 70 },
                }}
                className="space-y-4"
              >
                <h1 className="text-2xl font-bold tracking-tighter text-black sm:text-3xl">
                  YOUR DETAILS
                </h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-black">
                      First name*
                    </Label>
                    <Input
                      id="first-name"
                      type="text"
                      placeholder="Your Name"
                      className="text-black bg-gray-100 border border-gray-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-address" className="text-black">
                      Email Address*
                    </Label>
                    <Input
                      id="eamil-address"
                      placeholder="email@yourmail.com"
                      type="email"
                      className="text-black bg-gray-100 border border-gray-300"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-black">
                    Subject*
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className="text-black bg-gray-100 border border-gray-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black">
                    Comments/Questions*
                  </Label>
                  <Textarea
                    className="min-h-[150px] resize-y bg-gray-100 border border-gray-300 text-black"
                    id="message"
                    placeholder="Your Message"
                    required
                  />
                </div>
                <div className="w-full pt-4">
                  <Button
                    type="submit"
                    className="px-12 py-6 text-white bg-[#007AFF] hover:bg-blue-600"
                  >
                    Submit Message
                  </Button>
                </div>
              </motion.form>
            </div>
          </main>
        </section>
      </div>
      <div className="">
        <GoogleMapLocation />
      </div>
    </section>
  );
};

export default Contact;
