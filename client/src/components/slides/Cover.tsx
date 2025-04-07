import { motion } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";
import { 
  RiCodeSSlashLine, 
  RiRobotLine, 
  RiServerLine, 
  RiBrainLine, 
  RiPaletteLine 
} from "react-icons/ri";

export default function Cover({ isActive }: { isActive: boolean }) {
  return (
    <Slide id="cover" isActive={isActive} withGradient>
      <Blob color="accent" className="w-96 h-96 left-1/4 top-1/4" />
      <Blob color="secondary" className="w-80 h-80 right-1/4 bottom-1/4" />
      
      <div className="container mx-auto px-6 py-12 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center mb-6">
              <RiCodeSSlashLine className="text-5xl text-secondary mr-3 filter drop-shadow-[0_0_5px_rgba(128,90,213,0.5)]" />
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-white">
                Tu<span className="text-secondary">Web</span>.ai
              </h1>
              <RiRobotLine className="text-5xl text-accent ml-3 filter drop-shadow-[0_0_5px_rgba(128,90,213,0.5)]" />
            </div>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 italic">
              "Creando experiencias web inteligentes"
            </p>
            
            <motion.div 
              className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex flex-col items-center">
                <RiServerLine className="text-2xl mb-2 text-secondary" />
                <p className="text-xs text-gray-400">TECNOLOGÍA</p>
              </div>
              <div className="flex flex-col items-center">
                <RiBrainLine className="text-2xl mb-2 text-accent" />
                <p className="text-xs text-gray-400">INTELIGENCIA</p>
              </div>
              <div className="flex flex-col items-center">
                <RiPaletteLine className="text-2xl mb-2 text-secondary" />
                <p className="text-xs text-gray-400">DISEÑO</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
