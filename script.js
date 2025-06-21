document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const partnersSlider = new Swiper('.partners-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 5,
                spaceBetween: 40
            }
        }
    });
});

// Modal
const modal = document.getElementById("download-modal");
const openBtn = document.getElementById("open-popup-btn");
const openBtnHero = document.getElementById("open-popup-btn-hero");
const closeBtn = document.querySelector(".close-btn");

function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

openBtn.addEventListener("click", openModal);
openBtnHero.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
}); 