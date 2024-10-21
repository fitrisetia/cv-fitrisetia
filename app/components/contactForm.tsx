"use client"; // Menandai sebagai client component

import { useState } from "react";

export default function ContactForm() {
  // State untuk menyimpan nilai input
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fungsi untuk menangani submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman

    // Aksi dummy: menampilkan alert dengan informasi yang dimasukkan
    alert(`Nama: ${nama}, Email: ${email}, Pesan: ${pesan}.`);

    // Mengubah state form ke submitted
    setIsSubmitted(true);
  };

  // Fungsi untuk membersihkan input
  const handleClear = () => {
    setNama("");
    setEmail("");
    setPesan("");
    setIsSubmitted(false); // Reset status submit
  };

  return (
    <div className="container mx-auto p-6">
      {/* Jika form sudah di submit, tampilkan pesan sukses */}
      {isSubmitted ? (
        <div className="text-center text-black">
          <h2 className="text-2xl font-bold mb-4">Form Submitted!</h2>
          <p>
            Nama: {nama}, Email: {email}, Pesan: {pesan}.
          </p>
        </div>
      ) : (
        // Form kontak
        <form className="max-w-md mx-auto p-6 shadow-lg bg-white" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Contact Us</h2>
          
          <div className="mb-4">
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pesan" className="block text-sm font-medium text-gray-700">
              Pesan
            </label>
            <textarea
              id="pesan"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Clear
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
