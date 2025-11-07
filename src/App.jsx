import HeroOverview from './components/HeroOverview';
import RolesAccess from './components/RolesAccess';
import WorkflowSections from './components/WorkflowSections';
import SecurityPrivacy from './components/SecurityPrivacy';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="font-semibold">Rancangan Aplikasi Persuratan Kampus</div>
          <nav className="hidden md:flex items-center gap-4 text-sm text-gray-600">
            <a href="#roles" className="hover:text-gray-900">Peran</a>
            <a href="#workflow" className="hover:text-gray-900">Alur</a>
            <a href="#integrations" className="hover:text-gray-900">Integrasi</a>
            <a href="#data" className="hover:text-gray-900">Struktur Data</a>
            <a href="#security" className="hover:text-gray-900">Keamanan</a>
          </nav>
        </div>
      </header>

      {/* Hero + Gambaran Umum, Tujuan, Fitur */}
      <HeroOverview />

      {/* Peran & Hak Akses */}
      <div id="roles">
        <RolesAccess />
      </div>

      {/* Alur Proses & Fitur terkait */}
      <div id="workflow">
        <WorkflowSections />
      </div>

      {/* Integrasi */}
      <section id="integrations" className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Integrasi yang Diinginkan</h2>
        <p className="text-gray-600 mt-2">Menghubungkan persuratan dengan ekosistem kampus agar data konsisten dan proses makin cepat.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border p-5 bg-white">
            <h3 className="font-semibold">Sistem Akademik</h3>
            <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Validasi status mahasiswa/dosen, NIM/NIDN, program studi.</li>
              <li>Tarik data akademik (IPK, status aktif, jadwal) untuk pengisian otomatis surat.</li>
            </ul>
          </div>
          <div className="rounded-xl border p-5 bg-white">
            <h3 className="font-semibold">Sistem Kepegawaian</h3>
            <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Validasi jabatan fungsional/struktural, unit kerja, dan kewenangan penandatangan.</li>
              <li>Matriks persetujuan otomatis berdasarkan struktur organisasi.</li>
            </ul>
          </div>
          <div className="rounded-xl border p-5 bg-white">
            <h3 className="font-semibold">Manajemen Dokumen</h3>
            <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Arsip digital, retensi, versi dokumen, dan kontrol akses.</li>
              <li>QR verifikasi publik dan tautan unduhan terproteksi.</li>
            </ul>
          </div>
          <div className="rounded-xl border p-5 bg-white">
            <h3 className="font-semibold">Layanan Notifikasi</h3>
            <ul className="mt-2 text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Email/in-app push untuk disposisi, persetujuan, dan perubahan status.</li>
              <li>Pengingat SLA dan eskalasi otomatis.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Struktur Data Utama */}
      <section id="data" className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">Struktur Data Utama</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="rounded-xl border bg-white p-5">
              <h3 className="font-semibold">Surat</h3>
              <ul className="mt-2 text-gray-700 space-y-1 list-disc list-inside">
                <li>id, jenis, perihal, nomor, tanggal, status, tingkat kerahasiaan</li>
                <li>pemohon, unit penerbit, tujuan, tembusan</li>
                <li>lampiran, file final, QR/verification hash</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-5">
              <h3 className="font-semibold">Pengguna</h3>
              <ul className="mt-2 text-gray-700 space-y-1 list-disc list-inside">
                <li>id, nama, peran, unit kerja</li>
                <li>identitas (NIM/NIDN/NIP), kontak</li>
                <li>hak akses & preferensi notifikasi</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-5">
              <h3 className="font-semibold">Unit Kerja</h3>
              <ul className="mt-2 text-gray-700 space-y-1 list-disc list-inside">
                <li>id, nama, tipe unit, induk</li>
                <li>pejabat berwenang & matriks persetujuan</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-5">
              <h3 className="font-semibold">Template Surat</h3>
              <ul className="mt-2 text-gray-700 space-y-1 list-disc list-inside">
                <li>id, jenis, versi, variabel dinamis</li>
                <li>penomoran, format tanda tangan, watermark</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-5">
              <h3 className="font-semibold">Log Aktivitas</h3>
              <ul className="mt-2 text-gray-700 space-y-1 list-disc list-inside">
                <li>waktu, aktor, aksi, catatan</li>
                <li>jejak persetujuan, disposisi, akses</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-5">
              <h3 className="font-semibold">Notifikasi</h3>
              <ul className="mt-2 text-gray-700 space-y-1 list-disc list-inside">
                <li>penerima, kanal, isi, status kirim</li>
                <li>jadwal pengingat & eskalasi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Keamanan & Privasi */}
      <div id="security">
        <SecurityPrivacy />
      </div>

      {/* Fitur Tambahan & Deskripsi Tampilan Utama */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold">Fitur Tambahan Opsional</h2>
            <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>Template otomatis dengan variabel dari data akademik/kepegawaian.</li>
              <li>Notifikasi multi-kanal, pelacakan status real-time, dan SLA.</li>
              <li>Dashboard statistik: volume surat, waktu layanan, bottleneck, kepatuhan.</li>
              <li>Riwayat & audit trail lengkap dengan versi dokumen dan komentar.</li>
              <li>Pencarian lanjutan, filter, dan simpan pencarian sebagai favorit.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Tampilan Utama (Menu/Halaman)</h2>
            <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>Beranda/Dashboard: ringkasan status, tugas pending, statistik.</li>
              <li>Inbox Surat Masuk: daftar, filter, disposisi, dan tindak lanjut.</li>
              <li>Pengajuan Surat Keluar: wizard pembuatan, unggah lampiran, preview.</li>
              <li>Persetujuan & TTE: antrean persetujuan, paraf, dan tanda tangan.</li>
              <li>Arsip Digital: pencarian, filter, detail surat, dan unduhan.</li>
              <li>Pelaporan: grafik, tabel, ekspor.</li>
              <li>Pengaturan: peran, template, penomoran, matriks kewenangan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Persuratan Kampus</span>
          <a href="#top" className="hover:text-gray-900">Kembali ke atas</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
