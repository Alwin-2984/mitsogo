'use client';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function PrevArrow(props: any) {
  const { onClick, currentSlide } = props;
  const isDisabled = currentSlide === 0;

  return (
    <button
      className={`bottom-[-80px] absolute leading-[0px] left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF] lg:bottom-[50%] cursor-pointer group
        translate-x-[-62px] lg:translate-x-[-50%] lg:translate-y-[50%] lg:left-[-60px]
        ${isDisabled ? 'cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <IoIosArrowBack
        size={20}
        className={`mx-auto ${
          isDisabled ? 'opacity-25' : 'opacity-75 group-hover:opacity-100'
        }`}
      />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick, slideCount, currentSlide } = props;
  const isDisabled = currentSlide === slideCount - 1;

  return (
    <button
      className={`bottom-[-80px] absolute leading-[0px] left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF] lg:bottom-[50%] group 
        translate-x-[8px] lg:translate-x-[50%] lg:translate-y-[50%] lg:left-[unset] lg:right-[-60px]
        ${isDisabled ? 'cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <IoIosArrowForward
        size={20}
        className={`mx-auto ${
          isDisabled ? 'opacity-25' : 'opacity-75 group-hover:opacity-100'
        }`}
      />
    </button>
  );
}

const slidesData = [
  {
    name: 'Justin Modrak',
    role: 'Technology Coordinator',
    company: 'East Troy Community School District',
    quote: `"Hexnode is of great value. Works great with Android and iOS!"`,
    imageUrl:
      'https://static.hexnode.com/v2/assets/img/customer-images/justin-modrak.png',
  },
  {
    name: 'Dalibor Kruljac',
    role: '',
    company: 'KAMELEYA LTD',
    quote: `"Most complete MDM solution I found, and I tested many of them, including major names"`,
    imageUrl:
      'https://static.hexnode.com/v2/assets/img/customer-images/dalibor-kruljac.png',
  },
  {
    name: 'Chris Robinson',
    role: 'Executive Account Manager, NCS',
    company: '',
    quote: `"It seemed to be in-line with everything we were looking at."`,
    imageUrl:
      'https://static.hexnode.com/v2/assets/img/customer-images/chris-robinson.png',
  },
];

export default function WhyChooseHexnode() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: (
      <NextArrow slideCount={slidesData.length} currentSlide={undefined} />
    ),
  };

  return (
    <section className="pb-[30px] pt-[60px] lg:pt-[120px] md:pb-[60px] bg-[#F7F7F7] relative">
      <div
        id="customers"
        className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0"
      />
      <div className="w-[88%] mx-auto max-w-[1300px]">
        <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-0 md:pb-[20px]">
          Why should you choose Hexnode?
        </h2>

        <div className="max-w-[280px] sm:max-w-[400px] md:max-w-[960px] lg:max-w-[780px] xl:max-w-[960px] pt-[40px] pb-[80px] relative mx-auto lg:pb-0">
          <Slider {...settings}>
            {slidesData.map((slide, index) => (
              <div key={index} className="px-0">
                <div className="flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group">
                  <div className="max-h-[400px] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[320px] lg:h-[320px] relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden">
                    <Image
                      alt={`${slide.name} image`}
                      src={slide.imageUrl}
                      className="object-cover align-middle w-full h-full"
                      width={320}
                      height={320}
                    />
                  </div>
                  <div className="max-w-[640px] bg-[#ffffff] flex justify-center flex-col grow md:min-h-[310px]">
                    <div className="md:max-h-[125px] md:overflow-scroll px-[20px] md:pl-[60px] md:pr-[55px] pt-[20px] pb-[25px] md:py-0 md:mt-[40px] md:mb-[20px] cusreviewslider_hide-scrollbar__lQqUC">
                      <h4 className="text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[32px] text-[#020a19] font-bold text-center md:text-left antialiased">
                        {slide.quote}
                      </h4>
                    </div>
                    <div className="px-[20px] py-[20px] md:pl-[60px] md:pr-[55px] md:py-0 flex flex-col justify-center items-center md:min-h-[120px]">
                      <span className="h-[2px] w-full bg-[#F7F7F7] relative top-[-20px] rounded-[5px]" />
                      <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold">
                        {slide.name}
                      </p>
                      {slide.role && (
                        <small className="text-center md:text-left w-full mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
                          {slide.role}
                        </small>
                      )}
                      {slide.company && (
                        <small className="text-center mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
                          {slide.company}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
