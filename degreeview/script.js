// JavaScript function to toggle the menu visibility
function toggleMenu() {
    var menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
}

// Function to close the menu when clicking outside of it
function closeMenu(event) {
    var menu = document.getElementById("navMenu");
    var menuButton = document.querySelector(".menu-toggle");
    
    // Check if the clicked element is not the menu itself or the menu button
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.remove("show");
    }
}

// Add event listener to toggle the menu
document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

// Add event listener to close the menu when clicking outside
document.addEventListener("click", closeMenu);
