import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback } from "react";
import carHeroImage from "@assets/car_1768588411624.png";

export function ThreeDCar() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
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
      className="w-full h-full absolute inset-0 z-10 flex items-center justify-center perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-5xl px-4"
      >
        <motion.img
          src={carHeroImage}
          alt="Premium Car"
          className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(255,0,0,0.3)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        {/* Glow effect that follows cursor */}
        <motion.div
          style={{
            translateX: useTransform(mouseXSpring, [-0.5, 0.5], ["-20px", "20px"]),
            translateY: useTransform(mouseYSpring, [-0.5, 0.5], ["-20px", "20px"]),
          }}
          className="absolute inset-0 bg-red-600/10 blur-[120px] rounded-full -z-10"
        />
      </motion.div>
    </div>
  );
}
