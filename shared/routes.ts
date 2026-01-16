
import { z } from 'zod';
import { insertBookingSchema, insertCarSchema, cars, bookings } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  cars: {
    list: {
      method: 'GET' as const,
      path: '/api/cars',
      responses: {
        200: z.array(z.custom<typeof cars.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/cars/:id',
      responses: {
        200: z.custom<typeof cars.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
  bookings: {
    create: {
      method: 'POST' as const,
      path: '/api/bookings',
      input: insertBookingSchema,
      responses: {
        201: z.custom<typeof bookings.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type CarResponse = z.infer<typeof api.cars.get.responses[200]>;
export type CarsListResponse = z.infer<typeof api.cars.list.responses[200]>;
export type CreateBookingResponse = z.infer<typeof api.bookings.create.responses[201]>;
