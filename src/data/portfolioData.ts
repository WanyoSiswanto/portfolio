export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Web App" | "Data Analytics" | "Automation" | "Enterprise System";
  description: string;
  problemSolved: string;
  image?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  features: string[];
  demoUrl?: string;
  previewUrl?: string;
  githubUrl?: string;
  featured: boolean;
  statusBadge?: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Wanyo Siswanto",
    role: "Data Analyst & Web Developer",
    status: "Tersedia untuk proyek Web & Analisis Data",
    location: "Indonesia",
    avatar: "/wanyo-profile.jpg",
    shortBio:
      "Menganalisis data dan membangun aplikasi web fungsional untuk kebutuhan nyata—mulai dari SaaS manajemen cuci sepatu NyoClean (POS, live tracking & direct WA), landing page farmasi modern Nyopharma (arsitektur SaaS-ready), hingga sistem monitoring kalibrasi & validasi industri (CQ System).",
    detailedBio: [
      "Saya mendalami dunia data analytics untuk mengekstrak insight berharga, memodelkan tren bisnis, dan menjaga integritas data operasional.",
      "Sebagai developer pragmatis (vibe coding), saya mengeksekusi kebutuhan bisnis riil menjadi aplikasi web fungsional: mulai dari platform SaaS manajemen workshop sepatu NyoClean (lengkap dengan POS counter, live tracking, struk thermal, & WhatsApp automation), landing page profesional farmasi Nyopharma (arsitektur SaaS-ready), hingga sistem web industri CQ System untuk otomasi program tahunan kalibrasi, pelacakan realisasi, dan database validasi.",
    ],
    contact: {
      email: "nyouniverseofficial@gmail.com",
      github: "https://github.com/WanyoSiswanto",
      linkedin: "https://www.linkedin.com/in/wanyosiswanto/",
    },
  },

  projects: [
    {
      id: "nyoclean",
      title: "NyoClean - Shoe Care SaaS & POS",
      subtitle: "Sistem Manajemen Kasir Workshop & Live Tracking Cuci Sepatu (Arsitektur Dual-Mode)",
      category: "Web App",
      featured: true,
      statusBadge: "Functional SaaS (Live)",
      image: "/nyoclean-thumb.jpg",
      description:
        "Aplikasi SaaS & POS operasional terintegrasi untuk bisnis jasa cuci dan perawatan sepatu profesional (shoe laundry & atelier). Dilengkapi sistem kasir counter cepat, dokumentasi foto inspeksi sebelum dan sesudah pengerjaan (Before/After), cetak struk nota thermal (58mm/80mm), manajemen antrean teknisi via Kanban board, integrasi notifikasi WhatsApp direct click-to-chat 100% tanpa biaya API, serta portal live tracking publik untuk pelanggan melacak status cucian secara transparan.",
      problemSolved:
        "Menghilangkan pencatatan nota kertas fisik yang rawan tercecer dan memangkas pertanyaan berulang 'sepatu saya sudah selesai belum?' lewat portal live tracking instan tanpa perlu login. Menjamin transparansi kondisi sepatu pelanggan lewat foto inspeksi visual, serta menyediakan sistem siap uji coba instan via arsitektur Dual-Mode.",
      metrics: [
        { label: "Arsitektur Data", value: "Dual-Mode (Demo + DB)" },
        { label: "Notifikasi WA", value: "100% Gratis (Direct)" },
        { label: "Pelacakan", value: "Real-time Live Tracking" },
      ],
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma ORM",
        "PostgreSQL",
        "POS System",
        "Kanban Board",
        "Live Tracking",
        "Vercel",
      ],
      features: [
        "Kasir POS Counter Cepat: Input order kilat dengan pilihan treatment bahan (Deep Clean, Leather, Suede, Unyellowing) dan estimasi selesai",
        "Visual Inspeksi Sepatu: Dokumentasi kondisi foto Sebelum (Before) dan Sesudah (After) pengerjaan untuk transparansi & perlindungan garansi",
        "Portal Live Tracking Publik (/track): Pelanggan cukup memasukkan No. Nota (CS-...) atau No. WhatsApp untuk memantau status cucian tanpa perlu login",
        "Struk Thermal & Direct WhatsApp: Cetak nota kasir standar 58mm/80mm serta kirim pesan update status otomatis via WhatsApp tanpa biaya gateway pihak ketiga",
        "Papan Kanban Teknisi & Proteksi Rute: Monitoring alur workshop (Antrean, Cuci, Kering, Detailing, Siap Diambil) dengan autentikasi proteksi Next.js Middleware",
      ],
      demoUrl: "https://nyoclean.vercel.app/",
      githubUrl: "https://github.com/WanyoSiswanto/Saas-CuciSepatu",
      accentColor: "#2563EB",
    },
    {
      id: "nyopharma",
      title: "Nyopharma - Apotek Digital",
      subtitle: "Landing Page Apotek Modern (Arsitektur Siap Berkembang Menjadi SaaS)",
      category: "Web App",
      featured: true,
      statusBadge: "Landing Page (SaaS-Ready)",
      image: "/nyopharma-thumb.jpg",
      description:
        "Landing page modern dan responsif untuk apotek berizin resmi. Berfungsi menyajikan informasi layanan farmasi, etalase katalog obat standar BPOM, alur konsultasi apoteker via WhatsApp, serta form unggah resep dokter. Dirancang dengan arsitektur kode modular yang bersih sehingga sangat siap jika sewaktu-waktu ingin dikembangkan lebih lanjut menjadi platform SaaS apotek online lengkap.",
      problemSolved:
        "Memberikan representasi digital profesional dan terpercaya bagi apotek fisik untuk melayani konsultasi dan tebus resep secara online, dengan fondasi teknis yang fleksibel untuk ekspansi menjadi platform e-pharmacy skala penuh.",
      metrics: [
        { label: "Dasar Web", value: "Landing Page" },
        { label: "Skalabilitas", value: "SaaS-Ready" },
        { label: "Alur Pasien", value: "Resep & Chat" },
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Landing Page", "SaaS-Ready", "Vercel"],
      features: [
        "Landing page farmasi interaktif berizin resmi Kemenkes RI & verifikasi BPOM",
        "Etalase katalog obat terstandarisasi HET dengan info dosis & klasifikasi obat",
        "Formulir unggah resep dokter digital untuk verifikasi cepat oleh apoteker",
        "Arsitektur frontend modular berbasis Next.js yang siap dikembangkan menjadi SaaS apotek online",
      ],
      demoUrl: "https://nyopharma.vercel.app/",
      githubUrl: "https://github.com/WanyoSiswanto/nyopharma",
      accentColor: "#0D9488",
    },
    {
      id: "cq-compliance",
      title: "CQ - Compliance & Qualification",
      subtitle: "Sistem Monitoring Kalibrasi, Kualifikasi & Validasi (Program Tahunan & Database)",
      category: "Enterprise System",
      featured: true,
      statusBadge: "Functional Web System",
      image: "/cq-weld-thumb.jpg",
      description:
        "Aplikasi web yang dibangun khusus untuk memonitor seluruh pekerjaan kalibrasi, kualifikasi, dan validasi di lingkungan industri farmasi/manufaktur. Sistem ini secara otomatis menyusun program tahunan rekalibrasi & rekualifikasi, mencatat progres realisasi pekerjaan di lapangan, serta berfungsi sebagai database terpusat master program dan instrumen.",
      problemSolved:
        "Menggantikan pelacakan spreadsheet manual yang rawan terlewat jadwal jatuh tempo audit, serta mengotomatisasi pembuatan program tahunan, pencatatan realisasi sertifikat, dan penyimpanan database instrumen dalam satu sistem terintegrasi.",
      metrics: [
        { label: "Fungsi Utama", value: "Monitoring & DB" },
        { label: "Program Tahunan", value: "Otomatis" },
        { label: "Pelacakan", value: "Realisasi Aktual" },
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "CPOB / GMP", "Monitoring Kalibrasi", "Program Tahunan Otomatis", "Database Validasi", "Vercel"],
      features: [
        "Pembuatan otomatis program tahunan untuk jadwal rekalibrasi dan rekualifikasi (DQ, IQ, OQ, PQ)",
        "Pencatatan progres realisasi pekerjaan lapangan lengkap dengan nomor sertifikat kalibrasi",
        "Database master terpusat untuk inventaris instrumen, riwayat riil pekerjaan, dan status operasional",
        "Monitoring status instrumen (Active, Scheduled, Due Soon, Overdue) untuk kesiapan audit berkala",
      ],
      demoUrl: "https://cq-weld.vercel.app/login",
      accentColor: "#38BDF8",
    },
    {
      id: "pharma-inventory-intelligence",
      title: "Pharma Inventory Intelligence",
      subtitle: "Model Analisis Prediksi Stok Obat & Pola Permintaan Farmasi",
      category: "Data Analytics",
      featured: false,
      statusBadge: "Analytics Lab",
      description:
        "Eksplorasi data transaksi dan tren resep obat untuk memprediksi kebutuhan stok kritis (antibiotik, vitamin musiman, obat kronis) guna menghindari kekosongan obat.",
      problemSolved:
        "Menekan potensi stockout obat esensial hingga 32% dengan perhitungan reorder point dinamis dan pola permintaan musiman.",
      metrics: [
        { label: "Stockout Reduction", value: "-32%" },
        { label: "Data Records", value: "85,000+" },
        { label: "Forecast Accuracy", value: "94.2%" },
      ],
      tags: ["Python", "Pandas", "SQL", "Forecasting", "Data Visualization"],
      features: [
        "Klasifikasi ABC Analysis untuk perputaran produk farmasi",
        "Pendeteksian lonjakan permintaan obat musiman",
        "Laporan otomatis jadwal restock bagi tim pengadaan",
      ],
      accentColor: "#10B981",
    },
    {
      id: "cdob-distribution-monitor",
      title: "CDOB Delivery & Feed Monitor",
      subtitle: "Web Tool Pemantau Distribusi Obat & Integritas Data Harga",
      category: "Automation",
      featured: false,
      statusBadge: "Automation Tool",
      description:
        "Mini web tool untuk memantau status pengiriman obat terjaga suhu 22°C serta sinkronisasi katalog harga obat eceran tertinggi (HET) secara berkala.",
      problemSolved:
        "Memastikan standar suhu obat sensitif tetap terjaga selama pengantaran dan mendeteksi anomali harga sebelum katalog tayang.",
      metrics: [
        { label: "Suhu Terjaga", value: "22°C CDOB" },
        { label: "Uptime Monitor", value: "99.9%" },
        { label: "Alert Response", value: "Real-time" },
      ],
      tags: ["React", "Node.js", "REST APIs", "Automation"],
      features: [
        "Monitoring status suhu box pengiriman obat CDOB",
        "Validasi harga produk terhadap ketentuan HET Kemenkes",
        "Notifikasi otomatis jika terjadi penundaan kurir",
      ],
      accentColor: "#F59E0B",
    },
  ] as Project[],

  skillCategories: [
    {
      title: "Data Analytics & Insights",
      badge: "DATA CORE",
      description: "Fondasi utama dalam mengekstrak, membersihkan, dan menganalisis pola data bisnis nyata.",
      skills: [
        { name: "SQL (PostgreSQL / MySQL)", level: "Advanced", context: "Query analitis, CTE, agregasi penjualan, audit integritas data" },
        { name: "Python (Pandas, NumPy)", level: "Proficient", context: "Eksplorasi dataset, pembersihan tabel, analisis tren & anomali" },
        { name: "Business & Inventory Analytics", level: "Specialist", context: "Analisis turnover stok, peramalan permintaan, segmentasi produk" },
        { name: "Visualisasi Data (Tableau / BI)", level: "Proficient", context: "Desain dashboard eksekutif yang informatif dan mudah dimengerti" },
        { name: "Analisis Statistik", level: "Working Knowledge", context: "Distribusi probabilitas, korelasi variabel, time-series data" },
      ],
    },
    {
      title: "Web Development & Vibe Coding",
      badge: "WEB & TOOLS",
      description: "Mengeksekusi ide menjadi aplikasi web nyata, responsif, dan siap melayani pengguna.",
      skills: [
        { name: "Next.js & React", level: "Proficient", context: "App Router, SSR, Server & Client components, optimasi Vercel" },
        { name: "TypeScript & JavaScript", level: "Proficient", context: "Pengembangan komponen modular, type-safety, manipulasi DOM" },
        { name: "Tailwind CSS", level: "Advanced", context: "Sistem desain modern, layout responsif, micro-interactions, dark mode" },
        { name: "Three.js / WebGL", level: "Intermediate", context: "Efek 3D interaktif, spatial canvas, mouse inertia" },
        { name: "Sistem Kepatuhan (CQV / CPOB)", level: "Specialist", context: "Alur validasi kualifikasi, kalibrasi instrumen, integritas data audit" },
      ],
    },
  ] as SkillCategory[],

  workflowSteps: [
    {
      step: "01",
      title: "Riset Masalah & Regulasi",
      detail: "Mengidentifikasi alur kerja konvensional yang lambat, ketentuan regulasi (seperti CPOB atau BPOM), dan data yang dibutuhkan.",
    },
    {
      step: "02",
      title: "Perancangan Solusi & Alur Kerja",
      detail: "Menyusun struktur interaksi, tata letak informasi, dan alur penggunaan yang paling sederhana bagi pengguna.",
    },
    {
      step: "03",
      title: "Eksekusi Cepat (Vibe Coding)",
      detail: "Membangun aplikasi web fungsional secara tangkas dengan Next.js / React & Tailwind CSS berfokus pada fitur inti.",
    },
    {
      step: "04",
      title: "Deploy & Evaluasi Lapangan",
      detail: "Meluncurkan aplikasi ke Vercel, memastikan performa stabil, dan mengevaluasi kemudahan pemakaian.",
    },
  ],
};
