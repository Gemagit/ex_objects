/* Gallery: Su única funcionalidad es albergar imágenes y devolverlas dependiendo del método que utilicemos. No interactúa con HTML.
constructor: Acepta dos parámetros, ambos conjuntos de imágenes.
getRandomCivil: devuelve un vehículo aleatorio civil de la galería.
getRandomMilitary: devuelve un vehículo aleatorio militar de la galería.
getAll: devuelve el conjunto de vehículos de la galería, tanto militares como civiles.
 */


/* Painter: La clase encargada de pintar las imágenes, de interactuar con el DOM. Encargada de crear etiquetas y manipular el DOM para agregarlas.
constructor: Ejecutará la función createGallery.
createGallery:
Creará un elemento section y lo agregará al body.
Dicho section será, también, una propiedad de Painter a la que llamaremos gallery.
createImageTag: Acepta la url de una imagen y devuelve los siguientes elementos:

<picture>
    <img src="ThisIsAnImage.jpg" />
</picture>
paintSingleImage: Acepta la url de una imagen y agrega a gallery el elemento creado por createImageTag.

paintMultipleImages: Acepta un conjunto de imágenes y agrega a gallery, uno a uno, el elemento creado por createImageTag. */


const civilImages = ['/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avioncivil/avion-civil-1.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avioncivil/avion-civil-2.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avioncivil/avion-civil-3.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avioncivil/avion-civil-4.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avioncivil/avion-civil-5.jpg'];

const militaryImages = ['/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avionmilitar/avion-militar-1.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avionmilitar/avion-militar-2.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avionmilitar/avion-militar-3.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avionmilitar/avion-militar-4.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avionmilitar/avion-militar-5.jpg'];

const civilHelicopters = ['/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avionmilitar/avion-militar-1.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avionmilitar/avion-militar-2.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avionmilitar/avion-militar-3.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avionmilitar/avion-militar-4.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/avionmilitar/avion-militar-5.jpg'];

const militaryHelicopter = ['/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/helicivil/helicoptero-civil-1.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/helicivil/helicoptero-civil-2.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/helicivil/helicoptero-civil-3.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/helicivil/helicoptero-civil-4.jpg','/Volumes/fullstack_thebridge/curso_fullstack/ex_objects/assets/helicivil/helicoptero-civil-5.jpg'];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
        return this.civilImages[Math.floor(Math.random()*this.civilImages.length)];
        
    }
    
    getRandomMilitary() {
        return this.militaryImages[Math.floor(Math.random()*this.militaryImages.length)];
    }
    
    getAll() {
        return {
            civil: this.civilImages,
            military: this.militaryImages
        };
    }
}

class Painter {
    constructor() {
        this.createGallery();
    }

    createGallery() {
        this.gallery = document.createElement("section");
        document.body.appendChild(this.gallery);
    }

    createImageTag(imageUrl) {
        const picture = document.createElement("picture");  
        const img = document.createElement("img");
        img.src = imageUrl;
        picture.appendChild(img);
        return picture;
    }

    paintSingleImage(imageUrl) {
        const imageTag = this.createImageTag(imageUrl);
        this.gallery.appendChild(imageTag);
    }

    paintMultipleImages(imagesUrls) {
        imagesUrls.forEach(imageUrl => {
            this.paintSingleImage(imageUrl)
            
        });
        
    }
}

const gallery = new Gallery(civilImages, militaryImages);
const painter = new Painter();

// Pintar una sola imagen
const randomCivilImage = gallery.getRandomCivil();
painter.paintSingleImage(randomCivilImage);

// Pintar muchas imágenes
const allImages = gallery.getAll();
painter.paintMultipleImages(allImages.civil);
painter.paintMultipleImages(allImages.military);
