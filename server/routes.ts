import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store contact submission
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        data: { id: contact.id } 
      });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: error.message || "Invalid form submission" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
