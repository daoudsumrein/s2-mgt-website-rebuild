import { useEffect, useRef } from "react";

interface ClientCarouselProps {
  images?: string[];
}

const defaultImages = [
  "/lovable-uploads/abad019c-82ea-40d6-ab24-2bcf8726240d.png",
  "/lovable-uploads/eb7f3e31-40a6-49e7-9ffc-c95c8289130d.png",
  "/lovable-uploads/fe3bd2a5-dd8f-4976-ae4b-b206b6aec68e.png",
  "/lovable-uploads/abad019c-82ea-40d6-ab24-2bcf8726240d.png",
  "/lovable-uploads/eb7f3e31-40a6-49e7-9ffc-c95c8289130d.png",
  "/lovable-uploads/fe3bd2a5-dd8f-4976-ae4b-b206b6aec68e.png",
  "/lovable-uploads/abad019c-82ea-40d6-ab24-2bcf8726240d.png",
  "/lovable-uploads/eb7f3e31-40a6-49e7-9ffc-c95c8289130d.png",
  "/lovable-uploads/fe3bd2a5-dd8f-4976-ae4b-b206b6aec68e.png",
  "/lovable-uploads/abad019c-82ea-40d6-ab24-2bcf8726240d.png"
];

export default function ClientCarousel({ images = defaultImages }: ClientCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add CSS custom properties and styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes autoRun {
        from {
          transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
        }
        to {
          transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
        }
      }
      
      .client-carousel-slider {
        animation: autoRun 20s linear infinite;
      }
      
      .client-carousel-item {
        transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px);
      }
      
      @media screen and (max-width: 1023px) {
        .client-carousel-item {
          transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(300px);
        }
      }
      
      @media screen and (max-width: 767px) {
        .client-carousel-item {
          transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(180px);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-center">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundColor: 'hsl(var(--muted))',
          backgroundImage: `
            repeating-linear-gradient(
              to right, transparent 0 100px,
              hsl(var(--muted-foreground) / 0.1) 100px 101px
            ),
            repeating-linear-gradient(
              to bottom, transparent 0 100px,
              hsl(var(--muted-foreground) / 0.1) 100px 101px
            )
          `
        }}
      />

      {/* 3D Carousel */}
      <div 
        ref={carouselRef}
        className="client-carousel-slider absolute w-[200px] h-[250px] top-[10%] left-1/2 transform -translate-x-1/2 md:w-[160px] md:h-[200px] md:left-1/2 md:-translate-x-20 sm:w-[100px] sm:h-[150px] sm:-translate-x-12 z-20"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)',
          '--quantity': images.length
        } as React.CSSProperties & { '--quantity': number }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="client-carousel-item absolute inset-0"
            style={{
              '--position': index + 1,
              '--quantity': images.length
            } as React.CSSProperties & { '--position': number; '--quantity': number }}
          >
            <img
              src={image}
              alt={`Client ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] h-max pb-24 flex flex-wrap justify-between items-center z-10 px-4">
        <h1 
          className="font-bold text-[16em] leading-none text-primary relative md:text-center md:w-full md:text-[7em] md:shadow-[0_10px_20px_rgba(0,0,0,0.5)] sm:text-[5em]"
          data-content="OUR CLIENTS"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            textShadow: '2px 2px 0 hsl(var(--muted))'
          }}
        >
          OUR CLIENTS
        </h1>
        
        <div className="text-right max-w-[200px] md:text-white md:px-5 md:shadow-[0_10px_20px_rgba(0,0,0,0.5)] md:z-20 md:max-w-none md:w-full md:text-center md:px-8">
          <h2 className="text-5xl font-bold mb-2">S2 MANAGEMENT</h2>
          <p className="font-bold text-lg">Data Protection & Cybersecurity</p>
          <p className="mt-2">
            Trusted partners across multiple industries providing enterprise-grade solutions
          </p>
        </div>
      </div>
    </div>
  );
}