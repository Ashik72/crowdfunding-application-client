import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../Volunteer/Volunteer.css';
// import data from '../../public/volunteer.json';


const Sliders = () => {

  const [data, setData] = useState();
  useEffect(() => {
    fetch('volunteer.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  const [sliderSettings, setSliderSettings] = useState({
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1351) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 3,
        });
      }
      else if (window.innerWidth >= 750 && window.innerWidth <= 1350) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 2,
        });
      } else if (window.innerWidth <= 750) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 1,
        });
      }
      else {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 3,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [sliderSettings]);


  return (
    <div className='w-4/5 mx-auto my-32'>
      <Slider {...sliderSettings}>
        {
          data?.map(singleData => <div className="volunteerCard">
            <div className="volunteerBox">
              <div className="volunteerItems max-w-[300px] h-[400px] flex flex-col items-center justify-center">
                <div className="volunteerImage ">
                  <img className='max-w-full' src={singleData?.img} alt="" />
                </div>
                <article className='transition-all duration-500 text-center w-[350px]'>
                  <div className="vounteerName text-center">
                    <h4 className='text-2xl font-bold mt-5'>{singleData?.name}</h4>
                    <p className='text-slate-500 font-semibold text-lg my-2'>{singleData?.Position}</p>
                  </div>
                  <div className="volunteerSocialConnections flex justify-center">
                    <i className="w-10 h-10 border m-2 mb-6 border-slate-500 flex items-center justify-center  fa-brands fa-twitter"></i>
                    <i className="w-10 h-10 border m-2 mb-6 border-slate-500 flex items-center justify-center  fa-brands fa-facebook"></i>
                    <i className="w-10 h-10 border m-2 mb-6 border-slate-500 flex items-center justify-center  fa-brands fa-twitter"></i>
                    <i className="w-10 h-10 border m-2 mb-6 border-slate-500 flex items-center justify-center  fa-brands fa-facebook"></i>

                  </div>
                </article>
              </div>
            </div>
          </div>)
        }
        
      </Slider>
    </div>
  );
};

export default Sliders;