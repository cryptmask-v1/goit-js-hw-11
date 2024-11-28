// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';

// Dokümantasyonda belirtilen import
import SimpleLightbox from 'simplelightbox';
// Stil importu
import 'simplelightbox/dist/simple-lightbox.min.css';

// izitoast error message örneği böyle yapıcakmışız

// iziToast.error({
//   message:
//     'Sorry, there are no images matching your search query. Please try again!',
//   position: 'topRight',
// });

const form = document.querySelector('.form');

const div = document.querySelector('.gallery');

const BASE_URL =
  'https://pixabay.com/api/?key=47340779-69736f13d332e70374a06741a&q=yellow+flowers&image_type=photo';

function getPhotos() {
  fetch(`${BASE_URL}`).then(response => response.json());
}
form.addEventListener('submit', e => {
  e.preventDefault();
  getPhotos();
});
