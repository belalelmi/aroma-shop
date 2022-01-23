import React, { useEffect } from "react";
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
        Lorem Ipsum is simply dummy text of the printing and typesetting Lorem
        Ipsum is simply dummy text of the printing and typesetting industry
      </p>
    </div>
  );
};

export default ExploreScentsHero;
