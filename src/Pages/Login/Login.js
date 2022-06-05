import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";
const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [token] = useToken(gUser || user);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // Go back to before login page
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(()=>{
    if(token){
      navigate(from, { replace: true });
    }
  },[token, from, navigate]);
  
  if(gLoading || loading){
      return <Loading></Loading>
  }
  const onSubmit = async (data) => {
      await signInWithEmailAndPassword(data.email, data.password);
      // await navigate(from, { replace: true });
  };
  const handleSignInWithGoogle = async() =>{
        await signInWithGoogle();
        // await navigate(from, { replace: true });
  }
  

  let signInError;

  if(error ||gError){
      signInError = <small className="text-red-500">{error?.message || gError?.message}</small>
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-primary text-center">Login</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3"
          >
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
                        message:"Email is required"
                    }
                  },
                  {
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "provide a valid email"
                    }
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
            
            {signInError}
            <input type="submit" value="Login" className="btn  w-full max-w-xs" />
          </form>
          <small>New to Saw Center? <Link to='/register' className="text-primary">Create a new account</Link></small>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline btn-primary"
            onClick={handleSignInWithGoogle}
          >
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
