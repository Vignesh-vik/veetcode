import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";

const authModalAtom = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/60"></div>
      <div className="w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center">
        <div className="relative w-full h-full mx-auto flex items-center justify-center">
          <div className="bg-white bg-gradient-to-br from-orange-400 to-slate-900 rounded-lg shadow relative w-full mx-6">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white"
              >
                <IoCloseSharp/>
              </button>
            </div>
            <ResetPassword/>
          </div>
        </div>
      </div>
    </>
  );
};

export default authModalAtom;
