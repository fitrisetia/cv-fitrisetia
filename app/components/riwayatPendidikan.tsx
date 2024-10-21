import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center">
        <div className="container mx-auto p-2 text-center pt-20">
          <h2 className="text-2xl">Riwayat Pendidikan</h2>
        </div>
        <RowRiwayat jenjang="SD" sekolah="SDN TENJOLAYA 03" tahun="2015"/>
        <RowRiwayat jenjang="MTs" sekolah="MTs Ibnu Jabal" tahun="2018"/>
        <RowRiwayat jenjang="MA" sekolah="MA Ibnu Jabal" tahun="2021"/>
        <RowRiwayat jenjang="Sarjana" sekolah="Masoem University" tahun=""/>
        </div>
    );
}