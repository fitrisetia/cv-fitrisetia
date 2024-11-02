import ContactForm from "./components/contactForm";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Hobbies from "./components/hobbies"; // Tambahkan ini
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import Skills from "./components/skills";
import "./isho-style.css";

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <Skills />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Hobbies />
      <ContactForm />
      <Footer />
    </section>
  );
}

