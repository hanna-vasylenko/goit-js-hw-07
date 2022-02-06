import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerRef = document.querySelector('.gallery');

const picMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
<div class ="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image"src="${preview}""
data-source="${original}" alt="${description}"/>
</a>
</div>`;
  })
  .join('');

containerRef.insertAdjacentHTML('beforeend', picMarkup);

containerRef.addEventListener('click', handleModalOpenClick);
function handleModalOpenClick(event) {
  event.preventDefault();
  const modal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);
  if (event.target.tagName !== 'IMG') {
    return;
  }
  modal.show();
}
