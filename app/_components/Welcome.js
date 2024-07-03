import React from "react";
import Image from "next/image";
function Welcome() {
  return (
    <div className="relative w-full h-[460px]">
      <Image src="/welcome.png" alt="Sample Image" fill />

      <div className="absolute z-10 flex items-center justify-center w-full h-full mt-32">
        <div className="bg-white w-1/2 h-2/3">
          <div className="flex mx-5 my-5 ml-5 gap-5">
            <div className="w-[1520px] h-[250px]">
              <img
                src="/welcome2.png"
                alt="Sample Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-black text-xl">Welcome</h1>
              <br></br>
              <div className="overflow-y-auto h-36 pr-2">
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
              </div>
              <button className="text-black mt-10">Join Our Platform</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

