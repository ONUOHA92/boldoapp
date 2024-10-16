import React from "react";
import Image from "next/image";
import Satistics from "../../../public/images/statistics.png";

const steps = [
  {
    id: 1,
    info: "We connect our customers with the best.",
    incon: "icon",
    color: true,
  },
  {
    id: 2,
    info: "We connect our customers with the best.",
    incon: "icon",
    color: false,
  },
  {
    id: 3,
    info: "We connect our customers with the best.",
    incon: "icon",
    color: false,
  },
];

const SecondConnet = () => {
  return (
    <>
      <div className=" lg:mt-[-70px] sm:mt-[-10px] sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl lg:col-span-6">
            <p className="font-manrope w-full max-w-[493px] h-auto mt-40 text-xl sm:text-2xl font-normal leading-[40px] sm:leading-[56px] text-left">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>

            <div>
              {steps.map((step, index) => (
                <div key={index}>
                  <div
                    className={`w-full max-w-[500px]  p h-[68px] py-4  my-10 rounded-lg gap-0 rounded-tl-[4px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.08)] ${
                      step.color ? "bg-appdark text-white" : "bg-white"
                    }`}
                  >
                    <div className="flex p-3 gap-3">
                      <p>{step.incon}</p>
                      <p>{step.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div>
              {steps.map((step, index) => (
                <div key={index}>
                  <div className="w-[500px] h-[68px] flex justify-center items-center my-10  rounded-sm left-[150px] gap-0 rounded-tl-[4px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.08)]">
                    <p>{step.incon}</p>
                    <p>{step.info}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
          <div className="w-full lg:col-span-6 lg:pt-2">
            <Image
              src={Satistics}
              alt={"Total income"}
              className="w-screen object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondConnet;
