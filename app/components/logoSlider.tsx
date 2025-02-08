'use client';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { logos } from '../dummy-data/logoSliderData';

export default function LogosSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  return (
    <section className="pb-[60px] pt-[10px] lg:pb-[120px] md:pt-[20px] bg-graySecondary relative">
      <div className="w-[88%] mx-auto md:max-w-[1300px] relative">
        <div className="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute left-0 bg-gradient-to-r from-graySecondary via-graySecondary to-transparent z-[11]" />
        <div className="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute right-0 bg-gradient-to-l from-graySecondary via-graySecondary to-transparent z-[11]" />

        <Slider {...settings} className="relative z-[2]" arrows={false}>
          {logos.map((logo, idx) => (
            <figure
              key={idx}
              className="block max-w-[130px] sm:max-w-[200px] w-full"
              style={{ width: '100%', display: 'inline-block' }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                width={260}
                height={95}
                style={{ color: 'transparent' }}
              />
            </figure>
          ))}
        </Slider>
      </div>
    </section>
  );
}
