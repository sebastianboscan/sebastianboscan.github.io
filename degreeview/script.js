// JavaScript function to toggle the menu visibility
function toggleMenu(event) {
    var menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
    
    // Prevent the click from propagating to the document
    event.stopPropagation();
}

// Function to close the menu when clicking outside of it
function closeMenu(event) {
    var menu = document.getElementById("navMenu");
    
    // If the menu is open, and the click is outside of it, close the menu
    if (menu.classList.contains("show") && !menu.contains(event.target)) {
        menu.classList.remove("show");
    }
}

// Add event listener to toggle the menu when clicking the button
document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

// Add event listener to close the menu when clicking outside
document.addEventListener("click", closeMenu);
