"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(6, { message: "Phone number is required." }),
  subject: z.string().min(2, { message: "Brief subject is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: FormValues) {
    console.log("Form values submitted:", values);
    alert("Thank you for getting in touch. We will reply as soon as possible.");
    reset();
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border w-full">
      <h3 className="text-2xl font-heading text-navy font-semibold mb-8">Send Us a Message</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 flex flex-col items-start">
            <label className="text-sm text-navy font-semibold">Full Name</label>
            <Input 
              {...register("name")} 
              placeholder="Jane Doe" 
              className="bg-surface/50 border-border/80 focus-visible:ring-teal-brand" 
            />
            {errors.name && <p className="text-sm text-blush mt-1 text-left w-full">{errors.name.message}</p>}
          </div>

          <div className="space-y-2 flex flex-col items-start">
            <label className="text-sm text-navy font-semibold">Email</label>
            <Input 
              type="email"
              {...register("email")} 
              placeholder="jane@example.com" 
              className="bg-surface/50 border-border/80 focus-visible:ring-teal-brand" 
            />
            {errors.email && <p className="text-sm text-blush mt-1 text-left w-full">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 flex flex-col items-start">
            <label className="text-sm text-navy font-semibold">Phone Number</label>
            <Input 
              type="tel"
              {...register("phone")} 
              placeholder="021 123 4567" 
              className="bg-surface/50 border-border/80 focus-visible:ring-teal-brand" 
            />
            {errors.phone && <p className="text-sm text-blush mt-1 text-left w-full">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2 flex flex-col items-start">
            <label className="text-sm text-navy font-semibold">Subject Matter</label>
            <Input 
              {...register("subject")} 
              placeholder="e.g. Relationship Property" 
              className="bg-surface/50 border-border/80 focus-visible:ring-teal-brand" 
            />
            {errors.subject && <p className="text-sm text-blush mt-1 text-left w-full">{errors.subject.message}</p>}
          </div>
        </div>

        <div className="space-y-2 flex flex-col items-start">
          <label className="text-sm text-navy font-semibold">Message</label>
          <Textarea 
            {...register("message")} 
            placeholder="Briefly describe what you're facing. (We will discuss details in person or by phone)."
            className="resize-none min-h-[150px] bg-surface/50 border-border/80 focus-visible:ring-teal-brand"
          />
          {errors.message && <p className="text-sm text-blush mt-1 text-left w-full">{errors.message.message}</p>}
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          size="lg" 
          className="w-full bg-blush hover:bg-blush/90 text-white font-semibold shadow-sm py-6 text-base"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
