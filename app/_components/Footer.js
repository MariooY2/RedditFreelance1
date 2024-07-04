"use client";

import { useState } from "react";

function ProductValue() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-4xl">123</h1>
        <p className="text-2xl text-center">Some Product Value</p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-4xl">123</h1>
        <p className="text-2xl text-center">Some Product Value</p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-4xl">123</h1>
        <p className="text-2xl text-center">Some Product Value</p>
      </div>
    </div>
  );
}

function Footer() {
  const [faqq, setFaq] = useState(null);

  const toggleFaq = (index) => {
    setFaq(faqq === index ? null : index);
  };

  return (
    <>
      <div className="mt-12">
        <ProductValue />
        <div className="relative w-full lg:h-[60vw] sm:h-[80vw] h-[90vw]  mt-12">
          <img
            src="https://via.placeholder.com/850"
            alt="Descriptive Alt Text"
            className="absolute inset-0 w-full h-[30vw] object-cover" // Ensure image covers the whole container
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center ">
            <div className="bg-white opacity-95 p-5 lg:w-1/2 lg:h-1/2 w-2/3 h-2/3">
              <div className="flex flex-col lg:space-y-4  overflow-y-auto">
                <h1 className="lg:text-4xl text-2xl font-bold text-black">FAQ</h1>
                <div className="w-full  lg:h-1 h-[2px] bg-black"></div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-black  lg:text-2xl text-xl">Question 1</p>
                    <button
                      className="p-2 text-3xl"
                      onClick={() => toggleFaq(1)}
                    >
                      {faqq === 1 ? "-" : "+"}
                    </button>
                  </div>
                  {faqq === 1 && (
                    <p className="text-black mt-2 text-lg">
                      This is the answer to question 1.
                    </p>
                  )}
                </div>
                <div className="w-full  lg:h-1 h-[2px] bg-black"></div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-black lg:text-2xl text-xl">Question 2</p>
                    <button
                      className="p-2 text-3xl"
                      onClick={() => toggleFaq(2)}
                    >
                      {faqq === 2 ? "-" : "+"}
                    </button>
                  </div>
                  {faqq === 2 && (
                    <p className="text-black mt-2 text-lg">
                      This is the answer to question 2.
                    </p>
                  )}
                </div>
                <div className="w-full  lg:h-1 h-[2px] bg-black"></div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-black  lg:text-2xl text-xl">Question 3</p>
                    <button
                      className="p-2 text-3xl"
                      onClick={() => toggleFaq(3)}
                    >
                      {faqq === 3 ? "-" : "+"}
                    </button>
                  </div>
                  {faqq === 3 && (
                    <p className="text-black mt-2 text-lg">
                      This is the answer to question 3.
                    </p>
                  )}
                </div>
                <div className="w-full  lg:h-1 h-[2px] bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl mb-12 lg:mt-[-3em]">Some CTA Title</h1>
        <div className="w-2/3 text-xl mb-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
