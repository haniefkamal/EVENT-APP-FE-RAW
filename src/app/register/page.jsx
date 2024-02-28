/** @format */
import Image from "next/image";
import React from "react";
import logoevent from "/Users/haniefkamal/Documents/Hanief's/Coding/JCWD 2604/Minipro/fre/tix/src/assets/img/event.png";

function RegisterPage() {
  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen 
       text-sm p-3 bg-[#F2CD5C]"
      >
        <div className="flex flex-col w-[320px]">
          <Image className="max-w-xs w-full mb-5" src={logoevent} alt="" />

          <h1 className="text-3xl font-semibold">Make new account</h1>
          <p className=" text-xs">
            Be a part of marvelous event around Indonesia
          </p>

          <div className=" font-bold mt-5">First Name</div>
          <input
            className="drop-shadow-md p-2 bg-white rounded-lg focus:outline-none focus:border-[#4F46E5] focus:ring-[#4F46E5] focus:ring-2"
            id="first_name"
          ></input>
          {/* <div className=" my-1 text-red-500">{formik.errors.last_name}</div> */}

          <div className=" font-bold mt-5">Last Name</div>
          <input
            className="drop-shadow-md p-2 bg-white rounded-lg focus:outline-none focus:border-[#4F46E5] focus:ring-[#4F46E5] focus:ring-2"
            id="last_name"
          ></input>
          {/* <div className=" my-1 text-red-500">{formik.errors.last_name}</div> */}

          <div className=" font-bold mt-5">Email</div>
          <input
            type="email"
            className="drop-shadow-md p-2 bg-white rounded-lg focus:outline-none focus:border-[#4F46E5] focus:ring-[#4F46E5] focus:ring-2"
            id="email"
          ></input>
          {/* <div className=" my-1 text-red-500">{formik.errors.email}</div> */}

          <div className=" font-bold mt-5">Password</div>
          <input
            type="password"
            className="drop-shadow-md p-2 bg-white rounded-lg focus:outline-none focus:border-[#4F46E5] focus:ring-[#4F46E5] focus:ring-2"
            id="password"
          ></input>
          {/* <div className=" my-1 text-red-500">{formik.errors.password}</div> */}

          <div className=" font-bold mt-5">Gender</div>
          <select className="drop-shadow-md p-2 bg-white rounded-lg  focus:outline-none focus:border-[#4F46E5] focus:ring-[#4F46E5] focus:ring-2">
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
          </select>

          <div className=" font-bold mt-5">Referral Code</div>
          <input
            className="drop-shadow-md p-2 bg-white rounded-lg focus:outline-none focus:border-[#4F46E5] focus:ring-[#4F46E5] focus:ring-2"
            id="last_name"
          ></input>
          {/* <div className=" my-1 text-red-500">{formik.errors.gender}</div> */}

          <p className=" mt-5 text-xs">
            By clicking Sign Up, you are agree to our terms of service, privacy
            policy, and cookies policy.
          </p>
          <div className=" mt-5 text-xs ">
            Already have an account?{" "}
            <a href="/auth/login" className="text-[#4F46E5] font-bold">
              Login
            </a>
          </div>
          <button
            className={` rounded-lg mt-1 text-[#F2CD5C] bg-black h-12 font-bold hover:bg-zinc-700`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
export default RegisterPage;
