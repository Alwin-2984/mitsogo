'use client';

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { accordionData } from '../dummy-data/accordionData';

export default function KioskAccordionWithImages() {
  const [openIndex, setOpenIndex] = useState(0);

  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [panelHeights, setPanelHeights] = useState<number[]>([]);

  useEffect(() => {
    const heights = panelRefs.current.map((panel) => panel?.scrollHeight || 0);
    setPanelHeights(heights);
  }, []);

  const handleAccordionClick = (index: number) => {
    setOpenIndex(index);
  };

  const currentImage = openIndex >= 0 ? accordionData[openIndex].image : null;

  return (
    <div className="w-[88%] max-w-[1300px] sm:h-[60rem]  mx-auto pb-[60px] lg:pb-[120px]">
      <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-darkBlue pb-[20px] md:pb-[20px] max-w-[340px] sm:max-w-[800px] mx-auto">
        What additional possibilities does the Kiosk mode offer?
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-between md:mt-[40px] transition-all duration-300 ease-out">
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
            const contentHeight = panelHeights[index] || 0;

            return (
              <div
                key={index}
                className="relative border-b border-graySecondary border-solid last:border-b-0 py-[20px] lg:py-[25px] first:pt-0 last:pb-0"
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
                  ref={(el) => {
                    if (el) panelRefs.current[index] = el;
                  }}
                  className={`overflow-hidden transition-[max-height] duration-300 ease-out`}
                  style={{
                    maxHeight: isOpen ? contentHeight : 0,
                  }}
                >
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
                        <span className="uppercase text-[18px] leading-[23px] text-linkTextRed font-semibold">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
