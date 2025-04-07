import { motion } from "framer-motion";
import Slide from "../Slide";
import {
  RiCodeSSlashLine,
  RiLayoutMasonryLine,
  RiAwardLine,
  RiRobotLine,
} from "react-icons/ri";

export default function Team({ isActive }: { isActive: boolean }) {
  const teamMembers = [
    {
      icon: <RiCodeSSlashLine className="text-3xl" />,
      title: "Fullstack Developers",
      description:
        "Expertos en tecnologías front-end y back-end que crean soluciones robustas y escalables.",
    },
    {
      icon: <RiLayoutMasonryLine className="text-3xl" />,
      title: "Diseñadores UX/UI",
      description:
        "Creadores de experiencias visuales atractivas que conectan con los usuarios y optimizan la conversión.",
    },
    {
      icon: <RiAwardLine className="text-3xl" />,
      title: "Estrategas de marca",
      description:
        "Expertos en posicionamiento y comunicación que hacen brillar tu propuesta de valor.",
    },
    {
      icon: <RiRobotLine className="text-3xl" />,
      title: "Especialistas en IA",
      description:
        "Implementadores de inteligencia artificial y automatizaciones que potencian tu plataforma.",
    },
  ];

  return (
    <Slide id="team" isActive={isActive}>
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-heading text-3xl md:text-4xl mb-12 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestro equipo
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  {member.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{member.title}</h4>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
