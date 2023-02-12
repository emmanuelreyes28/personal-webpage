import React from "react";
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
          src={toDoListImage}
          alt="to-do list icon"
        />
        <h3 className="font-heading font-bold text-lg my-4 text-orange">
          To-Do Web App
        </h3>
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
        <h3 className="font-heading font-bold text-lg my-4 text-orange">
          Keeper Web App
        </h3>
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
        <h3 className="font-heading font-bold text-lg my-4 text-orange">
          Blog Web App
        </h3>
        <p className="font-semibold pb-1">Backend: Express.js | MongoDB</p>
        <p className="font-semibold pb-1">
          Frontend: Embedded JavaScript Templates (EJS)
        </p>
        <p>
          This blog site was used using express, ejs, bodyParser, mongoose and
          lodash. In this project I learned how to create routes, send get
          requests, and post requests. All of the blog data was stored in a
          local database using MongoDB and mongoose. Used vanilla javascript
          within ejs templates to dynamically render every blog post in the home
          page. Users can go to a specific post by passing in a post id to
          /posts/:postId route.
        </p>
      </div>
    </div>
  );
}

export default Skills;
