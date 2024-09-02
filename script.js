
document.addEventListener('DOMContentLoaded', () => {
    // Get references to all anchor elements where href starts with '#'
    const links = document.querySelectorAll('a[href^="#"]')

    function handleNavLinkClick(e) {
        e.preventDefault();

        // Remove 'active' class from all links
        links.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');

        // Get the target section using href attribute of the anchor
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Check if the target section exists before calling scrollIntoView
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Attach the click event listener to each link
    links.forEach(anchor => anchor.addEventListener('click', handleNavLinkClick));

});


// Function to handle scrolling and visibility of contact and footer sections
function viewOnScroll() {
    // Add scroll event listener to the window
    window.addEventListener('scroll', () => {
        // Get references to the contact and footer sections
        const contactSection = document.querySelector('.contact-section');
        const footerSection = document.querySelector('.footer-section');

        // Calculate the distance between the top of the viewport and the top edges of the contact and footer sections
        const contactSectionPosition = contactSection.getBoundingClientRect().top;
        const footerSectionTop = footerSection.getBoundingClientRect().top;

        // Calculate the point at which the contact section becomes visible on the screen (30% below the top of the viewport)
        const contactScreenPosition = window.innerHeight / 1.4;

        // If the contact section is within the specified distance from the top of the viewport, add the 'visible' class after a delay
        if (contactSectionPosition < contactScreenPosition) {
            setTimeout(() => {
                contactSection.classList.add('visible');
            }, 500);
        }

        // If the footer section is within the specified distance from the top of the viewport, add the 'visible' class after a delay
        if (footerSectionTop < window.innerHeight) {
            setTimeout(() => {
                footerSection.classList.add('visible');
            }, 500);
        }
    });

    // Add load event listener to the window
    window.addEventListener('load', function () {
        // Get reference to the map iframe within the contact details section
        var mapFrame = document.querySelector('.contact-details .map iframe');
        // Add the 'loaded' class to the map iframe when the page is fully loaded
        mapFrame.classList.add('loaded');
    });
}

// Call the viewOnScroll function to start handling scrolling and visibility
viewOnScroll();