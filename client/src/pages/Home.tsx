import { motion } from "framer-motion";
import { PhoneCall, MoveRight, Wrench, Droplets, ShieldCheck, Zap, Thermometer, Clock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "0607719189";
  const displayPhone = "060 771 9189";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const services = [
    { icon: Zap, title: "Emergency Plumbing", desc: "Fast 24/7 response for all urgent plumbing issues." },
    { icon: Droplets, title: "Leak Detection", desc: "Pinpoint accuracy in finding and repairing hidden leaks." },
    { icon: Wrench, title: "Blocked Drains", desc: "Professional clearing of even the toughest drain blockages." },
    { icon: Thermometer, title: "Geyser Services", desc: "Expert installation and repairs for all geyser types." }
  ];

  const reasons = [
    { icon: Clock, title: "Fast Response Times", desc: "We arrive quickly to minimize water damage and stress." },
    { icon: ShieldCheck, title: "Experienced & Reliable", desc: "Certified master plumbers with over 15 years of local experience." },
    { icon: Droplets, title: "Transparent Pricing", desc: "Upfront quotes with no hidden surprises or call-out fees." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-1.5 md:p-2 rounded-lg">
              <Droplets className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">Somerset Plumbing</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a>
            <Button onClick={handleCall} variant="default" className="rounded-full px-6">
              <PhoneCall className="mr-2 h-4 w-4" />
              {displayPhone}
            </Button>
          </div>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 shadow-xl"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2 font-semibold text-slate-600">Services</a>
            <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="block py-2 font-semibold text-slate-600">Why Choose Us</a>
            <Button onClick={handleCall} className="w-full rounded-xl h-12">
              <PhoneCall className="mr-2 h-4 w-4" />
              Call {displayPhone}
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <Badge variant="secondary" className="bg-blue-50 text-primary border-blue-100 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider">
                24/7 Emergency Plumbing
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                Reliable Plumbing Services in <span className="text-primary">Somerset West</span>
              </h1>
              <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                From burst pipes to blocked drains, Somerset Plumbing delivers fast, professional, and affordable solutions you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 justify-center lg:justify-start">
                <Button onClick={handleCall} size="lg" className="h-14 md:h-16 px-6 md:px-8 rounded-xl md:rounded-2xl text-base md:text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button variant="outline" size="lg" className="h-14 md:h-16 px-6 md:px-8 rounded-xl md:rounded-2xl text-base md:text-lg font-bold border-2 transition-all hover:bg-slate-50">
                  Get a Free Quote
                  <MoveRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10" />
              <div className="rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern Plumbing Maintenance"
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 hidden sm:block">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="bg-green-500 p-2 md:p-3 rounded-xl md:rounded-2xl">
                    <Clock className="text-white w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-widest">Response Time</p>
                    <p className="text-lg md:text-2xl font-black text-slate-900">Under 60 Mins</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge className="mb-4 md:mb-6 rounded-full px-4 py-1.5 bg-white text-primary border-slate-200 shadow-sm">Our Expertise</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6">World-Class Plumbing Services</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-12 md:mb-16 font-medium">
            Whatever your plumbing needs, our team of experts is ready to provide top-tier solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-left">
            {services.map((service, i) => (
              <Card key={i} className="rounded-2xl md:rounded-3xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 md:p-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/5 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary transition-colors">
                    <service.icon className="text-primary w-6 h-6 md:w-8 md:h-8 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-2 md:mb-4">{service.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-[2rem] md:rounded-[3rem] -rotate-2" />
              <img 
                src="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=1000"
                alt="High-Quality Plumbing Tools"
                className="relative rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl w-full h-[300px] md:h-[500px] object-cover rotate-1"
              />
            </div>
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight text-center lg:text-left">Why Choose <br className="hidden md:block" /><span className="text-primary">Somerset Plumbing?</span></h2>
              <div className="space-y-4 md:space-y-6">
                {reasons.map((reason, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 p-4 md:p-6 rounded-2xl md:rounded-3xl hover:bg-slate-50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                      <reason.icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-extrabold text-slate-900 mb-1 md:mb-2">{reason.title}</h4>
                      <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-3xl md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />
            <div className="relative z-10 space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-6xl font-extrabold text-white leading-tight">Need a plumber now? <br />We’re ready when you are.</h2>
              <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
                Our team is standing by to help with any plumbing issue, big or small. Call us now for an immediate response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button onClick={handleCall} size="lg" className="h-16 md:h-20 px-8 md:px-12 rounded-xl md:rounded-2xl bg-white text-primary hover:bg-slate-50 text-xl md:text-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl">
                  <PhoneCall className="mr-3 h-6 w-6 md:h-8 md:w-8" />
                  {displayPhone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Droplets className="text-primary w-5 h-5" />
            <span className="text-lg font-extrabold text-slate-900 tracking-tight">Somerset Plumbing</span>
          </div>
          <p className="text-slate-500 font-medium text-sm">© 2024 Somerset Plumbing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
