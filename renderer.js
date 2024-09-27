const imageGrid = document.getElementById('image-grid');
const loadingElement = document.getElementById('loading');
let isLoading = false;
let imageCounter = 1;

function getRandomSize() {
  return Math.floor(Math.random() * 500) + 300; // Random size between 300 and 799
}

function createImageElement() {
  const img = document.createElement('img');
  const size = getRandomSize();
  img.src = `https://picsum.photos/id/${imageCounter}/${size}`;
  img.alt = `Random Image ${imageCounter}`;
  imageCounter++;
  return img;
}

function loadMoreImages() {
  if (isLoading) return;
  isLoading = true;
  loadingElement.style.display = 'block';

  const viewportHeight = window.innerHeight;
  const currentScrollHeight = document.documentElement.scrollHeight;
  let newImagesHeight = 0;

  while (newImagesHeight < viewportHeight * 2) {
    const img = createImageElement();
    imageGrid.appendChild(img);
    newImagesHeight += 250 + 16; // Approximate height of each image (250px) plus gap (16px)
  }

  isLoading = false;
  loadingElement.style.display = 'none';
}

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
  if (scrollTop + clientHeight >= scrollHeight - clientHeight && !isLoading) {
    loadMoreImages();
  }
}

// Initial load
loadMoreImages();

// Add scroll event listener
window.addEventListener('scroll', handleScroll);