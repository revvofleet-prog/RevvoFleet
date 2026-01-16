import { useParams, useLocation } from "wouter";
import { useCar } from "@/hooks/use-cars";
import { useCreateBooking } from "@/hooks/use-bookings";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema, type CreateBookingRequest } from "@shared/schema";
import { Loader2, Calendar, Check, AlertCircle } from "lucide-react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Extend the schema for the form to handle date strings properly
const formSchema = insertBookingSchema.extend({
  carId: z.coerce.number(),
  // Dates will be strings from input type="date"
});

export default function BookCar() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const carId = Number(id);
  const { data: car, isLoading } = useCar(carId);
  const createBooking = useCreateBooking();

  const form = useForm<CreateBookingRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      carId: carId,
      username: "",
      email: "",
      phoneNumber: "",
      specialRequests: "",
      startDate: "",
      endDate: "",
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-red-600 animate-spin" />
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-display text-red-600 mb-4">Car Not Found</h1>
        <Button onClick={() => setLocation("/")} variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
          Return Home
        </Button>
      </div>
    );
  }

  function onSubmit(data: CreateBookingRequest) {
    createBooking.mutate(data, {
      onSuccess: () => {
        setTimeout(() => setLocation("/"), 2000);
      }
    });
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Car Details */}
          <div>
            <div className="relative aspect-video mb-8 overflow-hidden rounded-lg border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img 
                src={car.imageUrl} 
                alt={car.make} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h1 className="text-4xl font-display font-bold">{car.make} {car.model}</h1>
                <p className="text-red-500 font-mono text-sm tracking-widest uppercase mt-2">{car.category}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-6 bg-zinc-900/50 border border-white/10">
                <span className="text-xs text-gray-500 font-mono uppercase block mb-1">Daily Rate</span>
                <span className="text-3xl font-bold text-white">${car.pricePerDay}</span>
              </div>
              <div className="p-6 bg-zinc-900/50 border border-white/10">
                <span className="text-xs text-gray-500 font-mono uppercase block mb-1">Year Model</span>
                <span className="text-3xl font-bold text-white">{car.year}</span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              {car.description}
            </p>
          </div>

          {/* Right: Booking Form */}
          <div className="bg-zinc-900/30 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
            <div className="flex items-center mb-8 pb-4 border-b border-white/10">
              <Calendar className="text-red-600 mr-3" />
              <h2 className="text-2xl font-display font-bold">Request Booking</h2>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          className="bg-black/50 border-white/10 focus:border-red-600 focus:ring-0 text-white placeholder:text-gray-700" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="bg-black/50 border-white/10 focus:border-red-600 focus:ring-0 text-white placeholder:text-gray-700"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Phone</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+1 (555) 000-0000" 
                            className="bg-black/50 border-white/10 focus:border-red-600 focus:ring-0 text-white placeholder:text-gray-700"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Start Date</FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            className="bg-black/50 border-white/10 focus:border-red-600 focus:ring-0 text-white accent-red-600 [color-scheme:dark]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">End Date</FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            className="bg-black/50 border-white/10 focus:border-red-600 focus:ring-0 text-white accent-red-600 [color-scheme:dark]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Special Requests</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any specific requirements for your rental?" 
                          className="bg-black/50 border-white/10 focus:border-red-600 focus:ring-0 text-white placeholder:text-gray-700 min-h-[100px]"
                          {...field} 
                          value={field.value || ""} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={createBooking.isPending}
                  className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-mono uppercase tracking-widest text-lg font-bold rounded-none skew-x-[-6deg]"
                >
                  <span className="skew-x-[6deg] flex items-center justify-center">
                    {createBooking.isPending ? <Loader2 className="animate-spin mr-2" /> : <Check className="mr-2" />}
                    {createBooking.isPending ? "Processing..." : "Confirm Booking"}
                  </span>
                </Button>
                
                {createBooking.isError && (
                  <div className="flex items-center text-red-500 text-sm mt-2 bg-red-950/20 p-3 border border-red-900/50 rounded">
                    <AlertCircle size={16} className="mr-2" />
                    {createBooking.error.message}
                  </div>
                )}
                
              </form>
            </Form>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
