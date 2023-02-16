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
          coders as a Programming Instructor. I taught middle and high school
          students the fundamentals of programming through exciting and
          interactive projects, and it was an incredibly rewarding experience.
        </p>
        <p className="pb-2">
          As a tech enthusiast, I have gained a wealth of experience in various
          technologies, and I am excited to offer my expertise to your company.
          I am particularly excited to share my knowledge of MERN, which I
          learned through the Complete 2022 Web Development Bootcamp on Udemy,
          instructed by Angela Yu. During this course, I gained hands-on
          experience in essential concepts such as creating databases, schemas,
          routing, rest apis, authentication and security among other key topics
          and technologies. My career goal is to become a Full Stack Engineer,
          and I am confident that my skills and expertise will contribute
          significantly to your team.
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
