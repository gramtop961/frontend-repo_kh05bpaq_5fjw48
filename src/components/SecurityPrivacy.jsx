import { Lock, ShieldCheck, Eye, Clock } from "lucide-react";

export default function SecurityPrivacy() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Keamanan & Privasi</h2>
        <p className="text-gray-600 mt-2">Kebijakan untuk menjaga kerahasiaan, integritas, dan ketersediaan data surat.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Lock className="h-6 w-6 text-indigo-600" />
          <h4 className="mt-3 font-semibold">Kontrol Akses</h4>
          <p className="text-sm text-gray-700">Role-based access control, pembatasan per unit kerja, dan prinsip least privilege.</p>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <ShieldCheck className="h-6 w-6 text-emerald-600" />
          <h4 className="mt-3 font-semibold">Integritas Dokumen</h4>
          <p className="text-sm text-gray-700">Tanda tangan elektronik tersertifikasi, QR verifikasi publik, dan checksum dokumen.</p>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Eye className="h-6 w-6 text-amber-600" />
          <h4 className="mt-3 font-semibold">Audit & Jejak Aksi</h4>
          <p className="text-sm text-gray-700">Pencatatan lengkap setiap perubahan, persetujuan, disposisi, dan akses dokumen.</p>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Clock className="h-6 w-6 text-rose-600" />
          <h4 className="mt-3 font-semibold">Retensi & Arsip</h4>
          <p className="text-sm text-gray-700">Kebijakan retensi, klasifikasi tingkat kerahasiaan, dan pemusnahan terjadwal.</p>
        </div>
      </div>
    </section>
  );
}
