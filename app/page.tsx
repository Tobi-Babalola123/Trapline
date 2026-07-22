import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Coverage from "@/components/sections/Coverage";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Fleet from "@/components/sections/Fleet";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Industries from "@/components/sections/Industries";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Fleet />
        <WhyChooseUs />
        <Coverage />
        <Industries />
        <CTA />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
