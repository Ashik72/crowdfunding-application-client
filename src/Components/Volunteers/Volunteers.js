import React from 'react';
import './Volunteers.css'
const topCoverImages = "https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-6/273833713_479128367263328_4755964244916512252_n.jpg?stp=dst-jpg_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=NPvPApU85kMAX83_1-f&_nc_ht=scontent.fspd3-1.fna&oh=00_AfA0GNGmLDBNbPhM-dEfciAQCXRcEiDell_tydjqpzb1yA&oe=63CFCEC3"
const topCoverImages2 = "https://media.discordapp.net/attachments/1060927608461733892/1063094215313195198/IMG_20220516_110422_2.jpg?width=326&height=427";
const topCoverImages3 = "https://media.discordapp.net/attachments/1060927608461733892/1063099175773949982/pink-gradient-designify-1.png?width=427&height=427"
const topCoverImages4 = "https://media.discordapp.net/attachments/1062246181016711188/1065929654965387364/01516789576.JPG?width=336&height=427"

const Volunteers = () => {
    return (
        <div className="w-[85%] mx-auto">
            <div className='pt-20 pb-10'>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
                    <div className="">
                        <h4 className='text-2xl font-bold pb-5 text-[#02a95c]'>
                            Our Volunteers
                        </h4>
                        <h2 className='text-5xl font-semibold'>
                            Meet those Who help <br /> others in need.
                        </h2>
                    </div>
                    <div className="text-lg font-semibold py-5">
                        <p>They are volunteers of our organization. Our organization has come so far for them today. Day after day they worked with Aid Human Organization without any benefit. Contact Aid Heiman Organization to join</p>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div class="card">
                    <div class="card-top"
                        style={{ backgroundImage: `url(${topCoverImages})` }}
                    >
                        <div class="card-bottom">
                            <p className='text-xl font-semibold'>Rocky Islam</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-top"
                        style={{ backgroundImage: `url(${topCoverImages2})` }}
                    >
                        <div class="card-bottom">
                            <p className='text-xl font-semibold'>Asikuzzaman</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-top"
                        style={{ backgroundImage: `url(${topCoverImages3})` }}
                    >
                        <div class="card-bottom">
                            <p className='text-xl font-semibold'>Md. Zakaria</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-top"
                        style={{ backgroundImage: `url(${topCoverImages4})` }}
                    >
                        <div class="card-bottom">
                            <p className='text-xl font-semibold'>Sabikun Nahar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteers;