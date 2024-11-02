import foto from "../foto.jpg";

export default function Hero() {
    return (
     <div>
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-blue-300 font-bold"></h1>
        <h2 className="text-3xl">Fitri Setiawati</h2>
        <Profile />
        <p>
          Saya adalah seorang Web Developer, IT Trainer, dan juga Hobbies Farmer. 
          Cita-cita saya ingin menjadi programmer internasional. Saya juga ingin 
          masuk syurga tanpa hisab sekeluarga.
        </p>            
     </div>
     </div>
  );
}

function Profile() {
    return <img src={foto.src} alt="Fitri Setiawati" className="fotoku"/>;
}
