// this is our block section

// Importing images from the Public
import Image from "next/image";
import BlogOne from "../../../public/images/blog1.png";
import BlogTwo from "../../../public/images/blog2.png";
import BlogThree from "../../../public/images/blog3.png";
// this is image for the Author
import Author1 from "../../../public/images/human1.png";
import Author2 from "../../../public/images/human2.png";
import Author3 from "../../../public/images/human3.png";

import React from "react";

const posts = [
  {
    id: 1,
    title: "Category",
    href: "#",
    description:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    imageUrl: BlogOne,
    date: "November 22, 2021",
    author: {
      name: "Chandler Bing",
      imageUrl: Author1,
    },
  },
  {
    id: 2,
    title: "Category",
    href: "#",
    description:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    imageUrl: BlogTwo,
    date: "November 22, 2021",
    datetime: "2020-03-16",
    author: {
      name: "Rachel Green",
      imageUrl: Author2,
    },
  },
  {
    id: 1,
    title: "Category",
    href: "#",
    description:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    imageUrl: BlogThree,
    date: "November 22, 2021",
    datetime: "2020-03-16",
    author: {
      name: "Monica Geller",
      imageUrl: Author3,
    },
  },
  // More posts...
];

const OurBlog = () => {
  return (
    <div>
      <div className="bg-white py-10 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[20px] text-center font-normal text-appgray leading-[32px] text-left font-open-sans">
              Our Blog
            </h2>
            <p className="text-[48px] font-normal leading-[72px] text-appblack text-center font-manrope">
              Value proposition accelerator product management venture
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className=" flex flex-col justify-end overflow-hidden rounded-2xl  px-8 pb-8 "
              >
                <Image
                  alt=""
                  src={post.imageUrl}
                  className=" object-cover w-screen"
                />

                <div className="flex justify-start items-center">
                  <div className="flex mt-5 gap-2">
                    <p className="font-sans text-lg font-bold leading-7 text-left">
                      {post.title}
                    </p>
                    <p className="font-sans text-base font-normal leading-7 text-left">
                      {post.date}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex w-[300px] justify-center items-center">
                  <p className=" text-appblack font-sans text-lg font-normal leading-8 text-left">
                    {post.description}
                  </p>
                </div>

                <div className="-ml-4 mt-5 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <Image
                      alt=""
                      src={post.author.imageUrl}
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    {post.author.name}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex  mt-20 justify-center items-center">
            <button className=" whitespace-nowrap rounded-full  text-appdark border-appdark w-[219px] border-[2px] py-5 px-5 border-t-2">
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
