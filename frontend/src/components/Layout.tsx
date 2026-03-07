import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            lerp: 0.1, // Slightly smoother lerp
            smartphone: {
                smooth: true
            },
            tablet: {
                smooth: true
            }
        } as any);

        // Update scroll on location change or content update
        const timeout = setTimeout(() => {
            if (scroll) {
                (scroll as any).update();
                (scroll as any).scrollTo(0, { duration: 0, disableLerp: true });
            }
        }, 300);

        return () => {
            if (scroll) scroll.destroy();
            clearTimeout(timeout);
        };
    }, [location.pathname]);

    return (
        <div ref={scrollRef} data-scroll-container className="bg-parchment selection:bg-crimson selection:text-white min-h-screen">
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {children}
                    <Footer />
                </motion.main>
            </AnimatePresence>
        </div>
    );
};

export default Layout;
