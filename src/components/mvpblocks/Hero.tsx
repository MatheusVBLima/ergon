'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {HeroVideoDialog} from '@/components/magicui/HeroVideoDialog';

export function Hero() {
  return (
          <section
        id="home"
        className="relative w-full overflow-hidden bg-background font-light text-white antialiased"
      >
      <div className="absolute right-0 top-0 h-1/2 w-1/2 bg-gradient-radial from-primary/15 via-primary/5 to-transparent" />
      <div className="absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100 bg-gradient-radial from-primary/15 via-primary/5 to-transparent" />

              <div className="container relative z-10 mx-auto max-w-2xl px-4 py-16 text-center md:max-w-4xl md:px-6 md:py-20 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-xs text-[#9b87f5]">
            DEVELOPMENT • DESIGN • AUTOMATION
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
            Transform your ideas into{' '}
            <span className="text-[#9b87f5]">digital solutions</span> that generate results
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
            We create custom software, designs that convert, and automations that save time. 
            Your next digital evolution starts here.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row">
            <Link
              href="#contact"
              className="neumorphic-button hover:shadow-[0_0_20px_rgba(155, 135, 245, 0.5)] relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-[#9b87f5]/30 sm:w-auto"
            >
              Schedule a Meeting
            </Link>
            <a
              href="#solutions"
              className="flex w-full items-center justify-center gap-2 text-white/70 transition-colors hover:text-white sm:w-auto"
            >
              <span>View Our Solutions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="relative flex h-40 w-full overflow-hidden md:h-64">
            <Image
              src="/earth.png"
              alt="Earth"
              width={884}
              height={876}
              className="absolute left-1/2 top-0 -z-10 mx-auto -translate-x-1/2 px-4 opacity-80"
            />
          </div>
        {/*  <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-lg shadow-[0_0_50px_rgba(155,135,245,0.2)]">
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={884}
              height={876}
              className="h-auto w-full rounded-lg border border-white/10"
            />
          </div>  */}
           <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </motion.div>
      </div>
    </section>
  );
}
