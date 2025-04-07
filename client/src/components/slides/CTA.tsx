import { motion } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";
import CardHover from "../ui/card-hover";
import {
  RiCalendarLine,
  RiMovieLine,
  RiMailSendLine,
  RiCodeSSlashLine,
  RiRobotLine,
} from "react-icons/ri";

export default function CTA({ isActive }: { isActive: boolean }) {
  const ctaButtons = [
    {
      icon: <RiCalendarLine className="text-3xl text-secondary group-hover:text-secondary" />,
      title: "Agenda tu reunión",
      description: "Consulta gratuita para analizar tu proyecto",
      link: "#contact",
      color: "secondary",
    },
    {
      icon: <RiMovieLine className="text-3xl text-accent group-hover:text-accent" />,
      title: "Ver demo",
      description: "Explora nuestros trabajos en detalle",
      link: "#demo",
      color: "accent",
    },
    {
      icon: <RiMailSendLine className="text-3xl text-secondary group-hover:text-secondary" />,
      title: "Contactanos ahora",
      description: "Respuesta en menos de 24 horas",
      link: "#contact-now",
      color: "secondary",
    },
  ];

  return (
    <Slide id="cta" isActive={isActive} withGradient>
      <Blob color="accent" className="w-96 h-96 left-1/3 top-1/3" />
      <Blob color="secondary" className="w-80 h-80 right-1/3 bottom-1/3" />
      
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="font-heading text-4xl md:text-5xl mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Querés tu propia web poderosa e inteligente?
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Es el momento de transformar tu presencia digital y destacar entre la competencia.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ctaButtons.map((button, index) => (
              <motion.a
                key={index}
                href={button.link}
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <CardHover hoverColor={button.color as "secondary" | "accent"} className="text-center h-full">
                  <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-white">
                    {button.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{button.title}</h4>
                  <p className="text-sm text-gray-300 group-hover:text-white">{button.description}</p>
                </CardHover>
              </motion.a>
            ))}
          </div>
          
          <motion.div
            className="mt-16 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <RiCodeSSlashLine className="text-3xl text-secondary mr-1" />
              <h3 className="font-heading text-2xl font-bold">
                Tu<span className="text-secondary">Web</span>.ai
              </h3>
              <RiRobotLine className="text-3xl text-accent ml-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
