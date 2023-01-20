import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";
// import signImg from '../../images/sign.png';

const SignUp = () => {
  const { createUser, modernizeProfile, loading } = useContext(AuthContext);

  let navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  const handelSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
        // window.location.reload();
        updateUser(name);
      })
      .catch((error) => console.error(error));
  };

  const updateUser = (name) => {
    const profile = {
      displayName: name,
    };

    modernizeProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero">
      <div className="hero-content my-10 grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center w-full lg:text-left">
          <img
            className="rounded-lg w-full"
            src={"https://i.postimg.cc/vBJPSHsd/sign.png"}
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
          <form onSubmit={handelSignup} className="card-body">
            <h1 className="text-5xl font-bold">Signup</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-slate-600"
                type="submit"
                value="Signup"
              />
            </div>
          </form>
          <p className="text-center py-7">
            Already have an account?{" "}
            <Link className="text-slate-600" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
