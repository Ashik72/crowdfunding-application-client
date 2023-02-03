import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function NgoSignup() {
  const handelNgo = (e) => {
    e.preventDefault();
    const form = e.target;
    const organigationName = form.organigationName.value;
    const companyWebsite = form.companyWebsite.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const lastName = form.lastName.value;
    const decs = form.decs.value;
    const country = form.country.value;

    const NgoSignupInfo = {
      organigationName,
      companyWebsite,
      userName,
      email,
      lastName,
      decs,
      country,
    };

    console.log(NgoSignupInfo);

    fetch("http://localhost:5000/ngosignup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(NgoSignupInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("NgoSignupInfo placed successfully");

          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      {/* banner section for blogs */}
      <section>
        <div className="blogsBannerImg">
          <h1 className="text-4xl font-bold">NGO Sign Up</h1>
        </div>
      </section>
      {/* --------------------------------------------- */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 py-24">
        <div className="hidden lg:grid relative grid-cols-2">
          <div className="pt-24">
            <div className="relative w-full h-full">
              <img
                alt=""
                src="https://i.postimg.cc/Ghn9LJpF/img14.jpg"
                className="absolute inset-0 w-full h-full object-cover -mt-6 z-10 rounded"
              />
            </div>
          </div>
          <div className="relative">
            <img
              alt=""
              src="https://i.postimg.cc/wBngWgyX/img16.jpg"
              className="absolute inset-0 w-full h-full object-cover -ml-12 rounded"
            />
          </div>
        </div>
        <div className="lg:px-32 lg:py-24 flex items-center justify-center">
          <div>
            <h2 className="text-5xl mb-6 font-bold uppercase italic">
              We can bring you closer to your vision
            </h2>
            <p className="text-lg">
              Register with us to see a systematic change in mobilising funds,
              build stronger programmes and learn to channel your communication.
              Our fundraising solutions cater to the holistic needs of
              organisations while being transparent and accountable, and expect
              similar fellowship from partner organisations.
            </p>
            <Link
              to="/partners"
              className="mt-8 inline-block rounded-full border-2 border-gray-900 text-lg px-8 py-3 hover:bg-green-600 hover:text-white"
            >
              Our Accredited Partners
            </Link>
          </div>
        </div>
      </div>
      {/* ----------------------PartnerShip---------------------------- */}
      <div className="bg-white py-24 px-12">
        <div className=" pt-20 p-8 flex ">
          <h3 className="font-display-italic font-extrabold text-4xl md:text-4xl italic leading-none mb-12">
            Why should an NGO register with Aid-Humans?
          </h3>
        </div>
        <div className="max-w-xl mx-auto text-center">
          {/* <h2 className="mb-2 font-black text-xl lg:text-3xl text-gray-900">
            Ut enim ad minim veniam.
          </h2> */}

          {/* <h3 className="mb-6 text-base lg:text-lg text-gray-700 max-w-xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </h3> */}
        </div>

        <div className="conatiner mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 p-4">
              <Link
                href="#"
                className="block w-full h-full relative rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  alt=""
                  src="https://i.postimg.cc/D0DGvfq1/partnership.jpg"
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="p-6 py-8 text-center max-w-xs relative">
                    <div className="absolute left-0 top-0 w-full h-full bg-black opacity-50"></div>

                    <div className="relative z-10">
                      <h4 className="mb-2 font-display text-lg text-white">
                        We provide multiple avenues of fundraising like digital
                        campaigns, CSR Partnerships and Payroll Giving
                      </h4>
                      {/* <h5 className="mb-4 font-condensed text-xs text-white px-4">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                      </h5>
                      <span className="inline-block bg-white font-condensed text-primary py-2 px-5 text-xs rounded-full">
                        Find out more
                      </span> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-full lg:w-1/3 p-4">
              <Link
                href="#"
                className="block w-full h-full relative rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  alt=""
                  src="https://i.postimg.cc/PrRxSRBq/The-importance-of-effective-communication-in-the-workplace.png"
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="p-6 py-8 text-center max-w-xs relative">
                    <div className="absolute left-0 top-0 w-full h-full bg-black opacity-50"></div>

                    <div className="relative z-10">
                      <h4 className="mb-2 font-display text-lg text-white">
                        Life-long access to resource material on fundraising,
                        design thinking, communication and much more
                      </h4>
                      {/* <h5 className="mb-4 font-condensed text-xs text-white px-4">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                      </h5>
                      <span className="inline-block bg-white font-condensed text-primary py-2 px-5 text-xs rounded-full">
                        Find out more
                      </span> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-full lg:w-1/3 p-4">
              <Link
                href="#"
                className="block w-full h-full relative rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  alt=""
                  src="https://i.postimg.cc/sftfShSB/webinar-backstage.png"
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="p-6 py-8 text-center max-w-xs relative">
                    <div className="absolute left-0 top-0 w-full h-full bg-black opacity-50"></div>

                    <div className="relative z-10">
                      <h4 className="mb-2 font-display text-lg text-white">
                        Get premium access to webinars, online courses and
                        networking events
                      </h4>
                      {/* <h5 className="mb-4 font-condensed text-xs text-white px-4">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                      </h5>
                      <span className="inline-block bg-white font-condensed text-primary py-2 px-5 text-xs rounded-full">
                        Find out more
                      </span> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------- */}
      <div className="container mx-auto">
        <div className=" pt-20 p-8 flex justify-center ">
          <h3 className="font-display-italic font-extrabold text-4xl md:text-4xl italic leading-none mb-12">
            NGO REGISTRATION
          </h3>
        </div>
        <div>
          <div className="">
            <div className="text-center">
              <div className="px-4 sm:px-0">
                <h3 className="text-2xl font-bold leading-6 text-gray-900">
                  Your information
                </h3>
                <p className="mt-1 text-lg text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
            </div>
            <form onSubmit={handelNgo} className='lg:w-[1000px] mx-auto mt-8'>
              
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                  <div className="m-11">
                    <div className="lg:flex justify-between items-center">
                        {/* Ogranisation Name */}
                    <div className="form-control lg:w-6/12">
                      <label className="label">
                        <span className="label-text block text-sm font-medium text-gray-700">
                          Ogranisation Name
                        </span>
                      </label>
                      <input
                        // {...register("organigationName", { required: true })}
                        type="text"
                        name="organigationName"
                        placeholder="Type here"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                    {/* PhotoURL */}
                    <div className="form-control lg:w-5/12 mt-3">
                        <label
                          htmlFor="company-website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          PhotoURL
                          {/* https://i.ibb.co/TL0LNhY/Lok-Kalyan-Seva-Kendra-20210729-180737-Ngo-Logo.jpg 
                          https://i.ibb.co/wJwMvMH/sathi-logo.png
                          https://i.ibb.co/hYvt6RD/rosa-logo.png*/}
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                            http://
                          </span>
                          <input
                            type="text"
                            name="companyWebsite"
                            id="company-website"
                            className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3"
                            placeholder="https://i.ibb.co/imgbb.png"
                          />
                        </div>
                    </div>
                    </div>
                    {/* USERNAME / EMAIL ADDRESS / FIRST NAME / LAST NAME */}
                    <div className="">
                      <div className="flex justify-center items-center mt-4">
                      <div className="w-full lg:w-6/12">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            name="userName"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="ucky jesse"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="jesse@example.com"
                          />
                        </div>
                      </div>
                      </div>
                      <div className="flex justify-center items-center">
                      <div className="w-full lg:w-6/12 ">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Lucky"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Jesse"
                          />
                        </div>
                      </div>
                      </div>
                    </div>
                    {/* Description */}
                    <div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="decs"
                          rows={3}
                          className="mt-1 block w-full border rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm"
                          placeholder=""
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        {/* Brief description for your profile. URLs are
                        hyperlinked. */}
                      </p>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option className='text-xl' country='Bangladesh'>Bangladesh</option>
                            <option className='text-xl' country='India'>India</option>
                            <option className='text-xl' country='Nepal'>Nepal</option>
                            <option className='text-xl' country='Malaysia'>Malaysia</option>
                            <option className='text-xl' country='Bhutan'>Bhutan</option>
                            <option className='text-xl' country='Finland'>Finland</option>
                            <option className='text-xl' country='England'>England</option>
                            <option className='text-xl' country='Others'>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
             
            </form>
          </div>
        </div>
      </div>
      {/* --------------------------------------------- */}
    </div>
  );
}