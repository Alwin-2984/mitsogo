'use client';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const logos = [
  {
    src: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg',
    alt: 'Marriott',
  },
  {
    src: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg',
    alt: 'Merck',
  },
  {
    src: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg',
    alt: 'Costco',
  },
  {
    src: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg',
    alt: 'SAIC',
  },
  {
    src: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg',
    alt: 'Hilton',
  },
  {
    src: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/group1-automotive.png',
    alt: 'Group 1 Automotive',
  },
  {
    src: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg',
    alt: "Lowe's",
  },
  {
    src: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg',
    alt: 'Polaris',
  },
  {
    src: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg',
    alt: 'Gorillas',
  },
  {
    src: 'https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg',
    alt: 'Wolt',
  },
];

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
    <section className="pb-[60px] pt-[10px] lg:pb-[120px] md:pt-[20px] bg-[#F7F7F7] relative">
      <div className="w-[88%] mx-auto md:max-w-[1300px] relative">
        <div className="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute left-0 bg-gradient-to-r from-[#F7F7F7] via-[#F7F7F7] to-transparent z-[11]" />
        <div className="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute right-0 bg-gradient-to-l from-[#F7F7F7] via-[#F7F7F7] to-transparent z-[11]" />

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
