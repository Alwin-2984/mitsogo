'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import { HiOutlineX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showTrialHeader, setShowTrialHeader] = useState(false);
  const [showMainHeader, setShowMainHeader] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);

      const direction = currentScrollY > prevScrollY.current ? 'down' : 'up';
      prevScrollY.current = currentScrollY;

      if (currentScrollY < 600) {
        setShowTrialHeader(false);
        setShowMainHeader(true);
      } else {
        setShowTrialHeader(true);
        setShowMainHeader(direction === 'up');
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const childVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.header
          key="combined-header"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`w-full z-[50] left-0 fixed top-0 transition-all ${
            isScrolled ? 'bg-white shadow-md' : 'text-white'
          }`}
        >
          <motion.div layout transition={{ duration: 0.3 }}>
            <AnimatePresence mode="wait">
              {showMainHeader && (
                <motion.div
                  key="main-header-content"
                  variants={childVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3 }}
                  className="w-[88%] mx-auto md:max-w-[1300px] flex items-center justify-between h-16"
                >
                  <Image
                    src={
                      isScrolled
                        ? '/assets/logoBlack.png'
                        : '/assets/logoWhite.png'
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
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence mode="wait">
            {showTrialHeader && (
              <motion.div
                key="trial-header"
                variants={childVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
                className="w-full bg-white shadow-md flex justify-end py-2 pr-6 border-t"
              >
                <button className="bg-red-700 text-white text-base px-4 uppercase rounded h-11">
                  14 Day Free Trial
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </AnimatePresence>

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
