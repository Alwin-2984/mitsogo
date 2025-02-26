'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { tabsData } from '../dummy-data/tabData';

export default function KioskTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsRef = useRef<HTMLLIElement[]>([]);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  useEffect(() => {
    const current = tabsRef.current[activeTab];
    if (current) {
      setIndicatorLeft(current.offsetLeft);
      setIndicatorWidth(current.clientWidth);
    }
  }, [activeTab]);

  const handleTabClick = (idx: number) => {
    if (activeTab === idx) {
      setActiveTab(-1);
    } else {
      setActiveTab(idx);
    }
  };

  return (
    <div className="mx-auto max-w-[1300px] w-[88%] py-20">
      <h2 className="text-center mx-auto text-darkBlue text-[28px] leading-[1.25] font-[700] antialiased sm:text-[36px] max-w-[900px]">
        Specific kiosk modes for unique use cases
      </h2>

      <div className="pt-[40px] sm:pt-[60px]">
        <div className="flex flex-col sm:hidden">
          {tabsData.map((tab, idx) => (
            <div key={idx} className="border rounded-md">
              <button
                onClick={() => handleTabClick(idx)}
                className={`
                  flex w-full justify-between items-center px-4 py-4 rounded-t-md
                  ${
                    activeTab === idx
                      ? 'bg-darkBlue text-white'
                      : 'bg-white text-darkBlue/50'
                  }
                `}
              >
                <span className="w-full text-left text-[18px] sm:text-[20px] leading-[26px] font-bold  cursor-pointer flex items-center justify-between">
                  {tab.label}
                </span>
                <span
                  className={`transition-transform ${
                    activeTab === idx ? 'rotate-180' : ''
                  }`}
                >
                  <BsChevronDown size={18} />
                </span>
              </button>

              {activeTab === idx && (
                <div className="p-4 bg-gray-50">
                  <h3 className="text-darkBlue font-bold text-[20px] leading-[26px] pb-2">
                    {tab.heading}
                  </h3>
                  <ul>
                    {tab.description.map((point, i) => (
                      <li key={i} className="mb-2 flex items-start">
                        <span className="mr-2 text-[#60c458]">✔</span>
                        <p className="text-[16px] text-[#333333]">{point}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Image
                      alt={tab.label}
                      loading="lazy"
                      width={570}
                      height={387}
                      src={tab.imageUrl}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden sm:block">
          <div className="flex bg-white justify-center relative">
            <div className="w-full relative border border-graySecondary rounded-t-[4px] overflow-hidden">
              <div className="w-full scroll-smooth overflow-x-auto relative inline-block">
                <ul className="relative flex duration-700 ease-in justify-between items-center whitespace-nowrap cursor-pointer">
                  <div
                    className="absolute rounded top-0 left-0 h-full bg-darkBlue z-[100] transition-all duration-700"
                    style={{
                      transform: `translateX(${indicatorLeft}px)`,
                      width: indicatorWidth,
                    }}
                  />
                  {tabsData.map((tab, idx) => (
                    <li
                      key={idx}
                      ref={(el) => {
                        if (el) tabsRef.current[idx] = el;
                      }}
                      onClick={() => setActiveTab(idx)}
                      className={`
                        flex-1 min-h-[80px] w-full px-[30px] relative text-center 
                        whitespace-normal transition-all duration-700 ease-in
                        before:content-[''] before:absolute before:left-0 before:w-[2px] 
                        before:h-full before:z-10 before:bg-graySecondary
                      `}
                      style={{ cursor: 'pointer' }}
                    >
                      <p
                        className={`
                          relative z-[101] p-[26px_0] max-w-[240px] h-[80px]
                          w-full flex justify-center items-center 
                          text-[22px] font-[600] leading-[24px]
                          desktop-tab-text
                          ${
                            activeTab === idx
                              ? 'desktop-tab-text-active'
                              : 'desktop-tab-text-default'
                          }
                        `}
                      >
                        {tab.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-[40px] bg-graySecondary overflow-hidden">
            {activeTab >= 0 && activeTab < tabsData.length && (
              <div
                key={activeTab}
                className="fade-in lg:flex-row justify-between flex flex-col-reverse"
              >
                <div className="mb-[20px] lg:mb-0 flex-1 text-left max-w-[760px] sm:mx-auto lg:pr-[40px]">
                  <h3 className="text-darkBlue font-bold text-[20px] leading-[26px] antialiased max-w-[670px] pb-[15px] lg:pb-[40px] sm:text-[28px] sm:leading-[40px]">
                    {tabsData[activeTab].heading}
                  </h3>
                  <ul>
                    {tabsData[activeTab].description.map((point, i) => (
                      <li
                        key={i}
                        className="relative mb-[10px] lg:mb-[25px] last:mb-0 pl-8"
                      >
                        <span className="absolute left-0 text-[#60c458]">
                          ✔
                        </span>
                        <p className="text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333]">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="group w-full max-sm:h-[210px] max-w-[308px] flex-1 max-sm:mt-[15px] mb-[20px] lg:mb-0 sm:max-w-[460px]">
                  <div className="rounded-[10px] overflow-hidden">
                    <figure className="relative max-w-[100%] w-auto align-middle max-sm:h-[220px]">
                      <Image
                        alt={tabsData[activeTab].label}
                        loading="lazy"
                        width={570}
                        height={387}
                        src={tabsData[activeTab].imageUrl}
                        className="block w-full h-auto"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Inline CSS for fade-in animation */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.7s ease forwards;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media (min-width: 640px) {
          .desktop-tab-text {
            transition: color 0.5s 0.3s;
          }
          .desktop-tab-text-active {
            color: #fff;
          }
          .desktop-tab-text-default {
            color: rgba(2, 10, 25, 0.5);
          }
        }
      `}</style>
    </div>
  );
}
