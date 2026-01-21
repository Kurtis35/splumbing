import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">About Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Building trust through quality workmanship and integrity.
          </p>
        </div>
      </div>

      <div className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in Somerset West, our plumbing company began with a simple mission: to provide honest, reliable, and high-quality plumbing services to our local community.
              </p>
              <p>
                Over the years, we have grown from a small family operation into a leading plumbing service provider, trusted by hundreds of homeowners and businesses across the Western Cape.
              </p>
              <p>
                We believe that great plumbing is about more than just fixing pipes—it's about ensuring the safety, comfort, and efficiency of your home or business. That's why we invest in continuous training for our team and use only the best materials available.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-2xl" />
            {/* Unsplash: Team meeting or working */}
            <img 
              src="https://images.unsplash.com/photo-1581094794320-c9146a07e3cd?auto=format&fit=crop&q=80" 
              alt="Our Team" 
              className="relative rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Excellence", desc: "We never compromise on quality. Every job is done right the first time." },
            { title: "Integrity", desc: " Honest pricing and transparent communication are the foundations of our business." },
            { title: "Reliability", desc: "When we say we'll be there, we'll be there. You can count on us." }
          ].map((value, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-slate-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
