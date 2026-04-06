import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Star, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Hammer, 
  Wrench, 
  Droplet, 
  Zap, 
  Package, 
  CheckCircle2,
  ChevronRight,
  Facebook,
  Mail
} from 'lucide-react';

const PHONE_NUMBER = "0942 920 2022";
const ADDRESS = "GR2W+QC5, Manuel Roxas St, Zone I, Koronadal, South Cotabato, Philippines";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-primary/95 backdrop-blur-sm py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <h1 className={`text-xl font-bold leading-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
                CSC Koronadal
              </h1>
              <p className={`text-[10px] uppercase tracking-wider font-sans font-semibold ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
                Hardware & Construction Supply
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
            <button onClick={() => scrollTo('home')} className="hover:text-accent transition-colors">Home</button>
            <button onClick={() => scrollTo('products')} className="hover:text-accent transition-colors">Products</button>
            <button onClick={() => scrollTo('services')} className="hover:text-accent transition-colors">Services</button>
            <button onClick={() => scrollTo('about')} className="hover:text-accent transition-colors">About Us</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-accent transition-colors">Contact</button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-md font-bold transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-lg font-display text-primary">
              <button onClick={() => scrollTo('home')} className="text-left border-b border-slate-100 pb-2">Home</button>
              <button onClick={() => scrollTo('products')} className="text-left border-b border-slate-100 pb-2">Products</button>
              <button onClick={() => scrollTo('services')} className="text-left border-b border-slate-100 pb-2">Services</button>
              <button onClick={() => scrollTo('about')} className="text-left border-b border-slate-100 pb-2">About Us</button>
              <button onClick={() => scrollTo('contact')} className="text-left border-b border-slate-100 pb-2">Contact</button>
            </nav>
            <div className="mt-auto">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 bg-accent text-white w-full py-4 rounded-lg font-bold text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now: {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
              alt="Construction Site" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30 backdrop-blur-sm">
                Koronadal's Premier Supplier
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Your Trusted Hardware & <span className="text-accent">Construction Supply</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10 font-sans max-w-2xl">
                Quality materials. Reliable service. Competitive prices. Everything you need to build, repair, and maintain, right here in Koronadal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a 
                  href="#location"
                  onClick={(e) => { e.preventDefault(); scrollTo('location'); }}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Builders */}
        <section className="bg-white py-12 border-b border-slate-200 relative z-20 -mt-8 mx-4 md:mx-8 rounded-xl shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <h3 className="font-bold text-primary text-lg">4.0 ★ Rating</h3>
                <p className="text-sm text-slate-500 font-sans mt-1">From local customers</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-primary text-lg">Expert Staff</h3>
                <p className="text-sm text-slate-500 font-sans mt-1">Friendly & knowledgeable</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-primary text-lg">Fast Transactions</h3>
                <p className="text-sm text-slate-500 font-sans mt-1">Quick & efficient service</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-500/10 text-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-primary text-lg">Wide Stock</h3>
                <p className="text-sm text-slate-500 font-sans mt-1">Complete building materials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section id="products" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Products</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-slate-600 font-sans max-w-2xl mx-auto">
                We carry a comprehensive inventory of high-quality construction materials and hardware supplies for any project size.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Package />, title: "Cement & Aggregates", desc: "High-grade cement, sand, and gravel for strong foundations." },
                { icon: <Hammer />, title: "Steel & Roofing", desc: "Durable rebars, roofing sheets, and structural steel." },
                { icon: <Truck />, title: "Lumber", desc: "Quality wood products for framing and finishing." },
                { icon: <Droplet />, title: "Plumbing Supplies", desc: "Pipes, fittings, and fixtures for reliable water systems." },
                { icon: <Zap />, title: "Electrical Supplies", desc: "Wires, switches, and lighting for safe installations." },
                { icon: <Wrench />, title: "Tools & Equipment", desc: "Professional-grade hand and power tools." }
              ].map((cat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-slate-100 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    {React.cloneElement(cat.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{cat.title}</h3>
                  <p className="text-slate-600 font-sans mb-6">{cat.desc}</p>
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-accent font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Inquire Now <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CSC Koronadal?</h2>
                <div className="w-24 h-1 bg-accent mb-8"></div>
                <p className="text-slate-300 font-sans mb-8 text-lg">
                  With years of experience serving the Koronadal community, we understand the needs of local builders, contractors, and homeowners. We don't just sell materials; we provide solutions.
                </p>
                <ul className="space-y-4 font-sans">
                  {[
                    "Wide product availability - Find everything in one place",
                    "Affordable and competitive pricing",
                    "Experienced staff ready to assist you",
                    "Fast service and quick loading",
                    "Trusted by local builders and contractors"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                    className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-bold transition-colors"
                  >
                    Contact Our Team
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop" 
                    alt="Hardware Store Interior" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white text-primary p-8 rounded-xl shadow-xl hidden md:block">
                  <p className="text-4xl font-bold text-accent mb-1">100%</p>
                  <p className="font-display font-bold text-lg uppercase">Commitment to Quality</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Stock</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-slate-600 font-sans max-w-2xl mx-auto">
                High-demand materials ready for pickup or delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Portland Cement", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop", desc: "Premium grade for structural concrete" },
                { name: "Hollow Blocks", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop", desc: "Standard 4\" and 6\" CHB available" },
                { name: "Steel Bars", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2184&auto=format&fit=crop", desc: "Deformed rebars in various sizes" },
                { name: "PVC Pipes", img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=2070&auto=format&fit=crop", desc: "Sanitary and waterline pipes" }
              ].map((prod, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={prod.img} 
                      alt={prod.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-primary mb-2">{prod.name}</h3>
                    <p className="text-slate-500 font-sans text-sm mb-4">{prod.desc}</p>
                    <a 
                      href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                      className="block w-full text-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-2 rounded font-bold transition-colors"
                    >
                      Ask for Price
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="bg-accent py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Need Construction Materials Today?</h2>
                <p className="text-white/90 font-sans text-lg">Call us now to check stock availability and pricing.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="bg-white text-accent hover:bg-slate-100 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Locals Say</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Mark D.", text: "Good stock of building material. Found everything I needed for my home renovation." },
                { name: "Sarah L.", text: "Staff are friendly and knowledgeable. They helped me choose the right paint." },
                { name: "Engr. Reyes", text: "Fast transaction. We always get our project supplies here. Highly recommended." },
                { name: "Juan P.", text: "Very accommodating staff and competitive prices compared to others in Koronadal." }
              ].map((review, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex text-accent mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 font-sans italic mb-6">"{review.text}"</p>
                  <p className="font-bold text-primary">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info & Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Visit Our Store</h2>
                <div className="w-24 h-1 bg-accent mb-8"></div>
                
                <div className="space-y-6 mb-10 font-sans">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 text-primary rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary font-display uppercase tracking-wide">Address</h4>
                      <p className="text-slate-600">{ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 text-primary rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary font-display uppercase tracking-wide">Phone</h4>
                      <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-accent font-bold text-lg hover:underline">{PHONE_NUMBER}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 text-primary rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary font-display uppercase tracking-wide">Business Hours</h4>
                      <p className="text-slate-600">Monday - Saturday: 8:00 AM – 5:00 PM</p>
                      <p className="text-slate-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-primary mb-6">Send us a message</h3>
                  <form className="space-y-4 font-sans" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                      <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none" placeholder="Your Phone Number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Message / Inquiry</label>
                      <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none" placeholder="What materials are you looking for?"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary hover:bg-slate-800 text-white font-bold py-3 rounded-md transition-colors">
                      Request a Quote
                    </button>
                  </form>
                </div>
              </div>

              {/* Map */}
              <div id="location" className="h-full min-h-[400px] rounded-xl overflow-hidden border border-slate-200 shadow-sm relative">
                {/* Using a placeholder map image since actual iframe needs a Google Maps API key or specific embed URL */}
                <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-500 p-8 text-center">
                  <MapPin className="w-16 h-16 mb-4 text-slate-400" />
                  <p className="font-sans mb-4">Interactive map centered on:<br/><strong>{ADDRESS}</strong></p>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-6 py-3 rounded-md font-bold hover:bg-accent-hover transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-white text-primary">
                  <Hammer className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white leading-tight">CSC Koronadal</h2>
                  <p className="text-[10px] uppercase tracking-wider font-sans font-semibold text-slate-400">Hardware & Supply</p>
                </div>
              </div>
              <p className="font-sans text-sm max-w-xs mb-6">
                Your reliable partner for construction materials and hardware supplies in South Cotabato.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3 font-sans text-sm">
                <li><button onClick={() => scrollTo('home')} className="hover:text-accent transition-colors">Home</button></li>
                <li><button onClick={() => scrollTo('products')} className="hover:text-accent transition-colors">Products</button></li>
                <li><button onClick={() => scrollTo('about')} className="hover:text-accent transition-colors">About Us</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-accent transition-colors">Contact & Location</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Contact Info</h3>
              <ul className="space-y-4 font-sans text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0" />
                  <span>Mon-Sat: 8AM - 5PM<br/>Sun: Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center font-sans text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} CSC Koronadal Hardware and Construction Supply. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Call Button */}
      <a 
        href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-white rounded-full shadow-lg shadow-accent/40 flex items-center justify-center animate-bounce"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
