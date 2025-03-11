import React from "react";

const Hero = ({ image, title }) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={`relative flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat`}
    >
      <div className="bg-overlay absolute top-0 left-0 z-10 h-full w-full"></div>
      <div className="content flex items-center justify-center">
        <h1 className="z-20 text-5xl font-bold text-white">{title}</h1>
      </div>
    </section>
  );
};

export default Hero;
