import React, { Suspense } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Container = styled.div`
  height: 500px;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  // border: 2px solid #3d1c56;

  @media only screen and (max-width: 768px) {
    width: 350px;
    height: 400px;
    
  }
`;

const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  

  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const keywords = [
  'Developer', 
  'Videographer', 
  'Photographer', 
  'UI UX designer',
  'Freelancer'
];

const lines = encodeURIComponent(keywords.join('.;'));


const Home = () => {
  return (
    <div
      name="home"
      className="h-auto w-full pt-20 bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-1xl pt-8 sm:text-2xl font-bold text-cyan-200">
            Hi😇, My name is
          </h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Nalinga Kumarasiri
          </h2>
         
          <div className="grid grid-flow-col auto-cols-max items-center gap-2 ">
            <span className="text-2xl sm:text-3xl font-bold text-cyan-200 font-signature">I 'm a</span>
            <img
              className="pt-3 md:w-80 lg:w-96 text-2xl w-72"
              src={`https://readme-typing-svg.herokuapp.com?color=fff&width=400&height=30&lines=${lines}`}
              alt="Typing SVG"
            />
          </div>

          <p className="text-gray-500 py-4 max-w-md">
          "I love learning and exploring new things, especially in the tech world. 
          I'm eager to enhance my skills and bring creativity to every project. 
          Let's connect and create something amazing together!""
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <Container>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.6} >
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/moon.png" />
      </Container>

      </div>
    </div>
  );
};

export default Home;