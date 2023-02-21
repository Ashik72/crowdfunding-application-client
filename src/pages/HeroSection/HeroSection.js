import React from "react";
import Button from "../../typography/Button";
const heroBottomEffect1 = "https://images.unsplash.com/photo-1621795166651-745ceaa5c92f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9vciUyMGNoaWxkJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
const heroBottomEffect2 = "https://images.unsplash.com/photo-1617878227827-8360231f7f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8T3JwaGFuYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const heroBottomEffect3 = "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9vciUyMGVkdWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
const heroBg1 = "https://i.ibb.co/s9rv3tY/hero-2.png";

const HeroSection = () => {
  return (
    <>
      <div className="main-hero z-50">
        {/* hero landing text */}
        <div className="md:max-w-[90%] w-full mx-auto px-2 hero-landing-text">
          <article className="md:max-w-[40%] max-w-[90%]  mr-auto text-start py-7 px-2">
            <h1 className="font-bold text-4xl text-white font-sans">
              Help people to feel their emotions, rather than repress them
            </h1>
            <p className="text-white text-lg font-semibold mt-4">
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
              <article className="text-center cursor-pointer  donate-hero-article" data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="500">
                <div className="hero-top-images py-7">
                  <img src={heroBottomEffect1} alt="hero effect" />
                </div>
                <h1 className="text-xl font-bold text-[#07847f]">Donate Foods</h1>
                <p className="text-[15px] font-semibold">
                  The little food you give to poor people can save thousands of helpless families. Let us extend your helping hand to the helpless people.
                </p>
              </article>

              <article className="text-center cursor-pointer  donate-hero-article" data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="500">
                <div className="hero-top-images py-7">
                  <img src={heroBottomEffect2} alt="hero effect" />
                </div>
                <h1 className="text-xl font-bold text-[#07847f]">Orphanage</h1>
                <p className="text-[15px] font-semibold">
                  If you want, you can invest in our Orphanage for poor people who have no place to stay. Your small investment can be a shelter over the head of a helpless child.
                </p>
              </article>

              <article className="text-center cursor-pointer donate-hero-article" data-aos="fade-left" data-aos-easing="linear"
                data-aos-duration="1000">
                <div className="hero-top-images py-7">
                  <img src={heroBottomEffect3} alt="hero effect" />
                </div>
                <h1 className="text-xl font-bold text-[#07847f]">Educations</h1>
                <p className="text-[15px] font-semibold">
                  With a little help from you and me, future generations can be educated. Come and lend your helping hand. Let us extend your helping hand to the helpless people
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
