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
import { ServiceItem } from './data/aestheticData';

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c1413] text-[#e0e7e5] font-body relative selection:bg-[#c5a880] selection:text-[#0c1413] overflow-x-hidden">
      {/* Subtle ambient lighting texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(26, 52, 44, 0.45) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(197, 168, 128, 0.08) 0%, transparent 50%)',
        }}
      />

      {/* Main Navigation Header */}
      <Header
        onOpenBooking={() => setBookingModalOpen(true)}
        lang={lang}
        setLang={setLang}
      />

      <main className="relative z-10">
        {/* Section 1: Hero / About Us (Matching Figma's Top Half) */}
        <HeroAbout
          onOpenBooking={() => setBookingModalOpen(true)}
          lang={lang}
        />

        {/* Section 2: Products / Cuidados & Velas Quentes (Matching Figma's Middle Section) */}
        <ProductsSection
          onOpenBooking={() => setBookingModalOpen(true)}
          lang={lang}
        />

        {/* Section 3: Services / 4 Circular Treatment Highlights (Massage, Facials, Aroma, Sauna) */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          lang={lang}
        />

        {/* Section 4: Detailed Techniques & 4 Minimalist Line Icons (Matching Figma's Bottom Half) */}
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

      {/* Requested WhatsApp CTA Floating Widget (67 992144061) */}
      <FloatingWhatsApp />
    </div>
  );
}
