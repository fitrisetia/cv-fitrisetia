import RowRiwayat from "./rowRiwayat";

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center">
        <div className="container mx-auto p-2 text-center pt-20">
          <h2 className="text-2xl">Riwayat Pekerjaan</h2>
        </div>
        <RowRiwayat peran="Kasir" instansi="Toko Plastik" tahunker="2021"/>
        <RowRiwayat peran="Pelayan" instansi="Toko Baju" tahunker="2022"/>
        <RowRiwayat peran="Editor" instansi="IDN Media" tahunker="2032"/>
        <RowRiwayat peran="Artists" instansi="IDN Media" tahunker="2030"/>
        </div>
    );
}