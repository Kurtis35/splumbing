import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { useServices } from "@/hooks/use-services";
import { useTestimonials } from "@/hooks/use-testimonials";

export default function Home() {
  const { data: services, isLoading: isLoadingServices } = useServices();
  const { data: testimonials, isLoading: isLoadingTestimonials } = useTestimonials();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash: Modern bathroom interior */}
          <img 
            src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80"
            alt="Modern Bathroom" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Available 24/7 for Emergencies</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-tight"
            >
              World-Class <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Plumbing Solutions
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-200 max-w-xl leading-relaxed"
            >
              Professional, reliable, and efficient plumbing services for your home and business. We bring excellence to every pipe and fixture.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto shadow-lg shadow-primary/25">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-white/5 hover:bg-white/10 text-white border-white/30 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                  View Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Premium Services</h2>
            <p className="text-slate-600 text-lg">
              From minor repairs to major installations, our expert team handles it all with precision and care.
            </p>
          </div>

          {isLoadingServices ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-64 bg-slate-100 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Why Somerset West Plumbing?</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                We combine years of experience with modern technology to deliver superior plumbing solutions. Our commitment to quality and customer satisfaction sets us apart.
              </p>
              
              <div className="space-y-4">
                {[
                  "24/7 Emergency Support",
                  "Licensed & Insured Professionals",
                  "Upfront Pricing - No Hidden Fees",
                  "Latest Tools & Technology",
                  "100% Satisfaction Guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="outline" className="mt-4 border-slate-700 hover:bg-slate-800 text-white">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl" />
              {/* Unsplash: Professional plumber working */}
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
                alt="Professional Plumber"
                className="relative rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Emergency Contact</p>
                    <p className="text-lg font-bold text-slate-900">+27 21 123 4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">What Our Clients Say</h2>
            <p className="text-slate-600 text-lg">Trusted by homeowners and businesses across the region.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoadingTestimonials ? (
              [1, 2, 3].map((n) => <div key={n} className="h-48 bg-white rounded-xl shadow-sm animate-pulse" />)
            ) : (
              testimonials?.map((t, idx) => (
                <motion.div 
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{t.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                      {t.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-bold text-slate-900">{t.name}</p>
                      {t.role && <p className="text-sm text-primary">{t.role}</p>}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-24 bg-white relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform translate-x-20 hidden lg:block" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Ready to get started?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Contact us today for a free quote or to schedule a service. Our team is standing by to assist you with all your plumbing needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-lg mb-2">Residential</h3>
                  <p className="text-slate-500 text-sm">Complete home plumbing solutions for families.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-lg mb-2">Commercial</h3>
                  <p className="text-slate-500 text-sm">Reliable maintenance for businesses and offices.</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
