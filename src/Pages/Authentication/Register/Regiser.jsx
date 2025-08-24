import React from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Regiser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {createUser} =useAuth()

  const onSubmit = (data) => {
    console.log(data);
    console.log(createUser)
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Register now!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", {required:true})}
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {required:true, minLength:6})}
              className="input"
              placeholder="Password"
            />
            {
              errors.password?.type === "required" && <p className="text-red-500"> password is required</p>
            }
            {
              errors.password?.type === "minLength" && <p className="text-red-500">Password must be 6 characters or longer</p> 
            }
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Regiser;
