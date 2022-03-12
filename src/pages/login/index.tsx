import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "redux/user/user.actions";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (data.userName === "admin" && data.password === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({ userName: data.userName, isLoggedIn: true })
      );
      dispatch(setCurrentUser({ userName: data.userName, isLoggedIn: true }));
      reset();
      navigate("/");
    } else {
      alert("UserName or Password has wrong");
    }
  };

  return (
    <div className="w-2/3 mx-auto mt-32">
      <h4 className="font-bold text-lg mb-4 text-center">
        Sign in with your email and password
      </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("userName", {
              required: "Please Enter User Name",
            })}
            placeholder="user Name"
            className={`border  ${
              !!errors.userName ? "border-red-500" : "border-gray-200"
            } rounded-full w-full py-4 px-6 text-gray-500 leading-tight focus:outline-none shadow-md`}
          />
          <span className="h-5 block pl-6 text-xs text-red-700 mt-1 font-bold">
            {errors?.userName?.message}
          </span>
        </div>
        <div>
          <input
            type="password"
            {...register("password", {
              required: "Please Enter Your Password",
            })}
            placeholder="user Name"
            className={`border  ${
              !!errors.password ? "border-red-500" : "border-gray-200"
            } rounded-full w-full py-4 px-6 text-gray-500 leading-tight focus:outline-none shadow-md`}
          />
          <span className="h-5 block pl-6 text-xs text-red-700 mt-1 font-bold">
            {errors?.password?.message}
          </span>
        </div>
        <div className="text-center w-full flex justify-end">
          <button className="bg-indigo-500 text-white rounded-full p-2 px-6 hover:bg-indigo-400 focus:outline-none flex items-center justify-end ">
            <span>SIGN IN </span>
          </button>
        </div>
        <div className="flex text-sm">
          <span className="italic flex justify-start items-center">
            <span>*</span>username : admin
          </span>
          <span className="mx-2">-----</span>
          <span className="italic flex justify-start items-center">
            <span>*</span>password : admin
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
