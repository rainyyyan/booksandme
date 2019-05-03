var slideIndex = 0;
showSlides();
document.onload = hide();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds

}

function hide() {
  document.getElementById("activities").style.display = 'none';
  document.getElementById("zcf").style.display = 'none';
};

function showActivities() {
    var x = document.getElementById("activities");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.scrollIntoView()
    } else {
        x.style.display = "none";
    }
}

function showZCF() {
    var x = document.getElementById("zcf");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.scrollIntoView()
    } else {
        x.style.display = "none";
    }
}
