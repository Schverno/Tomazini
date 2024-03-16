import { ReactNode,useEffect, useState, useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion, spring } from "framer-motion";

interface CarouselProps {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}


export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 6000 }: CarouselProps) {
  const [curr, setCurr] = useState(0);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const handleDotClick = (index: number) => {
    setCurr(index);
    if (autoSlide && slideIntervalRef.current !== null) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = setInterval(next, autoSlideInterval);
    }
  };

  useEffect(() => {
    if (autoSlide) {
      slideIntervalRef.current = setInterval(() => {
        setCurr((prevCurr) => (prevCurr === slides.length - 1 ? 0 : prevCurr + 1));
      }, autoSlideInterval);

      return () => {
        if (slideIntervalRef.current !== null) {
          clearInterval(slideIntervalRef.current);
        }
      };
    }
  }, [autoSlide, autoSlideInterval, slides.length]);

  return (
    <motion.div 
    initial={{x:20, opacity: 0 }}
    whileInView={{ x:0, opacity: 1}}
    viewport={{ once: true, margin: "0px" }}
    transition={{ ease: [0.76, 0, 0.24, 1], duration: 2, delay:1.5,   damping: 15, stiffness: 100, type: "spring" }}
    className="overflow-hidden relative h-full">
      <div className="flex max-w-full w-full h-full transition-transform ease-in-out duration-500 object-cover" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 text-white">
        <button onClick={prev}>
          <BiChevronLeft size={40} />
        </button>
        <button onClick={next}>
          <BiChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
