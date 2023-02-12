import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

// 1) creating gallery murkup

createGalleryMurkup(galleryItems);

function createGalleryMurkup(images) {
  const newItems = images.map(
    (img) =>
      `<a class="gallery__item" href="${img.original}">
        <img class="gallery__image" 
            src="${img.preview}" 
            alt="${img.description}" />
      </a>`
  );

  refs.gallery.innerHTML = newItems.join("");
}

// gaaallllaaaarrrryyy

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
