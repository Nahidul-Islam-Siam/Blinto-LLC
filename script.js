const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const menuIcon = mobileMenuBtn.querySelector('img'); // Select the image inside the button

const menuOpenIcon = "./assets/navbar/Button Icon.svg"; // Default menu icon
const menuCloseIcon = "./assets/navbar/Close Icon.svg"; // Replace with your close icon path

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');
    
    // Toggle the menu visibility
    navLinks.classList.toggle('active');

    // Swap the image source based on the menu state
    menuIcon.src = isOpen ? menuOpenIcon : menuCloseIcon;
});
