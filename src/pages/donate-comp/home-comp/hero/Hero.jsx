import React from "react";
import Button from "../../../typography/Button";
const heroBottomEffect1 = "https://i.ibb.co/Vq7qppG/dsdf.jpg";
const heroBottomEffect2 = "https://i.ibb.co/f9dPTMs/girl-2529907-1920.jpg";
const heroBottomEffect3 = "https://i.ibb.co/N7QF6N0/face-2369766-1920.jpg";
const heroBg1 = "https://i.ibb.co/s9rv3tY/hero-2.png";

const Hero = () => {
  return (
    <>
      <div className="main-hero">
        {/* hero landing text */}
        <div className="md:max-w-[90%] w-full mx-auto px-2 hero-landing-text">
          <article className="md:max-w-[40%] max-w-[90%]  mr-auto text-start py-7 px-2">
            <h1 className="font-bold text-4xl text-white">
              Help people to feel their emotions, rather than repress them
            </h1>
            <p className="text-white font-thin mt-4">
              Being able to give back to those in need helps you achieve a
              greater sense of personal satisfaction and growth, it feels good
              to help others.
            </p>
            <Button>Donate now</Button>
          </article>
        </div>

        {/* shape area */}
        <div className="shape-wrap">
          <div className="shape-area">
            <div className="shape-middle md:block hidden">
              {/* <img src={heroBg1} alt="" /> */}
            </div>

            {/* hero bottom effect */}
            <section className="grid xs:grid-cols- sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-[80%] mx-auto py-7">
              <article className="text-center  donate-hero-article">
                <div className="hero-top-images py-7">
                  <img src={heroBottomEffect1} alt="hero effect" />
                </div>
                <h1 className="text-xl font-bold ">Donate</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio, sequi ipsa illum, totam corporis ullam expedita libero
                  impedit dolorem beatae aliquam quisquam odio!
                </p>
              </article>

              <article className="text-center  donate-hero-article">
                <div className="hero-top-images py-7">
                  <img src={heroBottomEffect2} alt="hero effect" />
                </div>
                <h1 className="text-xl font-bol">Donate</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio, sequi ipsa illum, totam corporis ullam expedita libero
                  impedit dolorem beatae aliquam quisquam
                </p>
              </article>

              <article className="text-center  donate-hero-article">
                <div className="hero-top-images py-7">
                  <img src={heroBottomEffect3} alt="hero effect" />
                </div>
                <h1 className="text-xl font-bold ">Donate</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio, sequi ipsa illum, totam corporis ullam expedita libero
                  impedit dolorem beatae aliquam quisquam
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
