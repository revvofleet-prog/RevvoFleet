import { pgTable, text, serial, integer, timestamp, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const cars = pgTable("cars", {
  id: serial("id").primaryKey(),
  make: text("make").notNull(),
  model: text("model").notNull(),
  pricePerDay: integer("price_per_day").notNull(),
  imageUrl: text("image_url").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  carId: integer("car_id").notNull(),
  username: text("username").notNull(),
  phoneNumber: text("phone_number").notNull(),
  email: text("email").notNull(),
  pickupLocation: text("pickup_location").notNull(),   // ✅ NEW FIELD
  startDate: date("start_date").notNull(),
  endDate: date("end_date").notNull(),
  specialRequests: text("special_requests"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCarSchema = createInsertSchema(cars).omit({ id: true });

export const insertBookingSchema = createInsertSchema(bookings)
  .omit({ id: true, createdAt: true });

export type Car = typeof cars.$inferSelect;
export type InsertCar = z.infer<typeof insertCarSchema>;
export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type CreateBookingRequest = InsertBooking;
