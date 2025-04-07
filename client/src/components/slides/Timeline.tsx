import { useState } from "react";
import { motion } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";
import {
  RiCalendarLine,
  RiSearchEyeLine,
  RiCodeSSlashLine,
  RiTestTubeLine,
  RiRocketLine,
  RiSettingsLine,
  RiTimeLine,
} from "react-icons/ri";

export default function Timeline({ isActive }: { isActive: boolean }) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const timelineSteps = [
    {
      icon: <RiSearchEyeLine className="text-xl text-white" />,
      color: "bg-blue-500",
      title: "Descubrimiento",
      duration: "1-2 semanas",
      description:
        "Analizamos a fondo tus necesidades, objetivos de negocio y audiencia. Investigamos tu sector y competencia para definir una estrategia digital óptima.",
      tasks: [
        "Entrevistas con stakeholders",
        "Investigación de mercado",
        "Análisis de competidores",
        "Definición de objetivos SMART",
        "Elaboración de buyer personas",
      ],
    },
    {
      icon: <RiCodeSSlashLine className="text-xl text-white" />,
      color: "bg-indigo-500",
      title: "Diseño y Planificación",
      duration: "2-3 semanas",
      description:
        "Creamos wireframes, prototipos interactivos y diseños visuales adaptados a tu marca. Definimos la arquitectura técnica y planificamos el desarrollo.",
      tasks: [
        "Arquitectura de información",
        "Wireframing y prototipos",
        "Diseño visual UI/UX",
        "Selección de tecnologías",
        "Planificación de sprints",
      ],
    },
    {
      icon: <RiCodeSSlashLine className="text-xl text-white" />,
      color: "bg-purple-500",
      title: "Desarrollo",
      duration: "4-8 semanas",
      description:
        "Implementamos tu proyecto siguiendo metodologías ágiles. Desarrollamos tanto el frontend como el backend, integrando funcionalidades AI avanzadas.",
      tasks: [
        "Desarrollo frontend responsive",
        "Implementación backend",
        "Integración de IA y automatizaciones",
        "Desarrollo de CMS/admin",
        "Revisiones periódicas con cliente",
      ],
    },
    {
      icon: <RiTestTubeLine className="text-xl text-white" />,
      color: "bg-pink-500",
      title: "Testing y Refinamiento",
      duration: "1-2 semanas",
      description:
        "Realizamos pruebas exhaustivas para garantizar la calidad, rendimiento y seguridad. Optimizamos la velocidad y experiencia de usuario.",
      tasks: [
        "Testing de funcionalidades",
        "Pruebas de rendimiento",
        "Optimización SEO",
        "Pruebas de seguridad",
        "Validación multiplataforma",
      ],
    },
    {
      icon: <RiRocketLine className="text-xl text-white" />,
      color: "bg-red-500",
      title: "Lanzamiento",
      duration: "1 semana",
      description:
        "Desplegamos tu proyecto en producción, configurando servidores, dominio, SSL y todo lo necesario para un lanzamiento exitoso.",
      tasks: [
        "Configuración de servidores",
        "Migración de contenido",
        "Configuración de analíticas",
        "Implementación de SEO final",
        "Control de calidad pre-lanzamiento",
      ],
    },
    {
      icon: <RiSettingsLine className="text-xl text-white" />,
      color: "bg-orange-500",
      title: "Mantenimiento y Evolución",
      duration: "Continuo",
      description:
        "Proporcionamos soporte continuo, actualizaciones, monitoreo de rendimiento y mejoras evolutivas basadas en datos y feedback real.",
      tasks: [
        "Actualizaciones de seguridad",
        "Monitoreo de rendimiento",
        "Análisis de métricas de usuario",
        "Implementación de mejoras continuas",
        "Escalamiento según demanda",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Slide id="timeline" isActive={isActive} withGradient>
      <Blob color="accent" className="w-[600px] h-[600px] -right-48 -bottom-32 opacity-20" />
      <Blob color="secondary" className="w-[500px] h-[500px] -left-24 top-12 opacity-20" />

      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <RiTimeLine className="text-3xl text-secondary" />
              </div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-white">
              Cronograma de Proyecto
            </h2>
            <p className="text-xl text-gray-300">
              Así es cómo trabajamos juntos para crear tu próximo proyecto web
            </p>
          </motion.div>

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
          >
            {/* Línea central del timeline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-accent to-secondary/50 transform -translate-x-1/2 rounded-full hidden md:block" />

            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative mb-14 md:mb-24 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Línea del punto al contenido (solo en mobil) */}
                <div className="absolute top-8 left-8 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-secondary/0 md:hidden h-full" />

                {/* Punto del timeline */}
                <div
                  className={`absolute ${
                    index % 2 === 0
                      ? "md:right-0 md:translate-x-1/2"
                      : "md:left-0 md:-translate-x-1/2"
                  } top-0 w-16 h-16 z-10 left-0 md:left-1/2 md:transform md:-translate-x-1/2 transition-all duration-300 ${
                    hoveredStep === index ? "scale-110" : ""
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg shadow-${step.color}/30`}
                  >
                    {step.icon}
                  </div>
                  <div className="text-sm font-medium text-gray-300 mt-2 md:hidden">{step.duration}</div>
                </div>

                {/* Contenido */}
                <div
                  className={`pl-24 md:pl-0 pr-0 ${
                    index % 2 === 0 ? "md:pr-10" : "md:pl-10"
                  } transition-all duration-300 ${hoveredStep === index ? "md:scale-105" : ""}`}
                >
                  <div className="bg-primary-dark/40 backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-xl">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-heading text-xl text-white font-bold">{step.title}</h3>
                      <span className="text-sm font-medium text-secondary hidden md:block">{step.duration}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <div className="border-t border-white/10 pt-4 mt-4">
                      <h4 className="text-white text-sm font-semibold mb-2">Tareas principales:</h4>
                      <ul className="space-y-1">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="text-gray-300 text-sm flex items-center">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}