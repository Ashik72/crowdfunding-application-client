import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, modernizeProfile, signInPopUp } = useContext(AuthContext);
  const location = useLocation();
  let from = location.state?.from?.pathname;
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const imbbKey = "684c6274d794de1079ffad375804e558";
  const handleSignUp = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imbbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          navigate(from, { replace: true });
          const userRegisterData = {
            name: data.name,
            email: data.email,
            image: imgData.data.url,
            password: data.password,
          };
          createUser(data.email, data.password)
            .then((result) => {
              const user = result.user;
              // console.log(user);
              handleUserProfileUpdate(data.name, imgData.data.url);
            })
            .catch((error) => console.log(error));
          fetch("https://croudfunding-server-muradwahid.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userRegisterData),
          })
            .then((res) => res.json())
            .then((data) => {})
            .catch((err) => console.log(err));
        }
        
      });
  };
  const handleUserProfileUpdate = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL,
    };
    modernizeProfile(profile)
      .then(() => {})
      .then((err) => console.log(err));
  };

  const googleSignIn = () => {
    signInPopUp(googleProvider).then((result) => {
      const googleUser = result.user;
      const userData = {
        name: googleUser.displayName,
        email: googleUser.email,
        image: googleUser.photoURL,
      };

      fetch("https://croudfunding-server-muradwahid.vercel.app/users")
        .then((res) => res.json())
        .then((data) => {
          navigate(from, { replace: true });
          const postUserData = data.find(
            (post) => post.email === googleUser.email
          );
          if (postUserData?.email !== googleUser?.email) {
            fetch("https://croudfunding-server-muradwahid.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((res) => res.json())
              .then((data) => {})
              .catch((err) => console.log(err));
          } else {
          }
        })
        .catch((err) => console.log(err));
      navigate("/");
    });
  };

  return (
    <div className="hero bg-base-200 py-36">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1674498609~exp=1674499209~hmac=7864b7a2f8aeb71a506cfde5e9131c5340ca5d116fda59a796c25f8a2ab00e39"
          className="max-w-xl rounded-lg shadow-2xl"
          alt="loginPhoto"
        />
        <div>
          <div className="w-96 p-7">
            <h1 className="text-4xl font-bold text-center text-blue-600">
              Register Now
            </h1>
            {/* React form hook starts here  */}
            <form onSubmit={handleSubmit(handleSignUp)}>
              {/* Name input field here  */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name must be required" })}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-600 font-semibold">
                    {errors.name?.message}
                  </p>
                )}
              </div>

              {/* Email input field  */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email address is required",
                  })}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600 font-semibold">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              {/* Password input field here  */}
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                      message:
                        "Password must have a Uppercase, a lowercase, a number and a special character.",
                    },
                  })}
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                {errors.password && (
                  <p className="text-red-600 font-semibold">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              {/* image field */}
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text font-semibold">Image</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: "Image is required" })}
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
                {errors.image && (
                  <p className="text-red-600">{errors.image?.message}</p>
                )}
              </div>
              <input
                className="btn btn-active btn-accent w-full my-2 text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-accent-focus duration-300"
                value="Register"
                type="submit"
              />
            </form>
            {/* React form hook ends here  */}
            <p className="text-sm">
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                Please login here
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={googleSignIn}
              className="btn btn-outline btn-secondary w-full font-bold"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
