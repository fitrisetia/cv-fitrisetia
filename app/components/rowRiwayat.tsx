export default function RowRiwayat(props:any) {
    return (
        <div className="border-2 border-red-500/75 rounded-lg bg-white-800 p-2 my-5">
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
                    <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
                    <div className="col-span-12 md:col-span-4">{props.tahun}</div>
                    <div className="col-span-12 md:col-span-4">{props.tahunker}</div>
                    <div className="col-span-12 md:col-span-4">{props.instansi}</div>
                    <div className="col-span-12 md:col-span-4">{props.peran}</div>
                  </div>
                </div>
    );
    
}