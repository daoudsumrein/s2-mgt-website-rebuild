import { useEffect } from "react";

interface ClientCarouselProps {
  images?: string[];
}

const defaultImages = [
  "https://i.postimg.cc/bJCLnpdR/A.png",
  "https://i.postimg.cc/Kz8hFGd7/Abu-Dhabi-Customs.png",
  "https://i.postimg.cc/Y9RgG3DK/Abu-Dhabi-Police.png",
  "https://i.postimg.cc/rmjnV5Sz/Agility.png",
  "https://i.postimg.cc/YCymH0Gk/Al-Ansari-Financial-Services.png",
  "https://i.postimg.cc/YCy8sptL/Allianz.png",
  "https://i.postimg.cc/0y67r7qr/Al-Muhaidib.png",
  "https://i.postimg.cc/SsGMHrc1/Al-Muzaini.png",
  "https://i.postimg.cc/MpjjzxyQ/Al-Salam-Hospital.png",
  "https://i.postimg.cc/Y0hQgFmX/American-Express.png",
  "https://i.postimg.cc/sDWn1BCj/Arab-Monetary-Fund.png",
  "https://i.postimg.cc/8kMW6Lc0/Bahrain.png",
  "https://i.postimg.cc/k4FJnMMf/Bank-Al-Habib.png",
  "https://i.postimg.cc/sfTzKNMQ/Bank-Islami.png",
  "https://i.postimg.cc/RVJYfsKz/Bankof-Baroda.png",
  "https://i.postimg.cc/76L7zRC1/Bank-Sohar.png",
  "https://i.postimg.cc/fWfjJ18P/Boubyan.png",
  "https://i.postimg.cc/wj7h4M9K/Burgan-Bank.png",
  "https://i.postimg.cc/B6GHvCHs/Carrefour.png",
  "https://i.postimg.cc/63LR4GfZ/CBI.png",
  "https://i.postimg.cc/KjGTPv0H/Central-Bank-Of-Oman.png",
  "https://i.postimg.cc/XqtVVsBk/Commission.png",
  "https://i.postimg.cc/g2Wx80rq/Crown-Prince-Court.png",
  "https://i.postimg.cc/434n2F6Y/Da-Afghanistan-Bank.png",
  "https://i.postimg.cc/WpSVXb9w/Daman-Securities.png",
  "https://i.postimg.cc/4NSgR2RK/Dukhan.png",
  "https://i.postimg.cc/8C8gjF5N/EDGE.png",
  "https://i.postimg.cc/LszKfHYf/Emirates-Flight-Catering.png",
  "https://i.postimg.cc/Twf8JZgs/Emirates-International-Hospital.png",
  "https://i.postimg.cc/xCRwxtP1/Emirates-Investment-Bank.png",
  "https://i.postimg.cc/RhZjjKPQ/EROSGROUP.png",
  "https://i.postimg.cc/Z5NprgTp/Federal-Electricity.png",
  "https://i.postimg.cc/d0bqGHVk/Hamad.png",
  "https://i.postimg.cc/HWfhHqP7/Health-Authority-Abu-Dhabi.png",
  "https://i.postimg.cc/Hn2cZDrP/Hewlett.png",
  "https://i.postimg.cc/c1Mn4YFM/Islamic-Affairs.png",
  "https://i.postimg.cc/fLMMH3YD/Jordan.png",
  "https://i.postimg.cc/MTYV4j4D/King-Fahad-Specialist-Hospital-Dammam.png",
  "https://i.postimg.cc/d3HdQcJZ/Kuwait.png",
  "https://i.postimg.cc/y6v0yc06/Luberef.png",
  "https://i.postimg.cc/zXvKtvkC/Majid-Al-Futtaim.png",
  "https://i.postimg.cc/ZKQ31mf1/Masdar.png",
  "https://i.postimg.cc/wjsJzrZ3/MEDICORPGULFMEDICALCLINIC.png",
  "https://i.postimg.cc/3rSDv7Hd/Meezan-Bank.png",
  "https://i.postimg.cc/L6Jgk7Hv/Ministry-Of-Climate.png",
  "https://i.postimg.cc/L6GYxT5S/Mohammed-Bin-Rashid-Al-Maktoum-Foundation.png",
  "https://i.postimg.cc/g0p9dn45/Muscat.png",
  "https://i.postimg.cc/tgRjWsP6/National-Transport-Authority.png",
  "https://i.postimg.cc/vZ3jR3g1/NBF.png",
  "https://i.postimg.cc/BvzVbbC4/NBK.png",
  "https://i.postimg.cc/T37kN1Fg/NBO.png",
  "https://i.postimg.cc/FKnHKyqz/NKB.png",
  "https://i.postimg.cc/W3FbqDLn/Noor.png",
  "https://i.postimg.cc/QMYm8M3s/NPCI.png",
  "https://i.postimg.cc/cLn0MvFk/Oman-Gas-Company-S-A.png",
  "https://i.postimg.cc/rmyBbs9k/Oman-Refco.png",
  "https://i.postimg.cc/Bvpyxsfw/Pepsico.png",
  "https://i.postimg.cc/ydNGj5V6/PLANETPHARMACIES.png",
  "https://i.postimg.cc/5yYRdCYZ/Qatar-Mining.png",
  "https://i.postimg.cc/J7sr4YbW/RAKBANK.png",
  "https://i.postimg.cc/B6kGKsxf/RTA.png",
  "https://i.postimg.cc/TY862ddr/Salalah.png",
  "https://i.postimg.cc/sxHGSMTD/Samba.png",
  "https://i.postimg.cc/hvvfSSKF/Saudi.png",
  "https://i.postimg.cc/QNYFfWqj/Saudia.png",
  "https://i.postimg.cc/PqD7RZD9/Saudi-Aramco.png",
  "https://i.postimg.cc/MT8L2TbT/Sheikh-Khalifa-Speciality-Hospital.png",
  "https://i.postimg.cc/J0rd02FC/Stanbic.png",
  "https://i.postimg.cc/Xqs1CgMG/Sultanate.png",
  "https://i.postimg.cc/9XbnKc4m/TAQA.png",
  "https://i.postimg.cc/m2r5GKMQ/TECEvolution.png"
];

export default function ClientCarousel({ images = defaultImages }: ClientCarouselProps) {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(50%);
        }
        100% {
          transform: translateX(-53%);
        }
      }
      
      .company-scroll {
        animation: scroll 160s linear infinite;
        animation-fill-mode: backwards;
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

      {/* Scrolling Company Logos */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden bg-background/80 backdrop-blur-sm py-8 transform -translate-y-1/2 z-20">
        <div className="company-scroll flex justify-center items-center w-max">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 mx-5">
              <img
                src={image}
                alt={`Client ${index + 1}`}
                className="max-h-[150px] w-auto max-w-[150px] object-contain md:max-h-[90px] md:max-w-[90px]"
              />
            </div>
          ))}
        </div>
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