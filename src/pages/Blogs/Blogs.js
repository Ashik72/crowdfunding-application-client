import React, { useEffect, useState } from 'react';
import BlogsCard from './BlogsCard';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaEnvelopeOpenText, FaPhoneVolume, FaMapMarkerAlt } from "react-icons/fa";
import './Blogs.css';
import Loading from '../Loading/Loading';

const Blogs = () => {
    const [blogsCard, setBlogsCard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://code-kids-project-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setBlogsCard(data)
            })
    }, [])

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            {/* banner section for blogs */}
            <section>
                <div className='blogsBannerImg'>
                    <h1 className='text-4xl font-bold'>Blogs</h1>
                </div>
            </section>

            {/* card section  */}
            <section className='mt-28'>
                <div className='lg:grid grid-cols-3 gap-5 mx-8 lg:mx-36' data-aos="fade-up" data-aos-duration="3000">
                    {
                        blogsCard.map(blogCard => <BlogsCard
                            key={blogCard.id}
                            blogCard={blogCard}></BlogsCard>)
                    }
                </div>
            </section>

            {/* one extra section  */}
            <section className='mt-14'>
                <div className='bg-green-500 p-9'>
                    <div className='lg:grid grid-cols-2'>
                        <div className='flex'>
                            <FaFacebookSquare className='w-10 h-10 text-white'></FaFacebookSquare>
                            <FaTwitterSquare className='w-10 h-10 text-white'></FaTwitterSquare>
                            <FaLinkedin className='w-10 h-10 text-white'></FaLinkedin>
                            <FaInstagramSquare className='w-10 h-10 text-white'></FaInstagramSquare>

                        </div>

                        <div className='mt-7 lg:mt-0 lg:grid grid-cols-3 gap-5 text-white'>
                            <div className='flex items-center'><FaEnvelopeOpenText className='w-10 h-10 mr-3'></FaEnvelopeOpenText> <span>needhelp@gmail.com <br />
                                Email address</span></div>
                            <div className='flex items-center'><FaPhoneVolume className='w-10 h-10 mr-3'></FaPhoneVolume> <span>+880 1534789342 <br />
                                Phone line</span></div>
                            <div className='flex items-center'><FaMapMarkerAlt className='w-10 h-10 mr-3'></FaMapMarkerAlt> <span>66 Banani Street Dhaka <br />
                                Visit us</span></div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;