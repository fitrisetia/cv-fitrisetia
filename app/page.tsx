import ContactForm from "./components/contactForm";
import FavColor from "./components/favColor";
import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RowRiwayat from "./components/rowRiwayat";
import "./isho-style.css";


export default function Gallery() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan/>
      <RiwayatPekerjaan/>
      <FavColor/>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ContactForm />
    </div>
    </section>
  );
}
