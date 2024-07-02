import React from "react";
import Image from "next/image";
function Welcome() {
  return (
    <div className="relative w-full h-[400px]">
      <Image src="/welcome.png" alt="Sample Image" fill />

      <div className="absolute z-10 flex items-center justify-center w-full h-full mt-40">
        <div className="bg-white w-1/2 h-2/3">
          <div className="flex mx-5 my-5 ml-5 gap-5">
            <Image
              src="/welcome2.png"
              alt="Sample Image"
              width={253}
              height={135}
            />
            <div className="flex flex-col">
              <h1 className="text-black text-xl">Welcome</h1>
              <br></br>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </p>
              <button className="text-black mt-10">Join Our Platform</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
