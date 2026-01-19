import { motion } from "framer-motion";
import { Wrench, Droplets, Thermometer, Construction, PenTool, Bath } from "lucide-react";
import type { Service } from "@shared/schema";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Droplets,
  Thermometer,
  Construction,
  PenTool,
  Bath
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] || Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/20"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full -mr-px -mt-px" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-7 h-7" />
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {service.imageUrl && (
          <div className="mt-4 overflow-hidden rounded-lg">
            <img 
              src={service.imageUrl} 
              alt={service.title}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
