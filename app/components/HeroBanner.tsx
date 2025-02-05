import Image from 'next/image';
import React from 'react';

export default function HeroBanner() {
  return (
    <section className="p-[90px_0_30px] xl:p-[120px_0_0px] bg-[#020A19]">
      <div className="w-[88%] max-w-[1300px] mx-auto">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between">
          {/* Left Column */}
          <div className="flex flex-col max-w-full sm:max-w-[550px] xl:max-w-[498px] order-2 xl:order-1">
            {/* Heading */}
            <div className="mb-[20px] md:mb-[40px]">
              <h1 className="text-[#FFFFFF] text-[34px] leading-[44px] text-center lg:text-[42px] lg:leading-[53px] xl:text-left font-bold antialiased">
                Turn your devices into kiosks in a few minutes with Hexnode UEM
              </h1>
            </div>

            {/* Email Form */}
            <form className="p-0 m-0">
              <div className="flex justify-between flex-col items-center sm:flex-row gap-2">
                {/* Input Wrapper */}
                <div className="w-full max-w-[325px] md:mr-[8px]">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Work Email"
                    className="
                      text-[18px] leading-[24px]
                      w-full h-[53px] 
                      rounded-[3px] px-[10px]
                      shadow-none
                      transition-all duration-[0.3s] ease-in-out
                      placeholder:text-[#c6c6c6]
                    "
                  />
                </div>

                {/* Button Wrapper */}
                <div className="w-full max-w-[325px] mt-[15px] md:max-w-[195px] md:mt-0">
                  <button
                    type="button"
                    className="
                      text-[17px] leading-[24px] uppercase text-[#fff] font-normal
                      bg-[#dd0735] w-full h-[53px] border-0 flex justify-center items-center
                      rounded-[3px] 
                      transition-all ease-in-out duration-[0.25s] 
                      cursor-pointer hover:text-[#fff] hover:bg-[#bb022a]
                      focus:text-[#fff] focus:bg-[#bb022a]
                    "
                  >
                    GET STARTED Now
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full max-w-full md:max-w-[597px] order-1 xl:order-2">
            <div className="w-full max-w-full md:max-w-[597px] max-[420px]:max-h-[258px] max-[420px]:mb-[40px]">
              <Image
                src="/hexnode-kiosk.webp" // or your actual path
                alt="Hexnode kiosk"
                width={597}
                height={585}
                className="w-full h-full object-cover max-[420px]:h-[258px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
