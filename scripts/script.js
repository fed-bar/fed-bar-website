console.log("Hallo Barbara");

const cirkel = document.querySelector('.i');
const letter = document.querySelector('.h');
const staart = document.querySelector('.staart');

// Cirkel klik — h draaien aan/uit
cirkel.addEventListener('click', () => {
  if (letter.classList.contains('draaien')) {
    letter.classList.remove('draaien');
  } else {
    letter.classList.remove('draaien');
    void letter.offsetWidth;
    letter.classList.add('draaien');
  }
});

// Staart klik — valt naar beneden
staart.addEventListener('click', () => {
  staart.classList.add('gevallen');
});

// de toggle van de click op de punt van de 'i'
const knop = document.querySelector('.knop');
knop.addEventListener('click', () => {
  knop.classList.toggle('actief');
});