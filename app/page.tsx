import Image from 'next/image';
import KioskTabs from './components/kioskTabs';
import KioskAccordionSection from './components/accordion';
import WhyChooseHexnode from './components/whyChooseHexnodeSlider';
import LogosSlider from './components/logoSlider';
import PlatformsSupported from './components/platformSuport';
import SignupBanner from './components/signupBanner';
import Footer from './components/Footer';
import ExtraFeatureBanner from './components/extraFeatureBanner';
import HeroBanner from './components/HeroBanner';

export default function Home() {
  return (
    <div className="h-full">
      <header className="h-16 flex justify-between items-center px-8">
        <h1 className="text-4xl">hexnode</h1>
        <button className="text-white bg-red-700 px-4 text-center uppercase rounded h-11">
          14 day free trial
        </button>
      </header>
      <main className="">
        <HeroBanner />

        <ExtraFeatureBanner />
        <KioskTabs />
        <KioskAccordionSection />
        <WhyChooseHexnode />
        <LogosSlider />
        <PlatformsSupported />
        <SignupBanner />
      </main>
      <Footer />
    </div>
  );
}
