import React from "react";
const topCoverImages = "https://i.ibb.co/PwrVySJ/donate-cover.png";

const TopBanner = ({ children }) => {
    return (
        <div
            style={{ backgroundImage: `url(${topCoverImages})` }}
            className="top-banner bg-no-repeat bg-bottom  bg-cover w-full h-full py-48 text-center"
        >
            <h2 className="font-bold text-5xl text-white">{children}</h2>
        </div>
    );
};

export default TopBanner;
