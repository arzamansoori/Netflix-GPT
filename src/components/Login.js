import React from "react";
import Header from "./Header";
import { bg_url } from "../utils/images";

const Login = () => {
  return (
    <div className=" ">
      <Header />
      <div className="flex flex-col items-center">
      <div className="absolute">
        <img src={bg_url} alt="backgoundImage" />
      </div>
      <div className="relative grid h-screen place-items-center">
      <form className="flex flex-col items-start justify-center bg-opacity-50 bg-black py-[48px] px-[68px]">
      <div>
        <h1 className="font-bold text-white text-4xl my-6">Sign In</h1>
        </div>
        <input type="text" placeholder="Email Address" className="p-3 px-5 my-4 text-lg text-inherit border-inherit border rounded-md bg-black bg-opacity-70" />
        <input type="password" placeholder="Password" className="p-3 px-5 my-2 text-lg text-inherit border-inherit border rounded-md bg-black bg-opacity-70" />
        <button className="p-2 my-2 bg-red-600 rounded-md w-[100%]">Submit</button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
