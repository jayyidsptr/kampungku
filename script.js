
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
  }

  // Gunakan SweetAlert2 untuk menampilkan pesan selamat datang
  document.addEventListener("DOMContentLoaded", function () {
    Swal.fire({
        title: 'Selamat Datang di Portal Kampung Kecicang Islam!!',
        text: 'Silahkan login terlebih dahulu...',
        icon: 'info',
        confirmButtonText: 'OK',
        showClass: {
            popup: 'animated fadeInDown faster' // Animasi masuk dari atas
        },
        hideClass: {
            popup: 'animated fadeOutUp faster' // Animasi keluar ke atas
        }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const portalElements = document.querySelector(".portal-elements");
    const loginElements = document.querySelector(".login-elements");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const admin = 'd2FyZ2E=';
        const adminPass = 'd2FyZ2ExMjM=';

        const decodedStringAtoB = atob(admin);
        const decodedString = atob(adminPass);

        // Ganti kode di bawah ini dengan logika autentikasi yang sesuai
        if (username === decodedStringAtoB && password === decodedString) {
            portalElements.style.display = "block";
            window.location.href = "/fitur/portal.html";
        } else if (username === "tamu" && password === "tamu123") {
            Swal.fire({
                title: "Login Sukses",
                text: "Silahkan isi buku tamu terlebih dahulu, untuk menikmati layanan lainnya.",
                icon: "success",
                confirmButtonText: "OK",
                showClass: {
                    popup: 'animated fadeInDown faster' // Animasi masuk dari atas
                },
                hideClass: {
                    popup: 'animated fadeOutUp faster' // Animasi keluar ke atas
                }
            });
            portalElements.style.display = "block";
            loginElements.style.display = "none";
        } else {
            portalElements.style.display = "none";
            Swal.fire({
                title: "Login Gagal",
                text: "Username atau password salah.",
                icon: "error",
                confirmButtonText: "OK",
                showClass: {
                    popup: 'animated fadeInDown faster' // Animasi masuk dari atas
                },
                hideClass: {
                    popup: 'animated fadeOutUp faster' // Animasi keluar ke atas
                }
            });
        }
    });
  });

