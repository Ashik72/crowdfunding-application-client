import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DashboardPosts = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const imageHostKey = '3ff44cfc647b476b189bcca953c6dda0';

  const navigate = useNavigate();


  const handelAddBlog = data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          const today = new Date();
          const date = today.toLocaleDateString("en-US", options)
          const product = {
            title: data.title,
            image: imgData.data.url,
            date: date,
            author: data.author,
            authorImg: data.authorImg,
            details: data.details,
            ourWorksTitle: data.ourWorksTitle,
            ourWorks: data.ourWorks
          }

          fetch(' https://code-kids-project-server.vercel.app/blogs', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(product)
          })
            .then(res => res.json())
            .then(result => {
              if (result.acknowledged) {
                toast.success(`Blog added successfully`);
                navigate('/blogs');
              }
            })
        }
      })
  }


  return (
    <div className='w-full overflow-y-scroll bg-[#04061a] pt-8 pb-24 font-serif'>
      <div className='lg:w-3/4 mx-auto p-7 bg-[#ffffff13] rounded-lg dashboard-post-shadow'>
        <h3 className="text-3xl text-gray-200 font-semibold font-serif">Add Blog</h3>

        <form onSubmit={handleSubmit(handelAddBlog)}>
          <div className='flex gap-6'>
            {/* title  */}
            <div className="form-control w-full">
              <label className="label"><span className="label-text text-gray-200">Title</span></label>
              <input type='text' {...register("title",
                { required: "Title is required" })} className="input input-bordered w-full bg-gray-300" />
              {errors.title && <p className='text-red-600'>{errors.title?.message}</p>}
            </div>
            {/* author name */}
            <div className="form-control w-full">
              <label className="label"><span className="label-text text-gray-200">Author Name</span></label>
              <input type="text"
                {...register("author",
                  { required: "Author name is required" })} className="input input-bordered w-full  bg-gray-300" />
              {errors.author && <p className='text-red-600'>{errors.author?.message}</p>}
            </div>
          </div>

          <div className='flex gap-6'>
            {/* Image */}
            <div className="form-control w-full">
              <label className="label"><span className="label-text text-gray-200">Image</span></label>
              <input type="file" {...register("image",
                { required: "Image is required" })} className="file-input file-input-bordered file-input-primary w-full" />
              {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
            </div>
            {/* author image url */}
            <div className="form-control w-full">
              <label className="label"><span className="label-text text-gray-200">Author Image URL</span></label>
              <input type="text"
                {...register("authorImg",
                  { required: "Author Image is required" })} className="input input-bordered w-full bg-gray-300" />
              {errors.authorImg && <p className='text-red-600'>{errors.authorImg?.message}</p>}
            </div>
          </div>
          {/* Date */}
          {/* <div className="form-control w-full">
            <label className="label"><span className="label-text text-gray-200">Date</span></label>
            <input type="text"
              {...register("date",
                { required: "Date is required" })} className="input input-bordered w-full" />
            {errors.date && <p className='text-red-600'>{errors.date?.message}</p>}
          </div> */}


          {/* Details */}
          <div className="form-control w-full">
            <label className="label"><span className="label-text text-gray-200">Details</span></label>
            {/* <input type="text"
              {...register("details",
                { required: "Details is required" })} className="input input-bordered w-full bg-gray-300" /> */}
            <textarea {...register("details",
              { required: "Details is required" })} className="input input-bordered w-full bg-gray-300" ></textarea>
            {errors.details && <p className='text-red-600'>{errors.details?.message}</p>}
          </div>
          {/* ourWorksTitle */}
          <div className="form-control w-full">
            <label className="label"><span className="label-text text-gray-200">Our Works Title</span></label>
            <input type="text"
              {...register("ourWorksTitle",
                { required: "Our Works Title is required" })} className="input input-bordered w-full bg-gray-300" />
            {errors.ourWorksTitle && <p className='text-red-600'>{errors.ourWorksTitle?.message}</p>}
          </div>
          {/* ourWorks */}
          <div className="form-control w-full">
            <label className="label"><span className="label-text text-gray-200">Our Works</span></label>
            <input type="text"
              {...register("ourWorks",
                { required: "Our Works is required" })} className="input input-bordered w-full bg-gray-300" />
            {errors.ourWorks && <p className='text-red-600'>{errors.ourWorks?.message}</p>}
          </div>

          <input className='btn w-full mt-5' value='Add Blog' type="submit" />

        </form>
      </div>
    </div>
  );
};

export default DashboardPosts;