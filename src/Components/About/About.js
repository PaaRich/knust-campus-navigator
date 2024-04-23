import React from "react";
import about_svg from "./resources/undraw_world_re_768g.svg";

const About = () => {
  return (
    <div className="py-5 px-5 about" id="about">
      <div className="about-svg">
        <img className="w-75" src={about_svg} alt="svg" />
      </div>
      <div className="about-text text-start">
        <h2>About Us</h2>
        <div className="w-100">
          Welcome to{" "}
          <a href="dd" className="plug_map">
            PlugMap KNUST
          </a>
          ! Discover the world with confidence.
          <a href="aa" className="plug_map">
            PlugMap KNUST
          </a>{" "}
          offers accurate and reliable mapping services for seamless navigation.
          Our user-friendly platform provides up-to-date maps, intuitive search,
          and personalized features. Avoid traffic, find landmarks, and plan
          your routes effortlessly. Accessible on web, mobile, and tablet,
          MapConnect is your trusted guide for exploration and adventure.
        </div>
      </div>
    </div>
  );
};

export default About;
