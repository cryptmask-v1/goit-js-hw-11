// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';

// Dokümantasyonda belirtilen import
import SimpleLightbox from 'simplelightbox';
// Stil importu
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');

const input = document.querySelector('.input');

const div = document.querySelector('.gallery');

const BASE_URL = 'https://pixabay.com/api/?';

const key = '47340779-69736f13d332e70374a06741a';

let inputValue = '';
let photos = [];

input.addEventListener('input', e => {
  inputValue = e.target.value;
});

function getPhotos() {
  inputValue = input.value.trim();

  if (!inputValue) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  resetPhotos();

  let searchParams = {
    key: '47340779-69736f13d332e70374a06741a',
    q: inputValue,
    image_tpye: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const params = new URLSearchParams(searchParams);

  fetch(`${BASE_URL}${params.toString()}`)
    .then(response => response.json())
    .then(data => {
      photos = data.hits;
      if (photos.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        resetPhotos();
      } else {
        displayPhotos();
      }
    })
    .catch(error => console.error(error))
    .finally(() => {
      const loadingCSS = document.querySelector('.loading');
      if (loadingCSS) {
        loadingCSS.remove();
      }
    });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  getPhotos();
  input.value = '';
});

function resetPhotos() {
  div.innerHTML = '<span class="loading"></span>';
}

function displayPhotos() {
  let gallery = '';
  photos.forEach(photo => {
    const markUp = ` 
      <li class="image">
            <a class="image-link" href="${photo.largeImageURL}"><img class="img" src="${photo.webformatURL}" alt="${photo.tags}"></a>
            <div class="image-info">
              <p class="image-desc">
               <span class="desc title">Likes</span> 
               <span class="desc value">${photo.likes}</span> 
              </p>
              <p class="image-desc">
               <span class="desc title">Views</span> 
               <span class="desc value">${photo.views}</span> 
              </p>
              <p class="image-desc">
               <span class="desc title">Comments</span> 
               <span class="desc value">${photo.comments}</span>
              </p>
              <p class="image-desc">
               <span class="desc title">Downloads</span> 
               <span class="desc value">${photo.downloads}</span>
              </p>
            </div>
        </li>
    `;
    gallery += markUp;
  });
  div.innerHTML = gallery;
  new SimpleLightbox('.image-link', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
}
