import React from 'react';

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

export default function ClientCarousel() {
  // Split companies into 4 rows
  const companiesPerRow = Math.ceil(companies.length / 4);
  const row1 = companies.slice(0, companiesPerRow);
  const row2 = companies.slice(companiesPerRow, companiesPerRow * 2);
  const row3 = companies.slice(companiesPerRow * 2, companiesPerRow * 3);
  const row4 = companies.slice(companiesPerRow * 3);

  // Duplicate companies to eliminate blank space
  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];
  const duplicatedRow3 = [...row3, ...row3];
  const duplicatedRow4 = [...row4, ...row4];

  return (
    <>
      <style>{`
        @keyframes clientScrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes clientScrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .client-scroll-left {
          animation: clientScrollLeft 30s linear infinite;
        }
        .client-scroll-right {
          animation: clientScrollRight 35s linear infinite;
        }
        .client-scroll-left-slow {
          animation: clientScrollLeft 40s linear infinite;
        }
        .client-scroll-right-fast {
          animation: clientScrollRight 25s linear infinite;
        }
        @media (max-width: 780px) {
          .client-scroll-left img, .client-scroll-right img,
          .client-scroll-left-slow img, .client-scroll-right-fast img { 
            height: 60px !important; 
            max-width: 120px !important;
          }
        }
      `}</style>
      
      <div className="w-full overflow-hidden bg-card py-8 space-y-6">
        {/* Row 1 - Left to Right */}
        <div className="flex">
          <div className="flex items-center client-scroll-left w-max">
            {duplicatedRow1.map((company, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0 mx-4">
                <img 
                  src={company.url} 
                  alt={company.name}
                  className="h-20 w-auto max-w-40 md:h-32 md:max-w-48 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex">
          <div className="flex items-center client-scroll-right w-max">
            {duplicatedRow2.map((company, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0 mx-4">
                <img 
                  src={company.url} 
                  alt={company.name}
                  className="h-20 w-auto max-w-40 md:h-32 md:max-w-48 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Left to Right (slower) */}
        <div className="flex">
          <div className="flex items-center client-scroll-left-slow w-max">
            {duplicatedRow3.map((company, index) => (
              <div key={`row3-${index}`} className="flex-shrink-0 mx-4">
                <img 
                  src={company.url} 
                  alt={company.name}
                  className="h-20 w-auto max-w-40 md:h-32 md:max-w-48 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 4 - Right to Left (faster) */}
        <div className="flex">
          <div className="flex items-center client-scroll-right-fast w-max">
            {duplicatedRow4.map((company, index) => (
              <div key={`row4-${index}`} className="flex-shrink-0 mx-4">
                <img 
                  src={company.url} 
                  alt={company.name}
                  className="h-20 w-auto max-w-40 md:h-32 md:max-w-48 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}