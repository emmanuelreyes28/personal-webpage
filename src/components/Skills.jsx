import React from "react";
import bloggingImage from "../images/blogging.png";

function Skills() {
  return (
    <div>
      <h1 className="font-heading text-center text-4xl my-12">My Skills</h1>
      <div className="w-1/2 my-16 mx-auto text-left">
        <img
          className="w-1/4 float-left mr-7"
          src={bloggingImage}
          alt="blogging icon"
        />
        <h3 className="font-heading font-bold text-lg my-4 text-orange">
          Blog Web App
        </h3>
        <p className="font-semibold pb-1">
          Backend: Express.js | MongoDB/Mongoose{" "}
        </p>
        <p className="font-semibold pb-1">Frontend: EJS</p>
        <p className="font-display">
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
