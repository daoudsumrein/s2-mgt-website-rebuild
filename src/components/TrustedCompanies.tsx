import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const companies = [
  { name: "A", url: "https://i.postimg.cc/bJCLnpdR/A.png" },
  { name: "Abu-Dhabi-Customs", url: "https://i.postimg.cc/Kz8hFGd7/Abu-Dhabi-Customs.png" },
  { name: "Abu-Dhabi-Police-GHQ", url: "https://i.postimg.cc/Y9RgG3DK/Abu-Dhabi-Police.png" },
  { name: "Agility", url: "https://i.postimg.cc/rmjnV5Sz/Agility.png" },
  { name: "Al-Ansari-Financial-Services", url: "https://i.postimg.cc/YCymH0Gk/Al-Ansari-Financial-Services.png" },
  { name: "Allianz", url: "https://i.postimg.cc/YCy8sptL/Allianz.png" },
  { name: "Al-Muhaidib", url: "https://i.postimg.cc/0y67r7qr/Al-Muhaidib.png" },
  { name: "Al-Muzaini", url: "https://i.postimg.cc/SsGMHrc1/Al-Muzaini.png" },
  { name: "Al-Salam-Hospital", url: "https://i.postimg.cc/MpjjzxyQ/Al-Salam-Hospital.png" },
  { name: "American-Express", url: "https://i.postimg.cc/Y0hQgFmX/American-Express.png" },
  { name: "Arab-Monetary-Fund", url: "https://i.postimg.cc/sDWn1BCj/Arab-Monetary-Fund.png" },
  { name: "Bahrain", url: "https://i.postimg.cc/8kMW6Lc0/Bahrain.png" },
  { name: "Bank-Al-Habib", url: "https://i.postimg.cc/k4FJnMMf/Bank-Al-Habib.png" },
  { name: "Bank-Islami", url: "https://i.postimg.cc/sfTzKNMQ/Bank-Islami.png" },
  { name: "Bankof-Baroda", url: "https://i.postimg.cc/RVJYfsKz/Bankof-Baroda.png" },
  { name: "Bank-Sohar", url: "https://i.postimg.cc/76L7zRC1/Bank-Sohar.png" },
  { name: "Boubyan", url: "https://i.postimg.cc/fWfjJ18P/Boubyan.png" },
  { name: "Burgan-Bank", url: "https://i.postimg.cc/wj7h4M9K/Burgan-Bank.png" },
  { name: "Carrefour", url: "https://i.postimg.cc/B6GHvCHs/Carrefour.png" },
  { name: "CBI", url: "https://i.postimg.cc/63LR4GfZ/CBI.png" },
  { name: "Central-Bank-Of-Oman", url: "https://i.postimg.cc/KjGTPv0H/Central-Bank-Of-Oman.png" },
  { name: "Commission", url: "https://i.postimg.cc/XqtVVsBk/Commission.png" },
  { name: "Crown-Prince-Court", url: "https://i.postimg.cc/g2Wx80rq/Crown-Prince-Court.png" },
  { name: "Da-Afghanistan-Bank", url: "https://i.postimg.cc/434n2F6Y/Da-Afghanistan-Bank.png" },
  { name: "Daman-Securities", url: "https://i.postimg.cc/WpSVXb9w/Daman-Securities.png" },
  { name: "Dukhan", url: "https://i.postimg.cc/4NSgR2RK/Dukhan.png" },
  { name: "EDGE", url: "https://i.postimg.cc/8C8gjF5N/EDGE.png" },
  { name: "Emirates-Flight-Catering", url: "https://i.postimg.cc/LszKfHYf/Emirates-Flight-Catering.png" },
  { name: "Emirates-International-Hospital", url: "https://i.postimg.cc/Twf8JZgs/Emirates-International-Hospital.png" },
  { name: "Emirates-Investment-Bank", url: "https://i.postimg.cc/xCRwxtP1/Emirates-Investment-Bank.png" },
  { name: "EROSGROUP", url: "https://i.postimg.cc/RhZjjKPQ/EROSGROUP.png" },
  { name: "Federal-Electricity", url: "https://i.postimg.cc/Z5NprgTp/Federal-Electricity.png" },
  { name: "Hamad", url: "https://i.postimg.cc/d0bqGHVk/Hamad.png" },
  { name: "Health-Authority-Abu-Dhabi", url: "https://i.postimg.cc/HWfhHqP7/Health-Authority-Abu-Dhabi.png" },
  { name: "Hewlett", url: "https://i.postimg.cc/Hn2cZDrP/Hewlett.png" },
  { name: "Islamic-Affairs", url: "https://i.postimg.cc/c1Mn4YFM/Islamic-Affairs.png" },
  { name: "Jordan", url: "https://i.postimg.cc/fLMMH3YD/Jordan.png" },
  { name: "King-Fahad-Specialist-Hospital-Dammam", url: "https://i.postimg.cc/MTYV4j4D/King-Fahad-Specialist-Hospital-Dammam.png" },
  { name: "Kuwait", url: "https://i.postimg.cc/d3HdQcJZ/Kuwait.png" },
  { name: "Luberef", url: "https://i.postimg.cc/y6v0yc06/Luberef.png" },
  { name: "Majid-Al-Futtaim", url: "https://i.postimg.cc/zXvKtvkC/Majid-Al-Futtaim.png" },
  { name: "Masdar", url: "https://i.postimg.cc/ZKQ31mf1/Masdar.png" },
  { name: "MEDICORPGULFMEDICALCLINIC", url: "https://i.postimg.cc/wjsJzrZ3/MEDICORPGULFMEDICALCLINIC.png" },
  { name: "Meezan-Bank", url: "https://i.postimg.cc/3rSDv7Hd/Meezan-Bank.png" },
  { name: "Ministry-Of-Climate", url: "https://i.postimg.cc/L6Jgk7Hv/Ministry-Of-Climate.png" },
  { name: "Mohammed-Bin-Rashid-Al-Maktoum-Foundation", url: "https://i.postimg.cc/L6GYxT5S/Mohammed-Bin-Rashid-Al-Maktoum-Foundation.png" },
  { name: "Muscat", url: "https://i.postimg.cc/g0p9dn45/Muscat.png" },
  { name: "National-Transport-Authority", url: "https://i.postimg.cc/tgRjWsP6/National-Transport-Authority.png" },
  { name: "NBF", url: "https://i.postimg.cc/vZ3jR3g1/NBF.png" },
  { name: "NBK", url: "https://i.postimg.cc/BvzVbbC4/NBK.png" },
  { name: "NBO", url: "https://i.postimg.cc/T37kN1Fg/NBO.png" },
  { name: "NKB", url: "https://i.postimg.cc/FKnHKyqz/NKB.png" },
  { name: "Noor", url: "https://i.postimg.cc/W3FbqDLn/Noor.png" },
  { name: "NPCI", url: "https://i.postimg.cc/QMYm8M3s/NPCI.png" },
  { name: "Oman-Gas-Company-S-A", url: "https://i.postimg.cc/cLn0MvFk/Oman-Gas-Company-S-A.png" },
  { name: "Oman-Refco", url: "https://i.postimg.cc/rmyBbs9k/Oman-Refco.png" },
  { name: "Pepsico", url: "https://i.postimg.cc/Bvpyxsfw/Pepsico.png" },
  { name: "PLANETPHARMACIES", url: "https://i.postimg.cc/ydNGj5V6/PLANETPHARMACIES.png" },
  { name: "Qatar-Mining", url: "https://i.postimg.cc/5yYRdCYZ/Qatar-Mining.png" },
  { name: "RAKBANK", url: "https://i.postimg.cc/J7sr4YbW/RAKBANK.png" },
  { name: "RTA", url: "https://i.postimg.cc/B6kGKsxf/RTA.png" },
  { name: "Salalah", url: "https://i.postimg.cc/TY862ddr/Salalah.png" },
  { name: "Samba", url: "https://i.postimg.cc/sxHGSMTD/Samba.png" },
  { name: "Saudi", url: "https://i.postimg.cc/hvvfSSKF/Saudi.png" },
  { name: "Saudia", url: "https://i.postimg.cc/QNYFfWqj/Saudia.png" },
  { name: "Saudi-Aramco", url: "https://i.postimg.cc/PqD7RZD9/Saudi-Aramco.png" },
  { name: "Sheikh-Khalifa-Speciality-Hospital", url: "https://i.postimg.cc/MT8L2TbT/Sheikh-Khalifa-Speciality-Hospital.png" },
  { name: "Stanbic", url: "https://i.postimg.cc/J0rd02FC/Stanbic.png" },
  { name: "Sultanate", url: "https://i.postimg.cc/Xqs1CgMG/Sultanate.png" },
  { name: "TAQA", url: "https://i.postimg.cc/9XbnKc4m/TAQA.png" },
  { name: "TECEvolution", url: "https://i.postimg.cc/m2r5GKMQ/TECEvolution.png" }
];

export default function TrustedCompanies() {
  const { ref, isInView } = useScrollAnimation();

  // Duplicate companies for seamless infinite loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <>
      <style>{`
        @keyframes trustedScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .trusted-scroll {
          animation: trustedScroll 60s linear infinite;
        }
        @media (max-width: 768px) {
          .trusted-scroll {
            animation-duration: 50s;
          }
        }
        @media (max-width: 480px) {
          .trusted-scroll {
            animation-duration: 40s;
          }
        }
      `}</style>
      
      <section className="py-8 sm:py-12 lg:py-16 overflow-hidden bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="font-inter font-bold text-heading-blue mb-4 sm:mb-6
                           text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px]">
              Trusted by Organizations Nationwide
            </h2>
          </motion.div>

          <div className="w-full overflow-hidden">
            <div className="flex items-center trusted-scroll w-max">
              {duplicatedCompanies.map((company, index) => (
                <div key={`trusted-${index}`} className="flex-shrink-0 mx-3 sm:mx-4 lg:mx-6">
                  <img 
                    src={company.url} 
                    alt={`${company.name} logo`}
                    className="h-16 w-auto max-w-32 sm:h-20 sm:max-w-40 lg:h-24 lg:max-w-48 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}