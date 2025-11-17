import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";


// --- SLIDE DATA (Unchanged) ---
const slides = [
    {
        id: 1,
        title: "Start Your Habit Journey",
        description: `Small changes lead to big results—begin today and transform your routine.
Every small step you take builds momentum over time, helping you develop positive routines that last. Starting your habit journey now sets the foundation for long-term success and personal growth.`,
        image: "https://i.ibb.co.com/S4hVHnjk/adventurers-enjoying-views.jpg",
        bgColor: "var(--color-primary)",
    },
    {
        id: 2,
        title: "Never Miss a Day",
        description: `Track, complete, and see your progress in a simple, fun way.
By staying consistent and checking off your daily habits, you create accountability and celebrate your achievements. Even small daily wins add up to big improvements in your life and productivity.`,
        image: "https://i.ibb.co.com/8Dv0ynqK/3430528.jpg",
        bgColor: "var(--color-secondary)",
    },
    {
        id: 3,
        title: "Achieve Your Goals",
        description: `Let habits guide your success and build momentum for your dreams.
Consistent actions and well-formed habits help you reach your personal and professional goals faster. Each completed habit is a step closer to turning your dreams into reality, one day at a time.`,
        image: "https://i.ibb.co.com/nskM0XrM/towfiqu-barbhuiya-Jxi526-YIQg-A-unsplash.jpg",
        bgColor: "var(--color-accent)",
    },
    {
        id: 4,
        title: "Celebrate Every Streak",
        description: `Every day counts—stay motivated and proud of your progress.
Recognizing your streaks boosts motivation and reinforces positive behavior. Celebrating each milestone encourages you to keep going, helping small efforts compound into meaningful results over time.`,
        image: "https://i.ibb.co.com/R4NV5tBc/sincerely-media-vj-F4k7-IKslo-unsplash.jpg",
        bgColor: "var(--color-neutral-content)",
    },
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const interval_ms = 4000;
    const transition_duration = 0.5; // Duration for the slide movement

    // --- Core Logic: Auto-Play ---
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const startSlider = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(nextSlide, interval_ms);
    };

    const stopSlider = () => clearInterval(intervalRef.current);

    useEffect(() => {
        startSlider();
        return () => stopSlider();
    }, []);

    // --- Manual Navigation ---
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        stopSlider();
        startSlider();
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
        stopSlider();
        startSlider();
    };

    // ✅ CHANGE: Framer Motion SLIDE Variants
    // The slide animation always enters from the right and exits to the left.
    const slideVariants = {
        // Starts 100% off-screen to the right
        initial: { x: "100%", opacity: 1, zIndex: 1 },

        // Slides to the center (x: 0)
        animate: { x: 0, opacity: 1, zIndex: 2, transition: { duration: transition_duration } },

        // Exits 100% off-screen to the left
        exit: { x: "-100%", opacity: 1, zIndex: 0, transition: { duration: transition_duration } },
    };


    return (
        <div
            className="w-full relative mx-auto overflow-hidden rounded-lg shadow-xl h-64 md:h-80 lg:h-96"
            onMouseEnter={stopSlider}
            onMouseLeave={startSlider}
        >
            <AnimatePresence initial={false}>
                <motion.div
                    key={slides[currentSlide].id}

                    // ✅ CHANGE 1: Use the new slideVariants
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"

                    // ✅ CHANGE 2: Set the overall transition duration
                    transition={{ duration: transition_duration }}

                    className="absolute inset-0 flex flex-col md:flex-row items-center justify-center text-white p-6"
                    style={{ backgroundColor: slides[currentSlide].bgColor }}
                >
                    {/* Image */}
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full md:w-1/2 h-full object-cover rounded-xl"
                    />
                    {/* Text */}
                    <div className="p-6 md:w-1/2 flex flex-col justify-center text-left">
                        <h1 className="text-white pb-4">
                            {/* {slides[currentSlide].title} */}
                            <Typewriter
                                words={[slides[currentSlide].title]}
                                loop={false}
                                cursor
                                cursorStyle="|"
                                typeSpeed={60}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </h1>
                        <p className="text-lg opacity-90">{slides[currentSlide].description}</p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* --- Controls (Arrows) --- */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 z-30">
                <button
                    onClick={prevSlide}
                    className="p-3 bg-black/50 hover:bg-black/80 rounded-full text-white"
                    aria-label="Previous slide"
                >
                    <IoIosArrowBack size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-3 bg-black/50 hover:bg-black/80 rounded-full text-white"
                    aria-label="Next slide"
                >
                    <IoIosArrowForward size={24} />
                </button>
            </div>

            {/* --- Dots --- */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;