import React from "react";
import { FaPlay } from "react-icons/fa";
import "./JoinRecentEvent.css";
const images1 = "https://i.ibb.co/YcctxH5/5e7c50b26920e.jpg";
const images2 = "https://i.ibb.co/Vq7qppG/dsdf.jpg";
const images3 = "https://i.ibb.co/HNG01qD/istockphoto-143176152-612x612.jpg";

const JoinRecentEvent = () => {
  return (
    <section className="mx-4 mb-32 mt-32">
      <div className="text-center pb-14">
        <h2 className="text-black text-5xl font-semibold">Join Our Recent Evetns</h2>
      </div>
      <div className="recent-events-wrapper grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:max-w-[90%] w-full mx-auto">
        <div className="events-box">
          <div className="events-items" data-aos="fade-left" data-aos-easing="linear" >
            {/* item 01 */}
            <article className="flex items-center justify-start gap-4 my-4">
              <div>
                <img
                  src={images1}
                  alt="events"
                  className="event-left-image  max-w-[150px]"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  15 Februay 2023 | Education
                </h4>

                <div className="border border-dashed border-t-gray-400 my-2"></div>
                <p className="text-gray-600 text-md ">
                  In academic terms, a text is anything that conveys a set of
                  meanings to the person who examines it.
                </p>
              </div>
            </article>

            {/* item 02 */}
            <article className="flex items-center justify-start gap-4 my-4">
              <div>
                <img
                  src={images2}
                  alt="events"
                  className="event-left-image  max-w-[150px]"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  1 March 2023 | Cold Clothes
                </h4>
                <div className="border border-dashed border-t-gray-400 my-2"></div>
                <p className="text-gray-600 text-md">
                  Donate to Poor People Sweater.
                </p>
              </div>
            </article>

            {/* item 03 */}
            <article className="flex items-center justify-start gap-4 my-4">
              <div>
                <img
                  src={images3}
                  alt="events"
                  className="event-left-image  max-w-[150px]"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">15 March 2023 | Foods</h4>
                <div className="border border-dashed border-t-gray-400 my-2"></div>
                <p className="text-gray-600 text-md">
                  Need Foods For Poor Children.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="events-box images-border" data-aos="fade-right" data-aos-easing="linear" >
          <div className="events-box-images"></div>
          <div className="events-icon-wrap flex items-center justify-center">
            <div className="icon">
              <FaPlay className="text-white events-box-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinRecentEvent;
