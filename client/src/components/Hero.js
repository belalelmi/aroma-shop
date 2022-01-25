import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.scss";

const Hero = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="hero">
      <div className="container">
        <div className="info">
          <h1 className="info__header slide-up">
            Discover your <span className="info__span">Perfect Scent</span>
          </h1>
          <h2 className="info__text slide-up">
            Enjoy the best scents from around the world through simple one time
            purchases.
            <br />
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
          </h2>
          <Link to="/ExploreScents" className="info__btn slide-up">
            Explore Scents
          </Link>
          <Link to="/AboutUs" className="info__btn slide-up">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
