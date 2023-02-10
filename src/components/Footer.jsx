import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="py-12">
      <div className="flex justify-center gap-x-8 text-2xl">
        <a href="https://github.com/emmanuelreyes28">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/reyesej/">
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
