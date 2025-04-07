import { motion } from "framer-motion";
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import { 
  RiTimerFlashLine, 
  RiFileCopyLine, 
  RiMoneyDollarCircleLine 
} from "react-icons/ri";

export default function Problem({ isActive }: { isActive: boolean }) {
  return (
    <Slide id="problem" isActive={isActive}>
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="font-heading text-3xl md:text-4xl mb-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            El Problema
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 mb-12 rounded-xl backdrop-blur-lg bg-primary-dark/70 border border-white/10">
              <h3 className="text-2xl md:text-4xl font-bold mb-8 text-center text-white">
                <span className="text-warning">"El 75% de las páginas web</span> no generan resultados reales."
              </h3>
            </Card>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <RiTimerFlashLine className="text-3xl text-danger mr-3" />
                <h4 className="text-xl font-semibold">Sitios deficientes</h4>
              </div>
              <p className="text-gray-300">Sitios lentos, mal diseñados o sin estrategia clara detrás.</p>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <RiFileCopyLine className="text-3xl text-danger mr-3" />
                <h4 className="text-xl font-semibold">Plantillas genéricas</h4>
              </div>
              <p className="text-gray-300">Soluciones preconfeccionadas que no conectan con el cliente ideal.</p>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <RiMoneyDollarCircleLine className="text-3xl text-danger mr-3" />
                <h4 className="text-xl font-semibold">Pérdida económica</h4>
              </div>
              <p className="text-gray-300">Empresas que pierden dinero por no tener presencia digital profesional.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
