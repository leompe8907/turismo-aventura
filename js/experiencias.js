const images = [
  "../assets/compartir/acampar.avif",
  "../assets/compartir/cabalgata.jpg",
  "../assets/compartir/caminatas.jpg",
  "../assets/compartir/ciclismo.jpg",
  "../assets/compartir/jumping.jpg",
  "../assets/compartir/kayac.jpg",
  "../assets/compartir/kayaking.jpg",
  "../assets/compartir/kitesurfing.jpg",
  "../assets/compartir/meditar.jpg",
  "../assets/compartir/paracaidsmo.jpg",
  "../assets/compartir/parapente.jpeg",
  "../assets/compartir/pescar.jpg",
  "../assets/compartir/planeador.jpg",
  "../assets/compartir/rafting.jpg",
  "../assets/compartir/snowboard.jpg",
  "../assets/compartir/tirolesa.jpg",
  "../assets/compartir/trekking.jpg",
];

const names = [
  "Marcos", "Juan", "Pedro", "Jose", "Maria", "Ana", "Luis", "Marta",
  "Juan", "Maria", "Lucas", "Pablo", "Ricardo", "Marcela", "Vanesa", "Julieta"
];

document.addEventListener('DOMContentLoaded', () => {
  const galleryDesktop = document.querySelector('.gallery-desktop');
  const galleryMobile = document.querySelector('.gallery-mobile');
  const selectedImages = [];

  while (selectedImages.length < 8) {
      const randomIndex = Math.floor(Math.random() * images.length);
      if (!selectedImages.includes(images[randomIndex])) {
          selectedImages.push(images[randomIndex]);
      }
  }

  const createImageElement = (image, index) => {
      const imgDiv = document.createElement('div');
      imgDiv.classList.add('image-container');

      const img = document.createElement('img');
      img.src = image;
      img.alt = `Imagen ${index + 1}`;
      img.classList.add('gallery-img');

      const overlay = document.createElement('div');
      overlay.classList.add('overlay');

      const icon = document.createElement('i');
      icon.classList.add('fab', 'fa-instagram');

      const nameSpan = document.createElement('span');
      nameSpan.classList.add('name');
      nameSpan.textContent = names[index % names.length];

      overlay.appendChild(icon);
      overlay.appendChild(nameSpan);
      imgDiv.appendChild(img);
      imgDiv.appendChild(overlay);

      return imgDiv;
  };

  if (window.innerWidth <= 768) {
      // Carrusel para móviles
      selectedImages.forEach((image, index) => {
          const imgElement = createImageElement(image, index);
          galleryMobile.appendChild(imgElement);
      });
  } else {
      // Galería para desktop
      selectedImages.forEach((image, index) => {
          const imgElement = createImageElement(image, index);
          galleryDesktop.appendChild(imgElement);
      });
  }
});