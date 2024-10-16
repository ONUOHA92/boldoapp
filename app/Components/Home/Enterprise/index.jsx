import React from "react";
import Elipse from "../../../public/images/Ellipse.png";
import Image from "next/image";

const Enterprise = () => {
  return (
    <div>
      <div className="bg-white relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden  bg-appdark px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <Image
              src={Elipse}
              alt={"second images"}
              className="absolute right-[-50px] z-0 top-0"
              style={{ marginRight: "50px" }}
            />
            <div className="relative z-10">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl text-center sm:text-left">
                An enterprise template to ramp up your company website
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 sm:text-base text-center sm:text-left">
                Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
                anim id veniam aliqua proident excepteur commodo do ea.
              </p>
              <form className="mx-auto mt-10 flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 max-w-md w-full">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-full"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-appgreen text-appdark px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white w-full sm:w-auto"
                >
                  Start now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
