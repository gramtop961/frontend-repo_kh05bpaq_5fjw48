import { Send, FileSignature, Stamp, Archive, Repeat2 } from "lucide-react";

export default function WorkflowSections() {
  return (
    <section className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Alur Proses</h2>
        <p className="text-gray-600 mt-2">Ringkasan alur standar untuk surat masuk dan surat keluar dari awal hingga selesai.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-white border p-6">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Repeat2 className="h-5 w-5 text-indigo-600" /> Surat Masuk
            </h3>
            <ol className="mt-4 space-y-3 text-gray-700 text-sm list-decimal list-inside">
              <li>Penerimaan digital/fisik → registrasi & pemindaian (operator).</li>
              <li>Validasi metadata (asal, nomor, tanggal, perihal, lampiran).</li>
              <li>Disposisi awal pimpinan → penugasan ke unit/pejabat.</li>
              <li>Tindak lanjut oleh unit terkait (konfirmasi, balasan, atau aksi).</li>
              <li>Penutupan dan arsip, lengkap dengan log aktivitas & bukti tindak lanjut.</li>
            </ol>
          </div>

          <div className="rounded-xl bg-white border p-6">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Send className="h-5 w-5 text-emerald-600" /> Surat Keluar
            </h3>
            <ol className="mt-4 space-y-3 text-gray-700 text-sm list-decimal list-inside">
              <li>Pengajuan draft oleh pemohon (mahasiswa/dosen/unit) menggunakan template.</li>
              <li>Verifikasi operator (kelengkapan & kesesuaian data).</li>
              <li>Persetujuan berjenjang sesuai matriks kewenangan.</li>
              <li>Tanda tangan elektronik & penerapan nomor/QR verifikasi.</li>
              <li>Distribusi ke penerima + arsip digital; status dapat dilacak.</li>
            </ol>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white border p-6">
            <FileSignature className="h-6 w-6 text-blue-600" />
            <h4 className="mt-3 font-semibold">Pembuatan Surat</h4>
            <p className="text-sm text-gray-700">Dilengkapi template dinamis, penomoran otomatis, pengelolaan lampiran, dan validasi data.</p>
          </div>
          <div className="rounded-xl bg-white border p-6">
            <Stamp className="h-6 w-6 text-rose-600" />
            <h4 className="mt-3 font-semibold">Persetujuan & TTE</h4>
            <p className="text-sm text-gray-700">Mendukung paraf berlapis, e-sign, dan catatan koreksi, semua tercatat dalam audit trail.</p>
          </div>
          <div className="rounded-xl bg-white border p-6">
            <Archive className="h-6 w-6 text-amber-600" />
            <h4 className="mt-3 font-semibold">Arsip Digital</h4>
            <p className="text-sm text-gray-700">Pencarian cepat, filter lanjutan, pengaturan retensi, dan kontrol akses berbasis peran.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
