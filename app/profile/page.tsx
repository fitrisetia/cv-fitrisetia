// app/contact/page.tsx
import Header from '../components/header';
import Footer from '../components/footer';
import Profile from '../components/profile';
import HobbiesGallery from '../components/hobbies';

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <Profile /> 
                <HobbiesGallery />{/* Menambahkan form kontak */}
            </main>
            <Footer />
        </div>
    );
}
