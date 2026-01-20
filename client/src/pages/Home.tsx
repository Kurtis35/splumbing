import { motion } from "framer-motion";
import { PhoneCall, MoveRight, Wrench, Droplets, ShieldCheck, Zap, Thermometer, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">Somerset Plumbing</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a>
            <Button variant="default" className="rounded-full px-6">
              <PhoneCall className="mr-2 h-4 w-4" />
              021 123 4567
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Badge variant="secondary" className="bg-blue-50 text-primary border-blue-100 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                24/7 Emergency Plumbing
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                Reliable Plumbing Services in <span className="text-primary">Somerset West</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                From burst pipes to blocked drains, Somerset Plumbing delivers fast, professional, and affordable solutions you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="h-16 px-8 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-8 rounded-2xl text-lg font-bold border-2 transition-all hover:bg-slate-50">
                  Get a Free Quote
                  <MoveRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8 border-t border-slate-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Zap key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-slate-900">500+ Happy Customers</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10" />
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200"
                  alt="Professional Plumber at Work"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 p-3 rounded-2xl">
                    <Clock className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Response Time</p>
                    <p className="text-2xl font-black text-slate-900">Under 60 Mins</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 rounded-full px-4 py-1.5 bg-white text-primary border-slate-200 shadow-sm">Our Expertise</Badge>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">World-Class Plumbing Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16 font-medium">
            Whatever your plumbing needs, our team of experts is ready to provide top-tier solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: Zap, title: "Emergency Plumbing", desc: "Fast 24/7 response for all urgent plumbing issues." },
              { icon: Droplets, title: "Leak Detection", desc: "Pinpoint accuracy in finding and repairing hidden leaks." },
              { icon: Wrench, title: "Blocked Drains", desc: "Professional clearing of even the toughest drain blockages." },
              { icon: Thermometer, title: "Geyser Services", desc: "Expert installation and repairs for all geyser types." }
            ].map((service, i) => (
              <Card key={i} className="rounded-3xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                    <service.icon className="text-primary w-8 h-8 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1581244276891-99af96823055?auto=format&fit=crop&q=80&w=1000"
                alt="Reliable Plumbing Team"
                className="relative rounded-[2.5rem] shadow-xl w-full h-[500px] object-cover rotate-2 transition-transform hover:rotate-0 duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">Why Choose <br /><span className="text-primary">Somerset Plumbing?</span></h2>
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "Fast Response Times", desc: "We understand emergencies don't wait. We arrive quickly to minimize damage." },
                  { icon: ShieldCheck, title: "Experienced & Reliable", desc: "Our certified master plumbers bring years of expertise to every single job." },
                  { icon: Droplets, title: "Transparent Pricing", desc: "No hidden costs. We provide clear, upfront pricing before any work begins." }
                ].map((reason, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                      <reason.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-extrabold text-slate-900 mb-2">{reason.title}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">Need a plumber now? <br />We’re ready when you are.</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
                Our team is standing by to help with any plumbing issue, big or small. Call us now for an immediate response.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button size="lg" className="h-20 px-12 rounded-2xl bg-white text-primary hover:bg-slate-50 text-2xl font-black transition-all hover:scale-105 active:scale-95">
                  <PhoneCall className="mr-3 h-8 w-8" />
                  021 123 4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Droplets className="text-primary w-6 h-6" />
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">Somerset Plumbing</span>
          </div>
          <p className="text-slate-500 font-medium">© 2024 Somerset Plumbing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
