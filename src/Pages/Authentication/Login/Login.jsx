import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../../../SocialLogin/SocialLogin";

const Login = () => {
  const { register, handleSubmit, formState :{errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email")}
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {
            errors.password?.type === "required" && <p className="text-red-500">Password is required</p>
          }
          {
            errors.password?.type === "minLength" && <p className="text-red-500">Password must be 6 charecter or more longer</p> 
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p><small>Don't have any account? <Link className="btn" to="/register">Register</Link></small></p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Login;
