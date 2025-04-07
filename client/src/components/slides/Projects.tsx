import { motion } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";

export default function Projects({ isActive }: { isActive: boolean }) {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&h=400",
      title: "Plataforma Educativa",
      client: "Fernando",
      description: "Una plataforma educativa completa con aulas virtuales y seguimiento de estudiantes.",
    },
    {
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&h=400",
      title: "E-commerce de Moda",
      client: "Mónica",
      description: "Tienda online con catálogo inteligente y recomendaciones personalizadas.",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",
      title: "Dashboard Financiero",
      client: "Valentín FX",
      description: "Dashboard con indicadores en tiempo real y analíticas avanzadas.",
    },
  ];

  return (
    <Slide id="projects" isActive={isActive} withGradient>
      <Blob color="secondary" className="w-96 h-96 right-1/4 bottom-1/3" />
      
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="font-heading text-3xl md:text-4xl mb-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Proyectos / Casos de éxito
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-4 rounded-xl overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <div className="aspect-[3/2] bg-gray-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Imagen de proyecto</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent flex items-end">
                    <p className="text-white p-3 font-semibold">{project.title}</p>
                  </div>
                </div>
                <div className="p-2">
                  <p className="font-heading font-bold text-lg">{project.client}</p>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
