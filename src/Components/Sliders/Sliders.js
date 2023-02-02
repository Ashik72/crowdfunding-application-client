import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import topCoverImages from '../../assets/images/rocky.jpg';
import topCoverImages5 from '../../assets/images/muradwahid.jpg';
import topCoverImages6 from '../../assets/images/Rakibul_2.png';
const topCoverImages2 = "https://media.discordapp.net/attachments/1060927608461733892/1063094215313195198/IMG_20220516_110422_2.jpg?width=326&height=427";
const topCoverImages3 = "https://media.discordapp.net/attachments/1060927608461733892/1063099175773949982/pink-gradient-designify-1.png?width=427&height=427"
const topCoverImages4 = "https://media.discordapp.net/attachments/1062246181016711188/1065929654965387364/01516789576.JPG?width=336&height=427"

const Sliders = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h2> Responsive </h2>
            <Slider {...settings}>
                <div>
                    <img className='h-[50%]' src={topCoverImages2} alt="" />
                </div>
                <div>
                    <img src={topCoverImages} alt="" />
                </div>
                <div>
                    <img src={topCoverImages3} alt="" />
                </div>
                <div>
                    <img src={topCoverImages4} alt="" />
                </div>

                <div>
                    <img src={topCoverImages5} alt="" />
                </div>
                <div>
                    <img src={topCoverImages6} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Sliders;