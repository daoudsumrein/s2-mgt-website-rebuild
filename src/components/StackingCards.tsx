import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react";

interface StackingCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  content: string;
  features: string[];
}

interface StackingCardsProps {
  cards: StackingCard[];
  onCardClick?: (card: StackingCard, index: number) => void;
}

export default function StackingCards({ cards, onCardClick }: StackingCardsProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip scroll animation on mobile

    const handleScroll = () => {
      const cards = document.querySelectorAll(".desktop-card");
      const stackArea = document.querySelector(".stack-area");

      function rotateCards() {
        let angle = 0;
        cards.forEach((card, index) => {
          const cardElement = card as HTMLElement;
          if (cardElement.classList.contains("away")) {
            cardElement.style.transform = `translateY(-120vh) rotate(-48deg)`;
          } else {
            cardElement.style.transform = ` rotate(${angle}deg)`;
            angle = angle - 10;
            cardElement.style.zIndex = (cards.length - index).toString();
          }
        });
      }

      if (!stackArea) return;

      const distance = window.innerHeight * 0.5;
      const stackAreaTop = stackArea.getBoundingClientRect().top;
      
      // Fix the index calculation - when stackArea.top is 0, we want index 0
      // When scrolled down by distance, we want index 1, etc.
      let index = Math.round(-stackAreaTop / distance);
      
      // Clamp the index to valid range
      index = Math.max(0, Math.min(index, cards.length - 1));

      // Update current card state
      if (index !== currentCard) {
        setCurrentCard(index);
      }

      for (let i = 0; i < cards.length; i++) {
        const cardElement = cards[i] as HTMLElement;
        if (i < index) {
          cardElement.classList.add("away");
        } else {
          cardElement.classList.remove("away");
        }
      }
      rotateCards();
    };

    // Initial setup for desktop
    const cards = document.querySelectorAll(".desktop-card");
    let angle = 0;
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      cardElement.style.transform = ` rotate(${angle}deg)`;
      angle = angle - 10;
      cardElement.style.zIndex = (cards.length - index).toString();
    });

    // Initial call to set up the state correctly
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, cards.length, currentCard]);

  const scrollToCard = (cardIndex: number) => {
    if (isMobile) return;
    
    const stackArea = document.querySelector(".stack-area") as HTMLElement;
    if (!stackArea) return;

    const distance = window.innerHeight * 0.5;
    const stackAreaTop = stackArea.offsetTop;
    const targetScrollY = stackAreaTop + (cardIndex * distance);
    
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  const goToPreviousCard = () => {
    if (currentCard > 0) {
      scrollToCard(currentCard - 1);
    }
  };

  const goToNextCard = () => {
    if (currentCard < cards.length - 1) {
      scrollToCard(currentCard + 1);
    }
  };

  // Mobile Design
  if (isMobile) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategic planning to full implementation and ongoing support, 
              we deliver comprehensive solutions tailored to your business needs.
            </p>
          </div>

          <Carousel className="w-full max-w-sm mx-auto relative">
            <CarouselContent>
              {cards.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <CarouselItem key={index}>
                    <Card className="h-96">
                      <CardHeader className="text-center pb-4">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                        <Button 
                          variant="outline" 
                          className="mt-4 w-full"
                          onClick={() => onCardClick?.(service, index)}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* Mobile Navigation Arrows at Bottom */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <CarouselPrevious className="relative left-0 translate-y-0 translate-x-0" />
              <CarouselNext className="relative right-0 translate-y-0 translate-x-0" />
            </div>
          </Carousel>

        </div>
      </section>
    );
  }

  // Desktop Design
  return (
    <>
      {/* Add the required CSS styles for desktop */}
      <style>{`
        .stack-area {
          width: 100%;
          height: 300vh;
          position: relative;
          background: hsl(var(--background));
          display: flex;
        }
        .left {
          height: 100vh;
          flex-basis: 50%;
          position: sticky;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          flex-direction: column;
          padding: 2rem;
        }
        .right {
          height: 100vh;
          flex-basis: 50%;
          position: sticky;
          top: 0;
        }
        .desktop-card {
          width: 350px;
          height: 350px;
          border-radius: 25px;
          margin-bottom: 10px;
          position: absolute;
          top: calc(50% - 175px);
          left: calc(50% - 175px);
          transition: 0.5s ease-in-out;
          box-sizing: border-box;
          padding: 35px;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }
        .desktop-card:nth-child(1) {
          background: hsl(var(--primary));
        }
        .desktop-card:nth-child(2) {
          background: hsl(var(--secondary));
        }
        .desktop-card:nth-child(3) {
          background: rgb(186, 113, 245);
        }
        .desktop-card:nth-child(4) {
          background: rgb(247, 92, 208);
        }
        .desktop-card:nth-child(5) {
          background: rgb(92, 184, 247);
        }
        .away {
          transform-origin: bottom left;
        }
        .sub {
          font-size: 14px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }
         .content {
           font-size: 24px;
           font-weight: 700;
           line-height: 28px;
           color: white;
         }
         .navigation-arrows {
           position: fixed;
           right: 2rem;
           top: 50%;
           transform: translateY(-50%);
           display: flex;
           flex-direction: column;
           gap: 0.5rem;
           z-index: 1000;
         }
         .arrow-button {
           background: hsl(var(--background));
           border: 2px solid hsl(var(--border));
           border-radius: 50%;
           width: 48px;
           height: 48px;
           display: flex;
           align-items: center;
           justify-content: center;
           cursor: pointer;
           transition: all 0.3s ease;
           color: hsl(var(--foreground));
         }
         .arrow-button:hover {
           background: hsl(var(--primary));
           color: hsl(var(--primary-foreground));
           border-color: hsl(var(--primary));
         }
         .arrow-button:disabled {
           opacity: 0.5;
           cursor: not-allowed;
         }
         .arrow-button:disabled:hover {
           background: hsl(var(--background));
           color: hsl(var(--foreground));
           border-color: hsl(var(--border));
         }
       `}</style>

      <div className="stack-area">
        <div className="left">
          <div className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            Our Services
          </div>
          <div className="max-w-lg text-lg text-muted-foreground mb-8">
            From strategic planning to full implementation and ongoing support, 
            we deliver comprehensive solutions tailored to your business needs.
            <br />
            <Button 
              size="lg" 
              className="mt-6 group" 
              onClick={() => {
                const servicesSection = document.querySelector('#service-0');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                  });
                }
              }}
            >
              See More Details
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="right">
          {cards.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="desktop-card cursor-pointer transition-transform hover:scale-105"
                onClick={() => onCardClick?.(service, index)}
              >
                <div className="sub">
                  <IconComponent className="h-8 w-8 mb-2 text-white" />
                  {service.title.startsWith('Application') ? 'Application Modernization' : service.title.split(' ')[0]}
                </div>
                <div className="content">
                  {service.description}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Navigation Arrows */}
        <div className="navigation-arrows">
          <button 
            className="arrow-button"
            onClick={goToPreviousCard}
            disabled={currentCard === 0}
            aria-label="Previous card"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
          <button 
            className="arrow-button"
            onClick={goToNextCard}
            disabled={currentCard === cards.length - 1}
            aria-label="Next card"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
}