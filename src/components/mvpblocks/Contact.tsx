'use client';

import type React from 'react';
import { useState } from 'react';
import { ArrowRight, Sparkles, Calendar, Workflow } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Particles } from '@/components/ui/particles';
import { Spotlight } from '@/components/ui/spotlight';

import { Bricolage_Grotesque } from 'next/font/google';

const brico = Bricolage_Grotesque({
  subsets: ['latin'],
});

export function Contact() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleScheduleCall = () => {
    window.open('https://cal.com/matheus-lima/15min', '_blank');
  };

  return (
    <main id="contact" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden xl:h-screen">
      {/* Background lighting effects similar to footer */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-primary/15 blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/3 h-64 w-64 rounded-full bg-primary/15 blur-2xl"></div>
      </div>

      <Particles
        className="absolute inset-0 z-10"
        quantity={150}
        ease={50}
        size={0.8}
        refresh
        color="#ffffff"
      />

      <div className="relative z-20 mx-auto max-w-2xl px-4 py-16 text-center md:py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-gradient-to-r from-primary/15 to-primary/5 px-4 py-2 backdrop-blur-sm"
        >
          <Workflow /> 
          <span className="text-sm font-medium">ErgonTech</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`mb-4 cursor-crosshair text-4xl font-bold sm:text-7xl ${brico.className}`}
        >
          Ready to{' '}
          <span className="bg-primary bg-clip-text text-transparent dark:bg-gradient-to-b">
            Transform
          </span>{' '}
          Your Business?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12 mt-2 text-muted-foreground sm:text-lg"
        >
          Let's discuss how we can solve your biggest challenges with custom software,
          <br className="hidden sm:block" /> 
          stunning design, and powerful automation solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto flex flex-col gap-4"
        >
          <button
            onClick={handleScheduleCall}
            className="group relative overflow-hidden rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition-all duration-300  focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Schedule Free Consultation
              <Calendar className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </button>
          
          <p className="text-sm text-muted-foreground">
            15-minute call • No commitment • Free consultation
          </p>
        </motion.div>
      </div>

      <style jsx global>{`
        .glass {
          backdrop-filter: blur(8px) saturate(120%);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </main>
  );
}
