import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RiSendPlaneLine, RiCheckLine, RiErrorWarningLine, RiLoaderLine, RiUser3Line, RiMailLine, RiChatSmile3Line } from "react-icons/ri";

// Esquema de validación del formulario
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    
    // Simulamos el envío del formulario ya que no hay un endpoint real
    try {
      // Simulación de un retraso en la red
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulación de éxito
      setIsSuccess(true);
      toast({
        title: "Mensaje enviado",
        description: "¡Gracias por contactarnos! Te responderemos pronto.",
        variant: "default",
      });
      form.reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div
      className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl shadow-lg h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl text-white font-semibold mb-4">Contáctanos</h3>
      <p className="text-gray-300 text-sm mb-6">Completa el formulario y nos pondremos en contacto contigo lo antes posible</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nombre</FormLabel>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <RiUser3Line />
                  </div>
                  <FormControl>
                    <Input 
                      placeholder="Tu nombre" 
                      {...field}
                      className="bg-primary-dark/60 border-white/20 focus-visible:ring-secondary pl-10 text-white placeholder:text-gray-500"
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <RiMailLine />
                  </div>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="tu@email.com" 
                      {...field}
                      className="bg-primary-dark/60 border-white/20 focus-visible:ring-secondary pl-10 text-white placeholder:text-gray-500"
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Mensaje</FormLabel>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <RiChatSmile3Line />
                  </div>
                  <FormControl>
                    <Textarea 
                      placeholder="¿En qué podemos ayudarte?" 
                      {...field}
                      className="bg-primary-dark/60 border-white/20 focus-visible:ring-secondary pl-10 min-h-[120px] text-white placeholder:text-gray-500"
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={isSubmitting || isSuccess}
            className={`w-full mt-4 py-6 text-white font-medium ${
              isSuccess 
                ? 'bg-green-600 hover:bg-green-700 shadow-md shadow-green-900/20' 
                : 'bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 shadow-md shadow-accent/20'
            }`}
          >
            {isSubmitting ? (
              <>
                <RiLoaderLine className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : isSuccess ? (
              <>
                <RiCheckLine className="mr-2 h-4 w-4" />
                ¡Mensaje enviado!
              </>
            ) : (
              <>
                <RiSendPlaneLine className="mr-2 h-4 w-4" />
                Enviar mensaje
              </>
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}