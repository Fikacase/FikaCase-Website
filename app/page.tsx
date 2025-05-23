import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductSpec from "@/components/ProductSpec";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <Vision />
      <ProductSpec />
      <GetInTouch />
      <Footer />
    </div>
  );
}
