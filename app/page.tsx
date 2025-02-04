import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <header className="h-16 flex justify-between items-center px-8">
        <h1 className="text-4xl">hexnode</h1>
        <button className="text-white bg-red-700 px-4 text-center uppercase rounded h-11">14 day free trial</button>
      </header>
      <main className="-h-16">
        <section className="p-[90px_0_30px] xl:p-[120px_0_0px] bg-[#020A19]">
          <div className="w-[88%] max-w-[1300px] mx-auto">
            <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between">
              <div className=" flex flex-col max-w-full sm:max-w-[550px] xl:max-w-[498px] order-2 xl:order-1">
                <div className="mb-[20px] md:mb-[40px]">
                  <h1 className="text-[#FFFFFF] text-[34px] leading-[44px] text-center lg:text-[42px] lg:leading-[53px] xl:text-left font-bold antialiased">
                    Turn your devices into kiosks in a few minutes with Hexnode
                    UEM
                  </h1>
                </div>
                <div className="flex gap-2 h-14">
                  <div className="">
                    <input
                      type="text"
                      className="h-full w-72 px-4 rounded"
                    />
                  </div>
                  <button className="text-white bg-red-700 px-4 text-center uppercase rounded">get started now</button>
                </div>
              </div>
              <div className="w-full max-w-full md:max-w-[597px] order-1 xl:order-2">
                <div className="w-full max-w-full md:max-w-[597px]  max-[420px]:max-h-[258px] max-[420px]:mb-[40px]">
                  <Image
                    src={"/hexnode-kiosk.webp"}
                    alt="hexnode-kiosk"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <div>
            IDC Hexnode is listed as a leader and a major player in IDC
            MarketScape UEM Vendors Assessment Reports 2024.
          </div>
          <div>
            Gartner Hexnode was recognized in the 2023 Gartner® Market Guide for
            Unified Endpoint Management Tools.
          </div>
          <div>
            Forrester Forrester includes Hexnode as a Notable vendor in The
            Unified Endpoint Management Landscape, Q3 2023.
          </div>
        </div>
      </main>
    </div>
  );
}
