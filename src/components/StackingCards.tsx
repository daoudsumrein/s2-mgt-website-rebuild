import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StackingCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  content: string;
  features: string[];
}

interface StackingCardsProps {
  cards: StackingCard[];
}

export default function StackingCards({ cards }: StackingCardsProps) {
  const stackAreaRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const rotateCards = () => {
    let angle = 0;
    cardRefs.current.forEach((card, index) => {
      if (card) {
        if (card.classList.contains("away")) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          angle = angle - 10;
          card.style.zIndex = (cards.length - index).toString();
        }
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!stackAreaRef.current) return;

      const distance = window.innerHeight * 0.5;
      const topVal = stackAreaRef.current.getBoundingClientRect().top;
      let index = -1 * (topVal / distance + 1);
      index = Math.floor(index);

      // Update classes for each card
      cardRefs.current.forEach((card, i) => {
        if (card) {
          if (i <= index) {
            card.classList.add("away");
          } else {
            card.classList.remove("away");
          }
        }
      });

      rotateCards();
    };

    // Initial setup
    rotateCards();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

  return (
    <div ref={stackAreaRef} className="relative w-full bg-background" style={{ height: "300vh" }}>
      <div className="flex w-full h-screen">
        {/* Left Side - Fixed Content */}
        <div className="flex-1 sticky top-0 left-0 h-screen flex items-center justify-center p-8">
          <div className="max-w-lg">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From strategic planning to full implementation and ongoing support, 
              we deliver comprehensive solutions tailored to your business needs.
            </p>
            <Button size="lg" className="group">
              See More Details
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right Side - Stacking Cards */}
        <div className="flex-1 sticky top-0 h-screen relative">
          {cards.map((service, index) => {
            const IconComponent = service.icon;
            
            // Define colors for each card
            const cardColors = [
              "rgb(64, 122, 255)",   // Blue
              "rgb(221, 62, 88)",    // Red  
              "rgb(186, 113, 245)",  // Purple
              "rgb(247, 92, 208)"    // Pink
            ];
            
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="card absolute rounded-3xl transition-all duration-500 ease-in-out"
                style={{
                  width: "350px",
                  height: "350px",
                  top: "calc(50% - 175px)",
                  left: "calc(50% - 175px)",
                  backgroundColor: cardColors[index % cardColors.length],
                  transformOrigin: "bottom left"
                }}
              >
                <div className="h-full w-full p-8 flex flex-col justify-between text-white">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-white/20">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="bg-white/20 text-white border-none px-2 py-1 rounded text-sm font-medium">
                        {service.title.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold leading-tight mb-4">
                      {service.title.replace(service.title.split(' ')[0] + ' ', '')}
                    </h3>
                    <p className="text-white/90 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}