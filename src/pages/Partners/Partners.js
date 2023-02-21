import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Circles } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://crowdfunding-projects-server.vercel.app/ngoSignup")
      .then((res) => res.json())
      .then((data) => { 
        setPartners(data)
        setLoading(true)
      });
  }, []);
  if (!isLoading) {
    return <div className='w-full p-6 overflow-x-scroll h-[100vh] flex justify-center items-center' >
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      >

      </Circles>
    </div>
  }
  return (
    <div >
      <div className="blogsBannerImg">
        <h1 className="text-4xl font-bold">Our Partners</h1>
      </div>

      <div className="lg:grid grid-cols-3 mx-16 my-16">
        {partners.map((partner) => (
          <div className="card w-96 h-[450px]  bg-base-100 shadow-xl mb-6">
            <figure>
              <img src={partner.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{partner.organigationName}</h2>
              <p>
                {partner.decs.length > 100
                  ? partner.decs.slice(0, 100) + "..."
                  : partner.decs}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/partners/${partner._id}`}>
                  <button className="btn bg-[#07847f] text-white text-lg font-bold">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
