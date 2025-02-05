'use client';
import Image from 'next/image';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

export const tabsData = [
  {
    label: 'Single App Kiosk',
    heading: 'Powerful Single-App Kiosk solutions for enhanced control',
    description: [
      'Provision the devices to run one specialized application...',
      'Customize the device settings to cater to a specific use-case each time...',
    ],
    imageUrl: '/images/tabimages/single-app-kios-image.jpg',
  },
  {
    label: 'Multi-App Kiosk',
    heading: 'Multi-App Kiosk solutions for flexible usage',
    description: [
      'Allow multiple applications to run in kiosk mode...',
      'Seamlessly toggle between authorized apps...',
    ],
    imageUrl: '/images/tabimages/multi-app-kiosk-image.webp',
  },
  {
    label: 'Web-based Kiosk',
    heading: 'Web-based Kiosk Mode for secure browsing',
    description: [
      'Lock devices to a specific website or web app...',
      'Prevent access to unauthorized URLs...',
    ],
    imageUrl: '/images/tabimages/single-app-kios-image.jpg',
  },
  {
    label: 'Digital Signages',
    heading: 'Robust Digital Signage Kiosk',
    description: [
      'Display dynamic content securely and continuously...',
      'Remotely manage signage content...',
    ],
    imageUrl: '/images/tabimages/web-based-kiosk-image.webp',
  },
  {
    label: 'ASAM Kiosk',
    heading: 'ASAM Kiosk for specialized deployments',
    description: [
      'Enable advanced kiosk functionalities...',
      'Implement tight access control for sensitive apps...',
    ],
    imageUrl: '/images/tabimages/asam-kiosk-image.webp',
  },
];

export default function KioskTabs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (idx: number) => {
    if (activeTab === idx) {
      setActiveTab(-1);
    } else {
      setActiveTab(idx);
    }
  };

  return (
    <div className="mx-auto max-w-[1300px] w-[88%] py-20">
      <h2 className="text-center mx-auto text-[#020a19] text-[28px] leading-[1.25] font-[700] antialiased sm:text-[36px] max-w-[900px]">
        Specific kiosk modes for unique use cases
      </h2>

      <div className="pt-[40px] sm:pt-[60px]">
        {/* MOBILE Accordion (visible below sm) */}
        <div className="flex flex-col sm:hidden">
          {tabsData.map((tab, idx) => (
            <div key={idx} className="border rounded-md">
              <button
                onClick={() => handleTabClick(idx)}
                className={`flex w-full justify-between items-center px-4 py-4 
                  ${
                    activeTab === idx
                      ? 'bg-[#020a19] text-white'
                      : 'bg-white text-gray-700'
                  }
                `}
              >
                <span className="w-full text-left text-[18px] sm:text-[20px] leading-[26px] font-bold  text-[#020a19]/50  cursor-pointer flex items-center justify-between">
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
                  <h3 className="text-[#020A19] font-bold text-[20px] leading-[26px] pb-2">
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

        {/* DESKTOP Tabs (hidden below sm) */}
        <div className="hidden sm:block">
          <div className="flex bg-white justify-center relative">
            <div className="w-full relative border-[1px] border-[#f7f7f7] rounded-t-[4px] overflow-hidden">
              <div className="w-full scroll-smooth overflow-x-auto relative inline-block">
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
                        {tab.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-[40px] bg-[#f7f7f7] overflow-hidden">
            {activeTab >= 0 && (
              <div className="lg:flex-row justify-between flex flex-col-reverse">
                <div className="mb-[20px] lg:mb-0 flex-1 text-left max-w-[760px] sm:mx-auto lg:pr-[40px]">
                  <h3 className="text-[#020A19] font-bold text-[20px] leading-[26px] antialiased max-w-[670px] pb-[15px] lg:pb-[40px] sm:text-[28px] sm:leading-[40px]">
                    {tabsData[activeTab].heading}
                  </h3>
                  <ul>
                    {tabsData[activeTab].description.map((point, i) => (
                      <li
                        key={i}
                        className="relative mb-[10px] lg:mb-[25px] last:mb-0 pl-8"
                      >
                        <span className="absolute left-0  text-[#60c458]">
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
    </div>
  );
}
