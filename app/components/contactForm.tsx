"use client"; // Menandai sebagai client component

import { useState } from "react";

export default function ContactForm() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [allRatings, setAllRatings] = useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAllRatings((prevRatings) => [...prevRatings, rating]);
    alert(`Nama: ${nama}, Email: ${email}, Pesan: ${pesan}, Rating: ${rating}`);
    setIsSubmitted(true);
  };

  const handleClear = () => {
    setNama("");
    setEmail("");
    setPesan("");
    setRating(0);
    setIsSubmitted(false);
  };

  const averageRating =
    allRatings.length > 0
      ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1)
      : "0";

  return (
    <div className="container mx-auto p-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg">
      {isSubmitted ? (
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Form Submitted!</h2>
          <p className="text-xl">Nama: {nama}, Email: {email}, Pesan: {pesan}, Rating: {rating} bintang</p>
          <button
            onClick={handleClear}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form className="max-w-md mx-auto p-6 shadow-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg" onSubmit={handleSubmit}>
          <h2 className="text-4xl font-extrabold mb-4 text-center text-white">Contact Us</h2>

          <div className="mb-4">
            <label htmlFor="nama" className="block text-sm font-medium text-white">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-white placeholder-gray-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-white placeholder-gray-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pesan" className="block text-sm font-medium text-white">
              Pesan
            </label>
            <textarea
              id="pesan"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-white placeholder-gray-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Rating</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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

      <div className="mt-8 text-center">
        <h2 className="text-4xl font-bold text-white">Average Rating</h2>
        <p className="text-2xl text-white">★ {averageRating} dari 5</p>
      </div>
    </div>
  );
}
