// Shopping Cart Toggle
let cart = document.querySelector('.shopping-cart');
document.querySelector('#cart').onclick = () => {
    cart.classList.toggle('active');
    login.classList.remove('active');
};

// Login Form Toggle
let login = document.querySelector('.login-form');
document.querySelector('#login').onclick = () => {
    login.classList.toggle('active');
    cart.classList.remove('active');
};

// Navbar Toggle
let navbar = document.querySelector('.navbar');
document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
};

// Hide Active Elements on Scroll
window.onscroll = () => {
    cart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
};

// Home Slider Initialization (Swiper.js)
var homeSwiper = new Swiper(".home-slider", {
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Menu Slider Initialization (Swiper.js)
var menuSwiper = new Swiper(".menu-slider", {
    grabCursor: true,
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    spaceBetween: 20, // Fixed typo
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Menu Preview Logic
let previewContainer = document.querySelector('.menu-preview-container');
let previewBox = previewContainer.querySelectorAll('.menu-preview');
document.querySelectorAll('.menu .box').forEach(menu => {
    menu.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = menu.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

// Close Menu Preview
previewContainer.querySelector('#close').onclick = () => {
    previewContainer.style.display = 'none';
    previewBox.forEach(close => {
        close.classList.remove('active');
    });
};

// Telegram WebApp Integration
const tg = window.Telegram.WebApp;

// Ensure the WebApp is ready
tg.ready();

// Configure Telegram Main Button
tg.MainButton.setParams({
    text: "Order Now",
    color: "#ff6600",
});

// Handle Order Button Click
document.getElementById("order").addEventListener("click", () => {
    const statusMessage = document.getElementById("status-message");
    statusMessage.style.display = "block";

    tg.MainButton.show();
    tg.MainButton.onClick(() => {
        tg.sendData(JSON.stringify({ order: "Juice Order Confirmed!" })); // Send order data
        tg.close(); // Close the Telegram mini app
    });
});

// Expand Telegram WebApp
tg.expand();
