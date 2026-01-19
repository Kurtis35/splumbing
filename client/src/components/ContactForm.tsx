import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const { mutate, isPending } = useCreateInquiry();
  const { toast } = useToast();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you shortly.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
      <h3 className="text-2xl font-bold mb-6 text-slate-900">Send us a Message</h3>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Name</label>
            <Input 
              {...form.register("name")} 
              placeholder="John Doe" 
              className="rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20"
            />
            {form.formState.errors.name && (
              <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Phone</label>
            <Input 
              {...form.register("phone")} 
              placeholder="+27 82 123 4567" 
              className="rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20"
            />
            {form.formState.errors.phone && (
              <p className="text-xs text-red-500">{form.formState.errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Email</label>
          <Input 
            {...form.register("email")} 
            type="email" 
            placeholder="john@example.com" 
            className="rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20"
          />
          {form.formState.errors.email && (
            <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Message</label>
          <Textarea 
            {...form.register("message")} 
            placeholder="How can we help you?" 
            className="min-h-[120px] rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20"
          />
          {form.formState.errors.message && (
            <p className="text-xs text-red-500">{form.formState.errors.message.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={isPending}
          className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
