import React from "react";
import BannerImage from "../../../public/images/Image.png";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "We connect our customers with the best?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Android research & development rockstar?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

  // More questions...
];

const OurCustomers = () => {
  return (
    <>
      <div className="bg-white lg:py-7 sm:py-20">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-10">
          <div className="relative isolate overflow-hidden  px-6 py-24 sm:px-24 xl:py-32">
            <Image src={BannerImage} alt={"main banner"} />
          </div>
        </div>

        <div className="bg-white mt-[-150px]">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-16 lg:py-16">
            <div className=" px-6 py-6 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:flex xl:items-center">
              <div className="xl:w-0 xl:flex-1">
                <h2 className=" mt-5 font-manrope text-3xl font-normal leading-[56px] text-left text-appblack ">
                  We connect our customers with the best, and help them keep
                  up-and stay open.
                </h2>
              </div>
              <div className="sm:w-full  sm:max-w-md  xl:ml-8 xl:mt-0">
                <dl className=" space-y-6 divide-y pt-[-50px] divide-gray-900/10">
                  {faqs.map((faq) => (
                    <Disclosure key={faq.question} as="div" className="pt-6">
                      <dt>
                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                          <span className="font-sans text-xl font-normal leading-8 text-left">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <PlusSmallIcon
                              aria-hidden="true"
                              className="h-6 w-6 group-data-[open]:hidden"
                            />
                            <MinusSmallIcon
                              aria-hidden="true"
                              className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCustomers;
