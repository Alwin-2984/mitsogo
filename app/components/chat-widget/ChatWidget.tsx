'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import {
  FiBell,
  FiHome,
  FiMessageCircle,
  FiMessageSquare,
} from 'react-icons/fi';
import { GrDown } from 'react-icons/gr';

// I haven't given the ui design much thought because it's a paid service library.
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        requestAnimationFrame(() => setIsOpen(false));
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <motion.div
          ref={popupRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-20 right-6 max-sm:top-0 max-sm:left-0 max-sm:w-screen max-sm:h-full h-[80vh] z-[99] w-96 bg-gradient-to-b from-blue-800 via-blue-200 to-white
 shadow-xl rounded-2xl overflow-auto border border-gray-200 flex flex-col"
        >
          <div className="relative ">
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-7 right-7 text-white cursor-pointer sm:hidden"
            />
            <div className=" h-60 text-white p-4 flex flex-col justify-between">
              <Image
                src={'/assets/logoWhite.png'}
                alt="logo"
                width={130}
                height={60}
              />
              <span>
                <p className="text-lg font-medium mt-1">Good Day!</p>
                <p className="text-base">How can we help?</p>
              </span>
            </div>

            <div className="p-4">
              <button className="w-full flex justify-between items-center bg-white border rounded-lg shadow-md p-3 text-gray-800 font-medium hover:bg-gray-100">
                Send us a message <BiSend size={20} className="text-blue-500" />
              </button>
            </div>

            <div className="bg-white m-4 rounded-lg px-4 py-3 border">
              <h4 className="font-semibold text-gray-800 text-sm">
                Featured Article
              </h4>
              <p className="text-sm text-gray-600 mt-1 font-medium">
                What is Apple Lockdown Mode?
              </p>
              <p className="text-xs text-gray-500">
                Apple unveiled its most restrictive security feature yet. What
                is it? Who is it meant for? Read all about it here.
              </p>
            </div>

            <div className="bg-white px-4 py-3 border rounded-lg m-4 flex flex-col shadow-sm">
              <Image
                src={'/assets/chat-popup-image.jpg'}
                alt="chat-popup-image"
                width={300}
                height={150}
              />
              <div className="flex space-x-2 mb-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs font-semibold rounded-lg">
                  New feature
                </span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs font-semibold rounded-lg">
                  + 2 labels
                </span>
              </div>
              <h4 className="text-blue-500 font-semibold text-sm">
                Introducing Hexnode Gateway for Windows!
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                Hexnode Gateway app for Windows streamlines device migration,
                making it...
              </p>
            </div>

            <div className="sticky bottom-0 left-0 w-full bg-white shadow-md py-3 flex justify-around border-t border-gray-200 rounded-b-2xl">
              <button className="flex flex-col items-center text-blue-500">
                <FiHome size={20} />
                <span className="text-xs">Home</span>
              </button>
              <button className="flex flex-col items-center text-gray-500 relative">
                <FiMessageSquare size={20} />
                <span className="text-xs">Messages</span>
                <span className="absolute top-0 right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  1
                </span>
              </button>
              <button className="flex flex-col items-center text-gray-500">
                <FiBell size={20} />
                <span className="text-xs">News</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={`fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none ${
          isOpen && 'max-sm:hidden'
        }`}
      >
        {isOpen ? <GrDown size={24} /> : <FiMessageCircle size={24} />}
      </button>
    </>
  );
};

export default ChatWidget;
