import { motion } from "framer-motion";
import Slide from "../Slide";

export default function Process({ isActive }: { isActive: boolean }) {
  const processSteps = [
    {
      number: "1",
      title: "Reunión y diagnóstico",
      description:
        "Entendemos tus objetivos, analizamos tu situación actual y definimos la estrategia.",
    },
    {
      number: "2",
      title: "Propuesta visual y técnica",
      description:
        "Creamos wireframes, seleccionamos tecnologías y definimos la arquitectura.",
    },
    {
      number: "3",
      title: "Desarrollo iterativo",
      description:
        "Trabajamos con metodologías ágiles, mostrando avances frecuentes y ajustando según feedback.",
    },
    {
      number: "4",
      title: "Revisión conjunta",
      description:
        "Evaluamos juntos el producto final, realizamos pruebas y últimos ajustes.",
    },
    {
      number: "5",
      title: "Lanzamiento y soporte",
      description:
        "Implementamos en producción y ofrecemos soporte continuo para asegurar el éxito.",
    },
  ];

  return (
    <Slide id="process" isActive={isActive}>
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-heading text-3xl md:text-4xl mb-12 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Proceso de trabajo
          </motion.h2>

          <div className="relative pl-16 space-y-12">
            <div className="absolute w-2 bg-gradient-to-b from-transparent via-secondary to-transparent h-full left-[25px] top-0"></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-mono font-bold">{step.number}</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
