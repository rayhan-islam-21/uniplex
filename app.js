const icon1 = document.getElementById('icon-holder');
const icon2 = document.getElementById('menu-icon');
const leftSide = document.getElementById('left-side');
const bottomSide = document.getElementById('outer-box');
const upSide = document.getElementById('up-logo');

icon1.addEventListener("click", () => {
    console.log("Mario kaka");

    // Toggle the sidebar
    leftSide.classList.toggle('active');

    if (leftSide.classList.contains('active')) {
        bottomSide.style.left = "32%"; 
        bottomSide.style.transition = "left 0.3s ease"; // Smooth transition
        icon2.style.display = "none"; 
    } else {
        bottomSide.style.left = "0"; // Reset position when sidebar is closed
        bottomSide.style.transition = "left 0.3s ease"; // Smooth transition
        icon2.style.display = "block"; // Show the menu icon again
    }
});

// Add event listener for the up logo to hide the sidebar
upSide.addEventListener("click", () => {
    leftSide.classList.remove('active'); // Remove active class
    leftSide.style.transition = "right 0.3s ease";
    bottomSide.style.left = "23%"; // Reset position
    bottomSide.style.transition = "left 0.3s ease"; // Smooth transition
    icon2.style.display = "block"; // Show the menu icon
});


