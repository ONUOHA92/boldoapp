import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

// Import images from file
import AloneImage from "../../../public/images/alone.png";
import TrustImage from "../../../public/images/trusts.png";
import WalkImage from "../../../public/images/walking.png";
import Line from "../../../public/images/line.png";
import Image from "next/image";

const OurServices = [
  {
    imageUrl: AloneImage,
    name: "Cool feature title",
    description: "Learning curve network effects return on investment.",
    href: "#",
  },
  {
    imageUrl: TrustImage,
    name: "Even cooler feature",
    description: "Learning curve network effects return on investment..",
    href: "#",
  },
  {
    imageUrl: WalkImage,
    name: "Cool feature title",
    description: "Learning curve network effects return on investment..",
    href: "#",
  },
];

const OurService = () => {
  return (
    <>
      <div className="bg-white mt-[-70px] ">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden  px-6 py-24 text-center  sm:px-16">
            <h2 className="mx-auto  font-sans mt-[-25px] tracking-tight text-appgray sm:text-4xl">
              Our Services
            </h2>
            <h2 className="mx-auto text-[48px] font-manrope leading-[72px] text-center ">
              Handshake infographic mass market crowdfunding iteration.
            </h2>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {OurServices.map((services) => (
                  <div key={services.name}>
                    <Image
                      src={services.imageUrl}
                      alt={"Someone walking alone"}
                      className="w-screen  object-cover"
                    />
                    <div className="mt-5 ">
                      <h3 className="flex justify-start items-center font-opensans text-xl text-[#000000] font-normal leading-[36px] text-left">
                        {services.name}
                      </h3>
                      <p className="mt-5 font-opensans text-lg font-normal leading-[32px] text-left text-appgray">
                        {services.description}
                      </p>

                      <p className="mt-6">
                        <a
                          href={services.href}
                          className="font-opensans text-lg font-bold flex justify-start items-start leading-[36px] text-left"
                        >
                          Explore page <span aria-hidden="true">→</span>
                        </a>
                        <Image src={Line} className="mt-4" alt={"line"} />
                      </p>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
