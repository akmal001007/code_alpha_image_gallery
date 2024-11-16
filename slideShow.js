var slideIndex = 1;
showSlides(slideIndex);
 
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// image control 
function currentSlide(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides-fade');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}

// modal part 

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img1");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll(".thumbnail");

images.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
