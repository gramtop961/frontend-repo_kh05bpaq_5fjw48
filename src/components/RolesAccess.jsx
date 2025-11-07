import { Shield, User, GraduationCap, BriefcaseBusiness, Building2 } from "lucide-react";

const roles = [
  {
    name: "Admin Sistem",
    icon: Shield,
    color: "bg-indigo-50 text-indigo-700",
    rights: [
      "Pengaturan global & hak akses",
      "Manajemen template & penomoran",
      "Audit trail & pelaporan",
      "Integrasi sistem kampus"
    ]
  },
  {
    name: "Operator Fakultas/Unit",
    icon: BriefcaseBusiness,
    color: "bg-blue-50 text-blue-700",
    rights: [
      "Verifikasi berkas & validasi data",
      "Draft & registrasi nomor",
      "Disposisi surat masuk",
      "Distribusi & pengarsipan"
    ]
  },
  {
    name: "Dosen",
    icon: GraduationCap,
    color: "bg-emerald-50 text-emerald-700",
    rights: [
      "Mengajukan & menyetujui surat unit",
      "Tanda tangan elektronik",
      "Melihat riwayat & status",
      "Memberi catatan/feedback"
    ]
  },
  {
    name: "Mahasiswa",
    icon: User,
    color: "bg-amber-50 text-amber-700",
    rights: [
      "Mengajukan permohonan surat",
      "Unggah lampiran persyaratan",
      "Lacak status & unduh hasil",
      "Terima notifikasi proses"
    ]
  },
  {
    name: "Pimpinan Universitas",
    icon: Building2,
    color: "bg-rose-50 text-rose-700",
    rights: [
      "Persetujuan berjenjang",
      "TTE & paraf elektronik",
      "Kelengkapan disposisi",
      "Akses laporan eksekutif"
    ]
  }
];

export default function RolesAccess() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Jenis Pengguna & Hak Akses</h2>
        <p className="text-gray-600 mt-2">Hak akses dirancang berjenjang untuk memastikan kepatuhan, kecepatan layanan, dan akuntabilitas.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((r) => (
          <div key={r.name} className="rounded-xl border bg-white p-5 shadow-sm">
            <div className={`inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm ${r.color}`}>
              <r.icon className="h-4 w-4" />
              {r.name}
            </div>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              {r.rights.map((right) => (
                <li key={right} className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
