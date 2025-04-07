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
import { RiSendPlaneLine, RiCheckLine, RiErrorWarningLine, RiLoaderLine } from "react-icons/ri";

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
      className="backdrop-blur-lg bg-primary-dark/70 border border-white/10 p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-6">Contáctanos</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Tu nombre" 
                    {...field}
                    className="bg-primary-dark/50 border-white/20 focus:border-secondary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="tu@email.com" 
                    {...field}
                    className="bg-primary-dark/50 border-white/20 focus:border-secondary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="¿En qué podemos ayudarte?" 
                    {...field}
                    className="bg-primary-dark/50 border-white/20 focus:border-secondary min-h-[120px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={isSubmitting || isSuccess}
            className={`w-full ${isSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-secondary hover:bg-secondary/90'}`}
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