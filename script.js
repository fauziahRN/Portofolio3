// ===== PROJECT DATA =====
// images: array label halaman sebagai placeholder screenshot
const projects = {
  bumdes: {
    title: "Website Sistem Informasi Manajemen BUMDes",
    color: "blue",
    badges: ['<span class="label-badge skripsi">Skripsi</span>', '<span class="label-badge individu">Individu</span>'],
    desc: "Sistem informasi Manajemen berbasis web untuk pengelolaan Badan Usaha Milik Desa (BUMDes) yang dirancang untuk mendigitalisasi proses administrasi, pengelolaan operasional, serta pelaporan agar lebih terintegrasi, efektif, dan transparan.",
    images: [
        { label: "Login",                       src: "images/bumdes/login.png" },
      { label: "Dashboard Admin",            src: "images/bumdes/dashboard-admin.png" },
       { label: "Persebaran Wilayah",          src: "images/bumdes/persebaran-wilayah.png" },
      { label: "Daftar Tugas Dokumentasi",       src: "images/bumdes/kunjungan-dokumentasi.png" },
      { label: "Pembagian Tugas Dokumentasi", src: "images/bumdes/pembagian-tugas-dokumentasi.png" },
        { label: "Pelanggan",                   src: "images/bumdes/pelanggan.png" },
      { label: "Pimpinan",                    src: "images/bumdes/pimpinan.png" }
    ],
    features: [
      "Pengelolaan data pelanggan oleh admin seperti menambah, mengubah, menghapus, dan memonitor data secara terpusat.",
      "Visualisasi pemetaan wilayah pelanggan dalam bentuk peta untuk memudahkan distribusi dan penentuan lokasi kunjungan.",
      "Dukungan sistem pencatatan lapangan oleh tim dokumentasi untuk input hasil kunjungan dan meteran air berdasarkan lokasi.",
      "Pengelolaan tagihan oleh admin dengan input biaya yang akan digunakan sebagai dasar pembayaran pelanggan.",
      "Sistem pembayaran pelanggan berdasarkan tagihan yang telah ditentukan oleh admin.",
      "Pembuatan laporan penagihan oleh admin untuk periode tertentu sebagai bahan evaluasi dan pelaporan."
    ],
    tech: ["PHP", "MySQL", "HTML", "Tailwind CSS", "JavaScript"]
  },
  elearning: {
    title: "E-Learning Website",
    color: "purple",
    badges: ['<span class="label-badge kelompok">Kelompok</span>'],
    desc: "Platform pembelajaran online yang memfasilitasi proses belajar mengajar antara guru dan siswa secara digital, di mana guru dapat memberikan tugas dan siswa dapat mengerjakan serta mengumpulkannya secara online dengan lebih terstruktur dan efisien.",
    images: [
      { label: "Login",        src: "images/e-learning/login.png" },
      { label: "Guru Educlass", src: "images/e-learning/guru-educlass.png" },
      { label: "Guru Edutask",  src: "images/e-learning/guru-edutask.png" },
      { label: "Siswa Edutask", src: "images/e-learning/siswa-edutask.png" }
    ],
    features: [
      "Guru memberikan tugas dalam bentuk teks atau instruksi langsung melalui sistem",
      "Siswa menerima tugas dan mengerjakan sesuai instruksi yang diberikan",
      "Siswa mengumpulkan hasil tugas dalam bentuk file (PDF atau dokumen)",
      "Pengelolaan kelas dan mata pelajaran oleh guru",
      "Penilaian tugas oleh guru secara online"
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
  },
  banksampah: {
    title: "Website Pengelolaan Bank Sampah",
    color: "green",
    badges: ['<span class="label-badge kelompok">Kelompok</span>'],
    desc: "Sistem pengelolaan bank sampah berbasis web untuk memudahkan pencatatan nasabah, setoran sampah, penarikan saldo, dan laporan pengelolaan sampah secara digital.",
    images: [
      { label: "Login",                  src: "images/banksampah/login.png" },
      { label: "Dashboard Pengurus",     src: "images/banksampah/dashboard-pengurus.png" },
       { label: "Daftar Nasabah",         src: "images/banksampah/daftar-nasabah.png" },
        { label: "Setoran Sampah",         src: "images/banksampah/setoran-sampah.png" },
      { label: "Daftar Kategori Sampah", src: "images/banksampah/daftar-kategori-sampah.png" },
        { label: "Transaksi Penarikan",    src: "images/banksampah/transaksi-penarikan.png" },
      { label: "Dashboard Nasabah",      src: "images/banksampah/dashboard-nasabah.png" },
      { label: "Setoran Nasabah",        src: "images/banksampah/setoran-nasabah.png" },
      { label: "Pengajuan Penarikan",    src: "images/banksampah/pengajuan-penarikan.png" }
    ],
    features: [
      "Registrasi dan manajemen data nasabah",
      "Pencatatan setoran sampah berdasarkan kategori",
      "Manajemen saldo dan penarikan",
      "Laporan setoran dan penarikan",
      "Katalog harga sampah per kategori",
      "Dashboard ringkasan aktivitas"
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
  },
  streaming: {
    title: "Video Streaming Website",
    color: "orange",
    badges: ['<span class="label-badge kelompok">Kelompok</span>'],
    desc: "Platform streaming video berbasis web yang menampilkan konten video pada dashboard pengguna, di mana pengguna dapat menonton, mengunduh, dan menyukai video yang tersedia, sementara admin memiliki kontrol penuh dalam pengelolaan konten.",
    images: [
      { label: "Login Admin",  src: "images/streaming/login-admin.png" },
       { label: "Upload Video", src: "images/streaming/upload-video.png" },
       { label: "Form Daftar",  src: "images/streaming/form-daftar.png" },
      { label: "Dashboard User",    src: "images/streaming/dashboard.png" }
    ],
    features: [
      "Admin dapat mengunggah, mengedit, dan menghapus video atau film",
      "Pengguna dapat menonton video yang ditampilkan pada dashboard",
      "Pengguna dapat mengunduh video yang tersedia",
      "Fitur like untuk menyukai konten video",
      "Panel admin untuk moderasi konten"
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
  },
  pembayaran: {
    title: "Website Servis Pembayaran Kuliah",
    color: "teal",
    badges: ['<span class="label-badge kelompok">Kelompok</span>'],
    desc: "Sistem layanan pembayaran kuliah mahasiswa yang memudahkan proses administrasi keuangan kampus, mulai dari tagihan, pembayaran, hingga riwayat transaksi.",
    images: [
       { label: "Homepage",                          src: "images/pembayaran/Homepage.png" },
       { label: "Dashboard Admin Universitas",       src: "images/pembayaran/Dashboard Admin Universitas.png" },
          { label: "Validasi Pembayaran",               src: "images/pembayaran/Validasi Pembayaran.png" },
        { label: "Riwayat Pembayaran Mahasiswa",      src: "images/pembayaran/Riwayat Pembayaran Mahasiswa.png" },
      { label: "Dashboard Admin Fakultas",          src: "images/pembayaran/Dashboard Admin Fakultas.png" },
        { label: "Aktivasi KRS",                      src: "images/pembayaran/Aktivasi KRS.png" },
          { label: "Daftar Pembayaran Mahasiswa",          src: "images/pembayaran/Daftar Tagihan Mahasiswa.png" },
      { label: "Dashboard Mahasiswa",               src: "images/pembayaran/Dashboard Mahasiswa.png" },
      { label: "Tagihan Mahasiswa",                 src: "images/pembayaran/Tagihan Mahasiswa.png" },
         { label: "Riwayat Pembayaran",                src: "images/pembayaran/Riwayat Pembayaran.png" }
    ],
    features: [
      "Manajemen tagihan Biaya Kuliah",
      "Riwayat transaksi pembayaran",
      "Notifikasi tagihan jatuh tempo",
      "Laporan keuangan per periode"
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
  },
  laboratorium: {
    title: "Website Manajemen Laboratorium",
    color: "indigo",
    badges: ['<span class="label-badge kelompok">Kelompok</span>'],
    desc: "Sistem manajemen laboratorium berbasis web yang digunakan untuk mengatur jadwal praktikum, mencatat kehadiran praktikan oleh dosen atau asisten, serta melaporkan kerusakan perangkat atau alat laboratorium secara terpusat dan digital.",
    images: [
      { label: "Register",                      src: "images/laboratorium/register.png" },
      { label: "Dashboard Dosen",              src: "images/laboratorium/dashboard dosen.png" },
      { label: "Dashboard Asisten",            src: "images/laboratorium/dashboard Asisten.png" },
        { label: "Jadwal Praktikum",             src: "images/laboratorium/jadwal praktikum.png" },
      { label: "Input Kehadiran",              src: "images/laboratorium/Input kehadiran.png" },
            { label: "Daftar Mahasiswa",             src: "images/laboratorium/Daftar Mahasiswa.png" },
      { label: "Laporan Kerusakan Perangkat",  src: "images/laboratorium/Laporan Kerusakan Perangkat.png" }
    ],
    features: [
      "Pengaturan jadwal penggunaan laboratorium untuk kegiatan praktikum",
      "Pencatatan kehadiran praktikan/mahasiswa oleh dosen atau asisten laboratorium",
      "Pelaporan kerusakan perangkat atau alat laboratorium oleh asisten"
    ],
    tech: ["Python", "Django", "SQLite", "HTML", "Tailwind CSS", "JavaScript"]
  }
};

// ===== CERT LINK =====
function openCert(url) {
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  updateActiveNav();
});

// ===== ACTIVE NAV LINK =====
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
    if (!link) return;
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    link.classList.toggle('active', scrollY >= top && scrollY < bottom);
  });
}

