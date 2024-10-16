import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

/// importig image from public
import Image from "next/image";
import Person from "../../../public/images/person.png";
import Person1 from "../../../public/images/person1.png";
import Person3 from "../../../public/images/person3.png";

const cards = [
  {
    name: "Albus Dumbledore",
    description:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”.",
    icon: PhoneIcon,
    title: "Manager @ Howarts",
    imageUrl: Person,
  },
  {
    name: "Severus Snape",
    description:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    icon: LifebuoyIcon,
    title: "Manager @ Slytherin",
    imageUrl: Person1,
  },
  {
    name: "Harry Potter",
    description:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    icon: NewspaperIcon,
    title: "Team Leader @ Gryffindor",
    imageUrl: Person3,
  },
];

const CompanyTemplate = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-appdark py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-appWhite leading-[32px] sm:leading-[40px] md:leading-[56px] w-full sm:w-auto text-left">
              An enterprise template to ramp up your company website
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {cards.map((card) => (
              <div
                key={card.description}
                className="flex gap-x-4 rounded-xl bg-white p-6 ring-1 ring-inset ring-white/10"
              >
                <div className="text-base leading-7">
                  <p className="mt-2 text-appblack font-sans text-2xl w-[270px]  font-normal leading-9 text-left">
                    {card.description}
                  </p>

                  <div className="flex gap-3 mt-3">
                    <Image src={card.imageUrl} alt={card.description} />
                    <div>
                      <p className="font-sans text-base font-bold leading-8 text-left">
                        {card.name}
                      </p>
                      <p className="text-appgray font-sans text-sm font-normal leading-8 text-left">
                        {card.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTemplate;
