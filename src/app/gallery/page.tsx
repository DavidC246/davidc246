'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/Navbar';
import Gallery from '@/components/Gallery';


export default function HomePage() {
  useLenis();

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });

  const textHeroRef = useRef(null);
  const isTextHeroInView = useInView(textHeroRef, { once: true, margin: '-100px' });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Global Navbar - always on top */}
      <div
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
          scrolled
            ? 'bg-black text-white shadow-md'
            : 'bg-transparent text-white'
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Section */}
    <Gallery />


    </>
  );
}
