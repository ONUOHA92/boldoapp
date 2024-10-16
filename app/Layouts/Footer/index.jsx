import React from "react";
import FooterLogo from "../../public/images/LogoFooter.png";
import Image from "next/image";

const navigation = {
  solutions: [
    { name: "Home", href: "#" },
    { name: "Products", href: "#" },
    { name: "Services", href: "#" },
  ],
  support: [
    { name: "Home", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Services", href: "#" },
  ],
  company: [
    { name: "Blog", href: "#" },
    { name: "Products", href: "#" },
    { name: "Services", href: "#" },
  ],
};
const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          {/* Company Info Section */}
          <div className="space-y-8">
            <Image alt="Company name" src={FooterLogo} className="" />
            <p className="font-sans text-base font-normal w-[300px] h-[84px] text-appgray left-[100px] leading-7 text-left">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>

          {/* Solutions and Support Sections */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Solutions Section */}
              <div>
                <h3 className="text-sm font-sans font-semibold leading-6 text-appblack">
                  Landings
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Support Section */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-sans font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Company Section */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-sans font-semibold leading-6 text-gray-900">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
