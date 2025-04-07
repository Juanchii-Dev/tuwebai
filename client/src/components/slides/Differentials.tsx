import { motion } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";
import {
  RiFingerprintLine,
  RiBrainLine,
  RiSearchLine,
  RiPaletteLine,
  RiCustomerService2Line,
} from "react-icons/ri";

export default function Differentials({ isActive }: { isActive: boolean }) {
  const differentials = [
    {
      icon: <RiFingerprintLine className="text-2xl text-secondary" />,
      title: "Desarrollo 100% a medida",
      description:
        "Soluciones personalizadas que se ajustan exactamente a tus necesidades, no plantillas genéricas.",
    },
    {
      icon: <RiBrainLine className="text-2xl text-secondary" />,
      title: "IA aplicada",
      description:
        "Algoritmos inteligentes que optimizan la estructura y generan contenido relevante.",
    },
    {
      icon: <RiSearchLine className="text-2xl text-secondary" />,
      title: "SEO técnico avanzado",
      description:
        "Optimización para buscadores desde el primer día, asegurando visibilidad.",
    },
    {
      icon: <RiPaletteLine className="text-2xl text-secondary" />,
      title: "Diseño visual premium",
      description:
        "Interfaces elegantes y adaptables que destacan tu marca en cualquier dispositivo.",
    },
  ];

  return (
    <Slide id="differentials" isActive={isActive} withGradient>
      <Blob color="accent" className="w-80 h-80 left-1/4 bottom-1/4" />

      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-4 text-white">
              Diferenciales
            </h2>
            <h3 className="text-xl md:text-2xl mb-12 text-gray-300">
              ¿Por qué TuWeb.ai?
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentials.map((differential, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary to-accent opacity-20 rounded-bl-full transition-all duration-300 group-hover:opacity-40" />
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/20 mr-4">
                    {differential.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{differential.title}</h4>
                </div>
                <p className="text-gray-300 pl-16">{differential.description}</p>
              </motion.div>
            ))}

            <motion.div
              className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl col-span-1 md:col-span-2 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary to-accent opacity-20 rounded-bl-full transition-all duration-300 group-hover:opacity-40" />
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/20 mr-4">
                  <RiCustomerService2Line className="text-2xl text-secondary" />
                </div>
                <h4 className="text-xl font-semibold">
                  Soporte real y acompañamiento
                </h4>
              </div>
              <p className="text-gray-300 pl-16">
                No te dejamos solo. Nuestro equipo te acompaña durante todo el
                proceso y más allá del lanzamiento.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