// ===== MOBILE MENU =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// ===== FADE IN OBSERVER =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in, .fade-in-delay').forEach(el => observer.observe(el));

// Additional scroll reveal targets (without changing HTML)
document.querySelectorAll(
  '.project-card, .skill-card, .cert-item, .contact-card'
).forEach(el => {
  el.classList.add('reveal');
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Respect reduced motion: don't keep elements hidden waiting for observer
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.fade-in, .fade-in-delay, .reveal').forEach(el => el.classList.add('visible'));
}

// ===== MODAL & GALLERY =====
const overlay = document.getElementById('modalOverlay');
let currentSlide = 0;
let currentImages = [];
let currentColor = '';

// Build one slide — pakai <img> jika ada src, fallback ke SVG placeholder
function buildSlide(img, active) {
  const isObj = typeof img === 'object';
  const label = isObj ? img.label : img;
  const src   = isObj ? img.src   : null;

  const svgMap = {
    blue:   `<svg viewBox="0 0 80 60" fill="none"><rect x="8" y="8" width="64" height="44" rx="4" fill="rgba(255,255,255,0.1)"/><rect x="16" y="16" width="20" height="14" rx="2" fill="rgba(255,255,255,0.3)"/><rect x="44" y="16" width="20" height="6" rx="1" fill="rgba(255,255,255,0.3)"/><rect x="16" y="36" width="48" height="4" rx="1" fill="rgba(255,255,255,0.2)"/></svg>`,
    purple: `<svg viewBox="0 0 80 60" fill="none"><rect x="8" y="8" width="64" height="44" rx="4" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="28" r="12" fill="rgba(255,255,255,0.15)"/><polygon points="36,22 36,34 50,28" fill="rgba(255,255,255,0.5)"/></svg>`,
    green:  `<svg viewBox="0 0 80 60" fill="none"><rect x="8" y="8" width="64" height="44" rx="4" fill="rgba(255,255,255,0.1)"/><rect x="20" y="18" width="16" height="20" rx="2" fill="rgba(255,255,255,0.3)"/><rect x="44" y="24" width="16" height="14" rx="2" fill="rgba(255,255,255,0.25)"/></svg>`,
    orange: `<svg viewBox="0 0 80 60" fill="none"><rect x="8" y="8" width="64" height="44" rx="4" fill="rgba(255,255,255,0.1)"/><rect x="12" y="12" width="36" height="26" rx="2" fill="rgba(255,255,255,0.2)"/><polygon points="27,21 27,29 35,25" fill="rgba(255,255,255,0.5)"/></svg>`,
    teal:   `<svg viewBox="0 0 80 60" fill="none"><rect x="8" y="8" width="64" height="44" rx="4" fill="rgba(255,255,255,0.1)"/><rect x="16" y="18" width="48" height="28" rx="3" fill="rgba(255,255,255,0.15)"/><rect x="16" y="18" width="48" height="10" rx="3" fill="rgba(255,255,255,0.25)"/></svg>`,
    indigo: `<svg viewBox="0 0 80 60" fill="none"><rect x="8" y="8" width="64" height="44" rx="4" fill="rgba(255,255,255,0.1)"/><rect x="14" y="14" width="22" height="16" rx="2" fill="rgba(255,255,255,0.2)"/><rect x="44" y="14" width="22" height="16" rx="2" fill="rgba(255,255,255,0.2)"/></svg>`
  };

  const inner = src
    ? `<img src="${src}" alt="${label}" style="width:100%;height:auto;display:block;" />`
    : `<div class="img-placeholder ${currentColor}" style="height:260px;">${svgMap[currentColor] || ''}</div>`;

  return `
    <div class="gallery-slide${active ? ' active' : ''}">
      ${inner}
      <span class="gallery-label">${label}</span>
    </div>`;
}

function renderGallery() {
  const track = document.getElementById('galleryTrack');
  track.innerHTML = currentImages.map((img, i) => buildSlide(img, i === 0)).join('');

  // dots
  document.getElementById('galleryDots').innerHTML =
    currentImages.map((_, i) => `<button class="dot${i === 0 ? ' active' : ''}" onclick="goSlide(${i})"></button>`).join('');

  currentSlide = 0;
  updateGallery();
}

function updateGallery() {
  const slides = document.querySelectorAll('.gallery-slide');
  const dots   = document.querySelectorAll('.dot');
  slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
  dots.forEach((d, i)   => d.classList.toggle('active', i === currentSlide));
  document.getElementById('galleryCounter').textContent = `${currentSlide + 1} / ${currentImages.length}`;
  document.getElementById('galleryPrev').disabled = currentSlide === 0;
  document.getElementById('galleryNext').disabled = currentSlide === currentImages.length - 1;
}

function goSlide(index) {
  currentSlide = index;
  updateGallery();
}

function prevSlide() { if (currentSlide > 0) { currentSlide--; updateGallery(); } }
function nextSlide() { if (currentSlide < currentImages.length - 1) { currentSlide++; updateGallery(); } }

function openModal(id) {
  const p = projects[id];
  if (!p) return;

  currentImages = p.images;
  currentColor  = p.color;
  renderGallery();

  document.getElementById('modalMeta').innerHTML    = p.badges.join('');
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent  = p.desc;
  document.getElementById('modalFeatures').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('modalTech').innerHTML     = p.tech.map(t => `<span class="tech">${t}</span>`).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (!overlay.classList.contains('open')) return;
  if (e.key === 'Escape')      closeModal();
  if (e.key === 'ArrowLeft')   prevSlide();
  if (e.key === 'ArrowRight')  nextSlide();
});
