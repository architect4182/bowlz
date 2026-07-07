import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProductSlider from "@/components/ProductSlider";
import ProductGrid from "@/components/ProductGrid";
import CartPanel from "@/components/CartPanel";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen pb-0 overflow-hidden">
      <Navigation />
      <CartPanel />
      <Hero />
      <ProductSlider />
      <ProductGrid />
      <About />
      <Footer />
    </main>
  );
}
