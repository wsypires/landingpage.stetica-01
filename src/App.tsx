/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroAbout } from './components/HeroAbout';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { DetailedTechniques } from './components/DetailedTechniques';
import { ServiceModal } from './components/ServiceModal';
import { QuickBookingModal } from './components/QuickBookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { ServiceItem } from './data/aestheticData';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen font-body relative overflow-x-hidden transition-colors duration-700 ${
        isDark
          ? 'bg-[#0c1413] text-[#e0e7e5] selection:bg-[#c5a880] selection:text-[#0c1413]'
          : 'bg-[#FAF7F2] text-[#272E1E] selection:bg-[#354128] selection:text-white'
      }`}
    >
      {/* Subtle ambient light glow adapting to palette */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 z-0 transition-opacity duration-700"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle at 50% 0%, rgba(27, 67, 55, 0.25) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(197, 168, 128, 0.12) 0%, transparent 50%)'
            : 'radial-gradient(circle at 50% 0%, rgba(53, 65, 40, 0.08) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(154, 114, 64, 0.07) 0%, transparent 50%)',
        }}
      />

      {/* Main Navigation Header */}
      <Header
        onOpenBooking={() => setBookingModalOpen(true)}
        lang={lang}
        setLang={setLang}
      />

      <main className="relative z-10">
        {/* Section 1: Hero / About Us */}
        <HeroAbout
          onOpenBooking={() => setBookingModalOpen(true)}
          lang={lang}
        />

        {/* Section 2: Products / Cuidados & Velas Quentes */}
        <ProductsSection
          onOpenBooking={() => setBookingModalOpen(true)}
          lang={lang}
        />

        {/* Section 3: Services / 4 Circular Treatment Highlights */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          lang={lang}
        />

        {/* Section 4: Detailed Techniques */}
        <DetailedTechniques lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setBookingModalOpen(true)}
        lang={lang}
      />

      {/* Modals & Overlays */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <QuickBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Floating Theme Palette Switcher on Bottom Left */}
      <ThemeToggle variant="floating" />

      {/* Requested WhatsApp CTA Floating Widget (67 992144061) on Bottom Right */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
