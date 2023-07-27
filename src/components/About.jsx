import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8">
          I'm Nalinga Kumarasiri and currently, following my Bachelors in 
          Information Technology (2021-2024) at SLIIT (Sri Lanka Institute of Information Technology).<br />
          Dedicated, hardworking, and self-motivated, I'm keen on programming and problem-solving.
        </p>

        <br />

        <h2 className="text-xl semi-bold border-b-2 border-gray-500 mb-2">
          UI/UX Designer & Web Developer
        </h2>
        <p>I'm focusing on creating and design meaningful user interfaces and experiences for the web. 
          I'm also a strong communicator and am able to quickly understand and communicate effectively with people.</p>

          <h1 className="font-semibold mt-4">What I mostly like to do..</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-3 text-xl">
            <h1 className="px-6">⌨️ Coding</h1>
            <h1 className="px-6">🥇 Problem Solving</h1>
            <h1 className="px-6">📰 Reading</h1>
            <h1 className="px-6">🧑‍🤝‍🧑 Team Management</h1>
            <h1 className="px-6">🤝 Mentoring</h1>
          </div>

      </div>
    </div>
  );
};

export default About;
