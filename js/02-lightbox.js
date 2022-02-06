import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulRef = document.querySelector('.gallery');

const picMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}" />
      </a>`;
  })
  .join('');

ulRef.insertAdjacentHTML('afterbegin', picMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
