import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";
import { RiPlayCircleFill, RiCloseCircleLine } from "react-icons/ri";

export default function VideoPresentation({ isActive }: { isActive: boolean }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Slide id="video-presentation" isActive={isActive} withGradient>
      <Blob color="accent" className="w-96 h-96 right-1/4 bottom-1/3 opacity-20" />
      <Blob color="secondary" className="w-80 h-80 left-1/4 top-1/3 opacity-20" />
      
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="font-heading text-3xl md:text-4xl mb-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Conoce TuWeb.ai
          </motion.h2>

          <motion.p
            className="text-xl mb-12 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descubre cómo transformamos ideas en experiencias web únicas y poderosas
          </motion.p>
          
          <motion.div 
            className="relative rounded-xl overflow-hidden backdrop-blur-lg bg-primary-dark/50 border border-white/10 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setShowVideo(true)}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)",
            }}
          >
            <div className="aspect-video bg-gray-800 relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <RiPlayCircleFill className="text-7xl text-secondary hover:text-accent transition-colors mb-4" />
                <p className="text-white text-xl font-semibold">Ver presentación</p>
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-secondary/80 text-white text-sm rounded">
                2:45
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Tecnología</h3>
              <p className="text-sm text-gray-400">Descubre nuestra stack tecnológica y procesos de desarrollo</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Resultados</h3>
              <p className="text-sm text-gray-400">Conoce cómo ayudamos a nuestros clientes a crecer</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Equipo</h3>
              <p className="text-sm text-gray-400">Presentamos a los expertos detrás de cada solución</p>
            </div>
          </motion.div>
          
          <AnimatePresence>
            {showVideo && (
              <motion.div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowVideo(false)}
              >
                <motion.div 
                  className="relative w-full max-w-5xl"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                >
                  <button 
                    className="absolute -top-12 right-0 text-white hover:text-gray-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowVideo(false);
                    }}
                  >
                    <RiCloseCircleLine className="text-3xl" />
                  </button>
                  
                  <div className="aspect-video bg-black rounded-lg relative">
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <p className="text-gray-400 text-lg">Video presentación</p>
                      <p className="text-gray-600 text-sm mt-2">
                        (Esta es una simulación, aquí iría un video real)
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Slide>
  );
}