import { motion } from "framer-motion";
import Slide from "../Slide";
import { Card } from "@/components/ui/card";
import {
  RiLayout4Line,
  RiShoppingCartLine,
  RiBuildingLine,
  RiBookOpenLine,
  RiDashboardLine,
  RiCodeSSlashLine,
} from "react-icons/ri";

export default function Services({ isActive }: { isActive: boolean }) {
  const services = [
    {
      icon: <RiLayout4Line className="text-3xl text-secondary" />,
      title: "Landing Pages",
      description: "Diseñadas para convertir visitantes en clientes.",
    },
    {
      icon: <RiShoppingCartLine className="text-3xl text-secondary" />,
      title: "Tiendas Online",
      description: "E-commerce automatizado y optimizado para ventas.",
    },
    {
      icon: <RiBuildingLine className="text-3xl text-secondary" />,
      title: "Webs Empresariales",
      description: "Presencia digital profesional y elegante.",
    },
    {
      icon: <RiBookOpenLine className="text-3xl text-secondary" />,
      title: "Plataformas Educativas",
      description: "Soluciones de e-learning a medida.",
    },
    {
      icon: <RiDashboardLine className="text-3xl text-secondary" />,
      title: "Dashboards Inteligentes",
      description: "Visualización de datos y métricas clave.",
    },
    {
      icon: <RiCodeSSlashLine className="text-3xl text-secondary" />,
      title: "Integraciones API e IA",
      description: "Conexión con sistemas y automatizaciones.",
    },
  ];

  return (
    <Slide id="services" isActive={isActive}>
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-heading text-3xl md:text-4xl mb-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Servicios
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 rounded-xl mb-10 text-center backdrop-blur-lg bg-primary-dark/70 border border-white/10">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Creamos todo tipo de soluciones web
              </h3>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl transition-all duration-300 hover:border-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl text-center font-semibold mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-300 text-center text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
