import React from 'react';

export default function SignupBanner() {
  return (
    <section className="bg-[#020a19] flex justify-center items-center md:h-[330px] py-[50px] md:py-0 relative">
      <div className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-0 h-0 m-0" />

      <div className="w-[88%] mx-auto md:max-w-[1300px]">
        <div className="w-full text-center max-w-[1000px] mx-auto">
          <h3 className="text-[30px] text-[#fff] font-bold leading-[38px] text-center mb-[20px] md:text-[42px] md:leading-[1.3]">
            Sign up and try Hexnode free for 14 days!
          </h3>
        </div>

        <div className="max-w-[580px] mx-auto">
          <div className="max-w-[527px] mx-auto">
            <form className="p-0 m-0">
              <div className="flex justify-between flex-col items-center md:flex-row">
                <div className="w-full max-w-[325px] md:mr-[8px]">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Work Email"
                    className="
                      text-[18px] leading-[24px]
                      w-full h-[53px] 
                      rounded-[3px] px-[10px]
                      shadow-none
                      transition-all duration-[0.3s] ease-in-out
                      placeholder:text-[#c6c6c6]
                    "
                  />
                </div>

                <div className="w-full max-w-[325px] mt-[15px] md:max-w-[195px] md:mt-0">
                  <button
                    type="button"
                    className="
                      text-[17px] leading-[24px] uppercase text-[#fff] font-normal
                      bg-[#dd0735] w-full h-[53px] border-0 flex justify-center items-center
                      rounded-[3px] 
                      transition-all ease-in-out duration-[0.25s] 
                      cursor-pointer hover:text-[#fff] hover:bg-[#bb022a]
                      focus:text-[#fff] focus:bg-[#bb022a]
                    "
                  >
                    GET STARTED
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="pt-[10px] relative">
            <p className="text-[17px] leading-[24px] text-center text-[#556575] font-medium m-0 pt-[10px]">
              No credit cards required.
              <a
                className="
                  text-[17px] leading-[24px] text-[#dd0735] font-medium 
                  whitespace-nowrap inline-block 
                  transition-all duration-[0.3s] ease-in-out
                  pr-[20px] pb-[0px] pl-[5px] 
                  relative
                  after:content-[''] after:w-[6px] after:h-[10px] after:absolute
                  after:right-[5px] after:top-[9px]
                  after:bg-[url('https://static.hexnode.com/img/home_page/images/icons/arrow-right.svg')]
                  after:bg-no-repeat
                  after:transition-all after:duration-[0.3s] after:ease-in-out
                "
                href="https://www.hexnode.com/mobile-device-management/request-demo/"
                target="_blank"
                rel="noreferrer"
              >
                Request a demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
