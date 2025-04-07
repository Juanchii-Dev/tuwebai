import { motion } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";
import { Card } from "@/components/ui/card";
import { 
  RiCodeBoxLine, 
  RiBrainLine, 
  RiUserHeartLine, 
  RiCustomerService2Line 
} from "react-icons/ri";

export default function Solution({ isActive }: { isActive: boolean }) {
  return (
    <Slide id="solution" isActive={isActive} withGradient>
      <Blob color="secondary" className="w-96 h-96 right-1/4 top-1/3" />
      
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="font-heading text-3xl md:text-4xl mb-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestra Solución
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 rounded-xl mb-12 backdrop-blur-lg bg-primary-dark/70 border border-white/10">
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                <span className="font-heading font-bold text-secondary">TuWeb.ai</span> crea sitios web inteligentes, visualmente poderosos y centrados en objetivos reales.
              </p>
            </Card>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <RiCodeBoxLine className="text-3xl text-secondary mt-1 mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Tecnología de última generación</h4>
                <p className="text-gray-300">Desarrollo con las mejores herramientas y frameworks del mercado.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <RiBrainLine className="text-3xl text-accent mt-1 mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-2">IA para mejorar rendimiento</h4>
                <p className="text-gray-300">Algoritmos que optimizan la experiencia y el contenido.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <RiUserHeartLine className="text-3xl text-secondary mt-1 mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Diseño centrado en el usuario</h4>
                <p className="text-gray-300">Experiencias UX/UI que conectan y convierten visitantes.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <RiCustomerService2Line className="text-3xl text-accent mt-1 mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-2">Soporte personalizado</h4>
                <p className="text-gray-300">Acompañamiento continuo y estrategias de crecimiento.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
