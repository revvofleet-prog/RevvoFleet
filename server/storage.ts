
import { db } from "./db";
import {
  cars,
  bookings,
  type Car,
  type InsertCar,
  type Booking,
  type InsertBooking
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getCars(): Promise<Car[]>;
  getCar(id: number): Promise<Car | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  seedCars(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getCars(): Promise<Car[]> {
    return await db.select().from(cars);
  }

  async getCar(id: number): Promise<Car | undefined> {
    const [car] = await db.select().from(cars).where(eq(cars.id, id));
    return car;
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const [newBooking] = await db.insert(bookings).values(booking).returning();
    return newBooking;
  }

  async seedCars(): Promise<void> {
    const existing = await this.getCars();
    if (existing.length === 0) {
      const seedData: InsertCar[] = [
        {
          make: "Porsche",
          model: "911 GT3 RS",
          year: 2024,
          pricePerDay: 1200,
          imageUrl: "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80",
          description: "The ultimate track weapon for the road. 518hp naturally aspirated flat-six.",
          category: "sports"
        },
        {
          make: "Mercedes-Benz",
          model: "G63 AMG",
          year: 2023,
          pricePerDay: 850,
          imageUrl: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80",
          description: "Iconic boxy design meets raw power. The ultimate luxury SUV statement.",
          category: "suv"
        },
        {
          make: "Lamborghini",
          model: "Huracán Evo",
          year: 2023,
          pricePerDay: 1500,
          imageUrl: "https://images.unsplash.com/photo-1544605368-180a21304541?auto=format&fit=crop&q=80",
          description: "V10 symphony and sharp Italian design. An unforgettable driving experience.",
          category: "sports"
        },
        {
          make: "Rolls-Royce",
          model: "Ghost",
          year: 2024,
          pricePerDay: 2000,
          imageUrl: "https://images.unsplash.com/photo-1631295868223-6326585125f4?auto=format&fit=crop&q=80",
          description: "The purest expression of Rolls-Royce. Effortless performance and peerless luxury.",
          category: "luxury"
        },
        {
          make: "Tesla",
          model: "Model S Plaid",
          year: 2024,
          pricePerDay: 600,
          imageUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80",
          description: "The quickest accelerating production car. Future tech today.",
          category: "luxury"
        }
      ];
      
      await db.insert(cars).values(seedData);
    }
  }
}

export const storage = new DatabaseStorage();
