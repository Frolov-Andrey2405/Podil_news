// Show Nav Bar

const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const close = document.querySelector('.nav-close');

toggle.addEventListener('click', () => {
    nav.classList.add('show-menu');
    close.classList.add('visible');
})

close.addEventListener('click', () => {
    nav.classList.remove('show-menu');
    close.classList.remove('visible');
})

// Remove Menu Bar on Mobile

const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    nav.classList.remove('show-menu');
    close.classList.remove('visible');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change active link

const linkColor = document.querySelectorAll('.nav-link');
function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))

// Header Shadow

let header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 70) {
        header.classList.add('header-shadow');
    }
    else header.classList.remove('header-shadow');
})

// Scroll To Top Button

document.addEventListener("DOMContentLoaded", () => {
    let up = document.querySelector('.up');

    if (up) {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 560) {
                up.classList.add('show');
            } else {
                up.classList.remove('show');
            }
        });

        up.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Load More

document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll(".article-card.hidden");
    const loadMoreButton = document.getElementById("loadMore");
    let index = 0;

    loadMoreButton.addEventListener("click", function () {
        let count = 0;
        while (index < articles.length && count < 3) {
            articles[index].classList.remove("hidden");
            index++;
            count++;
        }
        if (index >= articles.length) {
            loadMoreButton.classList.add("disabled");
            loadMoreButton.textContent = "Усі статті показані";
        }
    });
});