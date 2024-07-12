// scrollReveal
ScrollReveal({
  reset: true,
  distance: "50px",
  duration: 2500,
  delay: 400,
  opacity: 0,
});
ScrollReveal().reveal("#kartu-1", { delay: 400, origin: "left" });
ScrollReveal().reveal("#kartu-3, #img-hero", { delay: 400, origin: "right" });
ScrollReveal().reveal("#kartu, #teks-hero, #gambar-customer, #mitra-sec", { delay: 500, origin: "bottom" });
ScrollReveal().reveal("#kartu-2, #layanan-sec", { delay: 400, origin: "top" });
ScrollReveal().reveal(" #count-customer, .row-customer, #count-city, #judul-cust, #judul-mitra", { delay: 10, opacity: 0, distance: 0 });
// end ScrollReveal

document.querySelector(".navbar-toggler").addEventListener("click", function () {
  this.classList.toggle("collapsed");
});

// navbar scroll bg blur
// Ambil elemen navbar
const navbar = document.querySelector(".navbar");
// Fungsi untuk menambahkan atau menghapus kelas blur
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add("blur");
  } else {
    navbar.classList.remove("blur");
  }
}

// Tambahkan event listener untuk scroll
window.addEventListener("scroll", handleScroll);
// navbar scroll bg blur

// animasi teks
document.addEventListener("DOMContentLoaded", function () {
  const text = "Barang Selamat";
  const typewriter = document.getElementById("typewriter");
  let index = 0;
  let isDeleting = false;

  function type() {
    if (isDeleting) {
      if (index > 0) {
        typewriter.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(type, 100); // Adjust deleting speed here
      } else {
        isDeleting = false;
        setTimeout(type, 500); // Pause before typing again
      }
    } else {
      if (index < text.length) {
        typewriter.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(type, 150); // Adjust typing speed here
      } else {
        isDeleting = true;
        setTimeout(type, 1000); // Pause before deleting
      }
    }
  }

  typewriter.textContent = ""; // Clear initial text
  type();
});
// end teks animasi

// navbar scroll click animation
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah perilaku default link

      const targetId = this.getAttribute("href").substring(1); // Mendapatkan ID tujuan
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        scrollToElement(targetElement, 600); // Durasi scroll dalam milidetik (500ms)
      } else {
        console.error(`Element with ID ${targetId} not found.`);
      }
    });
  });

  function scrollToElement(element, duration) {
    const startingY = window.pageYOffset;
    const elementY = window.pageYOffset + element.getBoundingClientRect().top;
    const targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
    const diff = targetY - startingY;
    let start;

    if (!diff) return;

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);

      window.scrollTo(0, startingY + diff * percent);

      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
  }
});
// navbar scroll click animation

// menghitung customer
document.addEventListener("DOMContentLoaded", function () {
  function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(Math.floor((progress / duration) * range), range);
      element.textContent = start + increment + "+";
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = end + "+";
      }
    }

    window.requestAnimationFrame(step);
  }
  // end menghitung customer

  animateValue("count-customer", 1, 100, 2000); // 2000ms (2 detik) durasi animasi
  animateValue("count-city", 1, 10, 2000); // 2000ms (2 detik) durasi animasi
});

// send email
document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");

  email.addEventListener("click", function () {
    window.location.href = "mailto:aflahnabil01@gmail.com";
  });
});
// emd send email

window.addEventListener("load", function () {
  // Daftar halaman yang diizinkan (misalnya hanya index.html)
  const allowedPages = ["/index.html", "/"];

  // Cek apakah halaman saat ini termasuk dalam daftar halaman yang diizinkan
  if (!allowedPages.includes(window.location.pathname)) {
    // Jika tidak, arahkan ke halaman 404 atau halaman utama
    window.location.replace("404.html");
  }
});
