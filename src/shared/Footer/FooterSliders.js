import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';



const FooterSliders = () => {

  // const [data, setData] = useState();
  // useEffect(() => {
  //   fetch('volunteer.json')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }, []);

  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1351) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 1,
        });
      }
      else if (window.innerWidth >= 750 && window.innerWidth <= 1350) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 1,
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
          slidesToShow: 1,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [sliderSettings]);


  return (
    <div className=''>
      <Slider {...sliderSettings}>
        <div className="">
          <div className=" pb-7">
            <p className='text-lg text-slate-300 font-medium'>Totally Greats Works for us. I am sharing some money to your organization for helps others</p>
            <a href="#" className='text-lg text-orange-400 font-medium'>http://t.twitter.com</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="">
              <i class="fa-brands fa-twitter text-orange-400 text-6xl"></i>
            </div>
            <div className="">
              <div className="flex items-center gap-2">
                <p className='text-lg font-medium text-white'>Rocky Islam</p>
                <span className='text-md font-medium text-orange-400'>@rocky</span>
              </div>
              <p className='text-lg font-medium text-orange-400'>15 Hours Ago</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" pb-7">
            <p className='text-lg text-slate-300 font-medium'>Totally Greats Works for us. I am sharing some money to your organization for helps others</p>
            <a href="#" className='text-lg text-orange-400 font-medium'>http://skype.com</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="">
              <i class="fa-brands fa-skype text-orange-400 text-6xl"></i>
            </div>
            <div className="">
              <div className="flex items-center gap-2">
                <p className='text-lg font-medium text-white'>Murad Wahid</p>
                <span className='text-md font-medium text-orange-400'>@murad</span>
              </div>
              <p className='text-lg font-medium text-orange-400'>18 Hours Ago</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" pb-7">
            <p className='text-lg text-slate-300 font-medium'>Totally Greats Works for us. I am sharing some money to your organization for helps others</p>
            <a href="#" className='text-lg text-orange-700 font-medium'>http://m.facebook.com</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="">
              <i class="fa-brands fa-facebook text-orange-700 text-6xl"></i>
            </div>
            <div className="">
              <div className="flex items-center gap-2">
                <p className='text-lg font-medium text-white'>Asiq</p>
                <span className='text-md font-medium text-orange-700'>@asiq23</span>
              </div>
              <p className='text-lg font-medium text-orange-700'>6 Hours Ago</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FooterSliders;