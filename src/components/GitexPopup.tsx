import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Mail, Users } from 'lucide-react';
import gitexBg from '@/assets/gitex-popup-bg.png';

export const GitexPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/97144342221', '_blank');
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-5"
          style={{
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gitex-popup-title"
        >
          <motion.div
            className="relative w-full max-w-[95%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `url(${gitexBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5)',
            }}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              <motion.div
                className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full"
                style={{
                  background: '#8b5cf6',
                  filter: 'blur(80px)',
                  top: '-100px',
                  right: '-100px',
                }}
                animate={{
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full"
                style={{
                  background: '#3b82f6',
                  filter: 'blur(80px)',
                  bottom: '-100px',
                  left: '-100px',
                }}
                animate={{
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center z-10 transition-all duration-300 hover:rotate-90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              aria-label="Close popup"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Content */}
            <div 
              className="relative z-1 px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16 text-center text-white"
            >
              {/* Glassmorphism Container */}
              <div
                className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-7 md:mb-9"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                {/* Company Branding */}
                <motion.h1
                  id="gitex-popup-title"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight sm:tracking-wide mb-2 sm:mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  S2 Management Solutions
                </motion.h1>

                <motion.p
                  className="text-[10px] sm:text-xs md:text-sm tracking-wider sm:tracking-widest uppercase text-purple-200 mb-5 sm:mb-6 md:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  OpenText Cybersecurity Partner
                </motion.p>

                {/* Badge */}
                <motion.div
                  className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs tracking-wider uppercase mb-5 sm:mb-6 md:mb-8"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  We're Exhibiting at
                </motion.div>

              {/* Event Info */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider sm:tracking-widest mb-1 sm:mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #fbbf24, #ec4899, #09D7FB, #FDDF55, #fbbf24)',
                  backgroundSize: '200% auto',
                  animation: 'gradientShift 3s ease infinite',
                  filter: 'drop-shadow(0 0 20px rgba(9, 215, 251, 0.6))',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                GITEX GLOBAL
              </motion.h2>

                <motion.p
                  className="text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest text-amber-400 mb-6 sm:mb-7 md:mb-9"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  2025
                </motion.p>

              {/* SEO Headers - Hidden but accessible */}
              <h2 className="sr-only">S2 Management Solutions Attending GITEX Global 2025 Dubai</h2>
              <h3 className="sr-only">OpenText Cybersecurity Partner Booth - Hall 7 Booth C30 Dubai World Trade Centre</h3>

              {/* Event Details */}
              <motion.div
                className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                  <div className="text-center sm:text-left">
                    <span className="block text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                      October 13-17, 2025
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-2 sm:gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 sm:mt-0.5" />
                  <div className="text-center sm:text-left">
                    <span className="block text-sm sm:text-base font-semibold">
                      Dubai World Trade Centre
                    </span>
                    <span className="block text-sm sm:text-base font-semibold text-amber-400 mt-1 sm:mt-2">
                      Hall 7, Booth C30
                    </span>
                  </div>
                </div>
              </motion.div>
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6">
                  Visit Us at the OpenText Booth
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={handleWhatsApp}
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:shadow-xl"
                    style={{
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      color: '#ffffff',
                      boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
                    }}
                  >
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    WhatsApp Us
                  </button>

                  <a
                    href="mailto:admin@s2mgt.com"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Email Us
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Accent Bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{
                background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 50%, #fbbf24 100%)',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
