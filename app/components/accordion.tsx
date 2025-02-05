'use client';
import Image from 'next/image';
import React, { useState } from 'react';
// import { useMediaQuery } from 'react-responsive';

const accordionData = [
  {
    title: 'Effortless kiosk deployment & management',
    content: `Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.`,
    link: 'https://www.hexnode.com/mobile-device-management/cloud/signup/',
    linkText: 'Try for free',
    image: {
      src: '/images/accordian-images/effortless-kiosk-deployement-image.jpg',
      alt: 'Device in kiosk mode with Hexnode App pre-installed',
    },
  },
  {
    title: 'Customized interface for brand visibility',
    content: `Create a locked-down environment with a customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services, and key messages directly to users.`,
    link: 'https://www.hexnode.com/mobile-device-management/cloud/signup/',
    linkText: 'Try for free',
    image: {
      src: '/images/accordian-images/customized-interface-image.jpg',
      alt: 'A tablet with brand-focused kiosk interface',
    },
  },
  {
    title: 'What more can you do with Hexnode kiosk?',
    content: `Ensure compliance of your devices by remotely deploying the latest OS version while they remain in kiosk mode. Protect your data even if the device is lost or stolen with advanced remote-management features.`,
    link: 'https://www.hexnode.com/mobile-device-management/cloud/signup/',
    linkText: 'Try for free',
    image: {
      src: '/images/accordian-images/power-up-protection-image.jpg',
      alt: 'Devices in kiosk mode being managed remotely',
    },
  },
  {
    title: 'Secure and update your app ecosystem',
    content: `Streamline the deployment and management of apps on kiosk devices. Save time, ensure security, and improve efficiency using Hexnode’s silent app installation and update features.`,
    link: 'https://www.hexnode.com/mobile-device-management/cloud/signup/',
    linkText: 'Try for free',
    image: {
      src: '/images/accordian-images/secure-app-ecosystem.jpg',
      alt: 'Managing apps on kiosk devices',
    },
  },
  {
    title: 'Provide an easy-to-use interface for end-users',
    content: `Give end-users the power to control their devices without overwhelming them. Provide an intuitive interface so they can unlock the full potential of your devices hassle-free.`,
    link: 'https://www.hexnode.com/mobile-device-management/cloud/signup/',
    linkText: 'Try for free',
    image: {
      src: '/images/accordian-images/easy-to-use-interface-image.jpg',
      alt: 'A kiosk device with a simple, easy-to-use interface',
    },
  },
];

export default function KioskAccordionWithImages() {
  const [openIndex, setOpenIndex] = useState(0);
  //   const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const handleAccordionClick = (index: number) => {
    setOpenIndex(index);
  };

  const currentImage = openIndex >= 0 ? accordionData[openIndex].image : null;

  return (
    <div className="w-[88%] max-w-[1300px] mx-auto pb-[60px] lg:pb-[120px]">
      <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[20px] md:pb-[20px] max-w-[340px] sm:max-w-[800px] mx-auto">
        What additional possibilities does the Kiosk mode offer?
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between md:mt-[40px] transition-all duration-300 ease-out">
        <div className="max-sm:hidden md:w-1/2 md:max-w-[545px] max-h-[545px] relative mr-[20px] transition-all duration-300 ease-out mb-6 md:mb-0">
          {currentImage && (
            <div className="rounded-[10px] overflow-hidden transition-all duration-300 ease-out">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                className="block w-full max-h-[565px] object-contain"
                width={460}
                height={350}
              />
            </div>
          )}
        </div>

        <div className="md:w-1/2 lg:w-[60%] max-w-[725px] relative">
          {accordionData.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className="relative border-b border-[#F7F7F7] border-solid last:border-b-0 py-[20px] lg:py-[25px] first:pt-0 last:pb-0"
              >
                <h3
                  onClick={() => handleAccordionClick(index)}
                  className={`text-[#050607] cursor-pointer font-bold text-[24px] leading-[36px] lg:text-[26px] lg:leading-[40px] text-left ${
                    isOpen && 'pb-4 mb-4 border-b'
                  }`}
                >
                  {item.title}
                </h3>

                <div
                  className={`block relative overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? 'h-auto' : 'h-0'
                  }`}
                  style={{ height: isOpen ? 'auto' : '0px' }}
                >
                  {isOpen && (
                    <div>
                      <div className="hidden max-sm:block md:w-1/2 md:max-w-[545px] max-h-[545px] relative mr-[20px] transition-all duration-300 ease-out mb-6 md:mb-0">
                        {currentImage && (
                          <div className="rounded-[10px] overflow-hidden transition-all duration-300 ease-out">
                            <Image
                              src={currentImage.src}
                              alt={currentImage.alt}
                              className="block w-full max-h-[565px] object-contain"
                              width={460}
                              height={350}
                            />
                          </div>
                        )}
                      </div>
                      <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[20px]">
                        {item.content}
                      </p>
                      {item.link && (
                        <a
                          rel="noreferrer"
                          target="_blank"
                          className="group/tabLink inline-flex items-center justify-start mt-[10px]"
                          href={item.link}
                        >
                          <span className="uppercase text-[18px] leading-[23px] text-[#DD0735] font-semibold">
                            {item.linkText}
                          </span>
                          <div className="relative z-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="6.575"
                              height="11.737"
                              className="ml-[5px] translate-x-0 group-hover/tabLink:translate-x-[3px] transition-all duration-300 ease-out"
                            >
                              <path
                                fill="none"
                                stroke="#dd0735"
                                strokeLinecap="round"
                                d="m.707.707 5.161 5.161-5.161 5.161"
                              />
                            </svg>
                          </div>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
