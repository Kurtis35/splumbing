import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ServiceCard } from "../components/ServiceCard";
import { useServices } from "../hooks/use-services";
import { Button } from "../components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const { data: services, isLoading } = useServices();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive plumbing solutions tailored to your specific needs.
          </p>
        </div>
      </div>

      <div className="py-24 container mx-auto px-4 md:px-6">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-64 bg-white rounded-2xl shadow-sm animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        )}

        <div className="mt-16 text-center bg-primary/5 rounded-3xl p-12">
          <h2 className="text-2xl font-bold mb-4">Don't see what you're looking for?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            We offer custom solutions for unique plumbing challenges. Get in touch with our team to discuss your project.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Contact Us Today</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
