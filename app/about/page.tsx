// app/about/page.tsx
import Header from '../components/header';
import About from '../components/About'; // Mengimpor komponen About yang benar
import Footer from '../components/footer'; 

export default function AboutPage() { // Ubah nama fungsi agar lebih jelas
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow"> {/* Ini memastikan footer bergerak ke bawah */}
                <About /> {/* Gunakan komponen About yang sudah dibuat */}
            </main>
            <Footer />
        </div>
    );
}
