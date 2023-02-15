import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="py-12">
      <div className="flex justify-center gap-x-8 text-2xl">
        <a
          className=" hover:text-white"
          href="https://github.com/emmanuelreyes28"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className=" hover:text-white"
          href="https://www.linkedin.com/in/reyesej/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="font-heading text-center my-3 py-5">
        {year} &copy; Emmanuel Reyes.
      </div>
    </div>
  );
}

export default Footer;
