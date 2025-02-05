'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export const tabsData = [
  {
    label: 'Single App Kiosk',
    heading: 'Powerful Single-App Kiosk solutions for enhanced control',
    description: [
      'Provision the devices to run one specialized application, with limited functionalities.',
      'Customize the device settings to cater to a specific use-case each time.',
      'Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.',
      'Empower your administrators with full control over the kiosk devices.',
    ],
    imageUrl: '/images/tabimages/single-app-kios-image.jpg',
  },
  {
    label: 'Multi-App Kiosk',
    heading: 'Multi-App Kiosk solutions for flexible usage',
    description: [
      'Allow multiple applications to run in kiosk mode.',
      'Seamlessly toggle between authorized apps without leaving the kiosk environment.',
      'Enjoy better app management and control across different user roles.',
    ],
    imageUrl: '/images/tabimages/multi-app-kiosk-image.webp',
  },
  {
    label: 'Web-based Kiosk',
    heading: 'Web-based Kiosk Mode for secure browsing',
    description: [
      'Lock devices to a specific website or web app.',
      'Prevent access to unauthorized URLs or sites.',
      'Ideal for public-facing browsing stations or info terminals.',
    ],
    imageUrl: '/images/tabimages/single-app-kios-image.jpg',
  },
  {
    label: 'Digital Signages',
    heading: 'Robust Digital Signage Kiosk',
    description: [
      'Display dynamic content securely and continuously.',
      'Remotely manage signage content in real time.',
      'Suitable for retail, corporate, and public spaces.',
    ],
    imageUrl: '/images/tabimages/web-based-kiosk-image.webp',
  },
  {
    label: 'ASAM Kiosk',
    heading: 'ASAM Kiosk for specialized deployments',
    description: [
      'Enable advanced kiosk functionalities tailored to your unique workflow.',
      'Implement tight access control for sensitive apps.',
      'Maximize device potential while retaining a secure environment.',
    ],
    imageUrl: '/images/tabimages/asam-kiosk-image.webp',
  },
];

export default function KioskTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto max-w-[1300px] w-[88%] py-20">
      <h2 className="text-center mx-auto text-[#020a19] text-[28px] leading-[1.25] font-[700] antialiased sm:text-[36px] max-w-[900px]">
        Specific kiosk modes for unique use cases
      </h2>

      <div className="pt-[40px] sm:pt-[60px]">
        <div className="flex justify-between w-full border-b rounded-[4px] flex-col m-0 sm:hidden overflow-hidden">
          {tabsData.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`w-full text-left px-4 py-2 
                ${
                  activeTab === idx
                    ? 'bg-[#020a19] text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop Tabs */}
        <div className="relative hidden sm:block">
          <div className="flex bg-white justify-center relative">
            <div className="w-full relative border-[1px] border-[#f7f7f7] rounded-t-[4px] overflow-hidden overflow-x-auto scroll-smooth">
              {/* Horizontal scroll container */}
              <div className="featuresTabSlider_hide-scrollbar__zyp_m w-full scroll-smooth overflow-x-auto relative inline-block">
                <ul className="flex duration-300 ease-in justify-between items-center whitespace-nowrap cursor-pointer">
                  {tabsData.map((tab, idx) => (
                    <li
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`flex-1 min-h-[80px] w-full px-[30px] relative text-center whitespace-normal 
                        transition-all duration-300 ease-in
                        before:content-[''] before:absolute before:left-0 before:w-[2px] before:h-full before:z-1 before:bg-[#f7f7f7]
                        ${
                          activeTab === idx
                            ? 'bg-[#020a19] before:opacity-0'
                            : ''
                        }
                      `}
                      style={{ cursor: 'pointer' }}
                    >
                      <p
                        className={`p-[26px_0] max-w-[240px] h-[80px] w-full flex justify-center items-center 
                          text-[22px] font-[600] leading-[24px] relative z-3
                          ${
                            activeTab === idx
                              ? 'text-white'
                              : 'text-[#020a19]/50'
                          }
                        `}
                      >
                        <span>{tab.label}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tab Content Area */}
          <div className="p-[40px] bg-[#f7f7f7] overflow-hidden">
            <div className="featuresTabSlider_animate-left__SPye6 lg:flex-row justify-between flex flex-col-reverse">
              {/* Text Block */}
              <div className="mb-[20px] lg:mb-0 flex-1 text-left max-w-[760px] sm:mx-auto lg:pr-[40px]">
                <h3 className="text-[#020A19] font-bold text-[20px] leading-[26px] antialiased max-w-[670px] pb-[15px] lg:pb-[40px] sm:text-[28px] sm:leading-[40px]">
                  {tabsData[activeTab].heading}
                </h3>
                <ul className="block">
                  {tabsData[activeTab].description.map((point, i) => (
                    <li
                      key={i}
                      className="relative mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      {/* Green check icon */}
                      <span className="absolute left-0 top-[8px] featuresTabSlider_single-list-center-icon__4k2Fq">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14.393"
                          height="10.111"
                        >
                          <path
                            fill="none"
                            stroke="#60c458"
                            strokeWidth="2"
                            d="M.697 4.107 5.45 8.718l8.247-8"
                          ></path>
                        </svg>
                      </span>
                      <p className="text-[16px] leading-[24px] sm:text-[18px] font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px]">
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
          </div>
        </div>
      </div>
    </div>
  );
}
