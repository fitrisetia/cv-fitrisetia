export default function RiwayatPendidikan() {
  return (
    <div className="container mx-auto p-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-white text-center mb-8">Riwayat Pendidikan</h2>

      <RowRiwayat jenjang="SD" sekolah="SDN TENJOLAYA 03" tahun="2015" />
      <RowRiwayat jenjang="MTs" sekolah="MTs Ibnu Jabal" tahun="2018" />
      <RowRiwayat jenjang="MA" sekolah="MA Ibnu Jabal" tahun="2021" />
      <RowRiwayat jenjang="Sarjana" sekolah="Masoem University" tahun="-" />
    </div>
  );
}

// Komponen RowRiwayat sebagai bagian dari RiwayatPendidikan
function RowRiwayat(props: any) {
  return (
    <div className="border-2 border-blue-500/75 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 my-5 shadow-md">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-4 text-center text-white">{props.jenjang}</div>
        <div className="col-span-12 md:col-span-4 text-center text-white">{props.sekolah}</div>
        <div className="col-span-12 md:col-span-4 text-center text-white">{props.tahun}</div>
      </div>
    </div>
  );
}
