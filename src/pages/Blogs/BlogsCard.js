import React from 'react';
import { Link } from 'react-router-dom';
import donate from '../../assets/images/donate.png';
import { FaAngleDoubleRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const BlogsCard = ({ blogCard }) => {
  const { _id, image, title, details, date } = blogCard;
  return (
    <div className="card z-0 lg:w-96 bg-base-100 shadow-xl mb-10" data-aos="fade-up" data-aos-duration="3000">

      <PhotoProvider>
        <PhotoView src={image}>
          <figure className='relative' style={{ overflow: 'inherit' }}>
            <img className='w-full h-64 rounded-t-xl' src={image} style={{ cursor: 'pointer', objectFit: 'cover'}} alt="Shoes" />
            <div className='-bottom-[19px] z-10 left-5 absolute'>
              <img className='w-10 border rounded-full' src={donate} alt="" />
            </div>
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="text-2xl font-bold" data-aos="fade-up">{title}</h2>
        <p className='text-lg' data-aos="fade-up">{
          details.length > 100 ? details.slice(0, 100) + '...' : details
        } </p>
        <Link to={`/details/${_id}`}>
          <h1 className='text-[#07847f] text-lg font-bold py-5 flex items-center' data-aos="fade-up" >Read More <FaAngleDoubleRight className='ml-2'></FaAngleDoubleRight></h1>
        </Link>
      </div>
      <p className='text-xs text-center font-thin border-t py-3' data-aos="fade-up">{date}</p>
    </div>
  );
};

export default BlogsCard;