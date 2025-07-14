"use client"

import {
  Code,
  Zap,
  Paintbrush,
  Rocket,
  Book,
  PlusCircle,
} from 'lucide-react';

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Developer-Friendly',
    desc: 'Tailored for developers to create and iterate fast, with minimal overhead and maximum flexibility.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Automation Solutions',
    desc: 'Powerful automation workflows that eliminate repetitive tasks and streamline your business operations.',
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: 'Easily Customizable',
    desc: 'Every block is built to be editable. From layout to logic, style to structure—make it your own.',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Fast Delivery',
    desc: 'Rapid development and deployment to get your solutions to market quickly.',
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: 'Full Documentation',
    desc: 'Comprehensive documentation to understand every feature and maximize your development experience.',
  },
  {
    icon: <PlusCircle className="h-6 w-6" />,
    title: 'Scalable Solutions',
    desc: 'Built with scalability in mind, our solutions grow with your business needs.',
  },
];
export function Features() {
  return (
    <section id="features" className="relative">
              <div className="mx-auto max-w-screen-xl px-4 py-16 md:px-8 md:py-20">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
              Complete solutions for your business
            </h3>
            <p className="font-geist mt-3 text-foreground/60">
              From custom software development to stunning designs and powerful automations, 
              we deliver everything you need to grow your business digitally.
            </p>
          </div>
          <div className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px] bg-gradient-to-br from-primary/20 via-primary/26 to-primary/10"></div>
        </div>
        <hr className="mx-auto mt-5 h-px w-1/2 bg-foreground/30" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4 [box-shadow:0_-20px_80px_-20px_hsl(var(--primary)/0.18)_inset]"
              >
                <div className="w-fit transform-gpu rounded-full border p-4 text-primary [box-shadow:0_-20px_80px_-20px_hsl(var(--primary)/0.25)_inset] dark:[box-shadow:0_-20px_80px_-20px_hsl(var(--primary)/0.06)_inset]">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </section>
  );
}
