'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'; // example icons

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleScroll() {
      const scrolled = window.scrollY > 0;
      setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onMouseEnterHandler = () => {
    if (typeof window !== 'undefined' && window.scrollY === 0) {
      setIsScrolled(true);
    }
  };

  const onMouseLeaveHandler = () => {
    if (typeof window !== 'undefined' && window.scrollY === 0) {
      setIsScrolled(false);
    }
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header
      className={`w-full z-[102] left-0 transition-all
        ${
          isScrolled
            ? 'fixed top-0 bg-white header-fixed nav-fixed-top'
            : 'absolute top-0 text-white'
        }
      `}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="w-[88%] mx-auto md:max-w-[1300px] flex items-center justify-between h-16">
        <Image
          src={isScrolled ? '/assets/logoBlack.png' : '/assets/logoWhite.png'}
          alt="logo"
          width={130}
          height={60}
        />

        <button
          className="
            hidden
            sm:inline-block
            text-white
            bg-red-700
            px-4
            text-center
            uppercase
            rounded
            h-11
          "
        >
          14 Day Free Trial
        </button>

        <button
          className="
            sm:hidden
            bg-transparent
            text-current
            p-2
            rounded
            focus:outline-none
          "
          onClick={openDrawer}
        >
          <HiOutlineMenuAlt3 size={28} />
        </button>
      </div>

      <div
        className={`
          fixed
          top-0
          right-0
          w-full
          sm:w-[320px]
          h-screen
          bg-white
          shadow-lg
          transition-transform
          duration-300
          z-[200]
          flex
          flex-col
          px-4
          py-4
          ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
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

        <button
          className="
            text-white
            bg-red-700
            px-4
            text-center
            uppercase
            rounded
            h-11
            w-full
          "
        >
          14 DAY FREE TRIAL
        </button>

        <div className="mt-4 text-center">
          <a href="/login" className="text-[#020a19] hover:underline">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
