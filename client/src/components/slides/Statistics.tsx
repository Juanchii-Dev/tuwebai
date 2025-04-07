import { motion } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";
import { RiLineChartLine, RiTimerLine, RiUserHeartLine, RiRocketLine } from "react-icons/ri";

export default function Statistics({ isActive }: { isActive: boolean }) {
  const stats = [
    {
      icon: <RiLineChartLine className="text-3xl text-accent" />,
      value: "78%",
      label: "Aumento promedio en conversiones",
      description: "Para clientes después de implementar nuestras soluciones web"
    },
    {
      icon: <RiTimerLine className="text-3xl text-secondary" />,
      value: "2.3s",
      label: "Tiempo de carga promedio",
      description: "Velocidad de carga superior al 90% de sitios en la web"
    },
    {
      icon: <RiUserHeartLine className="text-3xl text-accent" />,
      value: "96%",
      label: "Satisfacción de clientes",
      description: "Basado en encuestas post-implementación"
    },
    {
      icon: <RiRocketLine className="text-3xl text-secondary" />,
      value: "+183",
      label: "Proyectos exitosos",
      description: "Lanzados y generando resultados en los últimos 3 años"
    }
  ];

  return (
    <Slide id="statistics" isActive={isActive} withGradient>
      <Blob color="accent" className="w-96 h-96 -right-20 -top-20" />
      <Blob color="secondary" className="w-80 h-80 -left-20 -bottom-20" />
      
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-heading text-3xl md:text-4xl mb-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestros resultados en números
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-300">Datos que respaldan nuestra efectividad</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)",
                  backgroundColor: "rgba(30, 30, 42, 0.8)" 
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-secondary/20 to-accent/20">
                    {stat.icon}
                  </div>
                </div>
                
                <motion.h3 
                  className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                >
                  {stat.value}
                </motion.h3>
                
                <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}