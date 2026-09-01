const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");


// Open / Close menu
menuBtn.addEventListener("click", function () {

    if (mobileMenu.style.display === "block") {

        mobileMenu.style.display = "none";

    } else {

        mobileMenu.style.display = "block";

    }

});


// Close menu when clicking a link

const menuLinks = document.querySelectorAll(".mobile-menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.style.display = "none";

    });

});
/* ==========================================
   RESTAURANT AUTO SLIDER
========================================== */

const restaurantSlides =
    document.querySelectorAll(".restaurant-slide");

const restaurantDots =
    document.querySelectorAll(".dot");

let currentRestaurant = 0;


/* Show slide */

function showRestaurant(index) {

    restaurantSlides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    restaurantDots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    restaurantSlides[index].classList.add("active");

    restaurantDots[index].classList.add("active");

    currentRestaurant = index;
}


/* Automatic 5 second slider */

setInterval(function() {

    currentRestaurant++;

    if (currentRestaurant >= restaurantSlides.length) {
        currentRestaurant = 0;
    }

    showRestaurant(currentRestaurant);

}, 5000);


/* Dot click */

restaurantDots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {

        showRestaurant(index);

    });

});


/* ==========================================
   VIEW DETAILS
========================================== */

function showDetails(index) {

    const restaurantNames = [
        "Jamavar",
        "The Table",
        "By The Mekong",
        "Ziya",
        "Gallops"
    ];

    alert(
        "Welcome to " +
        restaurantNames[index] +
        "!\n\nMore details will be available soon."
    );

}