import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: "Please provide name, email and message" 
        });
      }
      
      // This would normally save to a database or send an email
      // For now, we'll just return a success message
      
      res.status(200).json({ 
        success: true, 
        message: "Your message has been received! We'll get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error submitting form. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
