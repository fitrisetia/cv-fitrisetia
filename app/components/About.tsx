import foto from "../foto.jpg";

export default function About() {
    return (
        <div>
            <div className="container mx-auto p-2 text-center">
                <h1 className="text-blue-300 font-bold"></h1>
                <h2 className="text-3xl">About Me</h2>
                <Profile />
                <p className="my-4"> {/* Menambahkan margin atas dan bawah untuk jarak antar paragraf */}
                    Hello! I’m Fitri Setiawati, a creative individual currently in my fifth semester of college, pursuing a degree in Information Systems at the Faculty of Computer Science. My passion for the arts, particularly in the visual domain, has driven me to explore various avenues of creativity. I believe that technology and art can beautifully intertwine, and I strive to harness this synergy in my work.
                </p>

                <p className="my-4">
                    Throughout my academic journey, I have gained a solid foundation in programming and web development, as well as an understanding of design principles that guide the creation of compelling visual experiences. I am always eager to learn and embrace new challenges, which I believe is essential in both art and technology.
                </p>

                <p className="my-4">
                    When I’m not studying, you can find me immersed in photography, experimenting with digital design, or seeking inspiration through travel and exploration. I view every experience as a chance to grow and expand my creative horizons.
                </p>

                <p className="my-4">
                    I am excited about the future and look forward to collaborating with like-minded individuals who share my passion for technology and creativity. Thank you for visiting my CV Online, and I hope to connect with you soon!
                </p>
            </div>
        </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Fitri Setiawati" className="fotoku" />;
}
