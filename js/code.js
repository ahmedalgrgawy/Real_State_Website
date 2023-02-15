// Selectors
const header = document.querySelector("#header");

const popularSwiper = document.querySelector(".popular_container");

const accoItems = document.querySelectorAll(".value-acco-item");

const sections = document.querySelectorAll('section[id]');

const scrollUpElement = document.querySelector(".scroll-up")

// Value Toggle Itmes
accoItems.forEach((item) => {
    const acooHeader = item.querySelector(".value-acco-header");
    acooHeader.addEventListener("click", () => {

        const openItem = document.querySelector(".acco-open");
        toggleItems(item);

        if (openItem && openItem !== item) {
            toggleItems(openItem);
        }
    })
})

// Scroll Activity
window.addEventListener("scroll", scrollAction);

// Changing Nav BackgroundColor
window.addEventListener("scroll", scrollHeader);

// Scroll Up Activity
window.addEventListener("scroll", scrollUp);

// Functions 

// Toggling Items Function
function toggleItems(i) {
    const accoContent = i.querySelector(".value-acco-content");

    if (i.classList.contains('acco-open')) {

        accoContent.removeAttribute('style');

        i.classList.remove("acco-open");

    } else {

        accoContent.style.height = accoContent.scrollHeight + 'px';

        i.classList.add("acco-open");

    }
}

// Nav Header Scroll Function
function scrollHeader() {
    if (this.scrollY >= 50) {

        header.classList.add("scroll-header")

    }
}

// Scroll Function
function scrollAction() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

// Scroll Up Function 
function scrollUp() {
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

// Swiper For Popular
var swiper = new Swiper(popularSwiper, {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Scroll Reveal Animate
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(`.home-title, .popular-container, .subscribe-container, .footer-container`);
sr.reveal(`.home-desc, .footer-info`, { delay: 500 });
sr.reveal(`.home-search`, { delay: 600 });
sr.reveal(`.home-value`, { delay: 700 });
sr.reveal(`.home-images`, { delay: 800, origin: 'bottom' });
sr.reveal(`.logos-img`, { interval: 100 })
sr.reveal(`.value-images, .contact-content`, { origin: 'left' });
sr.reveal(`.value-content, .contact-images`, { origin: 'right' });

// ========================= Dark Mode =========================

const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = 'bx-sun'

const SelectedTheme = localStorage.getItem("selected-theme")
const SelectedIcon = localStorage.getItem("selected-icon")

const currentTheme = () => { document.body.classList.contains(darkTheme) ? 'dark' : 'light' }
const currentIcon = () => { themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun' }

if (SelectedTheme !== null) {
    document.body.classList[SelectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[SelectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', currentTheme())
    localStorage.setItem('selected-icon', currentIcon())
})

