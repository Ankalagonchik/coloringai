import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, service, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !service || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real implementation, we would store the contact request
      // or send an email notification
      
      // Just respond with success for now
      return res.status(200).json({ 
        success: true,
        message: "Thank you for your message. We'll get back to you soon!"
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        success: false,
        message: "An error occurred while processing your request."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
