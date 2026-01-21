import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group cursor-pointer">
            <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-primary/10' : 'bg-white/10 backdrop-blur-sm'}`}>
              <Droplets className={`w-8 h-8 ${scrolled ? 'text-primary' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-display font-bold leading-none ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Somerset West
              </span>
              <span className={`text-sm font-medium tracking-wider ${scrolled ? 'text-primary' : 'text-white/90'}`}>
                PLUMBING
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  location === link.href
                    ? "text-accent"
                    : scrolled
                    ? "text-slate-700"
                    : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                variant={scrolled ? "default" : "secondary"}
                className={!scrolled ? "bg-white text-primary hover:bg-white/90" : ""}
              >
                <Phone className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={scrolled ? "text-slate-900" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-slate-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium py-2 ${
                    location === link.href ? "text-primary" : "text-slate-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Get a Quote</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
