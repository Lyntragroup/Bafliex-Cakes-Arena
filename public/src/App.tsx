import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { DeliveryZonesBar } from "./components/DeliveryZonesBar";
import { LocalSeoSection } from "./components/LocalSeoSection";
import { FlavourMenuSection } from "./components/FlavourMenuSection";
import { HowToOrderSection } from "./components/HowToOrderSection";
import { ProductShowcase } from "./components/ProductShowcase";
import { RealGallerySection } from "./components/RealGallerySection";
import { CustomCakeBuilder } from "./components/CustomCakeBuilder";
import { FeaturesBento } from "./components/FeaturesBento";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { WeddingPackages } from "./components/WeddingPackages";
import { TrainingSection } from "./components/TrainingSection";
import { FaqSection } from "./components/FaqSection";
import { SocialBar } from "./components/SocialBar";
import { CtaBanner } from "./components/CtaBanner";
import { Footer } from "./components/Footer";
import { OffersAndBudgetSection } from "./components/OffersAndBudgetSection";
import { CakeIdeasSection } from "./components/CakeIdeasSection";
import { QuickOrderCta } from "./components/QuickOrderCta";

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#251F50] selection:bg-[#E8721C] selection:text-white">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Asymmetric Editorial Hero Section */}
        <HeroSection />

        {/* High-priority order entry point for visitors coming from ads and social media */}
        <QuickOrderCta />

        {/* Thika Highway & Nairobi Express Delivery Zone Explorer */}
        <DeliveryZonesBar />

        <LocalSeoSection />

        {/* Signature Handcrafted Cake Creations Gallery */}
        <ProductShowcase />

        <RealGallerySection />

        <FlavourMenuSection />

        {/* Interactive Custom Cake Quote Calculator & WhatsApp Configurator */}
        <CustomCakeBuilder />

        <HowToOrderSection />

        <OffersAndBudgetSection />

        {/* Artisanal Craftsmanship & Kenyan Logistics Bento Grid */}
        <FeaturesBento />

        {/* Verified Local Customer Testimonials (Ruiru, Juja, Thika) */}
        <TestimonialsSection />

        {/* Wedding Cake Packages — Guest-count estimates from Ksh 2,500/kg */}
        <WeddingPackages />

        {/* Practical Cake Baking & Decoration Training */}
        <TrainingSection />

        {/* Interactive Frequently Asked Questions */}
        <CakeIdeasSection />

        <FaqSection />

        {/* Social Media, Google Maps & Live WhatsApp Catalog Links */}
        <SocialBar />

        {/* High-Conversion Closing CTA Banner */}
        <CtaBanner />
      </main>

      {/* Complete Footer + Mobile Sticky Dual-Action Conversion Bar */}
      <Footer />
    </div>
  );
}

export default App;
