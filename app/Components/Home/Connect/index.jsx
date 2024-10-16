import React from "react";
import TotalIncome from "../../../public/images/income.png";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const benefits = [
  "Competitive salaries",
  "Flexible work hours",
  "30 days of paid vacation",
];

const WeConnect = () => {
  return (
    <>
      <div className=" mt-[-120px] h-full lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
            <Image
              src={TotalIncome}
              alt={"Total income"}
              className="w-screen object-cover"
            />
          </div>
          <div className="w-full lg:mt-10 md:mt-8 sm:mt-0 max-w-md lg:col-span-5 lg:pt-2">
            <p className="font-manrope  text-2xl font-normal leading-[56px] text-left">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>
            <ul
              role="list"
              className="mt-8 grid  gap-x-8 gap-y-3 text-base leading-7 text-white "
            >
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex text-black font-open-sans text-[20px] font-normal leading-[32px] text-left gap-x-3"
                >
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="h-7 w-5 text-black flex-none"
                  />
                  {benefit}
                </li>
              ))}

              <button className="w-[210px] lg:mt-[10rem] sm:mt-[30rem]  h-[60px] bg-appblack text-white  gap-[8px] rounded-[56px] ">
                Start now
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeConnect;
