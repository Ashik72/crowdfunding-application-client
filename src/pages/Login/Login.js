import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";
// import loginImg from '../../images/sign.png';

const Login = () => {
  const { login, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero">
      <div className="hero-content my-10 grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center w-full lg:text-left">
          <img
            className="rounded-lg"
            src={"https://i.postimg.cc/vBJPSHsd/sign.png"}
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
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
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-slate-600" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center py-7">
            New to <strong>aidHumans</strong>?{" "}
            <Link className="text-slate-600" to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
