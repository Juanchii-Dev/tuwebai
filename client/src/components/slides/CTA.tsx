import { useState } from "react";
import { motion } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";
import CardHover from "../ui/card-hover";
import ContactForm from "../ContactForm";
import {
  RiCalendarLine,
  RiMovieLine,
  RiMailSendLine,
  RiCodeSSlashLine,
  RiRobotLine,
  RiPhoneLine,
  RiMapPinLine,
  RiGlobalLine,
  RiWhatsappLine,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

export default function CTA({ isActive }: { isActive: boolean }) {
  const [activeTab, setActiveTab] = useState<"options" | "contact">("options");
  
  const ctaButtons = [
    {
      icon: <RiCalendarLine className="text-3xl text-secondary group-hover:text-white" />,
      title: "Agenda tu reunión",
      description: "Consulta gratuita para analizar tu proyecto",
      link: "#contact",
      color: "secondary",
      onClick: () => setActiveTab("contact"),
    },
    {
      icon: <RiMovieLine className="text-3xl text-accent group-hover:text-white" />,
      title: "Ver demo",
      description: "Explora nuestros trabajos en detalle",
      link: "#demo",
      color: "accent",
    },
    {
      icon: <RiMailSendLine className="text-3xl text-secondary group-hover:text-white" />,
      title: "Contáctanos ahora",
      description: "Respuesta en menos de 24 horas",
      onClick: () => setActiveTab("contact"),
      color: "secondary",
    },
  ];

  const contactInfo = [
    {
      icon: <RiPhoneLine className="text-xl text-secondary" />,
      label: "Teléfono",
      value: "+34 (555) 123-4567",
    },
    {
      icon: <RiMailSendLine className="text-xl text-secondary" />,
      label: "Email",
      value: "info@tuweb.ai",
    },
    {
      icon: <RiMapPinLine className="text-xl text-secondary" />,
      label: "Dirección",
      value: "Calle Innovación 42, Madrid",
    },
    {
      icon: <RiGlobalLine className="text-xl text-secondary" />,
      label: "Web",
      value: "www.tuweb.ai",
    },
  ];

  const socialLinks = [
    { icon: <RiWhatsappLine />, link: "#" },
    { icon: <RiFacebookCircleLine />, link: "#" },
    { icon: <RiInstagramLine />, link: "#" },
    { icon: <RiLinkedinBoxLine />, link: "#" },
  ];

  return (
    <Slide id="cta" isActive={isActive} withGradient>
      <Blob color="accent" className="w-96 h-96 left-1/3 top-1/3" />
      <Blob color="secondary" className="w-80 h-80 right-1/3 bottom-1/3" />
      
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-heading text-4xl md:text-5xl mb-6 text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Querés tu propia web poderosa e inteligente?
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Es el momento de transformar tu presencia digital y destacar entre la competencia.
          </motion.p>
          
          <AnimatedTabContent activeTab={activeTab}>
            {{
              options: (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ctaButtons.map((button, index) => (
                    <motion.div
                      key={index}
                      className="block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      onClick={button.onClick}
                    >
                      <CardHover hoverColor={button.color as "secondary" | "accent"} className="text-center h-full">
                        <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/80">
                          {button.icon}
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{button.title}</h4>
                        <p className="text-sm text-gray-300 group-hover:text-white">{button.description}</p>
                      </CardHover>
                    </motion.div>
                  ))}
                </div>
              ),
              contact: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
                      <div className="space-y-4">
                        {contactInfo.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">{item.label}</p>
                              <p className="text-white">{item.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <p className="text-sm text-gray-400 mb-3">Síguenos en redes sociales</p>
                        <div className="flex space-x-4">
                          {socialLinks.map((social, index) => (
                            <a 
                              key={index} 
                              href={social.link}
                              className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-white hover:bg-secondary/40 transition-colors"
                            >
                              {social.icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setActiveTab("options")}
                      className="text-secondary hover:text-accent transition-colors flex items-center"
                    >
                      <span>Volver a opciones</span>
                    </button>
                  </motion.div>
                  
                  <ContactForm />
                </div>
              ),
            }}
          </AnimatedTabContent>
          
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

// Helper component for animating between tabs
interface AnimatedTabContentProps {
  activeTab: string;
  children: {
    [key: string]: React.ReactNode;
  };
}

function AnimatedTabContent({ activeTab, children }: AnimatedTabContentProps) {
  return (
    <div className="relative">
      {Object.keys(children).map((tabKey) => (
        <div
          key={tabKey}
          className={`transition-all duration-300 ${
            activeTab === tabKey ? "opacity-100 z-10" : "opacity-0 absolute inset-0 z-0"
          }`}
        >
          {children[tabKey]}
        </div>
      ))}
    </div>
  );
}
