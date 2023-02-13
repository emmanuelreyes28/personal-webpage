import React from "react";
import { FaGithub } from "react-icons/fa";
import toDoListImage from "../images/to-do-list.png";
import stickyNoteImage from "../images/sticky-notes.png";
import newsLetterImage from "../images/newsletter.png";
import whisperImage from "../images/whisper.png";
import bloggingImage from "../images/blogging.png";

function Skills() {
  return (
    <div>
      <h1 className="font-heading text-center text-4xl my-12">My Skills</h1>
      <div className="w-1/2 my-16 mx-auto text-left">
        <img
          className="w-1/4 float-left mr-7"
          src={whisperImage}
          alt="woman shh icon"
        />
        <div className="flex items-center gap-x-2.5 ">
          <h3 className="font-heading font-bold text-lg my-4 text-orange">
            Whisper Copycat Web App
          </h3>
          <a
            className="text-xl hover:text-white"
            href="https://github.com/emmanuelreyes28/Authentication-and-Security"
            title="View Source Code"
          >
            <FaGithub />
          </a>
        </div>
        <p className="font-semibold pb-1">Backend: Express.js | MongoDB</p>
        <p className="font-semibold pb-1">
          Frontend: Embedded JavaScript Templates (EJS)
        </p>
        <p className="pb-2">
          The primary focus of this project was centered around the essential
          topics of authentication and security. I made sure to keep the user's
          login credentials safe and secure by utilizing the tried-and-true
          method of hashing and salting in MongoDB.{" "}
        </p>
        <p className="pb-2">
          Furthermore, to enhance user experience and add an extra layer of
          security, I went ahead and implemented OAuth 2.0 by integrating
          Passport.js, allowing users to seamlessly log in using their Google
          accounts.
        </p>{" "}
        <p>
          Finally, I streamlined the user experience by using cookies to help
          speed up access to the site for previously logged in users.
        </p>
      </div>
      <div className="w-1/2 my-16 mx-auto text-left">
        <img
          className="w-1/4 float-left mr-7"
          src={toDoListImage}
          alt="to-do list icon"
        />
        <div className="flex items-center gap-x-2.5">
          <h3 className="font-heading font-bold text-lg my-4 text-orange">
            To-Do Web App
          </h3>
          <a
            className="text-xl hover:text-white"
            href="https://github.com/emmanuelreyes28/To-Do-Web-App"
            title="View Source Code"
          >
            <FaGithub />
          </a>
        </div>
        <p className="font-semibold pb-1">Backend: Express.js | MongoDB</p>
        <p className="font-semibold pb-1">
          Frontend: Embedded JavaScript Templates (EJS)
        </p>
        <p>
          I developed a FullStack To-Do List web app that has been successfully
          deployed on Heroku and MongoDB Atlas. My web app allows users to
          create new tasks and add them to the default "Today" list or, if they
          prefer, create a new to-do list by simply including "/nameOfList" at
          the end of the URL. These new lists will automatically populate with
          default items, but users have the liberty to delete them or add new
          ones as they please.{" "}
          <a
            className="underline"
            href="https://blooming-earth-22696.herokuapp.com/"
          >
            I welcome you to explore my web app!
          </a>
        </p>
      </div>
      <div className="w-1/2 my-16 mx-auto text-left">
        <img
          className="w-1/4 float-left mr-7"
          src={stickyNoteImage}
          alt="sticky note icon"
        />
        <div className="flex items-center gap-x-2.5">
          <h3 className="font-heading font-bold text-lg my-4 text-orange">
            Keeper Web App
          </h3>
          <a
            className="text-xl hover:text-white"
            href="https://github.com/emmanuelreyes28/Keeper-Web-App"
            title="View Source Code"
          >
            <FaGithub />
          </a>
        </div>
        <p className="font-semibold pb-1">Frontend: React.js</p>
        <p className="pb-2">
          Through the note taking web app, users can easily create new entries
          by crafting a note that consists of both a title and content. Once a
          note is no longer necessary, it can be promptly deleted by using the
          designated button.{" "}
        </p>
        <p>
          Developing this project was an enjoyable experience, as it allowed me
          to delve into a multitude of React topics, including components,
          useState, and props. In addition, it also served as a platform for me
          to reinforce my understanding of key JavaScript concepts such as
          object destructuring and event handling.
        </p>
      </div>

      <div className="w-1/2 my-16 mx-auto text-left">
        <img
          className="w-1/4 float-left mr-7"
          src={bloggingImage}
          alt="blogging icon"
        />
        <div className="flex items-center gap-x-2.5">
          <h3 className="font-heading font-bold text-lg my-4 text-orange">
            Blog Web App
          </h3>
          <a
            className="text-xl hover:text-white"
            href="https://github.com/emmanuelreyes28/Blog-Web-App"
            title="View Source Code"
          >
            <FaGithub />
          </a>
        </div>
        <p className="font-semibold pb-1">Backend: Express.js | MongoDB</p>
        <p className="font-semibold pb-1">
          Frontend: Embedded JavaScript Templates (EJS)
        </p>
        <p className="pb-2">
          This blog site was carefully crafted with a combination of express,
          ejs, bodyParser, mongoose, and lodash. Through this project, I
          acquired valuable insights into creating routes, sending both get and
          post requests, and working with local databases through MongoDB.
        </p>
        <p>
          In particular, I employed vanilla JavaScript within ejs templates to
          render every blog post dynamically on the home page. Additionally, I
          made it possible for users to access a specific post by simply passing
          in a post id to the designated route: /posts/:postId.
        </p>
      </div>
    </div>
  );
}

export default Skills;
