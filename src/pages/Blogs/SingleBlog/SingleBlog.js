import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaCalculator,
  FaAngleRight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import "../Blogs.css";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SingleBlog = () => {
  const { user } = useContext(AuthContext);
  const singleBlog = useLoaderData();

  const [update, setUpdate] = useState(false);

  const [comments, setComments] = useState([]);

  const handelComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const name = form.name.value;
    const email = form.email.value;

    const commentWrite = {
      blogName: singleBlog.title,
      comment,
      name,
      email,
      userEmail: user?.email,
      userName: user?.displayName,
      dateAndTime: new Date(),
    };

    fetch("https://code-kids-project-server.vercel.app/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentWrite),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        toast.success("Comment added!");
        setUpdate(true);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch(
      `https://code-kids-project-server.vercel.app/comments/queryBlog?blogName=${singleBlog?.title}`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, [singleBlog?.title, update]);

  return (
    <div className="mb-10">
      {/* banner section for blogs */}
      <section>
        <div className="blogsBannerImg">
          <h1 className="text-4xl font-bold">Blog Details</h1>
        </div>
      </section>

      <section className="mt-28 mb-8">
        <div className="lg:grid grid-cols-3 mx-4 lg:mx-36 gap-6">
          <div
            className="col-span-2"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img className="w-full" src={singleBlog.image} alt="" />
            <p className="my-5 text-3xl font-bold" data-aos="fade-up">
              {singleBlog.title}
            </p>
            <p className="flex items-center text-slate-500" data-aos="fade-up">
              <FaCalculator className="mr-2"></FaCalculator>
              {singleBlog.date}
            </p>
            <p className="my-5 text-lg text-gray-600" data-aos="fade-up">
              {singleBlog.details}
            </p>
            <div className="mt-7">
              <h1 className="text-3xl font-bold my-6" data-aos="fade-up">
                {singleBlog.ourWorksTitle}
              </h1>

              <p
                className="border rounded-lg p-9 text-lg text-white bg-[#07847f]"
                data-aos="fade-up"
              >
                {singleBlog.ourWorks}
              </p>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            {/* profile section  */}
            <div
              className="card lg:w-96 bg-green-100 shadow-xl"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="avatar mt-10">
                <div className="w-24 mx-auto rounded-full">
                  <img src={singleBlog.authorImg} alt="" />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="text-4xl font-semibold">{singleBlog.author}</h2>
                <p className="text-base flex items-center mt-3">
                  <img
                    className="w-8 rounded-full mr-3"
                    src={"https://i.postimg.cc/W1jDn6LN/img2.jpg"}
                    alt=""
                  />{" "}
                  Works with aidHumans
                </p>
              </div>
            </div>

            {/* categories section  */}

            <div
              className="card lg:w-96 bg-green-100 shadow-xl mt-8"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="card-body items-center">
                <h2 className="text-3xl font-semibold text-center">
                  Categories
                </h2>
                <ul>
                  <Link to="/blogs">
                    <li className="flex items-center text-lg">
                      <FaAngleRight className="mr-2"></FaAngleRight> Children
                    </li>
                  </Link>
                  <Link to="/blogs">
                    <li className="flex items-center text-lg">
                      <FaAngleRight className="mr-2"></FaAngleRight> Poor People
                    </li>
                  </Link>
                  <Link to="/blogs">
                    <li className="flex items-center text-lg">
                      <FaAngleRight className="mr-2"></FaAngleRight> Education
                    </li>
                  </Link>
                  <Link to="/blogs">
                    <li className="flex items-center text-lg">
                      <FaAngleRight className="mr-2"></FaAngleRight> Natural
                      Diaster
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* social section  */}
            <div
              className="card lg:w-96 bg-green-100 shadow-xl mt-8"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="card-body items-center">
                <h2 className="text-3xl font-semibold text-center">
                  Social Share
                </h2>
                <div className="flex justify-evenly mt-6">
                  <Link to="/" className="mr-3">
                    <FaFacebook className="w-8 h-8"></FaFacebook>
                  </Link>
                  <Link to="/" className="mr-3">
                    <FaTwitter className="w-8 h-8"></FaTwitter>
                  </Link>
                  <Link to="/" className="mr-3">
                    <FaLinkedin className="w-8 h-8"></FaLinkedin>
                  </Link>
                  <Link to="/" className="mr-3">
                    <FaWhatsappSquare className="w-8 h-8"></FaWhatsappSquare>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="bg-green-800 h-1 mx-28" />
      <section>
        {/* Comment section  */}

        <div className="w-[1000px] mx-auto">
          <h1 className="text-2xl font-bold text-center mt-7">All Comments</h1>
          {comments.map((comment) => {
            return (
              <div key={comment._id}>
                <div className="m-5 card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h1 className="text-lg font-bold">{comment?.userName}</h1>
                    <h2 className="text-lg font-bold">
                      Date and Time: {comment?.dateAndTime}
                    </h2>
                    <h1>{comment?.comment}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="card w-[1000px] mx-auto bg-green-100 shadow-xl mt-8"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <p className="text-3xl text-center font-bold p-3">Leave A Message</p>

          {user?.uid ? (
            <form onSubmit={handelComment} className="m-5 ">
              <textarea
                name="comment"
                className="textarea textarea-bordered w-full mb-8"
                placeholder="Write Comment"
              ></textarea>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full mb-8"
              />

              <p className="text-sm font-thin p-3">
                Your email address will not be published.
              </p>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full mb-8"
              />

              <input
                className="btn btn-active btn-ghost w-full"
                type="submit"
                value="Post Comment"
              />
            </form>
          ) : (
            <h1 className="text-3xl font-bold text-center m-5">
              Please Login to Add a Comment!
              <button
                // onClick={navigate("/")}
                className="btn btn-link text-3xl font-bold text-slate-700"
              >
                {" "}
                <Link to="/login">Login</Link>
              </button>
            </h1>
          )}
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;
