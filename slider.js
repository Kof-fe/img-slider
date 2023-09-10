const images = ["./pic.jpg", "./pic1.jpg", "./pic2.jpg"];
let currentIndex = 0;

// Get DOM elements
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to change the image
function changeImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    }
    sliderImage.src = images[currentIndex];
}

// Event listeners for previous and next buttons
prevBtn.addEventListener("click", () => {
    currentIndex--;
    changeImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex++;
    changeImage(currentIndex);
});

// Initialize the slider with the first image
changeImage(currentIndex);