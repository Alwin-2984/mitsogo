'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { HiOutlineX } from 'react-icons/hi';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showTrialHeader, setShowTrialHeader] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleScroll() {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
      setShowTrialHeader(scrollY > 600);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {showTrialHeader ? null : (
        <header
          className={`w-full z-[50] left-0 transition-all ${
            isScrolled
              ? 'fixed top-0 bg-white shadow-md'
              : 'absolute top-0 text-white'
          }`}
        >
          <div className="w-[88%] mx-auto md:max-w-[1300px] flex items-center justify-between h-16">
            <Image
              src={
                isScrolled ? '/assets/logoBlack.png' : '/assets/logoWhite.png'
              }
              alt="logo"
              width={130}
              height={60}
            />

            <button className="hidden sm:inline-block text-white bg-red-700 px-4 text-center uppercase rounded h-11">
              14 Day Free Trial
            </button>

            <button
              className="sm:hidden bg-transparent text-current p-2 rounded focus:outline-none"
              onClick={openDrawer}
            >
              <FiMenu size={28} />
            </button>
          </div>
        </header>
      )}

      {showTrialHeader && (
        <div className="fixed sm:hidden top-0 left-0 w-full bg-white shadow-md z-[49] transition-all flex justify-end py-2 pr-6">
          <button className="bg-red-700 text-white text-base px-4 uppercase rounded h-11">
            14 Day Free Trial
          </button>
        </div>
      )}

      <div
        className={`fixed top-0 right-0 w-full sm:w-[320px] h-screen bg-white shadow-lg transition-transform duration-300 z-[200] flex flex-col px-4 py-4 ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-5">
          <span />
          <button
            onClick={closeDrawer}
            className="text-[#020a19] hover:text-red-700 transition-colors"
          >
            <HiOutlineX size={26} />
          </button>
        </div>

        <hr className="mb-6" />

        <button className="text-white bg-red-700 px-4 text-center uppercase rounded h-11 w-full">
          14 DAY FREE TRIAL
        </button>

        <div className="mt-4 text-center">
          <a href="/login" className="text-[#020a19] hover:underline">
            Login
          </a>
        </div>
      </div>
    </>
  );
}
