"use client"

import { Workflow } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl"></div>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-6 py-16 md:flex-row md:items-start md:justify-between md:gap-12 md:py-20 backdrop-blur-sm saturate-150 bg-gradient-radial from-primary/10 via-primary/5 to-background/50 border border-primary/20 transition-all duration-300">
        <div className="flex flex-col items-center md:items-start">
          <a href="/" className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-2xl font-extrabold text-primary-foreground shadow-md">
             <Workflow />
            </span>
            <span className="text-primary text-xl font-semibold tracking-tight">
              ErgonTech
            </span>
          </a>
          <p className="mb-6 max-w-xs text-center text-sm text-foreground md:text-left">
            ErgonTech creates custom software solutions, stunning designs and powerful automations to transform your business operations and drive growth.
          </p>
          
        </div>
        <nav className="flex w-full flex-col gap-14 text-center md:w-auto md:flex-row md:justify-end md:text-left">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-foreground/70 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-foreground/70 hover:text-primary transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Get Started
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Book a Call
                </a>
              </li>
             
            </ul>
          </div>
        </nav>
      </div>
      <div className="relative z-10 mt-10 pb-8 text-center text-xs text-foreground">
                    <span>&copy; 2025 ErgonTech. All rights reserved.</span>
      </div>
    </footer>
  );
}
