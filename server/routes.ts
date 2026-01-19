import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Services
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // Testimonials
  app.get(api.testimonials.list.path, async (req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  // Inquiries
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await storage.createService({
      title: "Emergency Plumbing",
      description: "24/7 emergency response for burst pipes, blocked drains, and critical failures.",
      icon: "Siren",
      imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
    });
    await storage.createService({
      title: "Leak Detection",
      description: "Advanced non-invasive leak detection to save your property from water damage.",
      icon: "Search",
      imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    });
    await storage.createService({
      title: "Drain Cleaning",
      description: "Professional cleaning for blocked drains, toilets, and sewer lines.",
      icon: "Droplets",
      imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800",
    });
    await storage.createService({
      title: "Geyser Installation",
      description: "Expert installation and repair of solar and electric geysers.",
      icon: "Thermometer",
      imageUrl: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800",
    });
    await storage.createService({
      title: "Bathroom Renovations",
      description: "Complete bathroom makeovers from plumbing to fixtures and tiling.",
      icon: "Bath",
      imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
    });
  }

  const existingTestimonials = await storage.getTestimonials();
  if (existingTestimonials.length === 0) {
    await storage.createTestimonial({
      name: "Sarah Jenkins",
      role: "Homeowner",
      content: "Somerset West Plumbing saved the day! They arrived within an hour of my emergency call and fixed the burst pipe professionally. Highly recommended.",
      rating: 5,
    });
    await storage.createTestimonial({
      name: "Michael Ross",
      role: "Property Manager",
      content: "We use them for all our rental properties. Reliable, fair pricing, and excellent workmanship every time.",
      rating: 5,
    });
    await storage.createTestimonial({
      name: "David van der Merwe",
      role: "Business Owner",
      content: "Outstanding service on our office renovation. The team was clean, efficient, and finished ahead of schedule.",
      rating: 5,
    });
  }
}
