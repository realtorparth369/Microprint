// document.getElementById('openModal').addEventListener('click', function () {
//     document.getElementById('modalContainer').style.display = 'flex';
// });

// function closeModal() {
//     document.getElementById('modalContainer').style.display = 'none';
// }
// let slideIndex2 = 1;
// showSlides2(slideIndex2);

// function plusSlides2(n) {
//     showSlides2(slideIndex2 += n);
// }

// function currentSlide2(n) {
//     showSlides2(slideIndex2 = n);
// }

// function showSlides2(n) {
//     let i2;
//     let slides2 = document.getElementsByClassName("mySlides2");
//     let dots2 = document.getElementsByClassName("dot2");
//     if (n > slides2.length) { slideIndex2 = 1 }
//     if (n < 1) { slideIndex2 = slides2.length }
//     for (i2 = 0; i2 < slides2.length; i2++) {
//         slides2[i2].style.display = "none";
//     }
//     for (i2 = 0; i2 < dots2.length; i2++) {
//         dots2[i2].className = dots2[i2].className.replace(" active2", "");
//     }
//     slides2[slideIndex2 - 1].style.display = "block";
//     dots2[slideIndex2 - 1].className += " active2";
// }


// let slideIndex3 = 1;
// showSlides3(slideIndex3);

// function plusSlides3(n) {
//     showSlides3(slideIndex3 += n);
// }

// function currentSlide3(n) {
//     showSlides3(slideIndex3 = n);
// }

// function showSlides3(n) {
//     let i3;
//     let slides3 = document.getElementsByClassName("mySlides3");
//     let dots3 = document.getElementsByClassName("dot3");
//     if (n > slides3.length) { slideIndex3 = 1 }
//     if (n < 1) { slideIndex3 = slides3.length }
//     for (i3 = 0; i3 < slides3.length; i3++) {
//         slides3[i3].style.display = "none";
//     }
//     for (i3 = 0; i3 < dots3.length; i3++) {
//         dots3[i3].className = dots3[i3].className.replace(" active3", "");
//     }
//     slides3[slideIndex3 - 1].style.display = "block";
//     dots3[slideIndex3 - 1].className += " active3";
// }