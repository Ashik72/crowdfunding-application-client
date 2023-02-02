import React from "react";
// import ContactUs from '../../../Components/ContactUs/ContactUs';
import CunstomDonationSection from "../../../Components/CustomDonationSection/CunstomDonationSection";
import JoinRecentEvent from "../../../Components/JoinRecentEvent/JoinRecentEvent";
import PoorFundActiveMember from "../../../Components/PoorFundActiveMember/PoorFundActiveMember";
import PopularCatagories from "../../../Components/PopularCatagories/PopularCatagories";
import Volunteers from "../../../Components/Volunteers/Volunteers";
import HeroSection from "../../HeroSection/HeroSection";
import FirstSection from "../../FirstSection/FirstSection";
import "./style.css";
import CampaignShow from "../CampaignShow/CampaignShow";
const Home = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <FirstSection></FirstSection>
      <CampaignShow></CampaignShow>
      <CunstomDonationSection></CunstomDonationSection>
      <PopularCatagories></PopularCatagories>
      <PoorFundActiveMember></PoorFundActiveMember>
      <JoinRecentEvent></JoinRecentEvent>
      <Volunteers></Volunteers>
    </div>
  );
};

export default Home;
