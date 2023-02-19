import React from "react";
import resume from "../images/Emmanuel_Reyes.pdf";

function Contact() {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-heading text-4xl my-12">Get In Touch</h1>
        <h2 className="font-heading font-bold text-xl my-4">
          I would gladly take brewery recommendations in SoCal area! 🍻
        </h2>
        <p className="font-display w-1/2 mx-auto my-10">
          Got a Software or Full Stack Engineer posisition available? I would
          love to discuss the opoprtunity! Feel free to take a copy of my resume
          😄
        </p>
      </div>
      <div className="flex justify-center gap-x-7">
        <a
          className="text-xl font-heading text-white rounded-lg py-2 px-5 bg-light-blue hover:bg-sky-blue"
          href="mailto:emmanuel.reyes28@gmail.com"
        >
          CONTACT ME
        </a>
        <a
          className="text-xl font-heading text-white rounded-lg py-2 px-5 bg-light-blue hover:bg-sky-blue"
          href={resume}
          download="EMMANUEL_REYES.pdf"
        >
          RESUMÉ
        </a>
      </div>
    </div>
  );
}

export default Contact;
