import { motion } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RiQuestionAnswerLine } from "react-icons/ri";

export default function FAQ({ isActive }: { isActive: boolean }) {
  const faqItems = [
    {
      question: "¿Qué tecnologías utilizan para el desarrollo web?",
      answer:
        "Trabajamos con las tecnologías más modernas y eficientes del mercado. Para el frontend utilizamos React, Next.js, Vue.js y Angular. Para el backend nos especializamos en Node.js, Python (Django/Flask) y PHP (Laravel). También implementamos soluciones JAMstack con Gatsby y bases de datos SQL y NoSQL según las necesidades del proyecto.",
    },
    {
      question: "¿Cómo integran la IA en los sitios web?",
      answer:
        "Incorporamos inteligencia artificial de diferentes maneras: chatbots personalizados con procesamiento de lenguaje natural, sistemas de recomendación basados en el comportamiento del usuario, análisis predictivo para optimizar la experiencia de usuario, personalización de contenido en tiempo real y automatización de procesos mediante aprendizaje automático. Todo adaptado a las necesidades específicas de tu negocio.",
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto completo?",
      answer:
        "El tiempo de desarrollo varía según la complejidad y alcance de cada proyecto. Un sitio web informativo básico puede estar listo en 2-3 semanas, mientras que una plataforma compleja con funcionalidades avanzadas e integraciones de IA puede llevar entre 2-4 meses. Siempre ofrecemos un cronograma detallado en nuestra propuesta inicial.",
    },
    {
      question: "¿Ofrecen mantenimiento después del lanzamiento?",
      answer:
        "Sí, ofrecemos diferentes planes de mantenimiento post-lanzamiento que incluyen actualizaciones de seguridad, monitoreo de rendimiento, copias de seguridad periódicas, soporte técnico y actualizaciones menores de contenido. También podemos desarrollar nuevas funcionalidades o mejoras según las necesidades evolutivas de tu negocio.",
    },
    {
      question: "¿Cómo garantizan que el sitio web sea responsivo y rápido?",
      answer:
        "Utilizamos metodologías de desarrollo mobile-first y diseño responsivo para asegurar que todos nuestros sitios se adapten perfectamente a cualquier dispositivo. Implementamos técnicas de optimización como lazy loading, compresión de imágenes, minificación de código, y aprovechamos CDNs para distribuir el contenido. Además, realizamos pruebas de rendimiento exhaustivas con herramientas como Lighthouse y GTmetrix.",
    },
    {
      question: "¿Qué prácticas SEO implementan en sus desarrollos?",
      answer:
        "Implementamos las mejores prácticas SEO desde la fase de diseño y desarrollo: estructura semántica del HTML, optimización de metadatos, URLs amigables, esquemas de datos estructurados, optimización de imágenes, mejoras de velocidad de carga, configuración adecuada para móviles y generación de sitemaps. También integramos herramientas de análisis para monitorizar el rendimiento SEO continuo.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Slide id="faq" isActive={isActive} withGradient>
      <Blob color="accent" className="w-[500px] h-[500px] -left-48 bottom-0 opacity-20" />
      <Blob color="secondary" className="w-[400px] h-[400px] -right-24 top-20 opacity-20" />

      <div className="container mx-auto px-6 py-12 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <RiQuestionAnswerLine className="text-3xl text-secondary" />
              </div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-white">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-300">
              Respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 mt-8"
            variants={containerVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
          >
            <Accordion type="single" collapsible className="bg-transparent border-none">
              {faqItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants} transition={{ duration: 0.5 }}>
                  <AccordionItem value={`item-${index}`} className="border-white/10 backdrop-blur-lg">
                    <AccordionTrigger className="text-white hover:text-secondary text-left py-4 px-6 bg-primary-dark/40 hover:bg-primary-dark/60 hover:no-underline rounded-t-lg text-lg font-medium transition-all">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-primary-dark/30 p-6 text-gray-300 rounded-b-lg border-t border-white/10">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}