// Carousel
popup_count = 0;
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
}

//Popup
function popup() {
    var popup = document.getElementById("myPopup");
    if (popup_count == 0) {
        popup.classList.toggle("show");
        setTimeout(popup_hide, 3000);
    }
    popup_count++;
}

function popup_hide() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
setTimeout(popup, 300);