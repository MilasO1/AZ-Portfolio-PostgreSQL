"use client";
import "./globals.css";
import About from "@/components/sections/About";
import Experience from "@/components/sections/experiences/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/projects/Projects";
import CursorLight from "@/components/ui/CursorLight";
import CursorTrail from "@/components/ui/CursorTrail";
import Header from "@/components/layout/Header";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative scroll-smooth">
     <CursorTrail options={{
  shape: "star",
  startColor: "rgba(255, 255, 255, 1)",
  endColor: "rgba(0, 0, 255, 0.5)",
  size: 12
}} />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header></Header>
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <ContactForm />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
