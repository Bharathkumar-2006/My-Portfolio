import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Mouse position state for the exact cursor (Core)
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring physics for the trailing ring
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            // Check if hovering over interactive elements
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('a') ||
                target.closest('button') ||
                target.style.cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block mix-blend-screen">

            {/* Core Dot (Cyan) - Precision Pointer */}
            <motion.div
                className="fixed top-0 left-0 bg-primary rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    width: 6,
                    height: 6,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />

            {/* Trailing Ring (Purple) - Lagging Spring Effect */}
            <motion.div
                className="fixed top-0 left-0 border border-secondary rounded-full flex items-center justify-center opacity-80"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                animate={{
                    width: isHovering ? 40 : 20,
                    height: isHovering ? 40 : 20,
                    borderColor: isHovering ? '#00F0FF' : '#7000FF', // Cyan when hovering, Purple normally
                    scale: isClicking ? 0.8 : 1,
                    rotate: isHovering ? 90 : 0
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.3
                }}
            >
                {/* Crosshair accents (only visible on hover) */}
                <motion.div
                    className="w-full h-[1px] bg-primary absolute"
                    animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0 }}
                />
                <motion.div
                    className="h-full w-[1px] bg-primary absolute"
                    animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0 }}
                />
            </motion.div>
        </div>
    );
};

export default CustomCursor;
