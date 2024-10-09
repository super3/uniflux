// DOM elements and global variables
const imageGrid = document.getElementById('image-grid');
const loadingElement = document.getElementById('loading');
let isLoading = false;
let imageCounter = 1;

// Function to generate a random size for images
function getRandomSize() {
  return Math.floor(Math.random() * 500) + 300; // Random size between 300 and 799
}

// Function to create a new image element
function createImageElement() {
  const img = document.createElement('img');
  const size = getRandomSize();
  img.src = `https://picsum.photos/id/${imageCounter}/${size}`;
  img.alt = `Random Image ${imageCounter}`;
  imageCounter++;
  return img;
}

// Function to load more images
function loadMoreImages() {
  if (isLoading) return;
  isLoading = true;
  loadingElement.style.display = 'block';

  const viewportHeight = window.innerHeight;
  const currentScrollHeight = document.documentElement.scrollHeight;
  let newImagesHeight = 0;

  // Add images until we've filled at least two viewport heights
  while (newImagesHeight < viewportHeight * 2) {
    const img = createImageElement();
    imageGrid.appendChild(img);
    newImagesHeight += 250 + 16; // Approximate height of each image (250px) plus gap (16px)
  }

  isLoading = false;
  loadingElement.style.display = 'none';
}

// Function to handle scrolling and trigger loading more images
function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
  // Check if we've scrolled to the bottom
  if (scrollTop + clientHeight >= scrollHeight - clientHeight && !isLoading) {
    loadMoreImages();
  }
}

// Initial load of images
loadMoreImages();

// Set up event listener for scrolling
window.addEventListener('scroll', handleScroll);