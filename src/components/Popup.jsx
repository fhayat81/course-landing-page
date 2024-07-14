import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ popUp, setPopUp }) => {
  return (
    <>
      {popUp && (
        <div>
          <div
            className="h-screen w-screen fixed top-0 left-0
            bg-black/50 z-50 backdrop-blur-sm"
          >
            <div
              className="fixed top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2 shadow-md bg-white
               rounded-md rounded-t-lg duration-200
                w-[300px] "
            >
              <div className="flex items-center justify-between bg-primary text-white p-2 rounded-t-md">
                <div>
                  <h1 className="text-2xl px-2 font-semibold">Sign Up</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setPopUp(false)}
                  />
                </div>
              </div>
              {/* form */}
              <div>
                <div className="mt-4 mx-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-full border
                        border-gray-300 px-2 py-1 mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-full border
                        border-gray-300 
                        px-2 py-1 mb-4"
                  />
                  <input
                    type="password"
                    placeholder="Password (atleast 8 characters)"
                    className="w-full rounded-full border
                        border-gray-300 
                        px-2 py-1 mb-4"
                  />
                  <input
                    type="password"
                    placeholder="Re-type password"
                    className="w-full rounded-full border
                        border-gray-300  px-2 py-1 mb-4"
                  />
                  <input
                    type="address"
                    placeholder="Address"
                    className="w-full rounded-full border
                        border-gray-300 
                        px-2 py-1 mb-4"
                  />
                  <div className="flex justify-center mb-2">
                    <button
                      onClick={() => alert("Service Unavailable")}
                      className="bg-primary hover:scale-110 duration-300
              text-white py-1 px-3 rounded-full w-[130px] text-lg"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
