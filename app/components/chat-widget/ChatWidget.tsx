'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import {
  FiBell,
  FiHome,
  FiMessageCircle,
  FiMessageSquare,
} from 'react-icons/fi';
import { GrDown } from 'react-icons/gr';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
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
    <div className="fixed bottom-6 right-6 flex gap-4 flex-col items-end z-50">
      {isOpen && (
        <motion.div
          ref={popupRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-96 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 flex flex-col"
        >
          <div className="bg-gradient-to-b h-40 from-blue-500 to-blue-400 text-white p-4 flex flex-col">
            <h3 className="text-xl font-semibold">hexnode</h3>
            <p className="text-lg font-medium mt-1">Good Day !</p>
            <p className="text-base">How can we help?</p>
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
              Apple unveiled its most restrictive security feature yet. What is
              it? Who is it meant for? Read all about it here.
            </p>
          </div>

          <div className="bg-white px-4 py-3 border rounded-lg m-4 flex flex-col shadow-sm">
            <Image
              src={'/assets/chat-popup-image.jpg'}
              alt="chat-popup-image.jpg"
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

          <div className="bg-white shadow-md py-3 flex justify-around border-t border-gray-200 rounded-b-2xl">
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
        </motion.div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        {isOpen ? <GrDown size={24} /> : <FiMessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;
