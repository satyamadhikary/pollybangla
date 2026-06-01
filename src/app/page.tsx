import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
// import News from "@/components/News";
import Footer from "@/components/Footer";
import WelcomeOfferModal from "@/components/WelcomeOfferModal";

export default function Home() {
  return (
    <main style={{ background: "#f7f1e7" }}>
      <WelcomeOfferModal />
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <WhyChoose />
      <Testimonials />
      <Footer />
    </main>
  );
}