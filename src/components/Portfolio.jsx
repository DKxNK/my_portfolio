import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import PAF from "../assets/portfolio/PAF.png";
import ITPM from "../assets/portfolio/ITPM.png";
import MAD from "../assets/portfolio/MAD.png";
import github from "../assets/github.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: PAF,
      title: "flavorfeed Food Review WebApp",
      discription: "This is a user-friendly social media platform allowing individuals to share their photos and descriptions in posts, follow others, and engage with their community through comments and likes. It provides for users to explore other profiles, receive notifications.",
      href: "https://github.com/DKxNK",
      t1: "springboot",
      t2: "java",
      t3: "mongo",
      t4: "react",
      t5: "tailwind",
      t6: "js",

    },
    {
      id: 2,
      src: ITPM,
      title: "Inovation Management",
      discription: "Our platform is an innovative online solution that addresses limited access to resources, funding, and networks for inventors. The platform also aims to engage investors, entrepreneurs, and mentors who are interested in supporting and nurturing innovative ideas.",
      href: "https://github.com/Mr-RiVi/creativeconnect-mern.git",
      t1: "Express",
      t2: "Node.js",
      t3: "mongo",
      t4: "react",
      t5: "tailwind",
      t6: "js",
    },
    {
      id: 3,
      src: MAD,
      title: "Hostel managment Android App",
      discription: "Hostel Management Pro is made to make hostel management experience more fun and easier. There are many tasks in a hostel where it takes much time but with Hostel Management Pro app, users are only few clicks away to complete those same tasks. ",
      href: "https://github.com/Mr-RiVi/hostelmanagementpro-java.git",
      t1: "java",
      t2: "git",
      t3: "firebase",
    },
    {
      id: 4,
      src: PAF,
      title: "TEST WebApp",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      href: "https://github.com/DKxNK",
      t1: "test",
      t2: "test",
      t3: "test",
      t4: "test",
      t5: "test",
      t6: "test",
    },

  ];

  // Get the current screen size using useMediaQuery
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  // Set the number of cards to show based on the screen size
  const [visibleCards, setVisibleCards] = useState(() => {
    if (isLargeScreen) {
      return 3;
    } else if (isMediumScreen) {
      return 2;
    } else {
      return 3;
    }
  });

  // Function to handle "See More" button click
  const handleSeeMore = () => {
    setVisibleCards(portfolios.length);
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          className="items-center justify-center grid p-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 
          gap-8 px-12 sm:px-0 text-center py-4 pb-6"
        >
          {/* Show a limited number of cards based on the visibleCards state */}
          {portfolios.slice(0, visibleCards).map(({ id, src, title, discription, href, t1, t2, t3, t4, t5, t6 }) => (
            <div
              key={id}
              className="w-full shadow-md shadow-gray-400 rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300"
            >
              <img
                className="mt-[-3rem] shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <h2 className="text-2xl font-bold text-center py-5 ">
                {title}
              </h2>
              <p className="text-md text-justify">
                {discription}
              </p>
              <div className="text-center font-medium">
                <h1 className="border-b mx-20 mt-4">Technologies </h1>
                <div className="grid grid-cols-3 sm:grid-cols-3 capitalize mt-2 text-cyan-200">
                  <p>{t1}</p>
                  <p>{t2}</p>
                  <p>{t3}</p>
                  <p>{t4}</p>
                  <p>{t5}</p>
                  <p>{t6}</p>
                </div>
              </div>

              <div className="flex pt-2">
                <a className="mx-auto" href={href} rel="noreferrer">
                  <img
                    href={href}
                    src={github}
                    alt=""
                    className="w-7 mx-auto cursor-pointer"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Show "See More" button when there are more cards to display */}
        {visibleCards < portfolios.length && (
            <div className="mx-auto flex items-center">
              <button
                className="border-2 shadow-gray-600 rounded-lg bg-cyan-900 w-60"
                onClick={handleSeeMore}
              >
                See More
              </button>
            </div>
          )}
      </div>
    </div>
  );
};

export default Portfolio;
