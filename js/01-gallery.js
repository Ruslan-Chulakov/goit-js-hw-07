import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

// 1) creating gallery murkup

createGalleryMurkup(galleryItems);

// 2) adding event listener

refs.gallery.addEventListener("click", onImageHandler);

// FUNCTIONS

let instance

function createGalleryMurkup(images) {

  const newItems = images.map(
    (img) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${img.original}">
            <img class="gallery__image" 
                src="${img.preview}" 
                alt="${img.description}" 
                data-source="${img.original}"
            >
        </a>
      </div>`
  );

  refs.gallery.innerHTML = newItems.join("");
};

function onImageHandler(e) {
  e.preventDefault();

  const originalImage = e.target.dataset.source;
  instance = basicLightbox.create(`
  <img src="${originalImage}" alt="${e.target.getAttribute("alt")}" width="800" height="600">
  `);

  instance.show();

  window.addEventListener('keydown', closeModalByEscape);

};

function closeModalByEscape(evt) {
  if(evt.code === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', closeModalByEscape);
  }
};
