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
}

export default function StackingCards({ cards }: StackingCardsProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Manual navigation functions
  const navigateToCard = (targetIndex: number) => {
    if (targetIndex < 0 || targetIndex >= cards.length) return;
    
    const stackArea = document.querySelector(".stack-area");
    if (!stackArea) return;

    const distance = window.innerHeight * 0.5;
    const targetScrollY = (targetIndex + 1) * distance - window.innerHeight * 0.5;
    
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
    
    setCurrentCardIndex(targetIndex);
  };

  const navigateUp = () => {
    navigateToCard(Math.max(0, currentCardIndex - 1));
  };

  const navigateDown = () => {
    navigateToCard(Math.min(cards.length - 1, currentCardIndex + 1));
  };

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

      let distance = window.innerHeight * 0.5;
      let topVal = stackArea.getBoundingClientRect().top;
      let index = -1 * (topVal / distance + 1);
      index = Math.floor(Math.max(0, Math.min(cards.length - 1, index)));

      // Update current card index based on scroll
      setCurrentCardIndex(index);

      for (let i = 0; i < cards.length; i++) {
        const cardElement = cards[i] as HTMLElement;
        if (i <= index) {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

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

          <Carousel className="w-full max-w-sm mx-auto">
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
                        <Button variant="outline" className="mt-4 w-full">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="text-center mt-8">
            <Button size="lg" className="group">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
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
          position: relative;
        }
        .navigation-arrows {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 1000;
        }
        .nav-arrow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: hsl(var(--primary));
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: white;
        }
        .nav-arrow:hover {
          background: hsl(var(--primary) / 0.8);
          transform: scale(1.1);
        }
        .nav-arrow:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
        .card-counter {
          position: absolute;
          right: 20px;
          bottom: 20px;
          background: hsl(var(--background) / 0.9);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          color: hsl(var(--foreground));
          border: 1px solid hsl(var(--border));
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
            <Button size="lg" className="mt-6 group" onClick={() => navigate('/vendors')}>
              See More Details
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="right">
          {/* Navigation Arrows */}
          <div className="navigation-arrows">
            <button 
              className="nav-arrow"
              onClick={navigateUp}
              disabled={currentCardIndex === 0}
              aria-label="Previous card"
            >
              <ChevronUp size={20} />
            </button>
            <button 
              className="nav-arrow"
              onClick={navigateDown}
              disabled={currentCardIndex === cards.length - 1}
              aria-label="Next card"
            >
              <ChevronDown size={20} />
            </button>
          </div>

          {/* Card Counter */}
          <div className="card-counter">
            {currentCardIndex + 1} / {cards.length}
          </div>

          {cards.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="desktop-card">
                <div className="sub">
                  <IconComponent className="h-8 w-8 mb-2 text-white" />
                  {service.title.split(' ')[0]}
                </div>
                <div className="content">
                  {service.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}