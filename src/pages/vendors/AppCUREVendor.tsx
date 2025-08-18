import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
export default function AppCUREVendorPage() {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <motion.section className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center p-4 md:p-8 relative" style={{
      backgroundImage: `url('https://appcure.io/wp-content/uploads/2025/07/home-page-section-1.1.jpg')`
    }} initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.8
    }}>
        <div className="max-w-7xl mx-auto flex items-center w-full">
          <motion.div className="bg-white/95 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl max-w-full md:max-w-2xl" initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 md:mb-8 text-gray-800" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                appCURE
              </span>{" "}
              + Industry Leaders Accelerate Migration to Modern Windows
            </motion.h1>
            
            <motion.p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-10 text-gray-600" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }}>
              Struggling to migrate from older versions of Windows and your applications are holding you back? Whether it's Client, Server, cloud or even hybrid{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                appCURE
              </span>{" "}
              is partnering with the leading names in the industry to support your digital transformation projects at speed.
            </motion.p>
            
            <motion.a href="/contact" className="inline-flex items-center gap-2 md:gap-3 bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              Discover
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Industrialisation Hero Section */}
      

      {/* CURE Methodology Section */}
      <motion.section className="bg-white py-24 px-4" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 0.8
    }} viewport={{
      once: true
    }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-center text-4xl md:text-5xl font-bold text-purple-600 mb-16" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            The <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">CURE</span> Methodology
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: "C",
            title: "Capture",
            description: "Find the installed parts of the application and capture them, ready to be moved to the target Operating System.",
            delay: 0.1
          }, {
            icon: "U",
            title: "Update",
            description: "Look at the differences between the \"today\" and where it is being delivered to.",
            delay: 0.2
          }, {
            icon: "R",
            title: "Remediate",
            description: "Find errors and apply fixes.",
            delay: 0.3
          }, {
            icon: "E",
            title: "Execute",
            description: "Deliver applications to your chosen vendor/platform.",
            delay: 0.4
          }].map((item, index) => <motion.div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-200/50" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: item.delay
          }} viewport={{
            once: true
          }} whileHover={{
            y: -10
          }}>
                {/* Enhanced top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-t-3xl" />
                
                {/* Enhanced icon with better spacing and shadow */}
                <div className="relative mb-8 mt-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl mb-2 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  {/* Decorative glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4">{item.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
              </motion.div>)}
          </div>
        </div>
      </motion.section>

      {/* Quote Section */}
      <motion.section className="bg-black text-white py-16 px-4 relative overflow-hidden" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 0.8
    }} viewport={{
      once: true
    }}>
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="black-grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="#333333" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(#black-grid)"/></svg>')}")`
        }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8" />
          <motion.p className="text-2xl md:text-3xl font-light italic opacity-90" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            "Transforming applications with precision, speed, and reliability."
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-8" />
        </div>
      </motion.section>

      {/* Production Section */}
      <motion.section className="bg-black text-white py-24 px-4 relative overflow-hidden" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 0.8
    }} viewport={{
      once: true
    }}>
        {/* Background pattern similar to the reference */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dark-grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="#333333" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(#dark-grid)"/></svg>')}")`
        }} />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
                <span className="text-sm text-sky-400 font-medium">Live Production Environment</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Reduce Time to <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Production</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Moving applications at speed, understanding the issues, offering solutions and automating creation of the package, the format and the volume.
              </p>
              
              <ul className="space-y-4">
                {["Accelerated migration timelines", "Automated package creation", "Comprehensive issue resolution", "Scalable volume processing"].map((feature, index) => <motion.li key={index} className="flex items-center text-lg text-gray-200" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.4,
                delay: index * 0.1
              }} viewport={{
                once: true
              }}>
                    <span className="text-2xl mr-4 text-blue-400">⚡</span>
                    {feature}
                  </motion.li>)}
              </ul>
            </motion.div>

            <motion.div className="text-center" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <motion.img src="/lovable-uploads/75204d0b-a5d7-45c6-a0c0-e2cc1622b43e.png" alt="appCURE Application Transformation Workflow" className="w-full max-w-6xl h-auto mt-10 rounded-3xl shadow-2xl transition-transform duration-300" loading="lazy" whileHover={{
              scale: 1.02
            }} />
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <Footer />
    </div>;
}