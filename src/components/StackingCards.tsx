import { useEffect } from "react";
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
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".card");
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
      index = Math.floor(index);

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

    // Initial setup
    const cards = document.querySelectorAll(".card");
    let angle = 0;
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      cardElement.style.transform = ` rotate(${angle}deg)`;
      angle = angle - 10;
      cardElement.style.zIndex = (cards.length - index).toString();
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Add the required CSS styles */}
      <style>{`
        .stack-area {
          width: 100%;
          height: 300vh;
          position: relative;
          background: hsl(var(--background));
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .stack-area {
            flex-direction: row;
          }
        }
        .left {
          height: 100vh;
          flex-basis: 100%;
          position: sticky;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          flex-direction: column;
          padding: 1rem;
        }
        @media (min-width: 768px) {
          .left {
            flex-basis: 50%;
            padding: 2rem;
          }
        }
        .right {
          height: 100vh;
          flex-basis: 100%;
          position: sticky;
          top: 0;
        }
        @media (min-width: 768px) {
          .right {
            flex-basis: 50%;
          }
        }
        .card {
          width: 280px;
          height: 280px;
          border-radius: 20px;
          margin-bottom: 10px;
          position: absolute;
          top: calc(50% - 140px);
          left: calc(50% - 140px);
          transition: 0.5s ease-in-out;
          box-sizing: border-box;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .card {
            width: 350px;
            height: 350px;
            border-radius: 25px;
            top: calc(50% - 175px);
            left: calc(50% - 175px);
            padding: 35px;
          }
        }
        .card:nth-child(1) {
          background: hsl(var(--primary));
        }
        .card:nth-child(2) {
          background: hsl(var(--secondary));
        }
        .card:nth-child(3) {
          background: rgb(186, 113, 245);
        }
        .card:nth-child(4) {
          background: rgb(247, 92, 208);
        }
        .away {
          transform-origin: bottom left;
        }
        .sub {
          font-size: 12px;
          font-weight: 700;
          color: white;
          margin-bottom: 6px;
        }
        @media (min-width: 768px) {
          .sub {
            font-size: 14px;
            margin-bottom: 8px;
          }
        }
        .content {
          font-size: 18px;
          font-weight: 700;
          line-height: 22px;
          color: white;
        }
        @media (min-width: 768px) {
          .content {
            font-size: 24px;
            line-height: 28px;
          }
        }
      `}</style>

      <div className="stack-area">
        <div className="left">
          <div className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground text-center md:text-left">
            Our Services
          </div>
          <div className="max-w-lg text-base sm:text-lg text-muted-foreground mb-8 text-center md:text-left px-4 md:px-0">
            From strategic planning to full implementation and ongoing support, 
            we deliver comprehensive solutions tailored to your business needs.
            <br />
            <Button size="lg" className="mt-6 group">
              See More Details
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="right">
          {cards.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="card">
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