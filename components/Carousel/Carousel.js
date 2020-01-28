/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
	const carousel = document.createElement('div');
	const leftButton = document.createElement('div');
	const carouselImg1 = document.createElement('img');
	const carouselImg2 = document.createElement('img');
	const carouselImg3 = document.createElement('img');
	const carouselImg4 = document.createElement('img');
	const rightButton = document.createElement('div');

	carousel.classList.add('carousel');
	leftButton.classList.add('left-button');
	rightButton.classList.add('right-button');

	carouselImg1.setAttribute('src', './assets/carousel/mountains.jpeg');
	carouselImg2.setAttribute('src', './assets/carousel/computer.jpeg');
	carouselImg3.setAttribute('src', './assets/carousel/trees.jpeg');
	carouselImg4.setAttribute('src', './assets/carousel/turntable.jpeg');

	carousel.appendChild(leftButton);
	carousel.appendChild(carouselImg1);
	carousel.appendChild(carouselImg2);
	carousel.appendChild(carouselImg3);
	carousel.appendChild(carouselImg4);
	carousel.appendChild(rightButton);

	return carousel;
}

const carouselElement = Carousel();
document.querySelector('.carousel-container').appendChild(carouselElement);

// Functionality

const carouselImgages = document.querySelectorAll('img');

let slideIndex = 1;

function showSlides(index) {
	for (let i = 0; i < carouselImgages.length; i++) {
		carouselImgages[i].style.display = 'none';
	}
	carouselImgages[slideIndex - 1].style.display = 'block';
}

showSlides(slideIndex);

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

rightButton.addEventListener('click', () => {
	if (slideIndex < carouselImgages.length) {
		slideIndex++;
	} else {
		slideIndex = 1;
	}
	showSlides(slideIndex);
});

leftButton.addEventListener('click', () => {
	if (slideIndex === 1) {
		slideIndex = carouselImgages.length;
	} else {
		slideIndex = slideIndex - 1;
	}
	showSlides(slideIndex);
});
