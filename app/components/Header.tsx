'use client';
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full z-[102] left-0 transition-all
        ${
          isScrolled
            ? 'fixed top-0 bg-white header-fixed nav-fixed-top'
            : 'absolute top-0 text-white'
        }
      `}
    >
      <div className="w-[88%] mx-auto md:max-w-[1300px] flex items-center justify-between h-16">
        <h1 className="text-3xl">hexnode</h1>
        <button className="text-white bg-red-700 px-4 text-center uppercase rounded h-11">
          14 Day Free Trial
        </button>
      </div>
    </header>
  );
}
