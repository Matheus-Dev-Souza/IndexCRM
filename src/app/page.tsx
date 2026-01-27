import styles from "./page.module.css";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Stats from "@/components/landing/Stats";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      
      {/* NAVBAR */}
      <Navbar />

      {/* CONTEÚDO PRINCIPAL */}
      <main className={styles.hero}>
        
        <Hero />
        
        <Features />
        
        <Stats />

      </main>
    </div>
  );
}