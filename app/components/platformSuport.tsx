import Image from 'next/image';
import React from 'react';
import { platforms } from '../dummy-data/patformsComponentData';

export default function PlatformsSupported() {
  return (
    <section className="pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[120px] flex justify-center items-center text-center flex-col">
      <div className="mx-auto max-w-[1300px] w-[88%]">
        <h2 className="text-center mb-[40px] text-[#020a19] text-[32px] leading-[40px] font-[700] antialiased md:mb-[60px] sm:text-[40px] sm:leading-[1.3]">
          Platforms supported
        </h2>

        <div className="flex items-center flex-wrap">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className="block shrink-0 basis-1/2 md:basis-1/3 lg:basis-[calc(100%_/6)] rounded-[10px]
                         mb-[25px] sm:mb-[15px] px-[12px] 
                         max-xs:even:pr-0 max-xs:odd:pl-0"
            >
              <div
                className="flex items-center justify-center shrink-0 relative mx-auto 
                           max-w-[150px] h-[60px] sm:max-w-[190px] sm:h-[72px] 
                           rounded-[10px] platformLogoList_translate-transition-kit__A2GmB"
              >
                <Image
                  src={platform.imgSrc}
                  alt={platform.imgAlt}
                  loading="lazy"
                  width={190}
                  height={72}
                  style={{ color: 'transparent' }}
                  className="block w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
