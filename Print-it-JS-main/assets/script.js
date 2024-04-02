const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points

let currentIndex = 0;

// Fonction pour mettre à jour les dots
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez style selected pour le dot selectionné
        } else {
            dot.classList.remove('dot_selected'); // Supprimez style selected pour les autres dots
        }
    });
}

// Fonction pour mettre à jour les dots, l'image et le texte
function updateCarousel(index, direction) {
      //défilement à l'infini
      if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

    // changer l'image
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    // changer le texte
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic sur la flèche ${direction}`);
}

// Gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); // Mettez à jour les dots
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Mettez à jour les dots
});


// Afficher la première diapositive au chargement de la page
updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex); // Mettez à jour les dots pour la première diapositive