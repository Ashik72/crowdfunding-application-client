import React from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <div className="bannerImg">
        <h1 className="text-4xl font-bold">Gallery</h1>
      </div>

      <div className="mt-28 mx-9 lg:mx-40">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <PhotoProvider>
            <PhotoView src={"https://i.postimg.cc/MGWSxdnQ/img1.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/MGWSxdnQ/img1.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/W1jDn6LN/img2.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/W1jDn6LN/img2.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/sgw24k4m/img3.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/sgw24k4m/img3.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/fbyR28HN/img4.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/fbyR28HN/img4.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/xCW8bL3S/img5.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/xCW8bL3S/img5.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/k5YBq0VG/img6.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/k5YBq0VG/img6.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/XvYrMjYt/img7.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/XvYrMjYt/img7.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/0yfzHMPp/img8.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/0yfzHMPp/img8.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/0Q6rQVmf/img9.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/0Q6rQVmf/img9.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/hvLDz6G9/img10.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/hvLDz6G9/img10.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/cHYZ22wV/img11.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/cHYZ22wV/img11.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/g2YJRz8r/img12.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/g2YJRz8r/img12.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/q7FM92YC/img13.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/q7FM92YC/img13.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/Ghn9LJpF/img14.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/Ghn9LJpF/img14.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/zvZDf8qz/img15.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/zvZDf8qz/img15.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/wBngWgyX/img16.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/wBngWgyX/img16.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/6p5WqHxv/img17.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/6p5WqHxv/img17.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/2jh8KbxV/img18.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/2jh8KbxV/img18.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/ZqWJFCRY/img19.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/ZqWJFCRY/img19.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/YCnpW1ty/img20.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/YCnpW1ty/img20.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
            <PhotoView src={"https://i.postimg.cc/wTzT8qWF/img21.jpg"}>
              <img
                className="w-full h-64 object-cover"
                src={"https://i.postimg.cc/wTzT8qWF/img21.jpg"}
                style={{ cursor: "pointer", objectFit: "cover" }}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
        </div>
      </div>

      <div className="mt-28 mb-10 galleryBgImg">
        <img
          className="mx-auto"
          data-aos="fade-up"
          src={"https://i.postimg.cc/Dyks6XWN/heart01.png"}
          alt=""
        />
        <h1 className="text-xl lg:text-5xl font-bold" data-aos="fade-up">
          We will try to help approximately 1000000 people. <br /> You can also
          join with us.
        </h1>

        <Link
          to="/donate"
          className="btn mt-8 bg-gradient-to-r from-green-600 to-teal-600 hover:scale-110"
          data-aos="fade-up"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
