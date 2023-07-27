import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import reactImage from "../assets/react.png";
import javascript from "../assets/javascript.png";
import postman from "../assets/postman.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import c from "../assets/c.png";
import cplusplus from "../assets/c++.png";
import csharp from "../assets/csharp.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";
import mysql from "../assets/mysql.png";
import premirepro from "../assets/premiere-pro.png";
import photoshop from "../assets/photoshop.png";



const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-700",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: c,
      title: "C",
      style: "shadow-blue-800",
    },
    {
      id: 8,
      src: cplusplus,
      title: "C++",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: csharp,
      title: "C#",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: node,
      title: "Node JS",
      style: "shadow-lime-400",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: postman,
      title: "Postman",
      style: "shadow-orange-400",
    },
    {
      id: 13,
      src: mongodb,
      title: "Mono DB",
      style: "shadow-lime-800",
    },
    {
      id: 14,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-400",
    },
    {
      id: 15,
      src: mysql,
      title: "My Sql",
      style: "shadow-green-800",
    },
    {
      id: 16,
      src: premirepro,
      title: "Premire Pro",
      style: "shadow-purple-600",
    },
    {
      id: 17,
      src: photoshop,
      title: "Photoshop",
      style: "shadow-sky-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto pt-12"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-7 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;