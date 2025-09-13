"use client" 

import * as React from "react"
import { useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
 
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
 
const cn = (...args: any[]) => twMerge(clsx(args));
 
export interface AnimatedDockProps {
  className?: string;
  items?: DockItemData[];
}
 
export interface DockItemData {
  link: string;
  Icon: React.ReactNode;
  onClick?: () => void;
}
 
export const AnimatedDock = ({ className, items = [] }: AnimatedDockProps) => {
  const mouseX = useMotionValue(Infinity);
 
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg px-4 pb-3",
        className,
      )}
    >
      {items.map((item, index) => (
        <DockItem key={`dock-item-${index}`} mouseX={mouseX} onClick={item.onClick}>
          <div className="grow flex items-center justify-center w-full h-full text-gray-700">
            {item.Icon}
          </div>
        </DockItem>
      ))}
    </motion.div>
  );
};
 
interface DockItemProps {
  mouseX: MotionValue<number>;
  children: React.ReactNode;
  onClick?: () => void;
}
 
export const DockItem = ({ mouseX, children, onClick }: DockItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [bounds, setBounds] = React.useState({ x: 0, width: 0 });

  React.useEffect(() => {
    const updateBounds = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setBounds({ x: rect.x, width: rect.width });
      }
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    window.addEventListener('scroll', updateBounds);

    return () => {
      window.removeEventListener('resize', updateBounds);
      window.removeEventListener('scroll', updateBounds);
    };
  }, []);

  const distance = useTransform(mouseX, (val) => {
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const iconScale = useTransform(width, [40, 80], [1, 1.5]);
  const iconSpring = useSpring(iconScale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onClick={onClick}
      className="aspect-square w-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 flex items-center justify-center cursor-pointer transition-colors duration-200"
    >
      <motion.div
        style={{ scale: iconSpring }}
        className="flex items-center justify-center w-full h-full grow"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};