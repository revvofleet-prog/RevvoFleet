import { useParams, useLocation } from "wouter";
import emailjs from "@emailjs/browser";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Loader2, Calendar, Check, AlertCircle } from "lucide-react";
import { z } from "zod";
import { useState, useEffect } from "react";

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

/* --------------------------------------------------
   DUMMY CARS (must match your Home.tsx IDs)
---------------------------------------------------*/
const dummyCars = [
  {
    id: 1,
    make: "Sedan",
    model: "Standard",
    pricePerDay: 1600,
    category: "sedan",
    description:
      "Variants available: Maruti Dzire, Hyundai Aura, Hyundai XCENT or similar.",
    imageUrl: "/assets/cars/sedan.jpg",
  },

  {
    id: 2,
    make: "MUV",
    model: "Family",
    pricePerDay: 2000,
    category: "muv",
    description:
      "Variants available: Maruti Ertiga, Kia Carens or similar.",
    imageUrl: "/assets/cars/MUV.jpg",
  },

  {
    id: 3,
    make: "SUV",
    model: "Premium",
    pricePerDay: 2800,
    category: "suv",
    description:
      "Variants available: Toyota Innova Crysta, Toyota Invicto, Toyota Hycross or similar.",
    imageUrl: "/assets/cars/SUV.jpg",
  },

  {
    id: 4,
    make: "Premium Sedan",
    model: "Executive",
    pricePerDay: 2500,
    category: "Premium Sedan",
    description:
      "Variants available: Maruti Ciaz, Honda City or similar.",
    imageUrl: "/assets/cars/Premium_sedan.jpg",
  },

  {
    id: 5,
    make: "Premium SUV",
    model: "Luxury",
    pricePerDay: 5500,
    category: "Premium SUV",
    description:
      "Variants available: Toyota Fortuner, Mahindra XUV 700, Kia Carnival or similar.",
    imageUrl: "/assets/cars/Premium_SUV.jpg",
  },

  {
    id: 6,
    make: "Luxury Sedan",
    model: "Elite",
    pricePerDay: 8500,
    category: "Luxury Sedan",
    description:
      "Variants available: Toyota Camry, Mercedes E-Class, BMW 5 Series or similar.",
    imageUrl: "/assets/cars/Luxury_sedan.jpg",
  },

  {
    id: 7,
    make: "Luxury SUV",
    model: "Ultra",
    pricePerDay: 18000,
    category: "Luxury SUV",
    description:
      "Variants available: Toyota Vellfire, Land Rover Defender, Mercedes GLE 450 or similar.",
    imageUrl: "/assets/cars/Luxury_SUV.jpg",
  },
];

/* --------------------------------------------------
   UPDATED FORM SCHEMA (MATCHES DB)
---------------------------------------------------*/
const formSchema = z.object({
  carId: z.number(),
  username: z.string().min(1, "Name required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().min(5, "Phone required"),
  pickupLocation: z.string().min(3, "Pickup location required"),
  startDate: z.string().min(1, "Start date required"),
  endDate: z.string().min(1, "End date required"),
  specialRequests: z.string().optional(),
});

type BookingForm = z.infer<typeof formSchema>;

export default function BookCar() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const carId = Number(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const car = dummyCars.find((c) => c.id === carId)!;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<BookingForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      carId: carId,
      username: "",
      email: "",
      phoneNumber: "",
      pickupLocation: "",
      specialRequests: "",
      startDate: "",
      endDate: "",
    },
  });

  if (!car) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-display text-red-600 mb-4">
          Car Not Found
        </h1>
        <Button
          onClick={() => setLocation("/")}
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
        >
          Return Home
        </Button>
      </div>
    );
  }

  function onSubmit(data: BookingForm) {
    setSubmitError(null);
    setIsSubmitting(true);

    const now = new Date();

    const emailData = {
      time:
        now.toLocaleDateString() +
        " | " +
        now.toLocaleTimeString(),

      car_name: `${car.make} ${car.model}`,

      username: data.username,
      email: data.email,
      phone: data.phoneNumber,
      pickup_location: data.pickupLocation,

      start_date: data.startDate,
      end_date: data.endDate,

      special_requests: data.specialRequests || "None",
      booking_time: now.toISOString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);

          toast.success("Booking sent to RevvoFleet!", {
            style: {
              background: "black",
              color: "white",
              borderBottom: "4px solid #dc2626",
            },
          });

          setTimeout(() => setLocation("/"), 1800);
        },
        (error) => {
          setIsSubmitting(false);

          toast.error("Failed to send email. Try again.", {
            style: {
              background: "black",
              color: "white",
              borderBottom: "4px solid #dc2626",
            },
          });

          console.error(error);
        }
      );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT: Car Details */}
          <div>
            <div className="relative aspect-video mb-8 overflow-hidden rounded-lg border border-white/10 group bg-zinc-900">
              <img
                src={car.imageUrl}
                alt={`${car.make} ${car.model}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-20">
                <h1 className="text-4xl font-display font-bold">
                  {car.make} {car.model}
                </h1>
                <p className="text-red-500 font-mono text-sm tracking-widest uppercase mt-2">
                  {car.category}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-6 bg-zinc-900/50 border border-white/10">
                <span className="text-xs text-gray-500 font-mono uppercase block mb-1">
                  Daily Rate
                </span>
                <span className="text-3xl font-bold text-white">
                  {car.pricePerDay} Rs
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              {car.description}
            </p>
          </div>

          {/* RIGHT: Booking Form */}
          <div className="bg-zinc-900/30 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
            <div className="flex items-center mb-8 pb-4 border-b border-white/10">
              <Calendar className="text-red-600 mr-3" />
              <h2 className="text-2xl font-display font-bold">
                Request Booking
              </h2>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">
                        Full Name
                      </FormLabel>
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

                {/* NEW FIELD — Pickup Location */}
                <FormField
                  control={form.control}
                  name="pickupLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">
                        Pickup Location
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Delhi Airport / Connaught Place"
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
                        <FormLabel className="text-gray-400">
                          Email
                        </FormLabel>
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
                        <FormLabel className="text-gray-400">
                          Phone
                        </FormLabel>
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
                        <FormLabel className="text-gray-400">
                          Start Date
                        </FormLabel>
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
                        <FormLabel className="text-gray-400">
                          End Date
                        </FormLabel>
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
                      <FormLabel className="text-gray-400">
                        Special Requests
                      </FormLabel>
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
                  disabled={isSubmitting}
                  className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-mono uppercase tracking-widest text-lg font-bold rounded-none skew-x-[-6deg]"
                >
                  <span className="skew-x-[6deg] flex items-center justify-center">
                    {isSubmitting ? (
                      <Loader2 className="animate-spin mr-2" />
                    ) : (
                      <Check className="mr-2" />
                    )}
                    {isSubmitting
                      ? "Processing..."
                      : "Confirm Booking"}
                  </span>
                </Button>

                {submitError && (
                  <div className="flex items-center text-red-500 text-sm mt-2 bg-red-950/20 p-3 border border-red-900/50 rounded">
                    <AlertCircle size={16} className="mr-2" />
                    {submitError}
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
