import React, { useEffect, useState } from "react";

interface Slide {
    header: string
    text: string
    image: string
}

const slides: Slide[] = [
  {
    header: "Dla kogo gotujemy?",
    text: "Wskaż swoją grupę i zaczynamy!",
    image: "/images/group.png",
  },
  {
    header: "Na ile dni ma starczyć?",
    text: "Ustal, na jak dlugo mamy przygotować menu",
    image: "/images/calendar.png",
  },
  {
    header: "... i gotowe!",
    text: "Zobacz, co dla Ciebie wymyśliliśmy!",
    image: "/images/idea.png",
  },
];

const AutoSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-2 overflow-hidden relative w-full mx-auto border border-black rounded-md bg-brand-warm/10 shadow-xl">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="flex flex-col space-y-3 px-3 py-1 min-h-40 min-w-full"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col space-y-1">
                <h6>{slide.header}</h6>
                <span className="text-sm">{slide.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;