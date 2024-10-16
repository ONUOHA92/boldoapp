"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
// importing company logo
import CompLogo from "../../public/images/Logo.png";
import sharpMenu from "../../Public/Images/MenuShape.png";
import HeroSvg from "../../public/images/hero-graphics.svg";
import LightLogo from "../../public/images/lightbolde.png";
import PrestoLight from "../../public/images/prestoLight.png";
import PrestoThree from "../../public/images/presto3.png";
import DarkBolde from "../../public/images/darkBolde.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Service", href: "#" },
  { name: "About", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-appdark relative">
      <Image
        src={sharpMenu}
        alt={"curve background"}
        className="absolute right-[-50px] top-0 "
        style={{ marginRight: "50px" }}
      />
      <header className="relative mx-auto max-w-7xl inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="" src={CompLogo} className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 bg-no-repeat bg-right bg-cover">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold py-2 leading-6 text-white z-10 relative"
              >
                {item.name}
              </a>
            ))}

            <div className="hidden lg:flex lg: lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold flex justify-center items-center leading-6 text-appdark bg-appWhite w-[128px] py-2  rounded-full"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-appdark bg-appWhite"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        <div className=" pt-10 relative z-10 sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <div className="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start"></div>
                  <h1 className=" tracking-tight text-white  font-manrope text-5xl font-normal leading-[72px] text-left">
                    Save time by building fast with Boldo Template
                  </h1>
                  <p className="mt-3 text-base text-gray-300 font-open-sans  font-normal leading-7 text-left">
                    Funding handshake buyer business-to-business metrics iPad
                    partnership. First mover advantage innovator success
                    deployment non-disclosure.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <div className="flex space-x-3">
                      <button className=" whitespace-nowrap rounded-full bg-appgreen px-4 py-3 w-[247px] text-appdark font-medium text-w shadow hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900">
                        Buy template
                      </button>
                      <button className=" whitespace-nowrap  w-[187px] bg-appdark px-4 py-3 font-medium rounded-full text-white shadow  border-[1px] border-appWhite  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mb-16 mt-14 sm:-mb-48  lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-12 sm:max-w-2xl lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <Image
                    src={HeroSvg}
                    alt={"stat"}
                    className="lg:ml-24 lg:py-24 sm:pl-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image
                    alt="Bolde dark"
                    src={DarkBolde}
                    className="h-8 md:h-10 lg:h-12"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image
                    alt="Presto light"
                    src={PrestoLight}
                    className="h-8 md:h-10 lg:h-12"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image
                    alt="Bolde dark"
                    src={LightLogo}
                    className="h-8 md:h-10 lg:h-12"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image
                    alt="Another light image from presto"
                    src={PrestoThree}
                    className="h-8 md:h-10 sm:h-5 lg:h-12"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image
                    alt="Bolde dark"
                    src={LightLogo}
                    className="h-8 md:h-10 lg:h-12"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <Image
                    alt="Another light image from presto"
                    src={PrestoThree}
                    className="h-8 md:h-10 lg:h-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>

      {/* <div className="relative isolate overflow-hidden pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-white">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
