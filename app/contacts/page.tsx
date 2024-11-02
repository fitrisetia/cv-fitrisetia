// app/contact/page.tsx
import Header from '../components/header';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <ContactForm /> {/* Menambahkan form kontak */}
            </main>
            <Footer />
        </div>
    );
}
