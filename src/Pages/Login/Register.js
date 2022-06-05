import React, { useEffect } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user)
    const navigate = useNavigate();
    useEffect(()=>{
      if(token){
        navigate('/');
      }
    },[token]);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    
    if (loading) {
      return <Loading></Loading>;
    }




  const onSubmit = async (data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName:data.name});
  };


  let signUpError;
  if (error) {
    signUpError = <small className="text-red-500">{error?.message}</small>;
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-primary text-center">
            Sign Up
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3"
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register(
                  "email",
                  {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  },
                  {
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "provide a valid email",
                    },
                  }
                )}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register(
                  "password",
                  {
                    minLength: {
                      value: 6,
                      message: "Password should be 6 character or longer",
                    },
                  },
                  {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  }
                )}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signUpError}
            <input
              type="submit"
              value="Sign Up"
              className="btn  w-full max-w-xs"
            />
          </form>
          <small>
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Please login
            </Link>
          </small>
          {/* <div className="divider">OR</div>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => signInWithGoogle()}
          >
            Login With Google
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
