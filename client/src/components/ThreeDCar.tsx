import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback } from "react";
import carHeroImage from "@assets/car_1768588411624.png";

export function ThreeDCar() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  // Map mouse movement to subtle 2D translation (shifting)
  // Shift amount: -30px to 30px
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-30px", "30px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-30px", "30px"]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate percentage from center (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <div 
      className="w-full h-full absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          x: translateX,
          y: translateY,
        }}
        className="relative w-full max-w-4xl px-4 md:px-8"
      >
        <img
          src={carHeroImage}
          alt="Premium Car"
          className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(255,0,0,0.2)]"
        />
        
        {/* Subtle glow behind the car */}
        <div className="absolute inset-0 bg-red-600/5 blur-[100px] rounded-full -z-10" />
      </motion.div>
    </div>
  );
}
