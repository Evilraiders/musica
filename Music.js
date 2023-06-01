const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');






window.onload = function() {
  Particles.init({
    selector: '.background'
  });
};




searchButton.addEventListener('click', performSearch);

function performSearch() {
  const searchTerm = searchInput.value;
  
  // Lógica de búsqueda
  // Aquí puedes realizar una petición a un servidor, buscar en una lista de elementos, etc.

  // Ejemplo de resultados de búsqueda simulados
  const results = [
    { title: 'Canción 1', artist: 'Artista 1' },
    { title: 'Canción 2', artist: 'Artista 2' },
    { title: 'Canción 3', artist: 'Artista 3' },
  ];

  displaySearchResults(results);
}

function displaySearchResults(results) {
  searchResults.innerHTML = '';

  if (results.length === 0) {
    searchResults.textContent = 'No se encontraron resultados.';
  } else {
    results.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');
      resultItem.innerHTML = `
        <h3>${result.title}</h3>
        <p>${result.artist}</p>
      `;
      searchResults.appendChild(resultItem);
    });
  }
}





//carrucel
function initializeCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  let isScrolling = false;
  let startX, scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isScrolling = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add('scrolling'); // Agregamos la clase "scrolling" para activar la animación
  });

  carousel.addEventListener('mouseleave', () => {
    isScrolling = false;
    carousel.classList.remove('scrolling'); // Removemos la clase "scrolling" al finalizar el desplazamiento
  });

  carousel.addEventListener('mouseup', () => {
    isScrolling = false;
    carousel.classList.remove('scrolling'); // Removemos la clase "scrolling" al finalizar el desplazamiento
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = x - startX;
    carousel.scrollLeft = scrollLeft - walk;
  });
}

// Inicializar los carruseles
initializeCarousel('carousel-destacados');
initializeCarousel('carousel-parati');
initializeCarousel('carousel-novedades');









// slider

const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img');
  
  slideImage.addEventListener('dragstart', (e) => e.preventDefault());

  // Touch events
  slide.addEventListener('touchstart', touchStart(index));
  slide.addEventListener('touchend', touchEnd);
  slide.addEventListener('touchmove', touchMove);

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index));
  slide.addEventListener('mouseup', touchEnd);
  slide.addEventListener('mouseleave', touchEnd);
  slide.addEventListener('mousemove', touchMove);
});

// Disable context menu on slider
window.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function(event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;

    animationID = requestAnimationFrame(animation);
    slider.classList.add('grabbing');
  }
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < slides.length - 1) {
    currentIndex++;
  }

  if (movedBy > 100 && currentIndex > 0) {
    currentIndex--;
  }

  setPositionByIndex();

  slider.classList.remove('grabbing');
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -slider.clientWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}






  
Particles.
init
({
  
// normal options
  selector: 
'.background'
,
  maxParticles: 
4000
,
  
// options for breakpoints
  responsive: [
    {
      breakpoint: 
900
,
      options: {
        maxParticles: 
2000
,
        color: 
'#48F2E3'
,
        connectParticles: 
false
      }
    }, {
      breakpoint: 
4250
,
      options: {
        maxParticles: 
1000
,
        connectParticles: 
true
      }
    }, {
      breakpoint: 
3200
,
      options: {
        maxParticles: 
500
 
// disables particles.js
      }
    }
  ]
});






  



  


  
