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
          background: white;
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
        }
        .right {
          height: 100vh;
          flex-basis: 50%;
          position: sticky;
          top: 0;
        }
        .card {
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
        .card:nth-child(1) {
          background: rgb(64, 122, 255);
        }
        .card:nth-child(2) {
          background: rgb(221, 62, 88);
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
          font-family: poppins;
          font-size: 20px;
          font-weight: 700;
          color: white;
        }
        .content {
          font-family: poppins;
          font-size: 44px;
          font-weight: 700;
          line-height: 54px;
          color: white;
        }
      `}</style>

      <div className="stack-area">
        <div className="left">
          <div style={{ 
            width: '420px', 
            fontSize: '84px', 
            fontFamily: 'poppins', 
            fontWeight: '700', 
            lineHeight: '88px',
            color: 'black'
          }}>
            Our Services
          </div>
          <div style={{ 
            width: '420px', 
            fontFamily: 'poppins', 
            fontSize: '14px', 
            marginTop: '30px',
            color: 'black'
          }}>
            From strategic planning to full implementation and ongoing support, 
            we deliver comprehensive solutions tailored to your business needs.
            <br />
            <Button style={{ 
              fontFamily: 'poppins',
              fontSize: '14px',
              padding: '15px 30px',
              background: 'black',
              color: 'white',
              borderRadius: '8mm',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              marginTop: '20px'
            }}>
              See More Details
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