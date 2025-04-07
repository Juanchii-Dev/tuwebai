import { useState } from "react";
import { motion } from "framer-motion";
import Slide from "../Slide";
import Blob from "../ui/blob";
import { RiDoubleQuotesL, RiStarFill, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function Testimonials({ isActive }: { isActive: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      position: "CEO, TechStart",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "TuWeb.ai transformó completamente nuestra presencia en línea. No solo crearon un sitio web visualmente impresionante, sino que implementaron funcionalidades de IA que han mejorado significativamente la experiencia del usuario y nuestras conversiones.",
      rating: 5
    },
    {
      name: "Laura Méndez",
      position: "CMO, EcoSolutions",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      content: "Trabajar con TuWeb.ai ha sido una experiencia excepcional. Su equipo entendió perfectamente nuestra visión y la transformó en un sitio que no solo es hermoso sino también altamente funcional y orientado a resultados.",
      rating: 5
    },
    {
      name: "Javier Moreno",
      position: "Fundador, InnovaFin",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      content: "Después de intentar con varias agencias, finalmente encontramos a TuWeb.ai. Su enfoque estratégico y su experiencia en tecnologías emergentes nos ayudó a crear una plataforma que realmente destaca en un mercado competitivo.",
      rating: 4
    },
    {
      name: "Sofía Vega",
      position: "Directora de Marketing, Creativa Digital",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      content: "La integración de IA en nuestro sitio web ha sido revolucionaria para nuestro negocio. TuWeb.ai nos ha ayudado a personalizar la experiencia de cada visitante, aumentando significativamente nuestras tasas de conversión.",
      rating: 5
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Slide id="testimonials" isActive={isActive} withGradient className="overflow-hidden">
      <Blob color="accent" className="w-96 h-96 -right-20 top-1/4 opacity-30" />
      <Blob color="secondary" className="w-80 h-80 -left-20 bottom-1/3 opacity-30" />
      
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="font-heading text-3xl md:text-4xl mb-8 text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          
          <motion.div
            className="flex flex-col items-center justify-center text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-gray-300">Resultados que hablan por sí solos</p>
          </motion.div>
          
          <div className="relative">
            {/* Navigation arrows */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary-dark/80 hover:bg-primary-dark/90 border border-white/10 rounded-full p-2"
              onClick={prevTestimonial}
            >
              <RiArrowLeftSLine className="text-2xl text-white" />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary-dark/80 hover:bg-primary-dark/90 border border-white/10 rounded-full p-2"
              onClick={nextTestimonial}
            >
              <RiArrowRightSLine className="text-2xl text-white" />
            </button>
            
            {/* Testimonial slider */}
            <div className="overflow-hidden px-10">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <motion.div 
                      className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-8 rounded-xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <RiDoubleQuotesL className="text-5xl text-secondary/40 mb-6" />
                      
                      <div className="mb-8">
                        <p className="text-white text-lg leading-relaxed italic mb-6">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="flex items-center justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <RiStarFill 
                              key={i} 
                              className={`text-xl ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-600'}`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary mr-4">
                          <div className="w-full h-full bg-gray-700 relative flex items-center justify-center">
                            <span className="text-gray-500 text-xs">Foto</span>
                          </div>
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-secondary' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}