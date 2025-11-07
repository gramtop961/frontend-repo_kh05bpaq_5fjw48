import { Mail, CheckCircle, Bell } from "lucide-react";

export default function HeroOverview() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-rose-50" />
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-sm text-blue-700 mb-4">
              <Mail className="h-4 w-4" />
              Persuratan Kampus Digital
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              Satu pintu untuk seluruh proses surat-menyurat civitas akademika
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg">
              Aplikasi ini merapikan pembuatan, persetujuan, disposisi, penandatanganan elektronik, dan arsip surat—terintegrasi lintas unit dan dapat dilacak statusnya secara real-time.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                Tujuan: mempercepat layanan, mengurangi pekerjaan manual, dan memastikan akuntabilitas.
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                Mendukung berbagai tipe surat: izin, keterangan, rekomendasi, permohonan, dan lainnya.
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                Pelacakan status end-to-end dan notifikasi adaptif.
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3 text-blue-700">
              <Bell className="h-5 w-5" />
              Notifikasi dikirim saat ada disposisi, persetujuan, atau perubahan status.
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl border bg-white shadow-sm p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-blue-50 p-4">
                  <div className="text-2xl font-bold text-blue-700">5</div>
                  <div className="text-xs text-gray-600">Peran utama</div>
                </div>
                <div className="rounded-lg bg-emerald-50 p-4">
                  <div className="text-2xl font-bold text-emerald-700">10+</div>
                  <div className="text-xs text-gray-600">Tipe surat</div>
                </div>
                <div className="rounded-lg bg-amber-50 p-4">
                  <div className="text-2xl font-bold text-amber-700">Realtime</div>
                  <div className="text-xs text-gray-600">Pelacakan</div>
                </div>
              </div>
              <div className="mt-6 rounded-lg border p-4">
                <p className="text-sm text-gray-700">
                  Alur terstandar dari pembuatan hingga arsip: pembuatan draft → verifikasi operator → persetujuan berjenjang → tanda tangan elektronik → distribusi → arsip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
