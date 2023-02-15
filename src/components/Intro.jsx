import React from "react";
import emmanuelPortrait from "../images/emmanuel copy.png";

function Intro() {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src={emmanuelPortrait}
          alt="Emmanuel portrait"
          className="w-72 pb-5"
        />
      </div>
      <div className="text-base text-center leading-relaxed tracking-wide w-1/2 pt-6 mx-auto">
        <p className="pb-2">
          Hello and welcome to my corner of the internet! I'm a Software
          Engineer with a passion for programming and staying up-to-date with
          the latest technologies. Before starting my career as a Software
          Engineer, I had the privilege of inspiring the next generation of
          coders as a computer science instructor. I taught middle and high
          school students the fundamentals of programming through exciting and
          interactive projects, and it was an incredibly rewarding experience.
        </p>
        <p className="pb-2">
          I have experience with a variety of technlogies but the most recent
          stack I have learned is MERN. I learned MERN through the Complete 2022
          Web Development Bootcamp on Udemy instructed by Angela Yu. It was an
          awesome experience where I learned new concepts such as authentication
          and security to keep users data safe using hashing, salting and OAuth
          amongst a variety of topics and technologies. My career goal is to
          become a Full Stack Engineer, and I am always seeking opportunities
          for growth and development. I strive to be part of a company that
          supports and challenges me in this pursuit, and I am excited to see
          what the future holds.
        </p>
        <p className="pb-2">
          When I'm not coding, I enjoy keeping active through exercise and
          spending quality time with friends at local breweries, I believe life
          is all about balance.
        </p>
      </div>
    </div>
  );
}

export default Intro;
