"use client";
import Image from "next/image";
import photographyImg from "../public/images/hobbies/photography.jpg";
import travelImg from "../public/images/hobbies/travel.jpg";
import readingImg from "../public/images/hobbies/reading.jpg";
import cookingImg from "../public/images/hobbies/cooking.jpg";

export default function HobbiesGallery() {
  // Object array hobbies beserta gambar
  const hobbies = [
    { name: "Photography", image: photographyImg },
    { name: "Bookbinding", image: travelImg },
    { name: "Reading", image: readingImg },
    { name: "Cooking", image: cookingImg },
  ];

  return (
    <section className="container mx-auto p-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-white text-center mb-8">My Gallery Hobbies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="glass-card bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-4 text-center shadow-md"
          >
            <Image
              src={hobby.image}
              alt={`${hobby.name} image`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-white">{hobby.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
