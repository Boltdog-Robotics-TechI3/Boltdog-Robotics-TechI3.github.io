let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("slideshow_img");
	if (slides.length == 0) {
		setTimeout(showSlides, 1); // Change image every 2 seconds
		return;
	}
	if (slideIndex == slides.length) {slideIndex = 0;}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";

	}
	slides[slideIndex].style.display = "flex";
	setTimeout(showSlides, 4000); // Change image every 2 seconds
	slideIndex++;
}