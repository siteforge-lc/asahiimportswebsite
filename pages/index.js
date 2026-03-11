import React, { useState } from 'react';
import { ShoppingBag, MapPin, Clock, Menu, X, ChevronRight } from 'lucide-react';

const menuData = {
  onigiri: [
    { name: "Tuna Mayo", desc: "Cooked tuna mixed with Japanese seasonings", price: "$3.49" },
    { name: "Mentaiko", desc: "Spicy marinated cod roe", price: "$3.49" },
    { name: "Salmon", desc: "Salted salmon flakes", price: "$3.49" },
    { name: "Ume", desc: "Salty and sour pickled plum", price: "$3.49" },
    { name: "Ebi Ten", desc: "Tempura shrimp with special sauce", price: "$4.75" }
  ],
  bento: [
    { name: "Chicken Karaage Bento", desc: "Seasoned chicken nuggets, rice, tamagoyaki", price: "$10.99" },
    { name: "Tonkatsu Bento", desc: "Fried pork cutlet, rice, kinpira, tamagoyaki", price: "$11.99" },
    { name: "Salmon Shioyaki", desc: "Grilled salted salmon, rice, tamagoyaki", price: "$11.99" }
  ]
};

export default function AsahiSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-asahiCream min-h-screen text-asahiBlack font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b-4 border-asahiRed sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter text-asahiRed">ASAHI IMPORTS</h1>
        <div className="hidden md:flex gap-8 font-bold uppercase text-sm">
          <a href="#menu" className="hover:text-asahiRed">Menu</a>
          <a href="#about" className="hover:text-asahiRed">History</a>
          <a href="#locations" className="hover:text-asahiRed">Locations</a>
          <a href="https://asahiimports.square.site/" className="bg-asahiRed text-white px-4 py-1 rounded-full">Order Now</a>
        </div>
        <Menu className="md:hidden" onClick={() => setIsMenuOpen(true)} />
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-asahiBlack text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=1200')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center px-4">
          <p className="text-asahiRed font-bold tracking-[0.3em] uppercase mb-2">Since 1967</p>
          <h2 className="text-5xl md:text-7xl font-black mb-6">AUSTIN'S JAPANESE <br/> MARKET.</h2>
          <a href="https://asahiimports.square.site/" className="inline-flex items-center gap-2 bg-asahiRed hover:bg-white hover:text-asahiRed transition-all text-white font-bold py-4 px-8 rounded-sm text-lg">
            ORDER ONIGIRI & BENTO <ShoppingBag size={20} />
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h3 className="text-4xl font-black mb-2 uppercase italic text-asahiRed">The Onigiri Corner</h3>
            <p className="text-gray-600">Handmade daily by Japanese grandmothers with love.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xl font-bold border-b-2 border-asahiRed mb-6 pb-2 uppercase tracking-widest">{category}</h4>
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.name} className="flex justify-between items-start group">
                    <div>
                      <h5 className="font-bold text-lg group-hover:text-asahiRed transition-colors">{item.name}</h5>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <span className="font-bold text-asahiRed">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="border-l-8 border-asahiRed pl-8">
            <h3 className="text-3xl font-black mb-4 uppercase">Visit Asahi South</h3>
            <p className="mb-4">3005 S Lamar Blvd, Ste B-105B<br/>Austin, TX 78704</p>
            <div className="flex items-center gap-2 text-sm font-bold bg-gray-100 p-3 rounded">
              <Clock size={16} /> TUE-SAT: 10AM - 6PM | SUN: 10AM - 5PM
            </div>
          </div>
          <div className="border-l-8 border-gray-200 pl-8 opacity-70">
            <h3 className="text-3xl font-black mb-4 uppercase">Visit Asahi Burnet</h3>
            <p className="mb-4">6105 Burnet Rd<br/>Austin, TX 78757</p>
            <p className="text-sm italic">Main location featuring Matcha Soft Serve</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-asahiBlack text-white py-12 px-6 text-center">
        <p className="opacity-50 text-sm">© 2026 Asahi Imports. Austin's Original Japanese Market.</p>
      </footer>
    </div>
  );
}
