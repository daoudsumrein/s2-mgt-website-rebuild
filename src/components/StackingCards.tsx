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
  const [awayCards, setAwayCards] = useState<number[]>([]);
  const stackAreaRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const rotateCards = () => {
    let angle = 0;
    cardRefs.current.forEach((card, index) => {
      if (card) {
        if (awayCards.includes(index)) {
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
    rotateCards();
  }, [awayCards, cards.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stackAreaRef.current) return;

      const distance = window.innerHeight * 0.5;
      const topVal = stackAreaRef.current.getBoundingClientRect().top;
      const index = Math.floor(-1 * (topVal / distance + 1));

      const newAwayCards: number[] = [];
      for (let i = 0; i < cards.length; i++) {
        if (i <= index) {
          newAwayCards.push(i);
        }
      }
      setAwayCards(newAwayCards);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

  return (
    <div ref={stackAreaRef} className="relative w-full" style={{ height: "300vh" }}>
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
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="absolute w-80 h-96 rounded-3xl transition-all duration-500 ease-in-out origin-bottom-left"
                style={{
                  top: "calc(50% - 192px)",
                  left: "calc(50% - 160px)",
                  backgroundColor: index === 0 ? "hsl(var(--primary))" : 
                                 index === 1 ? "#dd3e58" : 
                                 index === 2 ? "#ba71f5" : "#f75cd0"
                }}
              >
                <Card className="h-full w-full bg-transparent border-none text-white overflow-hidden">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-lg bg-white/20">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-none">
                          {service.title.split(' ')[0]}
                        </Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}