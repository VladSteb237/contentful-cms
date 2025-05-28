import Image from "next/image";
import React from "react";
import heroImg from "../../public/hero.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Stebnitskii SMC</h1>
          <p>
            Created by Cool Programmer -
            <span className="text-3xl font-bold"> Stebnitskii Vladislav. </span>
            Minus dolorem repudiandae odio nulla corporis, quo porro. Similique
            recusandae minus velit sapiente, qui tenetur iusto dicta? Minus
            dolorem repudiandae odio nulla corporis.
          </p>
        </div>
        <div className="img-container">
          <Image
            src={heroImg}
            alt="hero-img"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
