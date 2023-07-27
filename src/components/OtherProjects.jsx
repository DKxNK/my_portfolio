import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import github from "../assets/github.png";

const OtherProjects = () => {
  const portfolios = [
    {
      id: 1,
      title: "Employee Management System",
      discription: "using C# build crud functions (WebApp)",
      href: "https://github.com/DKxNK",
      t1: "C#",
      t2: "html",
      t3: "css",
      t4: "js",
      t5: "ssms",
    },
    {
      id: 2,
      title: " Management system for a food distribution company",
      discription: "My Y2.S2 Univercity Project | ITP Module (WebApp)",
      href: "https://github.com/DKxNK",
      t1: "Express",
      t2: "Node.js",
      t3: "mongo",
      t4: "react",
      t5: "tailwind",
      t6: "js",
    },
    {
      id: 3,
      title: "Library Management System ",
      discription: "My Y1.S2 Univercity Project | IWT Module (WebApp)",
      href: "https://github.com/DKxNK",
      t1: "Html",
      t2: "CSS",
      t3: "PHP",
      t4: "MySQL",
      t5: "js",
    },
    {
      id: 4,
      title: "Test Test Test",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      href: "https://github.com/DKxNK",
      t1: "test",
      t2: "test",
      t3: "test",
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
      name="other_portfolio"
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
          gap-8 px-12 sm:px-0 text-center py-4 pb-6"
        >
          {/* Show a limited number of cards based on the visibleCards state */}
          {portfolios
            .slice(0, visibleCards)
            .map(({ id, title, discription, href, t1, t2, t3, t4, t5, t6 }) => (
              <div
                key={id}
                className="w-full shadow-md shadow-cyan-300 bg-gradient-to-b from-slate-600 to-gray-800 rounded-lg 
              flex flex-col p-4 my-4 hover:scale-105 duration-300 "
              >
                <h2 className="text-2xl font-bold text-center py-4">{title}</h2>
                <p className="text-justify text-md">{discription}</p>
                <div className="text-center font-medium ">
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

                <div className="flex items-left pt-2 ">
                  <img
                    href={href}
                    src={github}
                    alt=""
                    className="w-7 mx-auto cursor-pointer"
                  />
                </div>
              </div>
            ))}
        </div>
        {/* Show "See More" button when there are more cards to display */}
        {visibleCards < portfolios.length && (
          <div className="mx-auto flex items-center ">
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

export default OtherProjects;
