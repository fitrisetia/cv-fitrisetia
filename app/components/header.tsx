// app/components/Header.tsx
import Link from 'next/link';
import ThemeToggle from './ThemeToggle'; // Import komponen ThemeToggle

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <h1 className="text-2xl font-bold">CV Online</h1>
                <nav>
                    <ul className="flex space-x-7">
                        <li>
                            <Link href="/" className="hover:text-blue-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-blue-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile" className="hover:text-blue-300">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts" className="hover:text-blue-300">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <ThemeToggle /> {/* Menambahkan ThemeToggle ke header */}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
