import React from "react";
// import ContactUs from '../../../Components/ContactUs/ContactUs';
import CunstomDonationSection from "../../../Components/CustomDonationSection/CunstomDonationSection";
import JoinRecentEvent from "../../../Components/JoinRecentEvent/JoinRecentEvent";
import PopularCatagories from "../../../Components/PopularCatagories/PopularCatagories";
import "./style.css";
import LiveUpdate from "../../../Components/LiveUpdate/LiveUpdate";
import TopPartners from "../../../Components/TopPartners/TopPartners";
import Sponsored from "../../../Components/Sponsored/Sponsored";
import Sliders from "../../../Components/Sliders/Sliders";
import HeroSection from "../../HeroSection/HeroSection";
import HowToHelp from "../../../Components/HowToHelp/HowToHelp";

const Home = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <TopPartners/>
      <CunstomDonationSection></CunstomDonationSection>
      <PopularCatagories></PopularCatagories>
      <LiveUpdate/>
      <JoinRecentEvent></JoinRecentEvent>
      <Sponsored />
      <Sliders />
      <HowToHelp/>
    </div>
  );
};

export default Home;
