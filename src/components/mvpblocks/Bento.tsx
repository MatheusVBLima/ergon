'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Code, DollarSign, FileText, Layers, Palette, Repeat2, Snail, Zap } from 'lucide-react';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  size = 'small',
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 25 } },
  };

  return (
    <motion.div
      variants={variants}
      className={cn(
        'group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-primary/10 bg-background px-6 pb-10 pt-6 shadow-md transition-all duration-500 hover:border-primary/30',
        className,
      )}
    >
      <div className="absolute -right-1/2 top-0 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#9b87f540_1px,transparent_1px),linear-gradient(to_bottom,#9b87f540_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="absolute bottom-3 right-1 scale-[6] text-primary/5 transition-all duration-700 group-hover:scale-[6.2] group-hover:text-primary/10">
        {icon}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shadow shadow-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-primary/20">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-primary/30 blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};

const items = [
  {
    title: 'Tired of outdated technology holding you back?',
    description:
      'You know your systems are slowing you down, but you\'re not sure where to start or how much it will cost to fix.',
    icon: <Code className="size-6" />,
    size: 'large' as const,
  },
  {
    title: 'Drowning in repetitive tasks?',
    description:
      'Every day feels the same - manually doing work that should be automated, wasting hours on things machines could handle.',
    icon: <Repeat2 className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Losing customers to poor design?',
    description: 'Your website looks unprofessional and customers are leaving before they even see what you offer.',
    icon: <Palette className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Struggling to keep up with growth?',
    description: "Success is overwhelming you - more customers means more problems, and your systems can't handle the load.",
    icon: <Layers className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Frustrated with slow, buggy software?',
    description: 'Your current system crashes at the worst times, loads slowly, and makes simple tasks feel impossible.',
    icon: <Snail className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Missing sales because of tech issues?',
    description:
      'You know you\'re losing money, but you can\'t pinpoint exactly where your systems are failing you.',
    icon: <DollarSign className="size-6" />,
    size: 'large' as const,
  },
];

export function BentoGrid() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div id="solutions" className="mx-auto max-w-screen-xl px-4 py-16 md:px-8 md:py-20">
      <div className="relative mx-auto max-w-2xl sm:text-center">
        <div className="relative z-10">
          <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
            We understand the struggles you face
          </h3>
          <p className="font-geist mt-3 text-foreground/60">
            Every day, business owners like you are held back by the same tech frustrations. 
            You're not alone in these challenges - and there are solutions.
          </p>
        </div>
        <div className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px] bg-gradient-to-br from-primary/20 via-primary/26 to-primary/10"></div>
      </div>
      <hr className="mx-auto mt-5 h-px w-1/2 bg-foreground/30" />
      <div className="relative mt-12">
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              size={item.size}
              className={cn(
                item.size === 'large'
                  ? 'col-span-4'
                  : item.size === 'medium'
                    ? 'col-span-3'
                    : 'col-span-2',
                'h-full',
              )}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
