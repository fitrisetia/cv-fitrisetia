export default function RiwayatPekerjaan() {
  return (
    <div className="container mx-auto p-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-white text-center mb-8">Riwayat Pekerjaan</h2>

      <RowRiwayat peran="Kasir" instansi="Toko Plastik" tahunker="2021" />
      <RowRiwayat peran="Pelayan" instansi="Toko Baju" tahunker="2022" />
      <RowRiwayat peran="Editor" instansi="IDN Media" tahunker="2032" />
      <RowRiwayat peran="Artist" instansi="IDN Media" tahunker="2030" />
    </div>
  );
}

function RowRiwayat(props: any) {
  return (
    <div className="border-2 border-blue-500/75 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 my-5 shadow-md">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-4 text-center text-white">{props.tahunker}</div>
        <div className="col-span-12 md:col-span-4 text-center text-white">{props.instansi}</div>
        <div className="col-span-12 md:col-span-4 text-center text-white">{props.peran}</div>
      </div>
    </div>
  );
}
