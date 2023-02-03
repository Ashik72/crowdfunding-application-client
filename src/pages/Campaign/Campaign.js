import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import CampaignShow from "./CampaignShow/CampaignShow";
// import img from "../../images/campaign.png";

const Campaign = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const handelCampaign = (data) => {
    console.log(data);
    const campaign = {
      money: data.money,
      country: data.country,
      bankCountry: data.bankCountry,
      bankName: data.bankName,
    };

    fetch("http://localhost:5000/campaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(campaign),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          toast.success(`Campaign added successfully`);
          navigate("/");
        }
      });
  };

  return (
    <div>
      <div className="bannerImg">
        {/* <img className='w-full h-96 object-cover' src={bannerImg} alt="" /> */}
        <h1 className="text-4xl font-bold">Start Campaign</h1>
      </div>
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
              to="/campaignshow"
              className="mt-8 inline-block rounded-full border-2 border-gray-900 text-lg px-8 py-3 hover:bg-green-600 hover:text-white"
            >
              Our Accredited Partners
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-[900px] mx-auto">
        {/* <div
          className="w-full h-36 absolute top-0 right-0"
          style={{
            background: "linear-gradient(#0c0c0c9c,#0c0c0c80, #0c0c0c08)",
          }}
        ></div> */}

        <div className="mx-40 py-48">
          <img src={"https://i.postimg.cc/hGvdHtdT/campaign.png"} alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center">
            Let's get ready to start your campaign!
          </h1>
          <p className="text-2xl text-slate-500 mt-4 text-center">
            We want to create the best onboarding for you - please fill out the
            information below. Your answers will be locked for this campaign and
            can't be changed later.
          </p>

          <form
            onSubmit={handleSubmit(handelCampaign)}
            className="border mt-10 p-11"
          >
            {/* Raising money  */}
            <p className="text-4xl font-bold">Who are you raising money for?</p>
            <p className="text-2xl text-slate-500 mt-4">
              Please choose the type of account that will be receiving your
              funds.
            </p>

            <div className="form-check mt-3">
              <label className="text-2xl" htmlFor="Individual">
                <input
                  {...register("money", { required: true })}
                  type="radio"
                  name="money"
                  value="Individual"
                  className="form-check-input"
                  id="Individual"
                />{" "}
                Individual
              </label>
            </div>
            <div className="form-check">
              <label className="text-2xl" htmlFor="Non-profit">
                <input
                  {...register("money", { required: true })}
                  type="radio"
                  name="money"
                  value="Non-profit-business"
                  className="form-check-input"
                  id="Non-profit"
                />{" "}
                Non-Profit-Business
              </label>
            </div>

            <div className="text-danger mt-3">
              {errors.money?.type === "required" &&
                "Tell us Who are you raising money for?"}
            </div>

            {/* Located area country  */}

            <p className="text-4xl font-bold">Where are you located?</p>
            <p className="text-2xl text-slate-500 mt-4">
              If you are raising funds as an individual, what is your country of
              legal residence? If you are raising funds for a business, where is
              the business headquartered?
            </p>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl">
                  Select Your Residence Country?
                </span>
              </label>
              <select
                {...register("country", { required: "Country is required" })}
                className="input input-bordered w-full text-xl"
              >
                <option className="text-xl" country="Bangladesh">
                  Bangladesh
                </option>
                <option className="text-xl" country="India">
                  India
                </option>
                <option className="text-xl" country="Nepal">
                  Nepal
                </option>
                <option className="text-xl" country="Malaysia">
                  Malaysia
                </option>
                <option className="text-xl" country="Bhutan">
                  Bhutan
                </option>
                <option className="text-xl" country="Finland">
                  Finland
                </option>
                <option className="text-xl" country="England">
                  England
                </option>
                <option className="text-xl" country="Others">
                  Others
                </option>
              </select>
              {errors.country && (
                <p className="text-red-600">{errors.country?.message}</p>
              )}
            </div>

            {/* bankCountry  */}
            <p className="text-4xl font-bold mt-4">Where is your bank?</p>
            <p className="text-2xl text-slate-500 mt-4">
              Your bank account location determines the currency in which you
              can raise funds.
            </p>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl">
                  Select a Bank Country?
                </span>
              </label>
              <select
                {...register("bankCountry", {
                  required: "Bank Country is required",
                })}
                className="input input-bordered w-full text-xl"
              >
                <option className="text-xl" bankCountry="Bangladesh">
                  Bangladesh
                </option>
                <option className="text-xl" bankCountry="India">
                  India
                </option>
                <option className="text-xl" bankCountry="Nepal">
                  Nepal
                </option>
                <option className="text-xl" bankCountry="Malaysia">
                  Malaysia
                </option>
                <option className="text-xl" bankCountry="Bhutan">
                  Bhutan
                </option>
                <option className="text-xl" bankCountry="Finland">
                  Finland
                </option>
                <option className="text-xl" bankCountry="England">
                  England
                </option>
                <option className="text-xl" bankCountry="Others">
                  Others
                </option>
              </select>
              {errors.bankCountry && (
                <p className="text-red-600">{errors.bankCountry?.message}</p>
              )}
            </div>

            {/* bankName section  */}
            <p className="text-4xl font-bold mt-4">Your bank name?</p>
            <p className="text-2xl text-slate-500 mt-4">
              Your bank account location determines the currency in which you
              can raise funds.
            </p>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl">
                  Select a your Bank Name?
                </span>
              </label>
              <select
                {...register("bankName", { required: "Bank Name is required" })}
                className="input input-bordered w-full text-xl"
              >
                <option className="text-xl" bankName="Islamic">
                  Islamic bank
                </option>
                <option className="text-xl" bankName="BRAC">
                  BRAC bank
                </option>
                <option className="text-xl" bankName="Sonali">
                  Sonali Bank
                </option>
                <option className="text-xl" bankName="Pubali">
                  Pubali Bank
                </option>
                <option className="text-xl" bankName="Others">
                  Others
                </option>
              </select>
              {errors.bankCountry && (
                <p className="text-red-600">{errors.bankCountry?.message}</p>
              )}
            </div>

            <input
              className="btn w-full mt-5"
              value="START MY CAMPAIGN"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
