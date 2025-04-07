import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";
import { 
  RiArrowRightLine, 
  RiCloseCircleLine, 
  RiCodeLine, 
  RiTimerLine,
  RiRocketLine,
  RiLayoutGridLine,
  RiAwardLine
} from "react-icons/ri";

export default function Projects({ isActive }: { isActive: boolean }) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&h=400",
      title: "Plataforma Educativa Avanzada",
      client: "Academia Futura",
      description: "Una plataforma educativa completa con aulas virtuales y seguimiento de estudiantes.",
      extended: {
        challenge: "Crear una plataforma educativa que integrara funcionalidades avanzadas de seguimiento del progreso de estudiantes y personalización del aprendizaje.",
        solution: "Desarrollamos un sistema con IA para recomendar contenido basado en el perfil de cada estudiante, incluyendo análisis de datos para identificar áreas de mejora.",
        results: "Incremento del 42% en la retención de estudiantes y 67% de mejora en resultados académicos promedio.",
        technologies: ["React", "Node.js", "MongoDB", "TensorFlow"],
        timeline: "3 meses"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&h=400",
      title: "E-commerce Inteligente",
      client: "Moda Express",
      description: "Tienda online con catálogo inteligente y recomendaciones personalizadas.",
      extended: {
        challenge: "Transformar una tienda online tradicional en una experiencia personalizada con recomendaciones precisas.",
        solution: "Implementamos un sistema de recomendación basado en IA que analiza comportamientos de navegación y compra para sugerir productos relevantes.",
        results: "Aumento del 78% en valor promedio de compra y reducción del 45% en tasa de abandono del carrito.",
        technologies: ["Next.js", "Strapi CMS", "PostgreSQL", "Python"],
        timeline: "2.5 meses"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",
      title: "Dashboard Financiero",
      client: "Inversiones Globales",
      description: "Dashboard con indicadores en tiempo real y analíticas avanzadas.",
      extended: {
        challenge: "Visualizar datos financieros complejos de forma intuitiva y accesible para facilitar la toma de decisiones.",
        solution: "Creamos un dashboard interactivo con visualizaciones avanzadas que transforma datos complejos en insights accionables.",
        results: "Reducción del 65% en tiempo de análisis y 32% de mejora en precisión de proyecciones financieras.",
        technologies: ["Vue.js", "D3.js", "Express", "MySQL"],
        timeline: "4 meses"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=400",
      title: "App de Bienestar",
      client: "VidaPlena",
      description: "Aplicación para seguimiento de hábitos saludables con coaching personalizado.",
      extended: {
        challenge: "Desarrollar una aplicación que motivara a los usuarios a mantener hábitos saludables de forma consistente.",
        solution: "Creamos una app con gamificación, coaching personalizado mediante IA y comunidad de apoyo integrada.",
        results: "Retención de usuarios del 71% después de 6 meses y 88% de usuarios reportando mejoras en su bienestar.",
        technologies: ["React Native", "Firebase", "Node.js", "TensorFlow Lite"],
        timeline: "5 meses"
      }
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-4 rounded-xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedProject(index)}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)",
                  borderColor: "rgba(128, 90, 213, 0.5)" 
                }}
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
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center text-secondary text-sm font-medium group-hover:text-accent transition-colors">
                    <span>Ver detalles</span>
                    <RiArrowRightLine className="ml-1 group-hover:ml-2 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <AnimatePresence>
            {selectedProject !== null && (
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div 
                  className="bg-primary-dark border border-white/10 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-heading text-2xl text-white">
                        {projects[selectedProject].title}
                      </h3>
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white"
                      >
                        <RiCloseCircleLine className="text-2xl" />
                      </button>
                    </div>
                    
                    <div className="relative mb-6 overflow-hidden rounded-lg">
                      <div className="aspect-[16/9] bg-gray-700 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">Imagen de proyecto</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-2 text-secondary">Cliente</h4>
                      <p className="text-white">{projects[selectedProject].client}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-2 text-secondary">Desafío</h4>
                      <p className="text-gray-300">{projects[selectedProject].extended.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-2 text-secondary">Solución</h4>
                      <p className="text-gray-300">{projects[selectedProject].extended.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-2 text-secondary">Resultados</h4>
                      <p className="text-gray-300">{projects[selectedProject].extended.results}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-2 text-secondary">Tecnologías</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].extended.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-secondary/20 text-white text-sm rounded-full flex items-center"
                          >
                            <RiCodeLine className="mr-1 text-secondary" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex items-center mr-6">
                        <RiTimerLine className="text-secondary mr-2" />
                        <span className="text-gray-300 text-sm">
                          Tiempo: {projects[selectedProject].extended.timeline}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <RiRocketLine className="text-accent mr-2" />
                        <span className="text-gray-300 text-sm">
                          Proyecto completado
                        </span>
                      </div>
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
