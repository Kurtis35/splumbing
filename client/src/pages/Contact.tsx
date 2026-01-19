import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're here to help with all your plumbing needs.
          </p>
        </div>
      </div>

      <div className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                Reach out to us via phone, email, or by filling out the form. We respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Visit Us</h3>
                  <p className="text-slate-600">123 Main Road, Somerset West<br />Cape Town, 7130</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Call Us</h3>
                  <p className="text-slate-600">+27 21 123 4567</p>
                  <p className="text-sm text-primary font-medium mt-1">24/7 Emergency Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <p className="text-slate-600">info@swplumbing.co.za</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Business Hours</h3>
                  <p className="text-slate-600">Mon - Fri: 08:00 - 17:00</p>
                  <p className="text-slate-600">Sat: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
