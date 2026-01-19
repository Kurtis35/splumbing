import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Star, ShieldCheck, Clock, Award } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-secondary/30">
      <Navigation />

      {/* Phenomenal Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80"
            alt="Luxury Interior" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/95" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <div className="container relative z-10 px-6 lg:px-12 mx-auto">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-3 glass-dark px-5 py-2 rounded-full mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-white/90">Master Plumbers in Somerset West</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-6xl md:text-8xl font-display font-black text-white leading-[0.9] mb-8"
            >
              Excellence In <br />
              <span className="text-gradient">Every Detail.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-12 font-light tracking-wide"
            >
              Providing world-class plumbing solutions with a commitment to precision, integrity, and unparalleled craftsmanship for over two decades.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-base px-10 py-7 h-auto rounded-none tracking-widest uppercase transition-all hover:translate-y-[-2px] shadow-2xl shadow-secondary/20">
                  Request a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="glass text-white border-white/20 font-bold text-base px-10 py-7 h-auto rounded-none tracking-widest uppercase transition-all hover:bg-white/10">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-secondary to-transparent" />
        </motion.div>
      </section>

      {/* Stats / Trust Banner */}
      <section className="relative z-20 -mt-16 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-premium">
          {[
            { icon: ShieldCheck, label: "Certified Excellence", desc: "Fully licensed & insured" },
            { icon: Clock, label: "24/7 Response", desc: "Always here when you need us" },
            { icon: Award, label: "20+ Years", desc: "Legacy of trusted service" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-10 flex items-center space-x-6 border-r border-slate-50 last:border-0 first:rounded-l-none last:rounded-r-none">
              <div className="p-4 bg-primary/5 rounded-full">
                <stat.icon className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-primary">{stat.label}</h3>
                <p className="text-slate-500 text-sm uppercase tracking-wider">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h4 className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Expertise</h4>
              <h2 className="text-5xl md:text-6xl font-display font-black leading-tight">Master Craftsmanship <br />Met With Modern Technology</h2>
            </div>
            <Link href="/services">
              <Button variant="link" className="text-secondary font-bold p-0 flex items-center group text-lg">
                View All Services <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>

          {isLoadingServices ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[400px] bg-slate-100 rounded-none animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services?.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials - Refined */}
      <section className="py-32 bg-primary text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic text-gradient">Trusted By The Best.</h2>
            <p className="text-white/60 text-lg font-light tracking-wide">Our reputation is built on the satisfaction of our distinguished clients across Somerset West.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isLoadingTestimonials ? (
              [1, 2, 3].map((n) => <div key={n} className="h-64 glass-dark rounded-none animate-pulse" />)
            ) : (
              testimonials?.map((t, idx) => (
                <motion.div 
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-dark p-12 relative group hover:bg-white/5 transition-colors"
                >
                  <div className="flex text-secondary mb-8">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-xl text-white/80 mb-10 font-light italic leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center font-bold text-primary">
                      {t.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-display font-bold text-white tracking-wide">{t.name}</p>
                      <p className="text-xs uppercase tracking-widest text-secondary font-bold">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
