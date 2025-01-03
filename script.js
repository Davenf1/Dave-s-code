let menuIcon = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY; // Current scroll position

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Adjust for navbar height
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the current section is in the viewport
        if (top >= offset && top < offset + height) {
           navLinks.forEach(link => {
              link.classList.remove('active'); // Remove "active" from all links
              document.querySelector('header nav a[href*="' + id + '"]').classList.add('active'); // Add "active" to the current link
           });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
