import Image from 'next/image';
import React from 'react';

const ExtraFeatureBanner = () => {
  return (
    <div className="bg-[#1A1C2B] md:py-[30px]">
      <div className="w-[88%] max-w-[1300px] mx-auto">
        <div className="flex flex-col max-md:items-center md:flex-row  justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px]">
          <a className="max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] flex flex-col gap-4">
            <div className="flex flex-col items-center md:items-baseline">
              <Image
                src="/images/idc.webp"
                alt="forrester"
                width={82}
                height={25}
              />
            </div>
            <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">
              IDC Hexnode is listed as a leader and a major player in IDC
              MarketScape UEM Vendors Assessment Reports 2024.
            </p>
          </a>
          <div className="w-[107px] md:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden" />
          <a className="max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] flex flex-col gap-4">
            <div className="flex flex-col items-center md:items-baseline">
              <Image
                src="/images/gartner.webp"
                alt="forrester"
                width={110}
                height={25}
              />
            </div>
            <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">
              Gartner Hexnode was recognized in the 2023 Gartner® Market Guide
              for Unified Endpoint Management Tools.
            </p>
          </a>
          <div className="w-[107px] md:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden" />
          <a className="max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] flex flex-col gap-4">
            <div className="flex flex-col items-center md:items-baseline">
              <Image
                src="/images/forrester.webp"
                alt="forrester"
                width={156}
                height={25}
              />
            </div>
            <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">
              Forrester Forrester includes Hexnode as a Notable vendor in The
              Unified Endpoint Management Landscape, Q3 2023.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExtraFeatureBanner;
