import React from "react";
import "../index.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left">
        <h1 className="hero-text">
          We design <span>The Future</span>
        </h1>
        <button>Explore more</button>
      </div>
      <div className="right">
        <div className="imgs">
          <img src="/imgs/img-1.png" alt="hero_img1" className="hero-img1" />
          <img src="/imgs/img-2.png" alt="hero_img2" className="hero-img2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
