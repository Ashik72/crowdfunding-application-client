import React from "react";
import naturalImg from "../../assets/images/naturalDisaster.jpg";
import leafImg from "../../assets/images/fulles.png";
import waterImg from "../../assets/images/water-drop.png";
import medicinImg from "../../assets/images/medicine.png";
import foodImg from "../../assets/images/food.png";
import volnImg from "../../assets/images/volunteer.jpg";
import img from "../../assets/images/heart01.png";
import volunIcon from "../../assets/images/volunteerIcon.png";
import CountUp from "react-countup";
import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NaturalDisaster = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-2 gap-5 bg-slate-100 pt-36">
        <div
          className="w-full h-36 absolute top-0 right-0"
          style={{
            background: "linear-gradient(#0c0c0c9c,#0c0c0c80, #0c0c0c08)",
          }}
        ></div>
        <div className="lg:w-[600px] mx-auto mt-16 ">
          <img className="w-20" src={leafImg} alt="" />
          <p className="text-2xl mb-3 text-[#07847f] font-bold">
            {" "}
            Change The World.
          </p>
          <p className="text-6xl font-bold text-lime-600 mb-5">
            Need Your Big Hand For Change The World.
          </p>
          <button className="btn border-none bg-[#07847f] mr-5">
            <Link to="/causes">All Causes</Link>
          </button>
          <button className="btn border-none bg-[#07847f]"><Link to="/donate">Donate Now</Link></button>
        </div>

        {/* banner section  */}
        <div className="py-10">
          <div className="avatar relative">
            <div className="lg:w-[600px] rounded-full ring ring-[#07847f] ring-offset-base-100 ring-offset-2">
              <img src={naturalImg} alt="" />
              <div className="absolute flex justify-center items-center bottom-0 border-4 w-72 h-72 rounded-full bg-lime-200 border-[#07847f]">
                <p className="text-center text-3xl font-extrabold p-6">
                  Natural Disaster In Our Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* events */}
      <div className="lg:grid grid-cols-2 gap-0 mx-24 my-8 rounded-2xl">
        <div className="bg-lime-100 flex justify-center items-center">
          <div className="text-xl font-semibold  overflow-hidden">
            <p className=" px-10 text-2xl mb-3 text-[#07847f] font-bold flex items-center">
              Our Events<FaHandPointRight></FaHandPointRight>
            </p>
            <p className="px-10">
              In the event of a natural disaster in Bangladesh,{" "}
              <span className="text-green-900 text-2xl font-extrabold">
                AidHumans
              </span>{" "}
              organizations work to provide relief and support to affected
              communities. Some of the ways these organizations assist in
              disaster situations include. Overall, the role of volunteer
              organizations in Bangladesh during natural disasters is to provide
              support and assistance to affected communities and to help them
              recover from the impact of these events.
            </p>
            <p className="text-2xl font-thin px-10 pb-7">
              If you details know that about Events and Causes please click the
              button!!
            </p>
            <div className="lg:mx-64 flex">
              <button className="btn bg-lime-900 mr-6"><Link to="/our-events">Events</Link></button>
              <button className="btn bg-lime-900"><Link to="/causes">Causes</Link></button>
            </div>
          </div>
        </div>

        <div className="bg-green-100">
          <div className="py-6 pr-6">
            <div class="flex">
              <div class="text-center p-5 bg-gray-300 rounded-full w-28 h-16">
                1
              </div>
              <div class="ml-5">
                <p class="text-lg text-gray-600">
                  Emergency response: These organizations provide immediate
                  support to communities affected by natural disasters, such as
                  distributing food, water, and shelter materials. They also set
                  up medical camps to provide medical care to those injured or
                  affected by the disaster.
                </p>
              </div>
            </div>

            <div class="mt-10 flex">
              <div class="text-center p-5 bg-gray-300 rounded-full w-24 h-16">
                2
              </div>
              <div class="ml-5">
                <p class="text-lg text-gray-600">
                  Search and rescue operations: In the aftermath of a disaster,
                  volunteer organizations work with local authorities to search
                  for survivors and help to rescue those who are trapped or in
                  danger.
                </p>
              </div>
            </div>

            <div class="mt-10 flex">
              <div class="text-center p-5 bg-gray-300 rounded-full w-32 h-16">
                3
              </div>
              <div class="ml-5">
                <p class="text-lg text-gray-600">
                  Rehabilitation and reconstruction: Once the immediate response
                  phase is over, volunteer organizations focus on helping
                  communities recover from the disaster. This may involve
                  rebuilding homes, restoring essential services such as water
                  and electricity, and providing livelihood support to help
                  people get back on their feet.
                </p>
              </div>
            </div>
            <div class="mt-10 flex">
              <div class="text-center p-5 bg-gray-300 rounded-full w-32 h-16">
                4
              </div>
              <div class="ml-5">
                <p class="text-lg text-gray-600">
                  Awareness raising and risk reduction: In addition to
                  responding to disasters, many volunteer organizations in
                  Bangladesh work to raise awareness about the risks of natural
                  disasters and how communities can prepare for and reduce the
                  impact of these events. This may include carrying out risk
                  assessments, developing early warning systems, and training
                  communities in disaster preparedness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* what works done  */}
      <div>
        <p className="text-4xl font-bold text-center">
          Our AidHumans Provides <br /> The Following Items During Natural
          Disaster!
        </p>
        <div className="grid grid-cols-3 gap-5 m-10 text-white">
          <div className="border border-lime-500 p-9 bg-lime-900">
            <div className="flex items-center">
              <img className="mr-6" src={waterImg} alt="" />
              <p className="text-4xl font-semibold">Clean Water</p>
            </div>
            <p className="pt-6 text-lg">
              Water distribution: In the aftermath of a disaster, clean water
              can be in short supply. Volunteers help distribute water to those
              in need, ensuring that communities have access to this essential
              resource.Water purification: In many cases, existing water sources
              may become contaminated during a disaster. Volunteers help to
              purify water using portable water treatment systems, ensuring that
              communities have access to safe drinking water.
            </p>
          </div>
          <div className="border border-lime-500 p-9 bg-orange-500">
            <div className="flex items-center">
              <img className="mr-6" src={medicinImg} alt="" />
              <p className="text-4xl font-semibold">Medicale Help</p>
            </div>
            <p className="pt-6 text-lg">
              Volunteering in the medical field involves providing assistance to
              individuals in need of medical care and support. This can include
              tasks such as administering first aid, assisting healthcare
              professionals, and educating communities on health and wellness.
              Volunteering in the medical field is an opportunity to make a
              positive impact on people's lives and can provide valuable
              hands-on experience for those interested in pursuing a career in
              healthcare.
            </p>
          </div>

          <div className="border border-lime-500 p-9 bg-green-900">
            <div className="flex items-center">
              <img className="mr-6" src={foodImg} alt="" />
              <p className="text-4xl font-semibold">Healthy Food</p>
            </div>
            <p className="pt-6 text-lg">
              Volunteering to provide healthy food is a way for individuals to
              support their communities and promote healthy eating habits. This
              type of volunteering can involve activities such as preparing and
              distributing meals, volunteering at a food bank or soup kitchen,
              or working with community organizations to promote healthy food
              options. Providing healthy food through volunteering can have a
              significant impact on individuals and families, especially those
              facing food insecurity, and can help to improve overall health and
              wellbeing in the community.
            </p>
          </div>
        </div>
      </div>

      {/* how much volunteer works here  */}
      <div className="my-10 grid grid-cols-2 gap-6">
        <div className="bg-slate-200 relative p-7 rounded-r-full">
          <img
            className="w-96 h-96 ml-36 rounded-full object-cover"
            src={volnImg}
            alt=""
          />
          <img className="absolute right-0" src={img} alt="" />
        </div>
        <div className="text-center text-4xl bg-slate-100 font-bold">
          <img className="w-96 mx-auto" src={volunIcon} alt="" />
          <CountUp start={50} end={275} duration={2.75} suffix="+" />
          <p>Volunteers</p>
        </div>
      </div>

      {/* donate  */}
      <div className="bg-emerald-900 my-6 p-10 px-36 text-center text-white">
        <p className="text-4xl font-bold mb-3">
          Help the Society,Donate to the AidHumans
        </p>
        <p className="text-xl font-semibold mb-3">
          Donating is a way to support causes and organizations that are
          important to you and make a positive impact on the world. By giving
          your time, money, or resources, you can help to provide essential
          services, further important research, and improve the lives of those
          in need. Whether you choose to donate to a local charity, support a
          global organization, or give to a specific cause, your donation has
          the power to make a difference and bring about positive change in the
          world.
        </p>
        <p className="text-4xl font-bold mb-3">
          "To Donate, Go To Donate Page"
        </p>
        <button className="btn border-none bg-lime-900"><Link to="/donate">Donate Now</Link></button>
      </div>
    </div>
  );
};

export default NaturalDisaster;
