import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import paf1 from "../assets/portfolio/paf1.png";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import github from "../assets/github.png";

const OtherProjects = () => {
  const portfolios = [
    {
      id: 1,
      src: paf1,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
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
      return 2;
    }
  });

  // Function to handle "See More" button click
  const handleSeeMore = () => {
    setVisibleCards(portfolios.length);
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-gray-800 w-full text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-4">
          <p className="text-2xl inline border-b-2 border-gray-500">
            Other projects
          </p>
        </div>

        <div
          className="items-center justify-center grid p-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 
          gap-8 px-12 sm:px-0 text-center py-4 pb-20"
        >
          {/* Show a limited number of cards based on the visibleCards state */}
          {portfolios.slice(0, visibleCards).map(({ id, src ,href}) => (
            <div
              key={id}
              className="w-full shadow-md shadow-cyan-300 bg-gradient-to-b from-slate-600 to-gray-800 rounded-lg 
              flex flex-col p-4 my-4 hover:scale-105 duration-300"
            >
              <h2 className="text-2xl font-bold text-center py-4">
                Test Test Test
              </h2>
              <p className="text-center text-md">
                I'm focused on creating and design meaningful user interfaces
                and experiences for the web. I'm also a strong communicator and
                am able to quickly understand and communicate with people.
              </p>
              <div className="text-center font-medium">
                <h1 className="border-b mx-20 mt-4">Technologies </h1>
                <div className="grid grid-cols-3 sm:grid-cols-3 capitalize mt-2 text-cyan-200">
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                </div>
              </div>

              <div className="flex items-left pt-2">
                <img
                  href={href}
                  src={github}
                  alt=""
                  className="w-7 mx-auto cursor-pointer"
                />
              </div>
            </div>
          ))}

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
    </div>
  );
};

export default OtherProjects;
