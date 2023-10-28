// Mengambil elemen-elemen HTML yang dibutuhkan
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

// Mendapatkan tahun saat ini
const currentYear = new Date().getFullYear();

// Mendapatkan waktu tahun baru (1 Januari tahun berikutnya)
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Menampilkan tahun baru di latar belakang
year.innerText = currentYear + 1;

// Fungsi untuk mengupdate countdown
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  // Menghitung hari, jam, menit, dan detik yang tersisa
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Menambahkan nilai-nilai ke DOM (tampilan halaman)
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Menampilkan spinner sebelum countdown dimulai dan menghilangkan loading
setTimeout(() => {
  loading.remove(); // Menghapus elemen loading
  countdown.style.display = 'flex'; // Menampilkan elemen countdown
}, 1000);

// Menjalankan fungsi updateCountdown setiap detik
setInterval(updateCountdown, 1000);
