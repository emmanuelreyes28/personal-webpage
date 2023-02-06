import React from "react";
import image from "../images/emmanuel.png";
import emmanuel from "../images/emmanuel copy.png";

function Intro() {
  return (
    <div className="container mx-auto px-8 flex">
      <div className="w-1/2 h-full">
        <p>
          Hello and welcome to my corner of the internet! I'm a Software
          Engineer with a passion for programming and staying up-to-date with
          the latest technologies. Before starting my career as a Software
          Engineer, I had the privilege of inspiring the next generation of
          coders as a computer science instructor. I taught middle and high
          school students the fundamentals of programming through exciting and
          interactive projects, and it was an incredibly rewarding experience.
        </p>
        <p>
          I have experience with a variety of technlogies but the most recent
          stack I have learned is MERN. I learned MERN through the Complete 2022
          Web Development Bootcamp on Udemy instructed by Angela Yu. It was an
          awesome experience where I learned new concepts such as security and
          how to keep users data safe using hashing and salting or even third
          party logins. My career goal is to become a Full Stack Engineer, and I
          am always seeking opportunities for growth and development. I strive
          to be part of a company that supports and challenges me in this
          pursuit, and I am excited to see what the future holds.
        </p>
        <p>
          When I'm not coding, I enjoy keeping active through exercise and
          spending quality time with friends at local breweries, I believe life
          is all about balance.
        </p>
      </div>
      <div className="w-1/2 h-full flex justify-center">
        {/* <img src={image} alt="Emmanuel portrait" className="h-80" /> */}
        <img src={emmanuel} alt="Emmanuel portrait" className="w-1/2" />
      </div>
    </div>
  );
}

export default Intro;
