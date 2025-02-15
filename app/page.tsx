import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      <Hero />
      <FeaturedServices />
      <Testimonials />
    </main>
  );
}
