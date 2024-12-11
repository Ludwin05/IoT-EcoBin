document.addEventListener("DOMContentLoaded", function () {
    // Toggle menu for mobile view
    const toggleButton = document.querySelector('.toggle_btn');
    const navbar = document.querySelector('.navbar');
    const dropdownMenus = document.querySelectorAll('.dropdown_menu'); // Changed to all dropdowns for better scalability

    // Toggle the navbar on mobile when toggle button is clicked
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            navbar.classList.toggle('active');
        });
    } else {
        console.warn('Toggle button not found in the DOM.');
    }

    // Toggle dropdown menu visibility when dropdown button is clicked
    document.querySelector('.navbar').addEventListener('click', function (event) {
        const dropdown = event.target.closest('.dropdown');
        if (dropdown) {
            event.stopPropagation(); // Prevents bubbling to the navbar or other dropdowns
            const dropdownMenu = dropdown.querySelector('.dropdown_menu');
            if (dropdownMenu) {
                dropdownMenu.classList.toggle('active'); // Toggle active class to show/hide dropdown
            }
        }
    });

    // Close dropdowns if clicked outside of the navbar or dropdown
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar')) {
            dropdownMenus.forEach(function (dropdownMenu) {
                dropdownMenu.classList.remove('active');
            });
        }
    });

    // Select all images with the 'clickable-feature' or 'clickable-diagram' class
    const clickableImages = document.querySelectorAll('.clickable-feature, .clickable-diagram');
    clickableImages.forEach(image => {
        image.addEventListener('click', function () {
            image.classList.toggle('enlarged'); // Toggle enlarged class to enlarge image on click
        });
    });
});
