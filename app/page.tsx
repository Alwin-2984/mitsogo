import KioskAccordionSection from './components/accordion';
import ExtraFeatureBanner from './components/extraFeatureBanner';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import KioskTabs from './components/kioskTabs';
import LogosSlider from './components/logoSlider';
import PlatformsSupported from './components/platformSuport';
import SignupBanner from './components/signupBanner';
import WhyChooseHexnode from './components/whyChooseHexnodeSlider';

export default function Home() {
  return (
    <div className="h-full relative">
      <Header />
      <main>
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
