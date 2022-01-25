import React, { useEffect } from "react";
// import classNames from "classNames"
import "../styles/ExploreScentsHero.scss";

const ExploreScentsHero = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="explore-scents-hero fade-in">
      <h1 className="slide-up">
        Find The <br />
        <span>Perfect Match</span>
      </h1>
      <p className="slide-up">
        We partner directly with top brands & wholesalers and only sell 100%
        authentic products
      </p>
    </div>
  );
};

export default ExploreScentsHero;
