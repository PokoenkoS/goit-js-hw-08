// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery")
const galleryMarkup = createGallery(galleryItems)

galleryContainer.addEventListener(`click`, handlerImg)
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGallery(galleryItems) {
return galleryItems.map(({preview, original, description}) => {
return `
<a class="gallery__item" href="${original}">
<img class="gallery__image"
src="${preview}"
alt="${description}" />
</a>`
}).join("")
}


var lightbox = new SimpleLightbox('.gallery a', {
captionDelay: 250,
captionsData: 'alt',
} );

function handlerImg(evt) {
evt.preventDefault()

if(!evt.target.classList.contains("gallery__image")){
return;
}
}
